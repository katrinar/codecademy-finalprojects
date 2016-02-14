//first battle against hachi
var beginDesertbattle = function() {
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

//move to sakana battle -- finalbattle.js
switch(beathachi){
	case "yes":
	riddle = prompt(sakanabattle.begin);
	finalBattle();
	break;
	default:
};

//send to sakana battle but denied -- controller.js
switch(losthachi) {
	case "ok":
	alert(sakanabattle.denied);
	alert(sakanabattle.exit);
	break;
	default:
};
};

function desertBattle() {

if (lizard === "yay") {
	prompt(battle.lizard);
	beginDesertbattle();
}
else {
	alert(battle.nolizard);
	alert(sakanabattle.denied);
	alert(sakanabattle.exit);
};
};



