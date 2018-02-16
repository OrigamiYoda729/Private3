
	function onSignIn(googleUser) {
		
		var profile = googleUser.getBasicProfile();
		console.log('Profile: ' + profile);
		console.log('ID: ' + profile.getId());
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail());
		var data = [profile.getId(), profile.getName(), profile.getImageUrl(), profile.getEmail()];
		
		$('#main-content').show();
		$('#gConnect').hide();
		
		var frame = document.getElementById("main-content").contentWindow;
		frame.loggedin(data)
	}
	
	function signOut() {
		
		var auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
			console.log('User signed out.');
		});
		
		$('#main-content').hide();
		$('#gConnect').show();
	}