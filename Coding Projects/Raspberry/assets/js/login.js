	
	function setCookie(name, value) {
		var today = new Date();
		var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000);
		document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
	}

	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	
	function deleteCookie(name) {
		var expired = new Date(today.getTime() - 24 * 3600 * 1000);
		document.cookie=name + "=null; path=/; expires=" + expired.toGMTString();
	}

	function login() {
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
		var valid = "false";
		
		deleteCookie("username");
		
		if (username == "finger.sloan" && password == "171053015") {
			valid = "true";
			setCookie("username", username, 30);
		}
	}
	
	function getCookie(name) {
		var re = new RegExp(name + "=([^;]+)");
		var value = re.exec(document.cookie);
		return (value != null) ? unescape(value[1]) : null;
	}
	
	function load {
		document.write(getCookie("username"));
	}	