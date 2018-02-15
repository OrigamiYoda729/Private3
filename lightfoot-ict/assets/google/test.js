
	var auth2 = {};
	var helper = (function() {
		return {
			onSignInCallback: function(authResult) {
				if (authResult.isSignedIn.get()) {
					$('#main-content').show();
					$('#gConnect').hide();
					document.getElementById("main-content").contentWindow.loggedin();
					helper.profile();
				} else {
					if (authResult['error'] || authResult.currentUser.get().getAuthResponse() == null) {
						console.log('OAuth2 error: ' + authResult['error']);
					}
					$('#authResult').append('Logged out');
					$('#main-content').hide();
					$('#gConnect').show();
				}
			},
			disconnect: function() {
				auth2.disconnect();
			},
			people: function() {
				gapi.client.plus.people.list({
					'userId': 'me',
					'collection': 'visible'
				}).then(function(res) {
					var people = res.result;
				});
			},
			profile: function() {
				gapi.client.plus.people.get({
					'userId': 'me'
				}).then(function(res) {
					var profile = res.result;
				}, function(err) {
					var error = err.result;
				});
			}
		};
	})();
	$(document).ready(function() {
		$('#disconnect').click(helper.disconnect);
	});
	var updateSignIn = function() {
		if (auth2.isSignedIn.get()) {
			helper.onSignInCallback(gapi.auth2.getAuthInstance());
		} else {
			helper.onSignInCallback(gapi.auth2.getAuthInstance());
		}
	}

	function startApp() {
		gapi.load('auth2', function() {
			gapi.client.load('plus', 'v1').then(function() {
				gapi.signin2.render('signin-button', {
					scope: 'https://www.googleapis.com/auth/plus.login',
					fetch_basic_profile: false
				});
				gapi.auth2.init({
					fetch_basic_profile: false,
					scope: 'https://www.googleapis.com/auth/plus.login'
				}).then(
					function() {
						auth2 = gapi.auth2.getAuthInstance();
						auth2.isSignedIn.listen(updateSignIn);
						auth2.then(updateSignIn);
					});
			});
		});
	}