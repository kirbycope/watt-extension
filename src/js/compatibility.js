// Bootstrap alert styles - http://getbootstrap.com/components/#alerts-examples
var successCss = "background: rgb(223, 240, 216); color: rgb(60, 118, 61);";
var infoCss = "background: rgb(217, 237, 247); color: rgb(49, 112, 143);";
var warningCss = "background: rgb(252, 248, 227); color: rgb(138, 109, 59);";
var dangerCss = "background: rgb(242, 222, 222); color: rgb(169, 68, 66);";

// New HTML5 Features - http://www.w3schools.com/html/html5_new_elements.asp
// NOTE: A canIuse.com link is preferred over w3schools as it contains versions of browsers

// ------------------------------ New Semantic/Structural Elements ------------------------------ //
// Example Usage: <article ...
var semanticElementsDictionary = [
	 { key: "article", 			value: "http://www.w3schools.com/tags/tag_article.asp" }
	,{ key: "aside", 			value: "http://www.w3schools.com/tags/tag_aside.asp" }
	,{ key: "bdi", 				value: "http://www.w3schools.com/tags/tag_bdi.asp" }
	,{ key: "details", 			value: "http://www.w3schools.com/tags/tag_details.asp" }
	,{ key: "dialog", 			value: "http://www.w3schools.com/tags/tag_dialog.asp" }
	,{ key: "figcaption", 		value: "http://www.w3schools.com/tags/tag_figcaption.asp" }
	,{ key: "figure", 			value: "http://www.w3schools.com/tags/tag_figure.asp" }
	,{ key: "footer", 			value: "http://www.w3schools.com/tags/tag_footer.asp" }
	,{ key: "header", 			value: "http://www.w3schools.com/tags/tag_header.asp" }
	,{ key: "main", 			value: "http://www.w3schools.com/tags/tag_main.asp" }
	,{ key: "mark", 			value: "http://www.w3schools.com/tags/tag_mark.asp" }
	,{ key: "menuitem", 		value: "http://www.w3schools.com/tags/tag_menuitem.asp" }
	,{ key: "meter", 			value: "http://www.w3schools.com/tags/tag_meter.asp" }
	,{ key: "nav", 				value: "http://www.w3schools.com/tags/tag_nav.asp" }
	,{ key: "progress", 		value: "http://www.w3schools.com/tags/tag_progress.asp" }
	,{ key: "rp", 				value: "http://www.w3schools.com/tags/tag_rp.asp" }
	,{ key: "rt", 				value: "http://www.w3schools.com/tags/tag_rt.asp" }
	,{ key: "ruby", 			value: "http://www.w3schools.com/tags/tag_ruby.asp" }
	,{ key: "section", 			value: "http://www.w3schools.com/tags/tag_section.asp" }
	,{ key: "summary", 			value: "http://www.w3schools.com/tags/tag_summary.asp" }
	,{ key: "time", 			value: "http://www.w3schools.com/tags/tag_time.asp" }
];

// TEST: Check for instances of New Semantic/Structural Elements (tag names)
console.log("%c Checking for instances of New Semantic/Structural Elements ...", infoCss);
// For each "key" in the semanticElementsDictionary...
for (var i = 0; i < semanticElementsDictionary.length; i++) {
	// Get the current key
	var currentSemanticElement = semanticElementsDictionary[i].key;
	// Get all instance of elements whose tag name matches the current key
	var elements = document.getElementsByTagName(currentSemanticElement);
	// If any elements are found...
	if (elements.length > 0) {
		// For each element found...
		for (var idx = 0; idx < elements.length; idx++) {
			// Log an appropriate message to the DevTools Console
			console.log("%c HTML5 tag name [" + currentSemanticElement + "] found in " + elements[idx].outerHTML.substring(0, elements[idx].outerHTML.indexOf('>')+1), warningCss);
			console.log("	See " + semanticElementsDictionary[i].value + " for more detail.");
			// See also http://caniuse.com/#feat=html5semantic
		}
	}
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);

// ------------------------------ New Form Elements ------------------------------ //
// Example Usage: <datalist ...
var formElementsDictionary = [
	 { key: "datalist", 		value: "http://www.w3schools.com/tags/tag_datalist.asp" }
	,{ key: "keygen", 			value: "http://www.w3schools.com/tags/tag_keygen.asp" }
	,{ key: "output", 			value: "http://www.w3schools.com/tags/tag_output.asp" }
];

