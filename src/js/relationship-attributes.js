// Bootstrap alert styles - http://getbootstrap.com/components/#alerts-examples
var successCss = "background: rgb(223, 240, 216); color: rgb(60, 118, 61);";
var infoCss = "background: rgb(217, 237, 247); color: rgb(49, 112, 143);";
var warningCss = "background: rgb(252, 248, 227); color: rgb(138, 109, 59);";
var dangerCss = "background: rgb(242, 222, 222); color: rgb(169, 68, 66);";

// TEST: Verify each <a> has the attribute rel="noopener noreferrer" for links using target="_blank"
var dangerCount = 0;
console.log("%c Checking each <a> with target=\"_blank\" has a proper rel attribute", infoCss);
var anchors = document.getElementsByTagName('a');
for (var i = 0; i < anchors.length; i++) {
	var href = anchors[i].getAttribute('href');
	var target = anchors[i].getAttribute('target');
	if (target == "_blank") {
		var rel = anchors[i].getAttribute('rel');
		if ( (rel == "noopener") || (rel == "noopener noreferrer") ) {
			console.log("%c The URL, " + href + ", has a rel attribute with value: " + rel, successCss);
		}
		else if ( rel == null){
		console.log("%c The URL, " + href + ", does not have a rel attribute", dangerCss);
		dangerCount++;
		}
		else {
			console.log("%c The URL, " + href + ", does not have a proper rel attribute", dangerCss);
			dangerCount++;
		}
	}
}