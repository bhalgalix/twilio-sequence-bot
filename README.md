<h1>Twilio Building your first chatbot for whatsapp</h1>

This is a tutorial for doing your first twilio bot for whatsapp. We will do this using Twilio functions and 
this allows us to write Node.js code and host it in a serverless function directly on Twilio.

If you find this tutorial useful, you can give it a star to know it works.

<h3> Requirements </h3>

The first thing you will need is a Twilio account. For this go to <a href="https://www.twilio.com/" target="_blank">twilio</a> and create an account.

The second one is to have WhatsApp Sandbox Channel. For this go to 
<a href="https://www.twilio.com/console/sms/whatsapp/learn" target="_blank">Twilio Sandbox for Whatsapp</a>.
We will use this configuration because we want to test the bot right away in development. If you want a personalized 
number for your bot you can follow this <a href="https://www.twilio.com/docs/sms/whatsapp/api#twilio-sandbox-for-whatsapp" target="_blank">link</a>(personalized number have a cost and we don't need it for this tutorial)
to enable a Whatsapp number for your sandbox.


<h3> Creating a Twilio function </h3>

Now that we have our Twilio account and we connected to our Whatsapp Sandbox Channel, we need to create a function so our bot can answer us. We will do by this going to <a href="https://www.twilio.com/console/runtime/functions/manage" target="_blank">Twilio Functions</a>.

Press the "+" RED button to add a function.

We will choose Hello SMS as our template and hit the "Create" button.

<img width="500" alt="screen shot 2019-01-17 at 2 41 12 pm" src="https://user-images.githubusercontent.com/33744836/51344912-ac871b80-1a67-11e9-9d77-3c210a3cf14b.png">

In the next screen we have our new function with properties and configuration. You can change the function name if you want. Next we need to update path, we will use this URL later to respond to the messages sent via Whatsapp. You can use something
like *hworld*.

Now click the Save button and copy the path with the "copy" button.

<img width="500" alt="screen shot 2019-01-17 at 3 01 45 pm" src="https://user-images.githubusercontent.com/33744836/51345644-8a8e9880-1a69-11e9-8794-62831c18a51a.png">


<h3> Connect your function to Whatsapp </h3>

Now let's go back to <a href="https://www.twilio.com/console/sms/whatsapp/sandbox" target="_blank">Whatsapp Sandbox</a>. Paste the copied URL from the previous step in the "when a message comes in" field. 

<img width="500" alt="screen shot 2019-01-17 at 3 21 17 pm" src="https://user-images.githubusercontent.com/33744836/51346464-bad73680-1a6b-11e9-9087-82deafcafa07.png">

Now save the changes and we are ready to try the bot in whatsapp. So just go to whatsapp and text something. You should receive a *Hello world* message.



<h3> Change the function </h3>

Let's go back to <a href="https://www.twilio.com/console/runtime/functions/manage" target="_blank">Twilio Functions</a> and open the function you created. Now we will update the function code so we get something else than *Hello World*.

Right now your function should look like this: 

<img width="500" alt="screen shot 2019-01-17 at 3 31 26 pm" src="https://user-images.githubusercontent.com/33744836/51347012-0a6a3200-1a6d-11e9-8f9f-f2bd960a6437.png">

We will change it so the bot gives us a sequence of numbers, we answer them with what we think is the right answer and the bot will tell you if you are right or not.

You can use the code in the function file index.js or just go to this link <a href="https://github.com/bhalgalix/twilio-sequence-bot/blob/master/function.js" target="_blank">code</a>. Just copy and paste it in the function code, save it and send the message *begin-game* to Twilio. You can add more sequences just adding another one in the *preMadeSequences* variable and add the answer in the *answerArray* variable.
