var successCss="background: rgb(223, 240, 216); color: rgb(60, 118, 61);";var infoCss="background: rgb(217, 237, 247); color: rgb(49, 112, 143);";var warningCss="background: rgb(252, 248, 227); color: rgb(138, 109, 59);";var dangerCss="background: rgb(242, 222, 222); color: rgb(169, 68, 66);";console.log("%c Checking the contrast ratio of all (body) element's color versus its background-color ...",infoCss);var elements=document.body.getElementsByTagName('*');for(var i=0;i<elements.length;i++){if(elements[i].textContent.length>0)
{var color=getComputedStyle(elements[i]).getPropertyValue("color");var colorR=getR(color);var colorG=getG(color);var colorB=getB(color);var colorLuminance=calculateLuminance(colorR,colorG,colorB);var backgroundColor=getComputedStyle(elements[i]).getPropertyValue("background-color");var backgroundColorR=getR(backgroundColor);var backgroundColorG=getG(backgroundColor);var backgroundColorB=getB(backgroundColor);var backgroundColorLuminance=calculateLuminance(backgroundColorR,backgroundColorG,backgroundColorB);var comparisonResult=compareLuminance(colorLuminance,backgroundColorLuminance);if(comparisonResult<4.5){console.log("%c Bad contrast for "+elements[i].outerHTML,dangerCss);console.log("%c color: "+color+". background-color: "+backgroundColor+".",warningCss)}}}
console.log("%c Complete!",infoCss);function getR(style){var startIndex=0;if(style.startsWith("rgb(")){startIndex=4;}
else if(style.startsWith("rgba(")){startIndex=5;}
var stopIndex=style.indexOf(',');var colorR=style.substring(startIndex,stopIndex);return colorR;}
function getG(style){var trimmedStyle=style.substring(style.indexOf(' ')+1);var startIndex=0;var stopIndex=trimmedStyle.indexOf(',');var colorG=trimmedStyle.substring(startIndex,stopIndex);return colorG;}
function getB(style){var trimmedStyle=style.substring(style.indexOf(' ')+1);trimmedStyle=trimmedStyle.substring(trimmedStyle.indexOf(', ')+2);var startIndex=0;var stopIndex=0;if(trimmedStyle.includes(',')){stopIndex=trimmedStyle.indexOf(',');}
else{stopIndex=trimmedStyle.indexOf(')');}
var colorB=trimmedStyle.substring(startIndex,stopIndex);return colorB;}
function setWeights(value){var sValue=value/255;var sRGB=0;if(sValue<=0.03928){sRGB=sValue/12.92;}
else{sRGB=((sValue+0.055)/1.055)^2.4;}
return sRGB;}
function calculateLuminance(redValue,greenValue,blueValue){var R=setWeights(redValue);var G=setWeights(greenValue);var B=setWeights(blueValue);var L=(0.2126*R)+(0.7152*G)+(0.0722*B);return L;}
function compareLuminance(L1,L2){var result=0;if(L1>L2){result=(L1+0.05)/(L2+0.05);}
else{result=(L2+0.05)/(L1+0.05);}
return result;}