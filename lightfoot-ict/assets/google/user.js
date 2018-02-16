
	function loggedin(input) {
		var profile = [input[0], input[1], input[2], input[3], input[4], input[5]];
		var profileValues = ["userId", "displayName", "firstName", "lastName", "profileImage", "userEmail"];
		var userId = input[0];
		var displayName = input[1];
		var firstName = input[2];
		var lastName = input[3];
		var profileImage = input[4];
		var userEmail = input[5];
		
		for (i = 0; i < document.getElementsByTagName("span").length; i++) {
			for (j = 0; j < profileValues.length; j++) {
				if (document.getElementsByTagName("span")[i].innerHTML == "{" + profileValues[j] + "}") {
					document.getElementsByTagName("span")[i].innerHTML = profile[j];
				}
			}
		}
	}