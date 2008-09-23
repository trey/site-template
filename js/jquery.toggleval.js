/* -------------------------------------------------- *
 * ToggleVal 2.0
 * Updated: 9/15/08
 * -------------------------------------------------- *
 * Author: Aaron Kuzemchak
 * URL: http://aaronkuzemchak.com/
 * Copyright: 2008 Aaron Kuzemchak
 * License: MIT License
** -------------------------------------------------- */

(function($) {
	$.fn.toggleVal = function(theOptions) {
		theOptions = $.extend({
			focusClass: "tv-focused", // class during focus
			changedClass: "tv-changed", // class after focus
			populateFrom: "default", // choose from: default, label, or alt
			removeLabels: false // remove labels associated with the fields
		}, theOptions);
		
		return this.each(function() {
			// define our variables
			var defText = "";
			
			// let's populate the text, if not default
			switch(theOptions.populateFrom) {
				case "alt":
					defText = $(this).attr("alt");
					$(this).val(defText);
					break
				case "label":
					defText = $("label[for='" + $(this).attr("id") + "']").text();
					$(this).val(defText);
					break
				default:
					defText = $(this).val();
			}
			
			// let's give this field a special class, so we can identify it later
			$(this).addClass("toggleval");
			
			// now that fields are populated, let's remove the labels if applicable
			if(theOptions.removeLabels == true) { $("label[for='" + $(this).attr("id") + "']").remove(); }
			
			// on to the good stuff... the focus and blur actions
			$(this).focus(function() {
				if($(this).val() == defText) { $(this).val(""); }
				
				// add the focusClass, remove changedClass
				$(this).addClass(theOptions.focusClass).removeClass(theOptions.changedClass);
			}).blur(function() {
				if($(this).val() == "") { $(this).val(defText); }
				
				// remove focusClass, add changedClass if, well, different
				$(this).removeClass(theOptions.focusClass);
				if($(this).val() != defText) { $(this).addClass(theOptions.changedClass); }
					else { $(this).removeClass(theOptions.changedClass); }
			});
		});
	};
})(jQuery);