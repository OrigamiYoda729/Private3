
	function getCode(game) {
		error = "true";
		
		// mutlimedia
			if (game == "multimedia-1") {   // lesson 1
				error = "false";
				return "116793";
			} else
			if (game == "multimedia-2") {   // lesson 2
				error = "false";
				return "XXXXXX";
			} else
			if (game == "multimedia-3") {   // lesson 2
				error = "false";
				return "XXXXXX";
			} else
			if (game == "multimedia-r1") {   // lesson v1
				error = "false";
				return "097073";
			} else
			if (game == "multimedia-r2") {   // review v2
				error = "false";
				return "XXXXXX";
			} else
		
		// programming
			if (game == "programming-1") {   // lesson 1
				error = "false";
				return "XXXXXX";
			} else
			if (game == "programming-2") {   // lesson 2
				error = "false";
				return "XXXXXX";
			} else
			if (game == "programming-3") {   // lesson 3
				error = "false";
				return "XXXXXX";
			} else
			if (game == "programming-4") {   // lesson 4
				error = "false";
				return "XXXXXX";
			} else
			if (game == "programming-5") {   // lesson 5
				error = "false";
				return "XXXXXX";
			} else
			if (game == "programming-6") {   // lesson 6
				error = "false";
				return "XXXXXX";
			} else
			if (game == "programming-r1") {   // lesson v1
				error = "false";
				return "669989";
			} else
			if (game == "programming-r2") {   // review v2
				error = "false";
				return "XXXXXX";
			} else
		
		// web design
			if (game == "webdesign-1") {   // lesson 1
				error = "false";
				return "XXXXXX";
			} else
			if (game == "webdesign-2") {   // lesson 2
				error = "false";
				return "XXXXXX";
			} else
			if (game == "webdesign-3") {   // lesson 3
				error = "false";
				return "XXXXXX";
			} else
			if (game == "webdesign-4") {   // lesson 4
				error = "false";
				return "XXXXXX";
			} else
			if (game == "webdesign-r1") {   // lesson v1
				error = "false";
				return "563247";
			} else
			if (game == "webdesign-r2") {   // review v2
				error = "false";
				return "XXXXXX";
			} else
		
		// gaming
			if (game == "gaming-1") {   // lesson 1
				error = "false";
				return "XXXXXX";
			} else
			if (game == "gaming-2") {   // lesson 2
				error = "false";
				return "XXXXXX";
			} else
			if (game == "gaming-3") {   // lesson 3
				error = "false";
				return "XXXXXX";
			} else
			if (game == "gaming-4") {   // lesson 4
				error = "false";
				return "XXXXXX";
			} else
			if (game == "gaming-r1") {   // review v1
				error = "false";
				return "079466";
			} else
			if (game == "gaming-r2") {   // review v2
				error = "false";
				return "XXXXXX";
			} else
			
		// iba
			if (game == "learn-1") {   // lesson 1
				error = "false";
				return "291796";
			} else
			if (game == "learn-2") {   // lesson 2
				error = "false";
				return "XXXXXX";
			} else
			if (game == "learn-3") {   // lesson 3
				error = "false";
				return "XXXXXX";
			} else
			if (game == "learn-4") {   // lesson 4
				error = "false";
				return "XXXXXX";
			} else
			if (game == "learn-5") {   // lesson 5
				error = "false";
				return "XXXXXX";
			} else
			if (game == "learn-6") {   // lesson 6
				error = "false";
				return "XXXXXX";
			} else
			if (game == "learn-7") {   // lesson 7
				error = "false";
				return "XXXXXX";
			} else
			if (game == "learn-8") {   // lesson 8
				error = "false";
				return "XXXXXX";
			} else
			if (game == "learn-9") {   // lesson 9
				error = "false";
				return "XXXXXX";
			} else
			if (game == "learn-10") {   // lesson 10
				error = "false";
				return "XXXXXX";
			} else
			if (game == "learn-r1") {   // review from ucertify
				error = "false";
				return "XXXXXX";
			} else
			if (game == "learn-r2") {   // custom review
				error = "false";
				return "419918";
			} else
				
		// extreme
			if (game == "extreme-1") {   // part 1
				error = "false";
				return "933531";
			} else
			if (game == "extreme-2") {   // part 2
				error = "false";
				return "708032";
			} else
			if (game == "extreme-3") {   // part 3
				error = "false";
				return "878321";
			} else
			if (game == "extreme-4") {   // part 4
				error = "false";
				return "265333";
			} else
			if (game == "extreme-5") {   // part 5
				error = "false";
				return "07964";
			} else
			if (game == "extreme-6") {   // part 6 -- start
				error = "false";
				return "890993";
			} else
			if (game == "extreme-7") {   // part 7
				error = "false";
				return "067263";
			} else
			if (game == "extreme-8") {   // part 8
				error = "false";
				return "706354";
			} else
			if (game == "extreme-c1") {   // custom review
				error = "false";
				return "679223";
			} else
			
			if (game == "true") {
				return "invalid";
			}
	}
	
	function play(cgame) {
		parent.location.href = "redirect.html?game=" + cgame;
	}
	
	function disable() {
		var x;
		var y;
		var game;
		var error;
		var games = ["multimedia-1", "multimedia-2", "multimedia-3", "multimedia-r1", "multimedia-r2", "programming-1", "programming-2", "programming-3", "programming-4", "programming-5", "programming-6", "programming-r1", "programming-r2", "webdesign-1", "webdesign-2", "webdesign-3", "webdesign-4", "webdesign-r1", "webdesign-r2", "gaming-1", "gaming-2", 	"gaming-3", "gaming-4", "gaming-r1", "gaming-r2", "iba-1", "iba-2", "iba-3", "iba-4", "iba-5", "iba-6", "iba-7", "iba-8", "iba-9", "iba-10", "iba-r1", "iba-r2", "iba-r3"];
		var subjects = ["multimedia", "programming", "webdesign", "gaming", "iba"];
		var types = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "r1", "r2", "r3"];
		
		for (var i = 0; i < games.length; i++) {
			for (var h = 0; h < subjects.length; h++) {
				for (var j = 0; j < types.length; j++) {
					x = subjects[h] + "-" +   types[j];
					if (x == games[i]) {
						y = getCode(x);
						alert(x);
						if (y == "000000") {
							document.getElementById(x).className += " disabled";
							document.getElementById(x).disabled = "true";
						}
					}
				}
			}
		}
	}
