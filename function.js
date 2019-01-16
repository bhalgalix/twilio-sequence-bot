const { stripIndent } = require('common-tags');
const { escape } = require('querystring');
var answerArray = [`nine`,`thirteen`,`two hundred fourty three`, `twenty eight`, `thirty six`];
var correctAns = "";
var preMadeSequences = [`one, three, five, seven.`, `one, two, three, five, eight`, `1, 3, 9, 27, 81`, `1, 3, 6, 10, 15, 21`, `0, 1, 4, 9, 16, 25` ];


exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.MessagingResponse();
	const query = escape(event.Body);
	if(query == correctAns)
	{
	    twiml.message("your answer is correct");
	    callback(null, twiml);
	    return
	}
	
	if(query == "begin-game")
	{
	    var randomNum = Math.floor(Math.random()*preMadeSequences.length);
	    correctAns = answerArray[randomNum];
	    twiml.message(preMadeSequences[randomNum]+". Guess the next number");
	    callback(null, twiml);
    }
    else {
        twiml.message("controlled error, "+correctAns+" is the right answer");
	    callback(null, twiml);
    }
};
