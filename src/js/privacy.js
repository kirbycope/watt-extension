// Bootstrap alert styles - http://getbootstrap.com/components/#alerts-examples
var successCss = "background: rgb(223, 240, 216); color: rgb(60, 118, 61);";
var infoCss = "background: rgb(217, 237, 247); color: rgb(49, 112, 143);";
var warningCss = "background: rgb(252, 248, 227); color: rgb(138, 109, 59);";
var dangerCss = "background: rgb(242, 222, 222); color: rgb(169, 68, 66);";

// http://en.wikipedia.org/wiki/Privacy_policy#US

// TEST: Check for a reference to /*privacy* on the page
console.log("%c Checking for a reference to a /*policy* page...", infoCss);
var found = false;
var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
	var anchor = anchors[i].href.toLowerCase();
	if (anchor.includes('privacy')) {
		console.log('Found privacy link [' + i + ']: ' + anchors[i].outerHTML);
		found = true;
	}
}
if (found == false) {
	console.log("%c Could not find a link with an href containing the word 'privacy'.", dangerCss);
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);