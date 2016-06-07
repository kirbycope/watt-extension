// NOTE: Due to Chrome Extension security, in-line scripts are not executed on popup.html so the onClick() needs to be set in this JS file

// Set copyright date
document.getElementById('copyright-date').innerHTML = '© ' + new Date().getFullYear() + ' Timothy Cope';

// Devices - Gear
document.getElementById('setCustomBreakpoint').onclick = function(){
	var customWidthDiv = document.getElementById('custom-resize-div');
	var className = customWidthDiv.getAttribute('class');
	if (className == 'custom-width-hidden') {
		customWidthDiv.setAttribute('class', 'custom-width-shown');
	}
	else {
		customWidthDiv.setAttribute('class', 'custom-width-hidden');
	}
}

// Custom Resize <div>
document.getElementById('custom-resize-div').onclick = function(){
	var customWidth = Number(document.getElementById('customWidthField').value);
	if (customWidth){
		ResizeWindow(customWidth);
	}
}

// Command - Clear All Caches
document.getElementById('commandClearCache').onclick = function(){
	this.innerHTML = 'Clearing...'
	ClearCache(this);
};

// Command - Clear All Cookies
document.getElementById('commandClearCookies').onclick = function(){
	this.innerHTML = 'Clearing...'
	ClearAllCookies(this);
};

// Clear Cookies for Current Domain
document.getElementById('commandClearCurrentDomainCookies').onclick = function(){
	this.innerHTML = 'Clearing...'
	ClearCurrentDomainCookies(this);
};

// Command - Resize Window Mobile
document.getElementById('commandResizeWindowMobile').onclick = function(){
	ResizeWindow(320);
};

// Command - Resize Window Mobile Wide
document.getElementById('commandResizeWindowMobileWide').onclick = function(){
	ResizeWindow(480);
};

// Command - Resize Window Tablet
document.getElementById('commandResizeWindowTablet').onclick = function(){
	ResizeWindow(640);
};

// Command - Resize Window Desktop
document.getElementById('commandResizeWindowDesktop').onclick = function(){
	ResizeWindow(960);
};

// Command - Resize Window Desktop Wide
document.getElementById('commandResizeWindowDesktopWide').onclick = function(){
	ResizeWindow(1280);
};

// Debug - Inject jQuery
var debugInjectJquery = document.getElementById('debugInjectJquery');
debugInjectJquery.onclick = function(){
	debugInjectJquery.innerHTML = 'Injecting...'
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript(
		null,
		{ file: "js/inject-jquery.js" },
		function(result) { debugInjectJquery.innerHTML = result; }
	);
};

// Debug - PageSpeed Insights debugPageSpeedInsights
document.getElementById('debugPageSpeedInsights').onclick = function(){
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript({
		file: "js/pagespeed-insights.js"
	});
};

// Standard - Accessibility
document.getElementById('standardAccessibility').onclick = function(){
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript({
		file: "js/accessibility.js"
	});
};

// Standard - Broken Links
document.getElementById('standardBrokenLinks').onclick = function(){
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript({
		file: "js/broken-links.js"
	});
};;

// Standard - Console
document.getElementById('standardConsoleLog').onclick = function (){
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript({
		file: "js/console.js"
	});
}

// Standard - Compatibility
document.getElementById('standardCompatibility').onclick = function(){
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript({
		file: "js/compatibility.js"
	});
};;

// Standard - Search Engine Optimization
document.getElementById('standardSEO').onclick = function(){
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript({
		file: "js/seo.js"
	});
};;

// Standard - Privacy
document.getElementById('standardPrivacy').onclick = function(){
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript({
		file: "js/privacy.js"
	});
};;

// Standard - Markup
document.getElementById('standardMarkup').onclick = function(){
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript({
		file: "js/markup.js"
	});
};

// Standard - Relationship Attribute(s)
document.getElementById('standardRelationshipAttributes').onclick = function(){
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript({
		file: "js/relationship-attributes.js"
	});
}

// Standard - Relative URLs
document.getElementById('standardRelativeUrls').onclick = function(){
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript({
		file: "js/relative-urls.js"
	});
}

