	
	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
	function verificationReturn() {
		var status = getParameterByName("status");
		var noStatus = "true";
		var footer = document.getElementById("footer")
		
		if (status == "fail") {
			footer.innerHTML = "Incorrect Username or Password. <a href='resetpassword.html'>Forgot Password?</a>";
			noStatus = "false";
		}
		
		if (status == "logout") {
			footer.innerHTML = "You have been logged out successfully. We reccommend closing all tabs for security.";
			noStatus = "false";
		}
		
		if (status == "notloggedin") {
			footer.innerHTML = "To access this, please log in to your account.";
			noStatus = "false";
		}
		
		if (status == "preverified") {
			footer.innerHTML = "<a href='resetpassword.html'>Forgot Password?</a>";
			noStatus = "false";
		}
		
		if (noStatus == "true") {
			location.href = "verify.html?preverify=true"
		}
	}