// TEST: Check for instances of New Form Elements
console.log("%c Checking for instances of New Form Elements ...", infoCss);
// For each "key" in the formElementsDictionary...
for (var i = 0; i < formElementsDictionary.length; i++) {
	// Get the current key
	var currentFormElement = formElementsDictionary[i].key;
	// Get all instances of elements whose tag name matches the current key
	var elements = document.getElementsByTagName(currentFormElement);
	// If any elements are found...
	if (elements.length > 0) {
		// For each element found...
		for (var idx = 0; idx < elements.length; idx++) {
			// Log an appropriate message to the DevTools Console
			console.log("%c HTML5 form element [" + currentFormElement + "] found in " + elements[idx].outerHTML.substring(0, elements[idx].outerHTML.indexOf('>')+1), warningCss);
			console.log("	See " + formElementsDictionary[i].value + " for more detail.");
		}
	}
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);

// ------------------------------ New Input Types ------------------------------ //
// Example Usage: <input type="color" ...
var inputTypesDictionary = [
	 { key: "color", 			value: "http://caniuse.com/#feat=input-color" }
	,{ key: "date", 			value: "http://caniuse.com/#feat=input-datetime" }
	,{ key: "datetime", 		value: "http://caniuse.com/#feat=input-datetime" }
	,{ key: "datetime-local", 	value: "http://caniuse.com/#feat=input-datetime" }
	,{ key: "email", 			value: "http://caniuse.com/#feat=input-email-tel-url" }
	,{ key: "month", 			value: "http://caniuse.com/#feat=input-datetime" }
	,{ key: "number", 			value: "http://caniuse.com/#feat=input-number" }
	,{ key: "range", 			value: "http://caniuse.com/#feat=input-range" }
	,{ key: "search", 			value: "http://www.w3schools.com/html/html_form_input_types.asp" }
	,{ key: "tel", 				value: "http://caniuse.com/#feat=input-email-tel-url" }
	,{ key: "time", 			value: "http://www.w3schools.com/html/html_form_input_types.asp" }
	,{ key: "url", 				value: "http://caniuse.com/#feat=input-email-tel-url" }
	,{ key: "week", 			value: "http://caniuse.com/#feat=input-datetime" }
];

// TEST: Check for instances of New Input Types
console.log("%c Checking for instances of New Input Types ...", infoCss);
// Get all <input>s
var allInputs = document.getElementsByTagName("input");
// If any <input>s are found...
if (allInputs.length > 0) {
	// For each <input> found...
	for (var i = 0; i < allInputs.length; i++) {
		// Get the current input's type attribute
		var foundInputType = allInputs[i].type;
		// For each "key" in the inputTypesDictionary...
		for (var idx = 0; idx < inputTypesDictionary.length; idx++) {
			// Get the current key
			var currentInputType = inputTypesDictionary[idx].key;
			// If the found input's type matches the current key...
			if (foundInputType == currentInputType) {
				// Log an appropriate message to the DevTools Console
				console.log("%c HTML5 input type [" + currentInputType + "] found in " + allInputs[i].outerHTML.substring(0, allInputs[i].outerHTML.indexOf('>')+1), warningCss);
				console.log("	See " + inputTypesDictionary[idx].value + " for more detail.");
				// See Also: http://www.w3schools.com/html/html_form_input_types.asp
			}
		}
	}
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);	

// ------------------------------ New Input Attributes ------------------------------ //
// Example Usage: <input autocomplete="on" autofocus ...
var inputAttributesDictionary = [
	 { key: "autocomplete", 	value: "http://www.w3schools.com/html/html_form_attributes.asp" }
	,{ key: "autofocus", 		value: "http://caniuse.com/#feat=autofocus" }
	,{ key: "form", 			value: "http://caniuse.com/#feat=form-attribute" }
	,{ key: "formaction", 		value: "http://www.w3schools.com/html/html_form_attributes.asp" }
	,{ key: "formenctype", 		value: "http://www.w3schools.com/html/html_form_attributes.asp" }
	,{ key: "formmethod", 		value: "http://www.w3schools.com/html/html_form_attributes.asp" }
	,{ key: "formnovalidate", 	value: "http://www.w3schools.com/html/html_form_attributes.asp" }
	,{ key: "formtarget", 		value: "http://www.w3schools.com/html/html_form_attributes.asp" }
	,{ key: "height", 			value: "http://www.w3schools.com/html/html_form_attributes.asp" }
	,{ key: "width", 			value: "http://www.w3schools.com/html/html_form_attributes.asp" }
	,{ key: "list", 			value: "http://www.w3schools.com/html/html_form_attributes.asp" }
	,{ key: "min", 				value: "http://www.w3schools.com/html/html_form_attributes.asp" }
	,{ key: "max", 				value: "http://www.w3schools.com/html/html_form_attributes.asp" }
	,{ key: "multiple", 		value: "http://caniuse.com/#feat=input-file-multiple" }
	,{ key: "pattern", 			value: "http://caniuse.com/#feat=input-pattern" }
	,{ key: "placeholder", 		value: "http://caniuse.com/#feat=input-placeholder" }
	,{ key: "required", 		value: "http://caniuse.com/#feat=form-validation" }
	,{ key: "step", 			value: "http://www.w3schools.com/html/html_form_attributes.asp" }
];

