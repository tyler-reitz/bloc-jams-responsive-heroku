var animatePoints=function(){"use strict";var t=function(){$(this).css({opacity:1,transform:"scaleX(1) translateY(0)"})};$.each($(".point"),t)};$(window).load(function(){"use strict";$(window).height()>950&&animatePoints();var t=$(".selling-points").offset().top-$(window).height()+200;$(window).scroll(function(i){$(window).scrollTop()>=t&&animatePoints()})});