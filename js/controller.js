//introduction and decide first location 
function newGame() {
	alert(setup.greeting);
	var firstLocation = prompt(setup.question);
//determines whether user goes to desertbattle.js or junglebattle.js 
switch (firstLocation) {
	case "desert": 
	lizard = prompt(locations.desertlizard);
	desertBattle();
	break;
	case "jungle":
	bugspray = prompt(locations.junglespray);
	jungleBattle();
	break;
	default:
};

};


