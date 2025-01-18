import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import twilio from 'twilio';
import fs from 'fs';

import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// app.get('/api/call', (req, res) => {
//     client.calls.create({
//         url: "http://demo.twilio.com/docs/voice.xml",
//         to: process.env.TWILIO_USER_PHONE_NUMBER,
//         from: process.env.TWILIO_PHONE_NUMBER,
//       })
//       .then(call => console.log(call.sid));
// });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function readTwiMLFile() {
    const filePath = join(__dirname, 'twiml.xml');
    try {
        const content = await readFile(filePath, 'utf8');
        return content;
    } catch (error) {
        console.error('Error reading TwiML file:', error);
        throw error;
    }
}

// call the user
app.get('/api/call', async (req, res) => {
    try {
        const twimlContent = await readTwiMLFile();
        
        client.calls.create({
            twiml: twimlContent,
            to: process.env.TWILIO_USER_PHONE_NUMBER,
            from: process.env.TWILIO_PHONE_NUMBER,
            statusCallback: "http://localhost:8080/api/callStatus/",
            statusCallbackEvent: ["completed"],
            statusCallbackMethod: "POST",
        })
        .then(call => res.json({ success: true, callSid: call.sid }))
        .catch(error => {
            console.error('Error making call:', error);
            res.status(500).json({ success: false, error: error.message });
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

let callStatus = 'pending';
let lastCallFrom = '';
let lastCallTo = '';

// post the call status
app.post('/api/callStatus', (req, res) => {
    const { CallSid, CallStatus, To, From } = req.body;
    callStatus = CallStatus;
    lastCallFrom = From;
    lastCallTo = To;
    console.log('CallSid:', CallSid);
    console.log('CallStatus:', CallStatus);

    if (CallStatus === 'completed') {
        console.log(`Call from ${From} to ${To} has been completed.`);
    }

    res.status(200).send('Status received');
});

// get the call status
app.get('/api/callStatus', (req, res) => {
    if (callStatus === 'completed') {
        console.log(`Call from ${lastCallFrom} to ${lastCallTo} has been completed.`);
        res.json({ status: 'completed', details: callStatus });
    } else {
        console.log('Call is still in progress.');
        res.json({ status: 'pending', details: callStatus });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});