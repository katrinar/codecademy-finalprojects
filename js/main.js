//story text; pieced together in controller.js
var setup = {
	greeting: "Welcome to Janguru! My name is Milkshake. \nI have a feeling you are...the CHOSEN ONE. What is your name?",
	question: " Ahh, yes. I had a feeling you were arriving. \n\nYou're here to defeat Sakana, aren't you? He's taken over our land, Janguru and we NEED YOU to fight him. \nHe lives in the mountains. To get there we will have to fight his guards, Hachi and Kumo, first. We can get to the mountains by crossing the desert or the jungle \n\nWhere should we go first? 'desert' or 'jungle'?"
};

var locations = {
	desertlizard: "Pretty dusty here in the desert. This is where Hachi, lord of bees, lives. \n\nLook! A lizard! That will come in handy to fight Hachi. Hachi is allergic to all lizards. \n\nPick it up? -- 'yay' or 'nay'",
	junglespray: "Alright, we made it to the jungle. This is where Kumo, lord of spiders, lives. \n\nCheck it out! Campers left behind bug spray. We can use that against Kumo. \n\nPick it up? -- 'yay' or 'nay'"
};

//outcomes of first battle
var battle = {
	lizard: "It's Hachi! Throw the lizard at him, ok? \n-- type 'ok'", 
	nolizard: "Alright. Let's keep walking...\n\n We made it to the mountain", 
	bugspray: "It's Kumo! Spray him with the bug spray! \n-- type 'ok'",
	nobugspray: "Hm, ok. That would've come in handy, though....\n\nI see the mountains.",
	exit: ""
	};

var sakanabattle = {
	denied: "Eek! It's Sakana. It looks like he was expecting us...\n\nSakana: Oh it's you. My guards warned me about you. Sounds like you didn't beat them. Doesn't seem like I should waste my time on you... ",
	begin: "It's Sakana! Let's see what he has to say...\n\n Sakana: So...I hear you defeated my guard. I'm surprised you made it this far."
};





