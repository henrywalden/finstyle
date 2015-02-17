Template.sliderTest.rendered = function() {
    infinitySlider();

    if ($(window).width() > 1024) {
        $('.numberRoll').html('0');
        $('.numberRoll').click(function () {
            var current = $(this);
            if (current.hasClass('numberRoll')) {
                numberRoll($(this), 1000, 100, 0);
                $(this).removeClass('numberRoll');
            }
        });
    }

    $(window).load(function () {
        setTimeout(function () {
            $('.iS-Stop').click();
        }, 91000);
    });

    //Meteor.setTimeout(function(){
        var fullscreen = $('.epeoFullscreen');
        fullScreen(fullscreen);
        $(window).bind('load resize',function(){
            fullScreen(fullscreen);
        });
    //}, 3000);

};



