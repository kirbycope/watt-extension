// Bootstrap alert styles - http://getbootstrap.com/components/#alerts-examples
var successCss = "background: rgb(223, 240, 216); color: rgb(60, 118, 61);";
var infoCss = "background: rgb(217, 237, 247); color: rgb(49, 112, 143);";
var warningCss = "background: rgb(252, 248, 227); color: rgb(138, 109, 59);";
var dangerCss = "background: rgb(242, 222, 222); color: rgb(169, 68, 66);";

// http://www.netreach.com/Section-508-WCAG/93/#.VW9hes9VhBc
// 508: http://www.hhs.gov/web/508/accessiblefiles/checklisthtml.html

// TEST: Verify that all <a>s have a title='' attribute and that it has some value
console.log("%c Verify that all <a>s have a title attribute with some value", infoCss);
var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
	if (anchors[i].title == "") {
		console.log("%c Anchor missing title attribute: " + anchors[i].outerHTML, dangerCss);
	}
	else {
		console.log("%c Anchor has title attribute: " + anchors[i].outerHTML, successCss);
	}
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);

// TEST: Verify that all <image>s have an alt='' attribute and that it has some value
console.log("%c Verify that all <img>s have an alt attribute with some value", infoCss);
var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
	if (images[i].alt == "") {
		console.log("%c Image missing alt attribute: " + images[i].outerHTML, dangerCss);
	}
	else {
		console.log("%c Image has alt attribute: " + images[i].outerHTML, successCss);
	}
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);