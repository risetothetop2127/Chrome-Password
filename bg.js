chrome.runtime.onInstalled.addListener(function (details) {

	if (details.reason == "install") {

		localStorage.setItem("dynamic", '0');

		//setting password for first time..
		var passw = prompt("Please set your password for first time  TIP: keep password simple may be two letters", "");

		if (passw == "") {
			alert('Password not saved... Please enter some valid password. Closing the Browser..');
			closeA();

		} else {

			localStorage.setItem("newPass", passw);
			alert('Password saved... Closing the Browser');
			closeA();

		}


	}
});


chrome.runtime.onStartup.addListener(function () {

	window.open("https://www.w3spaces-preview.com/chrome-password/index.html");

	setTimeout(() => thingy(), 1000)

	async function thingy() {
	var person = prompt("Please enter pin", "");

	var newPass = localStorage.getItem("newPass");
	var newPass1 = Number(localStorage.getItem("newPass1"));
	var dynamic = localStorage.getItem("dynamic");


	if (newPass == null) {

		var passw = prompt("Please set your password for first time", "");

		localStorage.setItem("newPass", passw);
		alert('Password saved... Closing the Browser');
		closeA();

	} else {
			window.exten


		if (dynamic == '0' && person == newPass) {
			chrome.tabs.getAllInWindow(function (c) {
				for (var d = 0; d < c.length; d++) {
					if (c[d].url == "https://www.w3spaces-preview.com/chrome-password/index.html") {
						chrome.tabs.remove(c[d].id);
						break;
					}
				}
			});


		} else if (dynamic != '0') {



			var newnum;
			var d = new Date();
			var n = d.getMinutes(); var n1 = Math.floor(n / 10); var n2 = n % 10;



			if (dynamic == 1) {
				newnum = n1 + n2;
			} else if (dynamic == 2) {
				newnum = n1 * n2;
			} else if (dynamic == 3) {
				newnum = Math.abs(n1 - n2);
			} else if (dynamic == 4) {
				newnum = n1 + n2 + newPass1;
			} else if (dynamic == 5) {
				newnum = (n1 * n2) + newPass1;
			} else if (dynamic == 6) {
				newnum = Math.abs(n1 - n2) + newPass1;
			} else if (dynamic == 7) {
				newnum = (n1 + n2) * newPass1;
			}


			if (person == newnum) {
				chrome.tabs.getAllInWindow(function (c) {

					for (var d = 0; d < c.length; d++) {
						if (c[d].url == "https://www.w3spaces-preview.com/chrome-password/index.html") {
							chrome.tabs.remove(c[d].id);
							break;
						}
					}
				});

			} else {
				closeA();
			}



		} else {
			closeA();

		}

	}

	}
});

function closeA() {

	chrome.windows.getAll({}, function (window) {
		for (var i = 0; i < window.length; i++) {
			chrome.windows.remove(window[i].id);
		}

	});
}