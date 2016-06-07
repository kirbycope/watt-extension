// Bootstrap alert styles - http://getbootstrap.com/components/#alerts-examples
var successCss = "background: rgb(223, 240, 216); color: rgb(60, 118, 61);";
var infoCss = "background: rgb(217, 237, 247); color: rgb(49, 112, 143);";
var warningCss = "background: rgb(252, 248, 227); color: rgb(138, 109, 59);";
var dangerCss = "background: rgb(242, 222, 222); color: rgb(169, 68, 66);";

// TEST: Build ValidationUrls and present them to the user
console.log("%c Building PageSpeed Insights URL...", infoCss);

// Get API Key from settings
chrome.storage.sync.get(
	"pagespeedKey"
	,
	function(obj) {
		var apiKey = obj.pagespeedKey;
		if ((typeof apiKey != "undefined") && (apiKey.length > 0)) {
			// Build PageSpeed Insights URL
			var pageSpeedInsightsUrl = "https://www.googleapis.com/pagespeedonline/v1/runPagespeed?url=" + window.location + "&key=" + apiKey;
			console.log("%c Click this link to see your PageSpeed Insights results: " + pageSpeedInsightsUrl, warningCss);

			// Inform the user that the operation is complete
			console.log("%c Complete!", infoCss);
		}
		else {
			// Inform the user that no key was found
			console.log("%c No API key was found! Set one in the extension options.", dangerCss);
		}
	}
);