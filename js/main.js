//story text; pieced together in controller.js
var setup = {
	greeting: "Welcome to Janguru. \nI have a feeling you are...the CHOSEN ONE. What is your name?",
	question: " Ahh, yes. I had a feeling you were arriving. \n\nYou're here to defeat Sakana, aren't you? He's taken over our land, Janguru and we NEED YOU to fight him. \n\nHe lives in the mountains. To get there we will have to fight his guards, Hachi and Kumo, first. We can get to the mountains by crossing the desert or the jungle \n\nWhere should we go first? --- 'desert' or 'jungle' ---"
};

var locations = {
	desertlizard: "Pretty dusty here in the desert. This is where Hachi, lord of bees, lives. \n\nLook! A lizard! That will come in handy to fight Hachi. Hachi is allergic to all lizards. \n\nPick it up? --- 'yay' or 'nay' ---",
	junglespray: "Alright, we made it to the jungle. This is where Kumo, lord of spiders, lives. \n\nCheck it out! Campers left behind bug spray. We can use that against Kumo. \n\nPick it up? --- 'yay' or 'nay' ---"
};

//weapon choice: determines outcomes of first battle
var battle = {
	lizard: "Good thing you picked up that lizard. It's Hachi! He's SO allergic to lizards. Throw the lizard at him, ok? \n\n--- type 'ok' ---", 
	nolizard: "Alright. Let's keep walking to the mountains...", 
	bugspray: "I have bad news, and I have good news. \n\nBad news: I see Kumo. \nGood news: He's allergic to bug spray! \n\nSpray him with the bug spray! \n\n--- type 'ok' --- ",
	nobugspray: "Hm, ok. That would've come in handy, though....\n\nI see the mountains. Let's keep moving."
	};

var sakanabattle = {
	denied: "In the mountains....\n\nEek! It's Sakana. It looks like he was expecting us...\n\nSakana: Oh it's you. My guards warned me about you. Sounds like you didn't beat them. Doesn't seem like I should waste my time on you... Guards, get userName out of here!",
	exit: "You have been trapped by Sakana! \n\nGame Over \n\n :(",
	begin: "It's Sakana! The lord of fish who's trying to turn our land into a giant acquarium. Let's see what he has to say...\n\nSakana: So...I hear you defeated my guard. I'm surprised, and a little impressed, you made it this far... \n\nI'll tell you what...if you can tell me what my name means, I will take it easy on you...if not, then I show NO MERCY! Tell me....\n\nwhat does my name mean? \n\n--- type your answer: ---",
	initiate: "Fine. You are worthy of my time. Well, what are we waiting for? \n\nLet's battle!!!"
};





