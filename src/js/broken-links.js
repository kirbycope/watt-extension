// Bootstrap alert styles - http://getbootstrap.com/components/#alerts-examples
var successCss = "background: rgb(223, 240, 216); color: rgb(60, 118, 61);";
var infoCss = "background: rgb(217, 237, 247); color: rgb(49, 112, 143);";
var warningCss = "background: rgb(252, 248, 227); color: rgb(138, 109, 59);";
var dangerCss = "background: rgb(242, 222, 222); color: rgb(169, 68, 66);";

// TEST: Verify each <a> returns a SUCCESS (200) result
console.log("%c Checking each <a> of the page for a SUCCESS (200) response.", infoCss);
var host = document.location.host;
var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
	var href = anchors[i].href;
	if (href.includes(host)) {
		fetchStatus(href); 
	}
	else if (href.includes('mailto:')) {
		console.log("%c " + href + " is an email link and cannot be verified using this method.", warningCss);
	}
	else {
		console.log("%c " + href + " is outside of the current domain and cannot be checked via JavaScript XMLHttpRequest.", warningCss);
	}
}

function returnStatus(req, status) {
	if(status == 200) {
		console.log("%c The URL, " + req.responseURL + ", is available", successCss);
	}
	else {
		console.log("%c The URL, " + req.responseURL + ", returned status code " + status, dangerCss);
	}
}

// http://stackoverflow.com/a/4591666
function fetchStatus(address) {
	var client = new XMLHttpRequest();
	client.onreadystatechange = function() {
		// in case of network errors this might not give reliable results
		if(this.readyState == 4) {
			returnStatus(this, this.status);
		}
	}
	client.open("GET", address);
	client.send();
}