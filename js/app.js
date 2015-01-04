$(function () {
  var currentImg = 1;
  var maxImages = 83;

  var swipeOptions = {
    triggerOnTouchEnd: true,
    swipeLeft: nextImage,
    swipeRight: previousImage,
    tap: tap
  };

  function tap(event) {
    if (event.x < $('.slideshow').offset().left + $('.slideshow').width() / 2) {
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
    $('.slideshow img:nth-child('+currentImg+')').show();
  }

  slideshow = $(".slideshow");
  slideshow.find('img:first').show();
  slideshow.swipe(swipeOptions);
});