// TEST: Check for instances of New Input Attributes
console.log("%c Checking for instances of New Input Attributes ...", infoCss);
// Get all <input>s
var allInputs = document.getElementsByTagName('input');
// If any <input>s are found...
if (allInputs.length > 0) {
	// For each <input> found...
	for (var i = 0; i < allInputs.length; i++) {
		// Get the current input
		var currentInput = allInputs[i];
		// For each "key" in the inputAttributesDictionary...
		for (var idx = 0; idx < inputAttributesDictionary.length; idx++) {
			// Get the current key
			var currentInputAttribute = inputAttributesDictionary[idx].key;
			// Try to get the currentInputAttribute of the currentInput
			var getAttributeResult = currentInput.getAttribute(currentInputAttribute);
			// If the current input has an attribute of the current key's type...
			if (getAttributeResult != null) {
				console.log("%c HTML5 input attribute [" + currentInputAttribute + "] found in " + currentInput.outerHTML.substring(0, currentInput.outerHTML.indexOf('>')+1), warningCss);
				console.log("	See " + inputAttributesDictionary[idx].value + " for more detail.");
				// See Also: http://www.w3schools.com/html/html_form_attributes.asp
			}
		}
	}
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);

// ------------------------------ HTML5 Graphics ------------------------------ //
// Example Usage: <canvas ...
var html5GraphicsDictionary = [
	 { key: "canvas", 			value: "http://caniuse.com/#feat=canvas" }
	,{ key: "svg", 				value: "http://caniuse.com/#feat=svg" }
];

// TEST: Check for instances of HTML5 Graphics
console.log("%c Checking for instances of HTML5 graphics ...", infoCss);
// For each "key" in the html5GraphicsDictionary...
for (var i = 0; i < html5GraphicsDictionary.length; i++) {
	// Get the current key
	var currentGraphicKeyword = html5GraphicsDictionary[i].key;
	// Get all instances of elements whose tag name matches the current key
	var elements = document.getElementsByTagName(currentGraphicKeyword);
	// If any elements are found...
	if (elements.length > 0) {
		// For each element found...
		for (var idx = 0; idx < elements.length; idx++) {
			// Log an appropriate message to the DevTools Console
			console.log("%c HTML5 graphic [" + currentGraphicKeyword + "] found in " + elements[idx].outerHTML.substring(0, elements[idx].outerHTML.indexOf('>')+1), warningCss);
			console.log("	See " + html5GraphicsDictionary[i].value + " for more detail.");
		}
	}
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);

// ------------------------------ New Media Elements ------------------------------ //
// Example Usage: <audio ...
var mediaElementsDictionary = [
	 { key: "audio", 			value: "http://caniuse.com/#feat=audio" }
	,{ key: "embed", 			value: "http://www.w3schools.com/tags/tag_embed.asp" }
	,{ key: "source", 			value: "http://www.w3schools.com/tags/tag_source.asp" }
	,{ key: "track", 			value: "http://www.w3schools.com/tags/tag_track.asp" }
	,{ key: "video", 			value: "http://caniuse.com/#feat=video" }
];

// TEST: Check for instances of New Media Elements
console.log("%c Checking for instances of New Media Elements ...", infoCss);
// For each "key" in the mediaElementsDictionary...
for (var i = 0; i < mediaElementsDictionary.length; i++) {
	// Get the current key
	var currentMediaElement = mediaElementsDictionary[i].key;
	// Get all instances of elements whose tag name matches the current key
	var elements = document.getElementsByTagName(currentMediaElement);
	// If any elements are found...
	if (elements.length > 0) {
		// For each element found...
		for (var idx = 0; idx < elements.length; idx++) {
			// Log an appropriate message to the DevTools Console
			console.log("%c HTML5 graphic [" + currentMediaElement + "] found in " + elements[idx].outerHTML.substring(0, elements[idx].outerHTML.indexOf('>')+1), warningCss);
			console.log("	See " + mediaElementsDictionary[i].value + " for more detail.");
		}
	}
}
// Inform the user that the operation is complete
console.log("%c Complete!", infoCss);