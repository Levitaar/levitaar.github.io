console.log("bot engaged");

var Twit = require ('twit');

var T = new Twit({
  consumer_key:         'AkYJ4MvCrgP3U2JVYct4o2ANx',
  consumer_secret:      'JwSEaa8wXq7htyZrE61V0vI4EKcRew9EyENhX6CYUNSUvrgakR',
  access_token:         '729403238999572485-jXzBVC6YKZLZVFxRXBs0GfQNTjHQ5hR',
  access_token_secret:  'dBucIrYSnY8zpEeUbOwvFTNivxRgxNYlaXJoim92sfghR',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


var punArray = [
"It's not that the man did not know how to juggle, he just didn't have the balls to do it.",
"I'm reading a book about anti-gravity. It's impossible to put down.",
"I'd tell you a chemistry joke but I know I wouldn't get a reaction.",
"Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.",
"Yesterday I accidentally swallowed some food coloring. The doctor says I'm OK, but I feel like I've dyed a little inside.",
"I once heard a joke about amnesia, but I forgot how it goes.",
"I used to be a banker but I lost interest",
"Have you ever tried to eat a clock? It's very time consuming.",
"My friend's bakery burned down last night. Now his business is toast.",
"The roundest knight at king Arthur's round table was Sir Cumference.",
"Show me a piano falling down a mineshaft and I'll show you A-flat minor.",
"Need an ark to save two of every animal? I noah guy.",
"The experienced carpenter really nailed it, but the new guy screwed everything up.",
"I saw a beaver movie last night, it was the best dam movie I've ever seen.",
"A prisoner's favorite punctuation mark is the period. It marks the end of his sentence.",
"Police were called to a daycare where a three-year-old was resisting a rest."
];

// this makes the program post a tweet every set amount of time (function, time in miliseconds)
setInterval(Tweetin, 1000 * 60);

Tweetin();

function Tweetin() {

	// this chooses a pun at random from the punArray to tweet

	var num = Math.floor(Math.random() * punArray.length);

	var pun = punArray[num];

	var text = { status: pun };

	T.post('statuses/update' , text, data);



	function data(err, data, response) {

		console.log(data);
		console.log("Tweet Posted");

	}

}