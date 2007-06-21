// Trey Piepmeier's standard set of JavaScript tidbits.
// syntheticrabbit.com

// http://simon.incutio.com/archive/2004/05/26/addLoadEvent
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

// addClass is from Jeremy Keith's DOM Scripting book (1st edition, page 202)
function addClass (element, value) {
	if (!element.className) {
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName+= " ";
		newClassName+= value;
		element.className = newClassName;
	}
}

// If JavaScript is enabled, add a class of "hasJs" to the <body> element.
addLoadEvent(function(){addClass(document.body,"hasJs");})