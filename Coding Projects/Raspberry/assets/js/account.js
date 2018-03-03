
	function setCookie(cname,cvalue,exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires=" + d.toGMTString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

	function accountpage() {
		var user=getCookie("username");
		
		if (user == "") {
			location.href = "login.html?status=notloggedin";
		}
		
		var name = user.split(".");
		var firstName = name[1].charAt(0).toUpperCase() + name[1].slice(1);
		var lastName = name[0].charAt(0).toUpperCase() + name[1].slice(0);
		
		var i;
		var a;
		var b;
		var x = document.getElementsByTagName("span");
		
		for (i = 0; i < x.length; i++) {
			a = x[i].innerHTML;
			b = a.replace("{firstName}", firstName);
			x[i].innerHTML = b;
		}
	}
	
	function logout() {
		document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		location.href = "login.html?status=logout";		
	}