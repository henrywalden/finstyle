                                
                            /*************************
jQuery Infinty Slider v.1.5 Extensions
@Website: http://http://www.epeo.it/infinityslider/
@Author: Epeo
@Copyright: 09/06/2014
************************/
autoCenter = function(thisItems) {
	thisItems.each(function() {
		var thisOnly = $(this);
		thisOnly.css({
			left: 'auto',
			right: 'auto',
			marginRight: 'auto',
			marginLeft: 'auto'
		});
		var thisParent = thisOnly.parent();
		var thisMargin = (thisParent.width()-thisOnly.outerWidth())/2;
		thisOnly.css({marginLeft: thisMargin});
	});
};

autoMiddle = function(thisItems) {
	thisItems.each(function() {
		var thisOnly = $(this);
		thisOnly.css({
			top: 'auto',
			bottom: 'auto',
			marginBottom: 'auto',
			marginTop: 'auto'
		});
		var thisParent = thisOnly.parent();
		var thisMargin = (thisParent.height()-thisOnly.outerHeight())/2;
		thisOnly.css({marginTop: thisMargin});
	});
};

fullScreen = function(thisItems) {
	thisItems.each(function(){
		$(this).css({
			width: $(window).width(),
			height: $(window).height()
		})
	});
};

//var efullscreen = $('.epeoFullscreen');
//fullScreen(fullscreen);
//$(window).bind('load resize',function(){
//	fullScreen(fullscreen);
//});
