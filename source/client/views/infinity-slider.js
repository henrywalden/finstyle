  infinitySlider(
      infinitySliderId = 'slide01',
      infinitySliderCommandsClass = 'iS-Commands',
      infinitySliderPreviousButtonClass = 'iS-Previous',
      infinitySliderNextButtonClass = 'iS-Next',
      infinitySliderDotsClass = 'iS-Dots',
      infinitySliderDotClass = 'iS-Dot',
      infinitySliderDotActiveClass = 'iS-Dotactive',
      infinitySliderPlayButtonClass = 'iS-Play',
      infinitySliderPlayButtonActiveClass = 'iS-Playactive',
      infinitySliderStopButtonClass = 'iS-Stop',
      infinitySliderStopButtonActiveClass = 'iS-Stopactive',
      infinitySliderLoopIndicator = 'iS-Loopline',
      infinitySliderContentClass = 'iS-Content',
      infinitySliderItemsClass = 'iS-Items',
      infinitySliderItemClass = 'iS-Item',
      infinitySliderAutoStartLoop = true,
      infinitySliderKeyboardNavigation = true,
      infinitySliderTouchNavigation = 'desktop',
      infinitySliderStarterSlide = 1
  );

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

  setTimeout(function () {
    $('.iS-Stop').click();
  }, 91000);


