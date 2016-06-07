var successCss="background: rgb(223, 240, 216); color: rgb(60, 118, 61);";var infoCss="background: rgb(217, 237, 247); color: rgb(49, 112, 143);";var warningCss="background: rgb(252, 248, 227); color: rgb(138, 109, 59);";var dangerCss="background: rgb(242, 222, 222); color: rgb(169, 68, 66);";var semanticElementsDictionary=[{key:"article",value:"http://www.w3schools.com/tags/tag_article.asp"},{key:"aside",value:"http://www.w3schools.com/tags/tag_aside.asp"},{key:"bdi",value:"http://www.w3schools.com/tags/tag_bdi.asp"},{key:"details",value:"http://www.w3schools.com/tags/tag_details.asp"},{key:"dialog",value:"http://www.w3schools.com/tags/tag_dialog.asp"},{key:"figcaption",value:"http://www.w3schools.com/tags/tag_figcaption.asp"},{key:"figure",value:"http://www.w3schools.com/tags/tag_figure.asp"},{key:"footer",value:"http://www.w3schools.com/tags/tag_footer.asp"},{key:"header",value:"http://www.w3schools.com/tags/tag_header.asp"},{key:"main",value:"http://www.w3schools.com/tags/tag_main.asp"},{key:"mark",value:"http://www.w3schools.com/tags/tag_mark.asp"},{key:"menuitem",value:"http://www.w3schools.com/tags/tag_menuitem.asp"},{key:"meter",value:"http://www.w3schools.com/tags/tag_meter.asp"},{key:"nav",value:"http://www.w3schools.com/tags/tag_nav.asp"},{key:"progress",value:"http://www.w3schools.com/tags/tag_progress.asp"},{key:"rp",value:"http://www.w3schools.com/tags/tag_rp.asp"},{key:"rt",value:"http://www.w3schools.com/tags/tag_rt.asp"},{key:"ruby",value:"http://www.w3schools.com/tags/tag_ruby.asp"},{key:"section",value:"http://www.w3schools.com/tags/tag_section.asp"},{key:"summary",value:"http://www.w3schools.com/tags/tag_summary.asp"},{key:"time",value:"http://www.w3schools.com/tags/tag_time.asp"}];console.log("%c Checking for instances of New Semantic/Structural Elements ...",infoCss);for(var i=0;i<semanticElementsDictionary.length;i++){var currentSemanticElement=semanticElementsDictionary[i].key;var elements=document.getElementsByTagName(currentSemanticElement);if(elements.length>0){for(var idx=0;idx<elements.length;idx++){console.log("%c HTML5 tag name ["+currentSemanticElement+"] found in "+elements[idx].outerHTML.substring(0,elements[idx].outerHTML.indexOf('>')+1),warningCss);console.log(" See "+semanticElementsDictionary[i].value+" for more detail.");}}}
console.log("%c Complete!",infoCss);var formElementsDictionary=[{key:"datalist",value:"http://www.w3schools.com/tags/tag_datalist.asp"},{key:"keygen",value:"http://www.w3schools.com/tags/tag_keygen.asp"},{key:"output",value:"http://www.w3schools.com/tags/tag_output.asp"}];console.log("%c Checking for instances of New Form Elements ...",infoCss);for(var i=0;i<formElementsDictionary.length;i++){var currentFormElement=formElementsDictionary[i].key;var elements=document.getElementsByTagName(currentFormElement);if(elements.length>0){for(var idx=0;idx<elements.length;idx++){console.log("%c HTML5 form element ["+currentFormElement+"] found in "+elements[idx].outerHTML.substring(0,elements[idx].outerHTML.indexOf('>')+1),warningCss);console.log(" See "+formElementsDictionary[i].value+" for more detail.");}}}
console.log("%c Complete!",infoCss);var inputTypesDictionary=[{key:"color",value:"http://caniuse.com/#feat=input-color"},{key:"date",value:"http://caniuse.com/#feat=input-datetime"},{key:"datetime",value:"http://caniuse.com/#feat=input-datetime"},{key:"datetime-local",value:"http://caniuse.com/#feat=input-datetime"},{key:"email",value:"http://caniuse.com/#feat=input-email-tel-url"},{key:"month",value:"http://caniuse.com/#feat=input-datetime"},{key:"number",value:"http://caniuse.com/#feat=input-number"},{key:"range",value:"http://caniuse.com/#feat=input-range"},{key:"search",value:"http://www.w3schools.com/html/html_form_input_types.asp"},{key:"tel",value:"http://caniuse.com/#feat=input-email-tel-url"},{key:"time",value:"http://www.w3schools.com/html/html_form_input_types.asp"},{key:"url",value:"http://caniuse.com/#feat=input-email-tel-url"},{key:"week",value:"http://caniuse.com/#feat=input-datetime"}];console.log("%c Checking for instances of New Input Types ...",infoCss);var allInputs=document.getElementsByTagName("input");if(allInputs.length>0){for(var i=0;i<allInputs.length;i++){var foundInputType=allInputs[i].type;for(var idx=0;idx<inputTypesDictionary.length;idx++){var currentInputType=inputTypesDictionary[idx].key;if(foundInputType==currentInputType){console.log("%c HTML5 input type ["+currentInputType+"] found in "+allInputs[i].outerHTML.substring(0,allInputs[i].outerHTML.indexOf('>')+1),warningCss);console.log(" See "+inputTypesDictionary[idx].value+" for more detail.");}}}}
console.log("%c Complete!",infoCss);var inputAttributesDictionary=[{key:"autocomplete",value:"http://www.w3schools.com/html/html_form_attributes.asp"},{key:"autofocus",value:"http://caniuse.com/#feat=autofocus"},{key:"form",value:"http://caniuse.com/#feat=form-attribute"},{key:"formaction",value:"http://www.w3schools.com/html/html_form_attributes.asp"},{key:"formenctype",value:"http://www.w3schools.com/html/html_form_attributes.asp"},{key:"formmethod",value:"http://www.w3schools.com/html/html_form_attributes.asp"},{key:"formnovalidate",value:"http://www.w3schools.com/html/html_form_attributes.asp"},{key:"formtarget",value:"http://www.w3schools.com/html/html_form_attributes.asp"},{key:"height",value:"http://www.w3schools.com/html/html_form_attributes.asp"},{key:"width",value:"http://www.w3schools.com/html/html_form_attributes.asp"},{key:"list",value:"http://www.w3schools.com/html/html_form_attributes.asp"},{key:"min",value:"http://www.w3schools.com/html/html_form_attributes.asp"},{key:"max",value:"http://www.w3schools.com/html/html_form_attributes.asp"},{key:"multiple",value:"http://caniuse.com/#feat=input-file-multiple"},{key:"pattern",value:"http://caniuse.com/#feat=input-pattern"},{key:"placeholder",value:"http://caniuse.com/#feat=input-placeholder"},{key:"required",value:"http://caniuse.com/#feat=form-validation"},{key:"step",value:"http://www.w3schools.com/html/html_form_attributes.asp"}];console.log("%c Checking for instances of New Input Attributes ...",infoCss);var allInputs=document.getElementsByTagName('input');if(allInputs.length>0){for(var i=0;i<allInputs.length;i++){var currentInput=allInputs[i];for(var idx=0;idx<inputAttributesDictionary.length;idx++){var currentInputAttribute=inputAttributesDictionary[idx].key;var getAttributeResult=currentInput.getAttribute(currentInputAttribute);if(getAttributeResult!=null){console.log("%c HTML5 input attribute ["+currentInputAttribute+"] found in "+currentInput.outerHTML.substring(0,currentInput.outerHTML.indexOf('>')+1),warningCss);console.log(" See "+inputAttributesDictionary[idx].value+" for more detail.");}}}}
console.log("%c Complete!",infoCss);var html5GraphicsDictionary=[{key:"canvas",value:"http://caniuse.com/#feat=canvas"},{key:"svg",value:"http://caniuse.com/#feat=svg"}];console.log("%c Checking for instances of HTML5 graphics ...",infoCss);for(var i=0;i<html5GraphicsDictionary.length;i++){var currentGraphicKeyword=html5GraphicsDictionary[i].key;var elements=document.getElementsByTagName(currentGraphicKeyword);if(elements.length>0){for(var idx=0;idx<elements.length;idx++){console.log("%c HTML5 graphic ["+currentGraphicKeyword+"] found in "+elements[idx].outerHTML.substring(0,elements[idx].outerHTML.indexOf('>')+1),warningCss);console.log(" See "+html5GraphicsDictionary[i].value+" for more detail.");}}}
console.log("%c Complete!",infoCss);var mediaElementsDictionary=[{key:"audio",value:"http://caniuse.com/#feat=audio"},{key:"embed",value:"http://www.w3schools.com/tags/tag_embed.asp"},{key:"source",value:"http://www.w3schools.com/tags/tag_source.asp"},{key:"track",value:"http://www.w3schools.com/tags/tag_track.asp"},{key:"video",value:"http://caniuse.com/#feat=video"}];console.log("%c Checking for instances of New Media Elements ...",infoCss);for(var i=0;i<mediaElementsDictionary.length;i++){var currentMediaElement=mediaElementsDictionary[i].key;var elements=document.getElementsByTagName(currentMediaElement);if(elements.length>0){for(var idx=0;idx<elements.length;idx++){console.log("%c HTML5 graphic ["+currentMediaElement+"] found in "+elements[idx].outerHTML.substring(0,elements[idx].outerHTML.indexOf('>')+1),warningCss);console.log(" See "+mediaElementsDictionary[i].value+" for more detail.");}}}
console.log("%c Complete!",infoCss);