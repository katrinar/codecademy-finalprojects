//introduction and decide first location 

function newGame() {
	userName = prompt(setup.greeting);
	var firstLocation = prompt(setup.question);

//determines whether user goes to desertbattle.js or junglebattle.js 
switch (firstLocation) {
	case "desert": 
	var lizard = prompt(locations.desertlizard);
	break;
	case "jungle":
	var bugspray = prompt(locations.junglespray);
	break;
	default:
};

};


