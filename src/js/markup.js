// Bootstrap alert styles - http://getbootstrap.com/components/#alerts-examples
var successCss = "background: rgb(223, 240, 216); color: rgb(60, 118, 61);";
var infoCss = "background: rgb(217, 237, 247); color: rgb(49, 112, 143);";
var warningCss = "background: rgb(252, 248, 227); color: rgb(138, 109, 59);";
var dangerCss = "background: rgb(242, 222, 222); color: rgb(169, 68, 66);";

// TEST: Build ValidationUrls and present them to the user
console.log("%c Building Validation URLs...", infoCss);

// Build HTML Validator URL
var w3cHtmlValidatorUrl = "https://validator.w3.org/check?uri=" + window.location + "&doctype=Inline&group=0";
console.log("%c Click this link to see your HTML validation results: " + w3cHtmlValidatorUrl, warningCss);

// Build CSS Validator URL
var links = document.head.getElementsByTagName('link');
for (var i = 0; i < links.length; i++) {
	if (links[i].rel == "stylesheet") {
		var w3cCssValidatorUrl = "https://jigsaw.w3.org/css-validator/validator?uri=" + links[i].href + "&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en";
		console.log("%c Click this link to see your CSS validation results: " + w3cCssValidatorUrl, warningCss);
		
	}
}

// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);