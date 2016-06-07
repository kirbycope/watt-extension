// Bootstrap alert styles - http://getbootstrap.com/components/#alerts-examples
var successCss = "background: rgb(223, 240, 216); color: rgb(60, 118, 61);";
var infoCss = "background: rgb(217, 237, 247); color: rgb(49, 112, 143);";
var warningCss = "background: rgb(252, 248, 227); color: rgb(138, 109, 59);";
var dangerCss = "background: rgb(242, 222, 222); color: rgb(169, 68, 66);";

// http://guidelines.usability.gov/

// WCAG 2.0 - G18 http://www.w3.org/TR/WCAG20-TECHS/G18.html
// TEST: Ensure a 4.5:1 contrast ratio exists between text and it's background
console.log("%c Checking the contrast ratio of all (body) element's color versus its background-color ...", infoCss);
// Get all elements in the <body>
var elements = document.body.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
	// Ensure the element has text content, otherwise skip it
	if (elements[i].textContent.length > 0)
	{
		// Get the element's text color
		var color = getComputedStyle(elements[i]).getPropertyValue("color");
		// Parse the RGB (8-bit) values
		var colorR = getR(color);
		var colorG = getG(color);
		var colorB = getB(color);
		// Get the luminance of the color
		var colorLuminance = calculateLuminance(colorR, colorG, colorB);
		
		// Get the element's background color
		var backgroundColor = getComputedStyle(elements[i]).getPropertyValue("background-color");
		// Get the RGB (8-bit) values
		var backgroundColorR = getR(backgroundColor);
		var backgroundColorG = getG(backgroundColor);
		var backgroundColorB = getB(backgroundColor);
		// Get the luminance
		var backgroundColorLuminance = calculateLuminance(backgroundColorR, backgroundColorG, backgroundColorB);
		
		// Compare luminance of the background color
		var comparisonResult = compareLuminance(colorLuminance, backgroundColorLuminance);
		// Check that the contrast ratio is equal to or greater than 4.5:1
		if (comparisonResult < 4.5) {
			console.log("%c Bad contrast for " + elements[i].outerHTML, dangerCss);
			console.log("%c color: " + color + ". background-color: " + backgroundColor + ".", warningCss)
		}
	}
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);

function getR(style) {
	var startIndex = 0;
		if (style.startsWith("rgb(")) { startIndex = 4; }
		else if (style.startsWith("rgba(")) { startIndex = 5; }
	var stopIndex = style.indexOf(',');
	var colorR = style.substring(startIndex, stopIndex);
	return colorR;
}

function getG(style) {
	// Trim the string so that the first space and anything before it are removed
	var trimmedStyle = style.substring(style.indexOf(' ')+1);
	var startIndex = 0;
	var stopIndex = trimmedStyle.indexOf(',');
	var colorG = trimmedStyle.substring(startIndex, stopIndex);
	return colorG;
}

function getB(style) {
	// Trim the string so that the first space and anything before it are removed
	var trimmedStyle = style.substring(style.indexOf(' ')+1);
	// Trim the string so that the first comma and anything before it are removed
	trimmedStyle = trimmedStyle.substring(trimmedStyle.indexOf(', ')+2);
	var startIndex = 0;
	var stopIndex = 0;
		if (trimmedStyle.includes(',')) { stopIndex = trimmedStyle.indexOf(','); }
		else { stopIndex = trimmedStyle.indexOf(')'); }
	var colorB = trimmedStyle.substring(startIndex, stopIndex);
	return colorB;
}

function setWeights(value) {
	// Convert from 8-bit value (scales from 0 to 255) to sRGB value (scales from 0 to 1)
	var sValue = value / 255;
	// Set weights according to W3C G18 formula
	var sRGB = 0;
		if (sValue <= 0.03928) { sRGB = sValue / 12.92; }
		else { sRGB = ((sValue + 0.055) / 1.055) ^ 2.4; }
	return sRGB;
}

function calculateLuminance(redValue, greenValue, blueValue) {
	var R = setWeights(redValue);
	var G = setWeights(greenValue);
	var B = setWeights(blueValue);
	var L =  (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
	return L;
}

function compareLuminance(L1, L2) {
	var result = 0;
	if (L1 > L2){
		result = (L1 + 0.05) / (L2 + 0.05);
	}
	else {
		result = (L2 + 0.05) / (L1 + 0.05);
	}
	return result;
}