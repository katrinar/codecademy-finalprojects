

//sakana battle starts after from desertbattle.js or junglebattle.js
var beginFinalbattle = function() {
    var slaying = true;
    var youHit = Math.floor(Math.random()*2);
    var damageThisRound = Math.floor(Math.random()*5+1);
    var totalDamage = 0;

while (slaying) {
    if (youHit){
        alert("Good job! You hit Sakana");
        totalDamage += damageThisRound;
        if (totalDamage >= 0) {
           alert("You defeated Sakana!");
           alert("Yes! You saved our land!! Let's celebrate. \n\n --- Game Won ---");
            slaying = false;
        }
        else {
            youHit = Math.floor(Math.random()*5+1);
        }
    }
    else {
        alert("oh no! Sakana hit you.");
        alert(sakanabattle.exit);
    };
    slaying = false;
};
};

function finalBattle() {
if (riddle === "fish") {
	alert(sakanabattle.initiate);
    beginFinalbattle();
}
else {
	alert("Hmm you don't know me!");
    alert(sakanabattle.exit)
};
};