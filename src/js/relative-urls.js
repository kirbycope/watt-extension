// Bootstrap alert styles - http://getbootstrap.com/components/#alerts-examples
var successCss = "background: rgb(223, 240, 216); color: rgb(60, 118, 61);";
var infoCss = "background: rgb(217, 237, 247); color: rgb(49, 112, 143);";
var warningCss = "background: rgb(252, 248, 227); color: rgb(138, 109, 59);";
var dangerCss = "background: rgb(242, 222, 222); color: rgb(169, 68, 66);";

// TEST: Verify each <a> is relative
var dangerCount = 0;
console.log("%c Checking each <a> is relative.", infoCss);
var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
	var href = anchors[i].getAttribute('href');
	if ( href.startsWith('/') || ( href.startsWith('#') ) ) {
		console.log("%c The URL, " + href + ", is relative", successCss);
	}
	else if ( href.startsWith('tel') || ( href.startsWith('mailto') ) ){
		console.log("%c Skipping: " + href, warningCss);
	}
	else {
		console.log("%c The URL, " + href + ", is not relative.", dangerCss);
		dangerCount++;
	}
}

if (dangerCount > 0){
	console.log("%c Some hrefs were found to be non-relative. Please ensure that internal links start with '/' and external links do not start with 'http:' or 'https:'. Instead use '//'. Example - href='//www.google.com/'. ", infoCss);
}