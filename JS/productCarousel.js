/* MOBILE SLIDESHOW --------------*/

var slideIndex = 1;
showMobileSlides(slideIndex);

function plusMobileSlides(x) {
    showMobileSlides(slideIndex += x);
}

function currentMobileSlide(x) {
    showMobileSlides(slideIndex = x);
}

function showMobileSlides(x) {
  const mobileSlides = document.getElementsByClassName("mobile-slide");
  const mobileDots = document.getElementsByClassName("mobileDot");

  if (x > mobileSlides.length) {
      slideIndex = 1
    };

  if (x < 1) {
      slideIndex = mobileSlides.length;
    };

  for (var i = 0; i < mobileSlides.length; i++) {
      mobileSlides[i].style.display = "none";  
  };

  for (i = 0; i < mobileDots.length; i++) {
    mobileDots[i].className = mobileDots[i].className.replace(" active", "");
  };

  
  mobileSlides[slideIndex-1].style.display = "block";  
  mobileDots[slideIndex-1].className += " active";
}


/* TABLET SLIDESHOW --------------*/

var slideIndex = 1;
showTabletSlides(slideIndex);

function plusTabletSlides(x) {
    showTabletSlides(slideIndex += x);
}

function currentTabletSlide(x) {
    showTabletSlides(slideIndex = x);
}

function showTabletSlides(x) {
  const tabletSlides = document.getElementsByClassName("tablet-slide");
  const tabletDots = document.getElementsByClassName("tabletDot");

  if (x > tabletSlides.length) {
      slideIndex = 1
    };

  if (x < 1) {
      slideIndex = tabletSlides.length;
    };

  for (var i = 0; i < tabletSlides.length; i++) {
    tabletSlides[i].style.display = "none";  
  };

  for (i = 0; i < tabletDots.length; i++) {
    tabletDots[i].className = tabletDots[i].className.replace(" active", "");
  };

  
  tabletSlides[slideIndex-1].style.display = "block";  
  tabletDots[slideIndex-1].className += " active";
}

/* DESKTOP SLIDESHOW --------------*/

var slideIndex = 1;
showDesktopSlides(slideIndex);

function plusDesktopSlides(x) {
    showDesktopSlides(slideIndex += x);
}

function currentDesktopSlide(x) {
    showDesktopSlides(slideIndex = x);
}

function showDesktopSlides(x) {
  const desktopSlides = document.getElementsByClassName("desktop-slide");
  const desktopDots = document.getElementsByClassName("desktopDot");

  if (x > desktopSlides.length) {
      slideIndex = 1
    };

  if (x < 1) {
      slideIndex = desktopSlides.length;
    };

  for (var i = 0; i < desktopSlides.length; i++) {
    desktopSlides[i].style.display = "none";  
  };

  for (i = 0; i < desktopDots.length; i++) {
    desktopDots[i].className = desktopDots[i].className.replace(" active", "");
  };

  
  desktopSlides[slideIndex-1].style.display = "block";  
  desktopDots[slideIndex-1].className += " active";
}

