
	function getCode(game) {
		error = "true";
		
		// mutlimedia
			if (game == "multimedia-1") {   // lesson 1
				error = "false";
				return "846379";
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
				return "663281";
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
				return "869056";
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
				return "695135";
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
				return "371615";
			} else
			if (game == "gaming-r2") {   // review v2
				error = "false";
				return "XXXXXX";
			} else
			
		// iba
			if (game == "learn-1") {   // lesson 1
				error = "false";
				return "415811";
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
				return "228852";
			} else
				
		// extreme
			if (game == "extreme-1") {   // part 1
				error = "false";
				return "743840";
			} else
			if (game == "extreme-2") {   // part 2
				error = "false";
				return "935445";
			} else
			if (game == "extreme-3") {   // part 3
				error = "false";
				return "955442";
			} else
			if (game == "extreme-4") {   // part 4
				error = "false";
				return "978968";
			} else
			if (game == "extreme-5") {   // part 5
				error = "false";
				return "137474";
			} else
			if (game == "extreme-6") {   // part 6
				error = "false";
				return "687855";
			} else
			if (game == "extreme-7") {   // part 7
				error = "false";
				return "262150";
			} else
			if (game == "extreme-8") {   // part 8
				error = "false";
				return "508702";
			} else
			if (game == "extreme-c1") {   // full review
				error = "false";
				return "990512";
			} else
			
			if (game == "true") {
				return "invalid";
			}
	}
	
	function play(cgame) {
		parent.location.href = "redirect.html?game=" + cgame;
	}
