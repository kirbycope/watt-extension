// Bootstrap alert styles - http://getbootstrap.com/components/#alerts-examples
var successCss = "background: rgb(223, 240, 216); color: rgb(60, 118, 61);";
var infoCss = "background: rgb(217, 237, 247); color: rgb(49, 112, 143);";
var warningCss = "background: rgb(252, 248, 227); color: rgb(138, 109, 59);";
var dangerCss = "background: rgb(242, 222, 222); color: rgb(169, 68, 66);";

var scripts = [];
var xhr_index;

// TEST: Check for console.log usages
console.log("%c Checking the page for scripts using 'console.log()'...", infoCss);
// Get all scripts for the current domain
function trimScripts(){
	var allScripts = document.getElementsByTagName('script');
	for (var i = 0; i < allScripts.length; i++){
		var source = allScripts[i].src;
		if ( (source.startsWith('/')) || (source.startsWith(window.location.href)) ){
			scripts.push(allScripts[i]);
		}
	}
	// Make the request(s)
	if (scripts.length > 0){
		xhr_index = 0;
		makeNextRequest();
	}
	else {
		console.log("%c No scripts to check", warningCss);
	}
}

function makeNextRequest() {
	// Make sure there is something at the index
	if (scripts[xhr_index]){
		// Get the URL of the current script
		var url = scripts[xhr_index].src;
		// Queue up the request
		sendRequest(url);
	}
	else {
		console.log("%c Complete!", infoCss);
	}
}

function sendRequest(url) {
	// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	// If specified, responseType must be empty string or "text"
	xhr.responseType = 'text';
	xhr.onload = function () {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200) {
				// Handle the result
				parseResponse(xhr.responseURL, xhr.responseText)
			}
		}
	};
	xhr.send(null);
}

function parseResponse(url, response) {
	console.log("%c Checking: " + url + " ...", infoCss);
	if (response.includes("console.log")){
		console.log("%c Console.log() found!", dangerCss);
	}
	else {
		console.log("%c All good.", successCss);
	}
	// Move onto the next one
	xhr_index++;
	makeNextRequest();
}

// Do the thing
trimScripts();