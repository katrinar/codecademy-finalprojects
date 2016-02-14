//first battle against kumo
if (var bugspray === "yay") {
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
           var beatkumo = prompt("Now we can move on to the mountains and find Sakana. Should we keep moving to the mountains? --- type 'yes' --- ");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random()*5+1);
        }
    }
    else {
        alert("Oh no! Kumo's spiders carried the bug spray away. Let's make a run for it! ");
        var lostkumo = prompt("Let's move on to the mountains.\n\n --- type 'ok'--- ");
    }
    slaying = false;
}

//move to sakana battle -- finalbattle.js
switch(beatkumo){
	case "yes":
	riddle = prompt(sakanabattle.begin);
	break;
	default:
};

//send to sakana battle but denied -- controller.js
switch(lostkumo) {
	case "ok":
	alert(sakanabattle.denied);
	alert(sakanabattle.exit);
	break;
	default:
};
};
beginbattle();
}
else {
	alert(battle.nobugspray);
	alert(sakanabattle.denied);
	alert(sakanabattle.exit);
};