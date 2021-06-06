var pageIndex = 1;

/* MOBILE SLIDESHOW --------------*/

showMobileSlides(pageIndex);

function nextPageMobile(x) {
    showMobileSlides(pageIndex += x);
}

function currentPageMobile(x) {
    showMobileSlides(pageIndex = x);
}

function showMobileSlides(x) {
  const mobileSlides = document.getElementsByClassName("mobile-slide");
  const mobilePage = document.getElementsByClassName("mobile-page-marker");

  if (x > mobileSlides.length) {
    pageIndex = 1
    };

  if (x < 1) {
    pageIndex = mobileSlides.length;
    };

  for (var i = 0; i < mobileSlides.length; i++) {
      mobileSlides[i].style.display = "none";  
  };

  for (i = 0; i < mobilePage.length; i++) {
    mobilePage[i].className = mobilePage[i].className.replace(" active", "");
  };

  
  mobileSlides[pageIndex-1].style.display = "block";  
  mobilePage[pageIndex-1].className += " active";
}


/* TABLET SLIDESHOW --------------*/

showTabletSlides(pageIndex);

function nextPageTablet(x) {
    showTabletSlides(pageIndex += x);
}

function currentPageTablet(x) {
    showTabletSlides(pageIndex = x);
}

function showTabletSlides(x) {
  const tabletSlides = document.getElementsByClassName("tablet-slide");
  const tabletPage = document.getElementsByClassName("tablet-page-marker");

  if (x > tabletSlides.length) {
    pageIndex = 1
    };

  if (x < 1) {
    pageIndex = tabletSlides.length;
    };

  for (var i = 0; i < tabletSlides.length; i++) {
    tabletSlides[i].style.display = "none";  
  };

  for (i = 0; i < tabletPage.length; i++) {
    tabletPage[i].className = tabletPage[i].className.replace(" active", "");
  };

  
  tabletSlides[pageIndex-1].style.display = "block";  
  tabletPage[pageIndex-1].className += " active";
}

/* DESKTOP SLIDESHOW --------------*/

var pageIndex = 1;
showDesktopSlides(pageIndex);

function nextPageDesktop(x) {
    showDesktopSlides(pageIndex += x);
}

function currentPageDesktop(x) {
    showDesktopSlides(pageIndex = x);
}

function showDesktopSlides(x) {
  const desktopSlides = document.getElementsByClassName("desktop-slide");
  const desktopPage = document.getElementsByClassName("desktop-page-marker");

  if (x > desktopSlides.length) {
    pageIndex = 1
    };

  if (x < 1) {
    pageIndex = desktopSlides.length;
    };

  for (var i = 0; i < desktopSlides.length; i++) {
    desktopSlides[i].style.display = "none";  
  };

  for (i = 0; i < desktopPage.length; i++) {
    desktopPage[i].className = desktopPage[i].className.replace(" active", "");
  };

  
  desktopSlides[pageIndex-1].style.display = "block";  
  desktopPage[pageIndex-1].className += " active";
}

