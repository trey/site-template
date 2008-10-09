// http://dev.jquery.com/ticket/1092
jQuery.fn.toggleText = function(a, b) {
	return this.each(function() {
		jQuery(this).text(jQuery(this).text() == a ? b : a);
	});
};

// http://www.learningjquery.com/2008/02/simple-effects-plugins
jQuery.fn.fadeToggle = function(speed, easing, callback) {
	return this.animate({opacity: 'toggle'}, speed, easing, callback); 
};
