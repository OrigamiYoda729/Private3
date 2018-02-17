
	function loggedin(input) {
		var profile = [input[0], input[1], input[2], input[3], input[4], input[5]];
		var profileValues = ["userId", "displayName", "firstName", "lastName", "profileImage", "userEmail"];
		var userId = input[0];
		var displayName = input[1];
		var firstName = input[2];
		var lastName = input[3];
		var profileImage = input[4];
		var userEmail = input[5];
		
		for (i = 0; i < document.getElementsByClassName("auth").length; i++) {
			for (j = 0; j < profileValues.length; j++) {
				if (document.getElementsByClassName("auth")[i].innerHTML == "{" + profileValues[j] + "}") {
					document.getElementsByClassName("auth")[i].innerHTML = profile[j];
				}
			}
		}
		
		for (i = 0; i < document.getElementsByClassName("img-auth").length; i++) {
			document.getElementsByClassName("img-auth")[i].src = profileImage;
		}
	}
	
	function search() {
		var input, filter, ul, li, a, i;
		input = document.getElementById("searchBox");
		filter = input.value.toUpperCase();
		ul = document.getElementById("searchResults");
		li = ul.getElementsByTagName("li");
		
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
				li[i].style = "display: ";
			} else {
				li[i].style = "display: none";

			}
		}
	}

	function DropDown(el) {
		this.dd = el;
		this.initEvents();
	}
	DropDown.prototype = {
		initEvents : function() {
			var obj = this;

			obj.dd.on('click', function(event){
				$(this).toggleClass('active');
				event.stopPropagation();
			});	
			
		}
	}

	$(function() {

		var dd = new DropDown( $('.dd') );

		$(document).click(function() {
			$('.wrapper-dropdown-5').removeClass('active')
		});

		$('#subject').click(function() {
			$('#quiz').removeClass('active')
		});
		
		$('#quiz').click(function() {
			$('#subject').removeClass('active')
		});

	});
	
	function getSubject(subject, action) {
		if (action == "hide") {
			if (subject == "multimedia") {
				document.getElementById("multimedia-1").style = "display: none";
				document.getElementById("multimedia-2").style = "display: none";
				document.getElementById("multimedia-3").style = "display: none";
				document.getElementById("multimedia-r1").style = "display: none";
				document.getElementById("multimedia-r2").style = "display: none";
			} else
			if (subject == "programming") {
				document.getElementById("programming-1").style = "display: none";
				document.getElementById("programming-2").style = "display: none";
				document.getElementById("programming-3").style = "display: none";
				document.getElementById("programming-4").style = "display: none";
				document.getElementById("programming-5").style = "display: none";
				document.getElementById("programming-6").style = "display: none";
				document.getElementById("programming-r1").style = "display: none";
				document.getElementById("programming-r2").style = "display: none";
			} else
			if (subject == "webdesign") {
				document.getElementById("webdesign-1").style = "display: none";
				document.getElementById("webdesign-2").style = "display: none";
				document.getElementById("webdesign-3").style = "display: none";
				document.getElementById("webdesign-4").style = "display: none";
				document.getElementById("webdesign-r1").style = "display: none";
				document.getElementById("webdesign-r2").style = "display: none";
			} else
			if (subject == "gaming") {
				document.getElementById("gaming-1").style = "display: none";
				document.getElementById("gaming-2").style = "display: none";
				document.getElementById("gaming-3").style = "display: none";
				document.getElementById("gaming-4").style = "display: none";
				document.getElementById("gaming-r1").style = "display: none";
				document.getElementById("gaming-r2").style = "display: none";
			} else {
				console.log("Error: Invalid function syntax.");
			}			
		} else
		if (action == "show") {
			if (subject == "multimedia") {
				document.getElementById("origin-select").style = "display: none";
				document.getElementsByClassName("dd-header")[0].innerHTML = "Multimedia";
				document.getElementById("multimedia-1").style = "display: auto";
				document.getElementById("multimedia-2").style = "display: auto";
				document.getElementById("multimedia-3").style = "display: auto";
				document.getElementById("multimedia-r1").style = "display: auto";
				document.getElementById("multimedia-r2").style = "display: auto";
				getSubject("programming", "hide");
				getSubject("webdesign", "hide");
				getSubject("gaming", "hide");
			} else
			if (subject == "programming") {
				document.getElementById("origin-select").style = "display: none";
				document.getElementsByClassName("dd-header")[0].innerHTML = "Programming";
				document.getElementById("programming-1").style = "display: auto";
				document.getElementById("programming-2").style = "display: auto";
				document.getElementById("programming-3").style = "display: auto";
				document.getElementById("programming-4").style = "display: auto";
				document.getElementById("programming-5").style = "display: auto";
				document.getElementById("programming-6").style = "display: auto";
				document.getElementById("programming-r1").style = "display: auto";
				document.getElementById("programming-r2").style = "display: auto";
				getSubject("multimedia", "hide");
				getSubject("webdesign", "hide");
				getSubject("gaming", "hide");
			} else
			if (subject == "webdesign") {
				document.getElementById("origin-select").style = "display: none";
				document.getElementsByClassName("dd-header")[0].innerHTML = "Web Design";
				document.getElementById("webdesign-1").style = "display: auto";
				document.getElementById("webdesign-2").style = "display: auto";
				document.getElementById("webdesign-3").style = "display: auto";
				document.getElementById("webdesign-4").style = "display: auto";
				document.getElementById("webdesign-r1").style = "display: auto";
				document.getElementById("webdesign-r2").style = "display: auto";
				getSubject("multimedia", "hide");
				getSubject("programming", "hide");
				getSubject("gaming", "hide");
			} else
			if (subject == "gaming") {
				document.getElementById("origin-select").style = "display: none";
				document.getElementsByClassName("dd-header")[0].innerHTML = "Gaming";
				document.getElementById("gaming-1").style = "display: auto";
				document.getElementById("gaming-2").style = "display: auto";
				document.getElementById("gaming-3").style = "display: auto";
				document.getElementById("gaming-4").style = "display: auto";
				document.getElementById("gaming-r1").style = "display: auto";
				document.getElementById("gaming-r2").style = "display: auto";
				getSubject("multimedia", "hide");
				getSubject("programming", "hide");
				getSubject("webdesign", "hide");
			} else {
				console.log("Error: Invalid function syntax.");
			}
		} else {
			console.log("Error: Invalid function syntax.");
		}
		
		
	}
	
	var modal = document.getElementById('modal');
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];
	var body = document.getElementById("content");

	function openModal() {
		modal.style.display = "block";
		body.className = "blur";
	}
	
	span.onclick = function() {
		modal.style.display = "none";
		body.className = "";
	}
	
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
			body.className = "";
		}
	}
	
	function getQuiz(id) {
		var gc = getCode(id);		
		if (gc != 000000 && gc != "000000" && gc != "XXXXXX") { 
			document.getElementsByClassName("dd-header")[1].innerHTML = document.getElementById(id).getElementsByTagName("a")[0].innerHTML;
			document.getElementsByClassName("q")[1].innerHTML = gc;
		} else 
		if (gc == "XXXXXX") {
			alert("woah. six times.");
		} else {
			document.getElementsByClassName("dd-header")[1].innerHTML = document.getElementById(id).getElementsByTagName("a")[0].innerHTML;
			document.getElementsByClassName("q")[1].innerHTML = "------";
		}
	}
	
	function copyToClipboard(text) {
		if (window.clipboardData && window.clipboardData.setData) {
			return clipboardData.setData("Text", text); 

		} else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
			var textarea = document.createElement("textarea");
			textarea.textContent = text;
			textarea.style.position = "fixed";
			document.body.appendChild(textarea);
			textarea.select();
			try {
				return document.execCommand("copy");
			} catch (ex) {
				console.warn("Copy to clipboard failed.", ex);
				return false;
			} finally {
				document.body.removeChild(textarea);
			}
		}
	}

	function copy(type, string) {
		if (type == "custom" || type == "string") {
			copyToClipboard(string.innerHTML.toString());			
		} else {
			copyToClipboard(type.innerHTML.toString());
		}
	}
	
	function href(url) {
		window.open(
			url,
			'_blank'
		);
	}