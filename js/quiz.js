const quizForm = document.querySelector("#quiz-form");
const recommendations = document.querySelector("#recommendations");

quizForm.addEventListener('submit', function(event) {
	event.preventDefault();
	const gameType = quizForm.elements['game-type'].value;
	const platform = quizForm.elements.platform.value;
	const controllerType = quizForm.elements['controller-type'].value;

	// Game recommendations
	let gameRecommendations;
	if (gameType === 'action') {
		if (platform === 'pc') {
			gameRecommendations = ['Halo Infinite', 'Call of Duty: Warzone', 'Fortnite']
		} else if (platform === 'xbox') {
			gameRecommendations = ["Gears 5", "Minecraft Dungeons", "Ori and the Will of the Wisps"]
        }else if(platform === 'playstation'){
			gameRecommendations = ["The Last of Us Part II", "Spider-Man: Miles Morales", "Ghost of Tsushima"]
		}else if (platform === 'nintendo'){
			gameRecommendations = ["The Legend of Zelda: Breath of the Wild", "Super Mario Odyssey", "Splatoon 2"]
		}
	}else if(gameType === 'rpg'){
		if (platform === 'pc') {
			gameRecommendations = ["The Elder Scrolls V: Skyrim", "Dragon Age: Inquisition", "Mass Effect 2"]
		} else if (platform === 'xbox') {
			gameRecommendations = ["The Outer Worlds", "Wasteland 3", "Dragon Age: Inquisition"]
        }else if(platform === 'playstation'){
			gameRecommendations = ["The Witcher 3: Wild Hunt", "Persona 5", "Final Fantasy VII Remake"]
		}else if (platform === 'nintendo'){
			gameRecommendations = ["Octopath Traveler", "Pokemon Sword and Shield", "Xenoblade Chronicles: Definitive Edition"]
		}
	}else if(gameType === 'sports'){
		if (platform === 'pc') {
			gameRecommendations = ["Madden NFL 22", "FIFA 22", "NBA 2K22"]
		} else if (platform === 'xbox') {
			gameRecommendations = ["Madden NFL 22", "FIFA 22", "NBA 2K22"]
        }else if(platform === 'playstation'){
			gameRecommendations = ["Madden NFL 22", "FIFA 22", "NBA 2K22"]
		}else if (platform === 'nintendo'){
			gameRecommendations = ["Mario Tennis Aces", "FIFA 21 Legacy Edition", "NBA 2K21"]
		}
	}else if(gameType === 'strategy'){
		if (platform === 'pc') {
			gameRecommendations = ["Civilization VI", "Into the Breach", "Portal 2"]
		} else if (platform === 'xbox') {
			gameRecommendations = ["Minecraft", "Tetris Effect", "Portal Knights"]
        }else if(platform === 'playstation'){
			gameRecommendations = ['Lemmings Remastered', 'Tetris Effect: Connected', 'Death Squared']
		}else if (platform === 'nintendo'){
			gameRecommendations = ["'Picross S' series", "Captain Toad: Treasure Tracker", "Puyo Puyo Tetris"]
		}
	}
	// Controller recommendation
	let controllerRecommendation;
	if (controllerType === 'joystick') {
		if (platform === 'pc') {
			controllerRecommendation = 'Logitech Extreme 3D Pro Joystick';
		} else if (platform === 'xbox') {
			controllerRecommendation = 'Microsoft Xbox Adaptive Controller';
		} else if (platform === 'playstation') {
			controllerRecommendation = 'Hori Mini Wired Gamepad';
		} else if (platform === 'nintendo') {
			controllerRecommendation = 'Nintendo Switch Pro Controller';
		}
	} else if (controllerType === 'gamepad') {
		if (platform === 'pc') {
			controllerRecommendation = 'Microsoft Xbox Wireless Controller';
		} else if (platform === 'xbox') {
			controllerRecommendation = 'Microsoft Xbox Adaptive Controller';
		} else if (platform === 'playstation') {
			controllerRecommendation = 'Sony DualShock 4 Wireless Controller';
		} else if (platform === 'nintendo') {
			controllerRecommendation = 'Nintendo Switch Pro Controller';
		}
	} else if (controllerType === 'mouse') {
		if (platform === 'pc') {
			controllerRecommendation = 'Logitech G502 HERO High Performance Gaming Mouse';
		} else if (platform === 'xbox') {
			controllerRecommendation = 'Microsoft Xbox Adaptive Controller';
		} else if (platform === 'playstation') {
			controllerRecommendation = 'Hori Mini Wired Gamepad';
		} else if (platform === 'nintendo') {
			controllerRecommendation = 'Nintendo Switch Pro Controller';
		}
	}

	// Display recommendations
	if (gameRecommendations && controllerRecommendation) {
		recommendations.innerHTML = `
			<h2>Game Recommendations:</h2>
				<div>${gameRecommendations[0]}</div>
				<div>${gameRecommendations[1]}</div>
				<div>${gameRecommendations[2]}</div>
			<h2>Controller Recommendation:</h2>
				<p>${controllerRecommendation}</p>
		`;
	} else {
		recommendations.innerText = 'Sorry, we could not find any recommendations for your preferences.';
	};
});
