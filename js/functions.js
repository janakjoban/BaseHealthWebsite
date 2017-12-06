// headBar transition
$(window).on("scroll", function () {
    var headBar = document.getElementById("headBar");
    if ($(this).scrollTop() > 100) {
        headBar.className = "nav-head scroll-nav";
    }
    else {
        headBar.className = "nav-head";
    }
});

// mobileNav show/hide
function mobileNav() {
    var  mobileHead = document.getElementById("mobileHead");
    var body = document.getElementById("pageBody");

    if (mobileHead.className == "mobile-nav mobile-nav-hide") {
      mobileHead.className = "mobile-nav mobile-nav-show";
      body.className = "modal-lock";
    } else {
      mobileHead.className = "mobile-nav mobile-nav-hide";
      body.className = "";
    }

}



// smooth scroll to anchor (jquery)
$(function() {
  $('a[href*="#to"]:not([href="#to"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// // // // // // // browser detection // // // // // // // // // // //

// Get IE or Edge browser version
detectIE(function(result){
  var svgMediumAnim = $('.svg-static__medium');

  if(result !== false) {
    svgMediumAnim.removeClass();
    svgMediumAnim.addClass('svg-static__medium-ie');
  }

  var svgLargeAnim = $('.svg-static__large');

  if(result !== false) {
    svgLargeAnim.removeClass();
    svgLargeAnim.addClass('svg-static__large-ie');
  }
});




/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE(callback) {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return callback(parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10));
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return callback(parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10));
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return callback(parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10));
  }

  // other browser
  return callback(false);
}

// // // // // // // svg animate in scroll view // // // // // // // // // // //

// Scroll the window, check if element if view
// If it is then add a class
// Lots of ways to enhance and elaborate on this script based on individual needs

detectIE(function(result){
  if (result === false) {
    // Variables
    var wholeWindow = $(window);
    var svgLarge = $('.svg-static__large');
    var svgMedium = $('.svg-static__medium');

    wholeWindow.scroll(function() {

      if (svgLarge.visible(true)) {
        svgLarge.addClass('svg-animate__large');
      }

      if (svgMedium.visible(true)) {
        svgMedium.addClass('svg-animate__medium');
      }

    });
  }
});

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
