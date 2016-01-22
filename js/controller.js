//introduction and decide first location for Chapter 1
function newGame() {
	//ask for name and first location
	var userName = prompt(setup.greeting);
	var firstLocation = prompt(setup.question);


switch (firstLocation) {
	case "desert": 
	var lizard = prompt(locations.desertlizard);
	break;
	case "jungle":
	var bugspray = prompt(locations.junglespray);
	break;
	default:
};

//battle hachi with lizard
switch(lizard) {
	case "yay":
	var beginbattle = function() {
	prompt(battle.lizard);
	var slaying = true;
	var youHit = Math.floor(Math.random()*2);
	var damageThisRound = Math.floor(Math.random()*5+1);
	var totalDamage = 0;

while (slaying) {
    if (youHit){
        alert("Yes! The lizard bit Hachi");
        totalDamage += damageThisRound;
        if (totalDamage >= 0) {
           alert("You defeated Hachi!");
           var beathachi = prompt("Let's keep moving to the mountains and find Sakana. Are you ready? --- type 'yes' --- ");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random()*5+1);
        }
    }
    else {
        alert("oh no! The lizard bit you.  It looks like you're injured. That might affect our chances with Sakana... ");
        var losthachi = prompt("Let's move on to the mountains.\n\n --- type 'ok'--- ");
    }
    slaying = false;
};

//move to sakana battle
switch(beathachi){
	case "yes":
	prompt(sakanabattle.begin);
	break;
	default:
};

//send to sakana battle but denied
switch(losthachi) {
	case "ok":
	alert(sakanabattle.denied);
	alert(sakanabattle.exit);
	break;
	default:
};
};
beginbattle();
	break;
	case "nay":
	alert(battle.nolizard);
	alert(sakanabattle.denied);
	alert(sakanabattle.exit);
	break;
	default:
};	


//battle kumo with bug spray
switch(bugspray) {
	case "yay":
	var beginbattle = function() {
	prompt(battle.bugspray);
	var slaying = true;
	var youHit = Math.floor(Math.random()*2);
	var damageThisRound = Math.floor(Math.random()*5+1);
	var totalDamage = 0;

while (slaying) {
    if (youHit){
        alert("Nice! You got Kumo with the bug spray!");
        totalDamage += damageThisRound;
        if (totalDamage >= 0) {
        alert("You defeated Kumo!");
        var beatkumo = prompt("Now we can move on to the mountains and find Sakana. Should we keep moving to the mountains? --- type 'yes' ---")
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random()*5+1);
        }
    }
    else {
        alert("oh no! Kumo's spiders carried the bug spray away. Let's make a run for it!");
        var lostkumo = prompt("Let's go to the mountains.\n\n --- type 'ok' --- ");
    }
    slaying = false;
};

//move to sakana battle
switch(beatkumo){
	case "yes": 
	prompt(sakanabattle.begin);
	break;
	default:
};

//send to sakana but battle denied
switch(lostkumo){
	case "ok":
	alert(sakanabattle.denied);
	alert(sakanabattle.exit);
	break;
	default:
};

};
beginbattle();
	break;
	case "nay":
	alert(battle.nobugspray);
	alert(sakanabattle.denied);
	alert(sakanabattle.exit);
	break;
	default:
};


};
newGame();