// Standard - Usability
document.getElementById('standardUsability').onclick = function(){
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript({
		file: "js/usability.js"
	});
};

// NOTE: The function(s) below run in the context of the extension, allowing access to the Chrome API

// Clear All Caches
function ClearCache(caller){
	// https://developer.chrome.com/extensions/browsingData
	chrome.browsingData.remove(
		{ "since" : 0 },
		{
			"appcache": true, 						// Clears the websites' appcache data.
			"cache": true, 							// Clears the browser's cache.
			//"cookies": true, 						// Clears the browser's cookies
			//"downloads": true,					// Clears the browser's list of downloaded files (not the downloaded files themselves).
			//"fileSystems": true,					// Clears the websites' file system data.
			//"formData": true,						// Clears the browser's stored form data (autofill).
			//"history": true,						// Clears the browser's history.
			//"indexedDB": true,					// Clears the websites' IndexedDB data.
			"localStorage": true,					// Clears the websites' local storage data.
			//"serverBoundCertificates": true,		// Clears the browser's server-bound certificates
			//"pluginData": true,					// Clears the plugins'  data.
			//"passwords": true,					// Clears the browser's stored passwords.
			//"webSQL": true						// Clears the websites' WebSQL data.
		},
		function(){ caller.innerHTML = 'Cleared!'; }
	);
};

// Clear All Cookies
function ClearAllCookies(caller){
	// https://developer.chrome.com/extensions/browsingData
	chrome.browsingData.remove(
		{ "since" : 0 },
		{
			//"appcache": true, 					// Clears the websites' appcache data.
			//"cache": true, 						// Clears the browser's cache.
			"cookies": true, 						// Clears the browser's cookies
			//"downloads": true,					// Clears the browser's list of downloaded files (not the downloaded files themselves).
			//"fileSystems": true,					// Clears the websites' file system data.
			//"formData": true,						// Clears the browser's stored form data (autofill).
			//"history": true,						// Clears the browser's history.
			//"indexedDB": true,					// Clears the websites' IndexedDB data.
			//"localStorage": true,					// Clears the websites' local storage data.
			"serverBoundCertificates": true,		// Clears the browser's server-bound certificates
			//"pluginData": true,					// Clears the plugins'  data.
			//"passwords": true,					// Clears the browser's stored passwords.
			//"webSQL": true						// Clears the websites' WebSQL data.
		},
		function(){ caller.innerHTML = 'Cleared!'; }
	);
};

function ClearCurrentDomainCookies(caller){
	// https://developer.chrome.com/extensions/tabs#method-executeScript
	chrome.tabs.executeScript(
		{ code: "document.domain" },
		function(result) {
			// console.log("[domain0] " + result[0]); // DEBUGGING
			// http://stackoverflow.com/a/6695705
			// https://developer.chrome.com/extensions/cookies#method-getAll
			chrome.cookies.getAll(
				{ domain: result[0] },
				function(cookies) {
					// console.log("[CookieCount] " + cookies.length); // DEBUGGING
					for( var i = 0; i < cookies.length; i++) {
						//console.log("[cookies" + i + "] " + cookies[i].name); // DEBUGGING
						// Get URL from cookie
						var cookieUrl = extrapolateUrlFromCookie(cookies[i]);
						// DEBUGGING
						console.log("[cookieUrl] " + cookieUrl);
						chrome.cookies.remove({url: cookieUrl + cookies[i].path, name: cookies[i].name});
					}
					// Update button in extension popup
					caller.innerHTML = 'Cleared!';
				}
			);
		}
	);
};

// Resize Window
function ResizeWindow(widthPixels){
	// http://stackoverflow.com/a/19008406
	chrome.windows.getLastFocused(
		{populate: false},
		function(currentWindow){ chrome.windows.update(currentWindow.id, { width: widthPixels }); }
	);
};

// http://stackoverflow.com/a/5472683
function extrapolateUrlFromCookie(cookie) {
    var prefix = cookie.secure ? "https://" : "http://";
    if (cookie.domain.charAt(0) == ".")
        prefix += "www";

    return prefix + cookie.domain + cookie.path;
}