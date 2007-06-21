/*
	JSTarget function by Roger Johansson, www.456bereastreet.com
	http://www.456bereastreet.com/archive/200610/opening_new_windows_with_javascript_version_12/
*/
var JSTarget = {
	init: function(att,val,warning) {
		if (document.getElementById && document.createElement && document.appendChild) {
			var strAtt = ((typeof att == 'undefined') || (att == null)) ? 'class' : att;
			var strVal = ((typeof val == 'undefined') || (val == null)) ? 'non-html' : val;
			var strWarning = ((typeof warning == 'undefined') || (warning == null)) ? ' (opens in a new window)' : warning;
			var oWarning;
			var arrLinks = document.getElementsByTagName('a');
			var oLink;
			var oRegExp = new RegExp("(^|\\s)" + strVal + "(\\s|$)");
			for (var i = 0; i < arrLinks.length; i++) {
				oLink = arrLinks[i];
				if ((strAtt == 'class') && (oRegExp.test(oLink.className)) || (oRegExp.test(oLink.getAttribute(strAtt)))) {
					oWarning = document.createElement("em");
					oWarning.appendChild(document.createTextNode(strWarning));
					oLink.appendChild(oWarning);
					oLink.onclick = JSTarget.openWin;
				}
			}
			oWarning = null;
		}
	},
	openWin: function(e) {
		var event = (!e) ? window.event : e;
		if (event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) return true;
		else {
		    var oWin = window.open(this.getAttribute('href'), '_blank');
			if (oWin) {
				if (oWin.focus) oWin.focus();
				return false;
			}
			oWin = null;
			return true;
		}
	},
	/*
	addEvent function from http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html
	*/
	addEvent: function(obj, type, fn) {
		if (obj.addEventListener)
			obj.addEventListener(type, fn, false);
		else if (obj.attachEvent) {
			obj["e"+type+fn] = fn;
			obj[type+fn] = function() {obj["e"+type+fn]( window.event );}
			obj.attachEvent("on"+type, obj[type+fn]);
		}
	}
};
JSTarget.addEvent(window, 'load', function(){JSTarget.init("rel","external"," (external website, opens in a new window)");});