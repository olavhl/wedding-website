// Declearing variables for containers
var heroContainer = document.getElementById("hero-container");
var whereContainer = document.getElementById("where-container");
var wishlistContainer = document.getElementById("wishlist-container");
var hotelContainer = document.getElementById("hotel-container");
var contactContainer = document.getElementById("contact-container");
var coronaContainer = document.getElementById("corona-container");

// Variables for navbar
var navHome = document.getElementById("nav-home");
var navWhere = document.getElementById("nav-where");
var navWishlist = document.getElementById("nav-wishlist");
var navHotel = document.getElementById("nav-hotel");
var navContact = document.getElementById("nav-contact");
var navCorona = document.getElementById("nav-corona");

// Variable to add sticky nav
var stickyNav = document.getElementById("sticky-nav");

// Getting the position of stickyNav
var sticky = stickyNav.offsetTop;

// Function to change the color of the
window.addEventListener("scroll", () => {
  // Getting innerHeight of window to use as default when
  // changing color of nav
  var innerHeightOfWindow = window.innerHeight;
  var secondInnerHight = innerHeight * 2;
  var thirdInnerHight = innerHeight * 3;
  var fourthInnerHight = innerHeight * 4;
  var fifthInnerHight = innerHeight * 5;
  var topYoffsett = window.pageYOffset;

  // Getting width of screen to prevent sticky nav to
  // show if on phone
  var offsetWidth = window.innerWidth;

  if (topYoffsett > sticky - 40) {
    if (offsetWidth > 450){
      stickyNav.classList.add("sticky");
      stickyNav.style.visibility = "visible";
      stickyNav.style.position = "fixed";
    }
  } else {
    stickyNav.classList.remove("sticky");
    stickyNav.style.visibility = "hidden";
    stickyNav.style.position = "absolute";
  }


  // Do this if on a desktop
  if (offsetWidth > 450){
    if (topYoffsett >= fifthInnerHight - 40){
      changeColorNav(
        navCorona,
        "nav-dark-selected",
        "nav-dark-not-selected",
        "nav-selected",
        "nav-not-selected"
      );
      changeNavColorGreen();
    } else if (topYoffsett >= fourthInnerHight - 40) {
      changeColorNav(
        navContact,
        "nav-selected",
        "nav-not-selected",
        "nav-dark-selected",
        "nav-dark-not-selected"
      );
      changeNavColorBlack();
    } else if (topYoffsett >= thirdInnerHight - 40) {
      changeColorNav(
        navHotel,
        "nav-dark-selected",
        "nav-dark-not-selected",
        "nav-selected",
        "nav-not-selected"
      );
      changeNavColorGreen();
    } else if (topYoffsett >= secondInnerHight - 40) {
      changeColorNav(
        navWishlist,
        "nav-selected",
        "nav-not-selected",
        "nav-dark-selected",
        "nav-dark-not-selected"
      );
      changeNavColorBlack();
    } else if (topYoffsett >= innerHeightOfWindow - 40) {
      changeColorNav(
        navWhere,
        "nav-dark-selected",
        "nav-dark-not-selected",
        "nav-selected",
        "nav-not-selected"
      );
      changeNavColorGreen();
    } else if (topYoffsett < innerHeightOfWindow - 40) {
      changeColorNav(
        navHome,
        "nav-selected",
        "nav-not-selected",
        "nav-dark-selected",
        "nav-dark-not-selected"
      );
    }
  } else {
    if (topYoffsett >= fifthInnerHight - 40){
      changeColorNavPhone(navCorona);
    } else if (topYoffsett >= fourthInnerHight - 40) {
      changeColorNavPhone(navContact);
    } else if (topYoffsett >= thirdInnerHight - 40) {
      changeColorNavPhone(navHotel);
    } else if (topYoffsett >= secondInnerHight - 40) {
      changeColorNavPhone(navWishlist);
    } else if (topYoffsett >= innerHeightOfWindow - 40) {
      changeColorNavPhone(navWhere);
    } else {
      changeColorNavPhone(navHome);
    }
  }
});

// Function for changing color and size for selected tab in nav
// for desktop and phone
function changeColorNav(
  selectedId,
  selectedClass,
  notSelectedClass,
  removedClass1,
  removedClass2
) {
  // Fetching all list items
  var liElements = document
    .getElementById("nav-container")
    .querySelectorAll("li");

  for (var i = 0; i < liElements.length; i++) {
    if (liElements[i] !== selectedId) {
      liElements[i].classList.remove(removedClass2);
      liElements[i].classList.remove(removedClass1);
      liElements[i].classList.add(notSelectedClass);

    } else {
      selectedId.classList.add(selectedClass);
      selectedId.classList.remove(removedClass2);
    }
  }
}

// Function for changing color of nav for PHONE
function changeColorNavPhone (selectedId) {
  var liElements = document
    .getElementById("nav-container")
    .querySelectorAll("li");

    for (var i = 0; i < liElements.length; i++) {
      if (liElements[i] !== selectedId) {
        liElements[i].classList.add("nav-not-selected");
        liElements[i].classList.remove("nav-selected");
      } else {
        selectedId.classList.add("nav-selected");
      }
    }
}

function changeNavColorGreen() {
  stickyNav.style.opacity = "0.9";
  stickyNav.style.background = "linear-gradient(90deg, rgba(189, 198, 183, 1) 35%, rgba(151, 157, 134, 1) 100%)"
}

function changeNavColorBlack() {
  stickyNav.style.opacity = "0.6";
  stickyNav.style.background = "rgb(0, 0, 0)";
}

// Function for toggeling between classes to show menu
const navSlide = () => {
  const burgerMenu = document.querySelector(".hamburger-container");
  const nav = document.querySelector(".nav-container");
  const navLinks = document.querySelectorAll(".nav-links a");

  burgerMenu.addEventListener('click', () => {

    // Toggle nav
    if (nav.classList.contains === 'nav-active') {
      nav.classList.remove('nav-active');
    } else {
      nav.classList.toggle('nav-active');
    }

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) { 
        link.style.animation = '';
      } else {
        link.style.animation = `navLinksFade .5s ease forwards ${index / 8 + 0.2}s`;
      }
    });

  });
}

const removeSlide = () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const nav = document.querySelector(".nav-container")

  // Find a way to close element onclick
  nav.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach(link => {
      if (link.style.animation) { 
        link.style.animation = '';
      }
    });
});
}

navSlide();
removeSlide();