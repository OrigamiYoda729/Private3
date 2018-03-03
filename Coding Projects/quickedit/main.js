
  function update() {
	var code
	var code0
	var code1 = document.getElementById("code").innerHTML;
	
	code0 = document.getElementById("code").innerHTML;
	code0 = code0.replace(new RegExp("<span class='blue'>", "g"), "");
	code0 = code0.replace(new RegExp("</span>", "g"), "");
	code0 = code0.replace(new RegExp("&lt;", "g"), "<");
	code0 = code0.replace(new RegExp("&lt;", "g"), "<");
	code0 = code0.replace(new RegExp("&gt;", "g"), ">");
	code0 = code0.replace(new RegExp("&", "g"), "!and-");
	
	code1 = code1.replace(new RegExp("&lt;", "g"), "<span class='blue'>&lt;</span>");
	
	code = code0.replace("<br>", "");
	document.getElementById("frame").src = "view.html?code=" + code;
	document.getElementById("code").innerHTML = code1;
	
	
	
  }

  function save() {
	var x = document.getElementById("frame").src;

	$.getJSON('http://api.bitly.com/v3/shorten?callback=?', {
		format: "json",
		apiKey: "R_2850f6a5864e47d5804aa220f66f9819",
		login: "origamiyoda729",
		longUrl: x,
	  },
	  function(response) {
		var shortURL = response.data.url;
		var y = shortURL.replace("http://bit.ly/", "http://quickedit.co.nf/?c=");
		alert("Share URL: " + y);
	  }
	);

  }