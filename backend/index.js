import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import twilio from "twilio";
import fs from "fs";
import nodemailer from "nodemailer";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TWILIO CONFIG
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper to read local TwiML file (if needed)
async function readTwiMLFile() {
  const filePath = join(__dirname, "twiml.xml");
  try {
    const content = await readFile(filePath, "utf8");
    return content;
  } catch (error) {
    console.error("Error reading TwiML file:", error);
    throw error;
  }
}

// ──────────────────────────────────────────────────────────
// 1) OUTBOUND CALL (from your original code)
// ──────────────────────────────────────────────────────────
app.get("/api/call", async (req, res) => {
  try {
    const twimlContent = await readTwiMLFile();

    client.calls
      .create({
        twiml: twimlContent,
        to: process.env.TWILIO_USER_PHONE_NUMBER,
        from: process.env.TWILIO_PHONE_NUMBER,
        statusCallback: `${process.env.TAILSCALE_PUBLIC_URL}api/callStatus/`,
        statusCallbackEvent: ["completed"],
        statusCallbackMethod: "POST",
      })
      .then((call) => res.json({ success: true, callSid: call.sid }))
      .catch((error) => {
        console.error("Error making call:", error);
        res.status(500).json({ success: false, error: error.message });
      });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

let callStatus = "pending";
let lastCallFrom = "";
let lastCallTo = "";

// ──────────────────────────────────────────────────────────
// 2) CALL STATUS WEBHOOKS
// ──────────────────────────────────────────────────────────
app.post("/api/callStatus", (req, res) => {
  const { CallSid, CallStatus, To, From } = req.body;
  callStatus = CallStatus;
  lastCallFrom = From;
  lastCallTo = To;
  console.log("CallSid:", CallSid);
  console.log("CallStatus:", CallStatus);

  if (CallStatus === "completed") {
    console.log(`Call from ${From} to ${To} has been completed.`);
  }
  res.status(200).send("Status received");
});

app.put("/api/callStatus", (req, res) => {
  callStatus = "pending";
  console.log("Call status has been reset to pending.");
  res.json({ status: "pending", details: callStatus });
});

app.get("/api/callStatus", (req, res) => {
  if (callStatus === "completed") {
    console.log(
      `Call from ${lastCallFrom} to ${lastCallTo} has been completed.`
    );
    res.json({ status: "completed", details: callStatus });
  } else {
    console.log("Call is still in progress.");
    res.json({ status: "pending", details: callStatus });
  }
});

// ──────────────────────────────────────────────────────────
// 3) EMAIL BACKEND
// ──────────────────────────────────────────────────────────
app.post("/send-email", async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res
      .status(400)
      .json({ message: "All fields (email, subject, message) are required." });
  }

  try {
    // Configure the transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `RBC Royal Bank" <${process.env.EMAIL_USER}>`,
      to: email,
      date: new Date().toISOString(),
      subject: subject,
      html: message,
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.message);
    res.status(500).json({ message: `Failed to send email: ${error.message}` });
  }
});

// ──────────────────────────────────────────────────────────
// 4) TWILIO Call-GPT OUTBOUND CALL
// ──────────────────────────────────────────────────────────
// This is from your "call-gpt/scripts/outbound-call.js" import:
import { makeOutBoundCall } from "./call-gpt/scripts/outbound-call.js";


app.post("/startOutboundCall", async (req, res) => {
  try {
    const { to } = req.body;
    if (!to) {
      return res.status(400).json({ error: "Phone number is required" });
    }

    // Ensure phone number is in E.164 format
    const formattedNumber = to.startsWith("+") ? to : `+${to}`;

    const callResponse = await makeOutBoundCall(formattedNumber);
    res.status(200).json({
      message: "Outbound call initiated",
      data: callResponse,
    });
  } catch (error) {
    console.error("Error initiating outbound call:", error);
    res.status(500).json({ error: error.message });
  }
});


// ──────────────────────────────────────────────────────────
// 5) GPT TwiML ADDITION
//    -> New route that Twilio can fetch mid-call to speak or stream GPT text
// ──────────────────────────────────────────────────────────

// 5a) Import the GPT service from your Call-GPT code
// (Adjust path if needed; make sure gpt-service.js exists in your project.)
import pkg from "./call-gpt/services/gpt-service.cjs";
const { GptService } = pkg;


// 5b) Endpoint for Twilio to GET/POST TwiML that includes GPT output
app.get("/generateTwiML", async (req, res) => {
  try {
    // 1) Example: get user prompt from query or default
    const userPrompt = req.query.prompt || "Hello from GPT!";

    // 2) Call GPT service
    const gptText = await callGPT(userPrompt);

    // 3) Build TwiML response with GPT text. Using Twilio's TTS <Say>:
    const twimlResponse = `
      <Response>
        <Say voice="alice">${gptText}</Say>
      </Response>
    `;

    // 4) Return TwiML as XML to Twilio
    res.set("Content-Type", "text/xml").status(200).send(twimlResponse);
  } catch (error) {
    console.error("Error generating TwiML:", error);
    res.status(500).send("Something went wrong generating TwiML.");
  }
});

// NOTE: In your "call-gpt/scripts/outbound-call.js", make sure the `client.calls.create()` call
// uses this new endpoint for `url:` so Twilio knows where to get GPT-driven TTS.
//
// Example snippet in "outbound-call.js":
// --------------------------------------
// const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
// async function initiateOutboundCall(toNumber) {
//   return client.calls.create({
//     url: `${process.env.TAILSCALE_PUBLIC_URL}generateTwiML`,
//     to: toNumber,
//     from: process.env.TWILIO_PHONE_NUMBER
//   });
// }
//
// module.exports = { initiateOutboundCall };
// --------------------------------------

// ──────────────────────────────────────────────────────────
// 6) START THE SERVER
// ──────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/`);
});
