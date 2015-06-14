$(function () {
  var currentImg = 1;
  var slideName = $('.slideshow').data('slide-name');
  var slideStart = parseInt($('.slideshow').data('slide-start'));
  var slideEnd = parseInt($('.slideshow').data('slide-end'));
  var maxImages = slideEnd - slideStart + 1;

  var slideIndex = slideStart;
  $('.slideshow').append('<img src="/assets/'+slideName+'/slide_'+slideIndex+'.jpg" />');
  for (slideIndex = slideStart + 1; slideIndex <= slideEnd; slideIndex++) {
    $('.slideshow').append('<img src="/img/loading.gif" class="lazy" data-src="/assets/'+slideName+'/slide_'+slideIndex+'.jpg" />');
  }

  var swipeOptions = {
    triggerOnTouchEnd: true,
    swipeLeft: nextImage,
    swipeRight: previousImage,
    tap: tap
  };

  function tap(event) {
    if (event.pageX < $(window).width() / 2) {
      previousImage();
    } else {
      nextImage();
    }
  }

  function previousImage() {
    currentImg = Math.max(currentImg - 1, 1);
    $('.slideshow img').hide();
    $('.slideshow img:nth-child('+currentImg+')').show();
  }

  function nextImage() {
    currentImg = Math.min(currentImg + 1, maxImages);
    $('.slideshow img').hide();
    var $img = $('.slideshow img:nth-child('+currentImg+')')
    if ($img.hasClass('lazy')) {
      $img.attr('src', $img.data('src')).removeClass('lazy');
    }
    $img.show();
  }

  slideshow = $(".slideshow");
  slideshow.find('img:first').show();
  slideshow.swipe(swipeOptions);
});
