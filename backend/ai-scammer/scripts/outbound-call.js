/*
  You can use this script to place an outbound call
  to your own mobile phone.
*/
import twilio from "twilio"
import "dotenv/config";
// In your outbound-call.js file
async function makeOutBoundCall() {
  // if (!toNumber) {
  //   throw new Error("Phone number is required");
  // }
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  return client.calls.create({
    twiml: twimlContent,
    to: process.env.TWILIO_USER_PHONE_NUMBER, // Make sure this is a valid phone number with country code
    from: process.env.TWILIO_PHONE_NUMBER,
    statusCallback: `${process.env.TAILSCALE_PUBLIC_URL}api/callStatus/`,
    statusCallbackEvent: ["completed"],
    statusCallbackMethod: "POST",
  });
}


export { makeOutBoundCall }  // Add this line
