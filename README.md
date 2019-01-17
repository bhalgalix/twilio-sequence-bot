<h1>Twilio Building your first chatbot for whatsapp</h1>

This is a tutorial for doing your first twilio bot for whatsapp. We will do this using Twilio functions and 
this allows us to write Node.js code and host it in a serverless function directly on Twilio.

<h3> Requeriments </h3>

The first thing you will need is a Twilio account. For this go to <a href="https://www.twilio.com/">twilio</a> 
and create an account.

The second one is to have WhatsApp Sandbox Channel. For this go to 
<a href="https://www.twilio.com/console/sms/whatsapp/learn">Twilio Sandbox for Whatsapp</a>.
We will use this configuration because we want to test the bot right away in development. If you want a personalized 
number for your bot you can follow this <a href="https://www.twilio.com/docs/sms/whatsapp/api#twilio-sandbox-for-whatsapp">link</a>
to enable a Whatsapp number for youw sandbox.


<h3> Creating a Twilio function </h3>

Now that we have our Twilio account and we connected to our Whatsapp Sandbox Channel, we need to create a function so our bot can answer us. We will do this going to <a href="https://www.twilio.com/console/runtime/functions/manage">Twilio Functions</a>.

Press the "+" red button to add a function.




