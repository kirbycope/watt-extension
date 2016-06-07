// Get all <scripts> in the HTML <head>
var scripts = document.head.getElementsByTagName('script');

// Check each for an instance of "jQuery"
var found = false;
var result;
for (var i = 0; i < scripts.length; i++) {
	var script = scripts[i].src.toLowerCase();
	if (script.includes('jquery')) {
		found = true;
	}
}

if (found == false) {
	var jQueryUrl = "//code.jquery.com/jquery-2.2.3.min.js";
	var script  = document.createElement('script');
	script.src = jQueryUrl;
	document.head.appendChild(script);
	result = 'Injected jQuery!';
}
else {
	result = 'jQuery present!';
}