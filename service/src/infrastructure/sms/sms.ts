// Load the twilio module
import twilio from 'twilio';

// Create a new REST API client to make authenticated requests against the
// twilio back end
// Hardcode your Twilio credentials here
const accountSid = 'AC9651c24a1c689e084f3f840e8dda3dc1';
const authToken = '13c82353bf2a8a131dbc20700ed412d0';

// Initialize the Twilio client
const client = twilio(accountSid, authToken);

// Function to send an SMS
async function sendSms() {
    try {
        const message = await client.messages.create({
            to: '+12898941831', // the number to which the sms will be sent
            from: '+12568012985', // your Twilio phone number
            body: 'I endorse the geegees!!!!!', // the message body
        });

        console.log(`Message sent with SID: ${message.sid}`);
    } catch (error) {
        console.error(error);
    }
}

export default sendSms;