/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'baicon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'font-icon-word': '&#xe900;',
		'font-icon-trend': '&#xe901;',
		'font-icon-star-half': '&#xe902;',
		'font-icon-star-full': '&#xe903;',
		'font-icon-star-empty': '&#xe904;',
		'font-icon-signal': '&#xe905;',
		'font-icon-search': '&#xe906;',
		'font-icon-scale': '&#xe907;',
		'font-icon-new': '&#xe908;',
		'font-icon-list': '&#xe909;',
		'font-icon-external-link': '&#xe90a;',
		'font-icon-exclamation-sign': '&#xe90b;',
		'font-icon-clock': '&#xe90c;',
		'font-icon-caret-right': '&#xe90d;',
		'font-icon-calculator': '&#xe90e;',
		'font-icon-briefcase': '&#xe90f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/font-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
