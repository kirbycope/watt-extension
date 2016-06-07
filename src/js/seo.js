// Bootstrap alert styles - http://getbootstrap.com/components/#alerts-examples
var successCss = "background: rgb(223, 240, 216); color: rgb(60, 118, 61);";
var infoCss = "background: rgb(217, 237, 247); color: rgb(49, 112, 143);";
var warningCss = "background: rgb(252, 248, 227); color: rgb(138, 109, 59);";
var dangerCss = "background: rgb(242, 222, 222); color: rgb(169, 68, 66);";

// Bing Guidelines - http://www.bing.com/webmaster/help/webmaster-guidelines-30fba23a
// Google Guidelines - http://static.googleusercontent.com/media/www.google.com/en/us/webmasters/docs/search-engine-optimization-starter-guide.pdf

// Bing Guideline: <title> tag
// Google Guideline: Indicate page titles by using title tags
console.log("%c Checking Bing and Google Guideline: <title> tag ...", infoCss);
var title = document.title;
if (title == "") {
	console.log("%c <title> tag not set.", dangerCss);
}
else {
	console.log("%c <title> tag is set: " + title, successCss);
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);

// Bing Guideline: <meta description> tag
// Google Guideline: Make use of the "description" meta tag
console.log("%c Checking Bing and Google Guideline: <meta description> tag ...", infoCss);
var metas = document.getElementsByTagName('meta');
for (i = 0; i < metas.length; i++) {
	if (metas[i].getAttribute("name") == "description") {
		if (metas[i].getAttribute("content") == "") {
			console.log("%c <meta description> needs content.", dangerCss);
		}
		else {
			console.log("%c <meta description> tag is set: " + metas[i].getAttribute("content"), successCss);
		}
	}
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);

// Bing Guideline: Only one <H1> tag per page
console.log("%c Checking Bing Guideline: Only one <H1> tag per page ...", infoCss);
var h1s = document.getElementsByTagName('h1');
if (h1s.length > 1) {
	console.log("%c More than one <H1> tag found on page.", dangerCss);
}
else if (h1s.length == 1) {
	console.log("%c Only one <h1> is set: " + h1s[0].textContent, successCss);
}
else {
	console.log("%c No <h1> element found on page", warningCss);
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);