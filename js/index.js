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

  
  if (topYoffsett >= fifthInnerHight - 40){
    changeColorNav(
      navCorona,
      "nav-dark-selected",
      "nav-dark-not-selected",
      "nav-selected",
      "nav-not-selected"
    )

  } else if (topYoffsett >= fourthInnerHight - 40) {
    changeColorNav(
      navContact,
      "nav-selected",
      "nav-not-selected",
      "nav-dark-selected",
      "nav-dark-not-selected"
    );

  } else if (topYoffsett >= thirdInnerHight - 40) {
    changeColorNav(
      navHotel,
      "nav-dark-selected",
      "nav-dark-not-selected",
      "nav-selected",
      "nav-not-selected"
    )

  } else if (topYoffsett >= secondInnerHight - 40) {
    changeColorNav(
      navWishlist,
      "nav-selected",
      "nav-not-selected",
      "nav-dark-selected",
      "nav-dark-not-selected"
    );

  } else if (topYoffsett >= innerHeightOfWindow - 40) {
    changeColorNav(
      navWhere,
      "nav-dark-selected",
      "nav-dark-not-selected",
      "nav-selected",
      "nav-not-selected"
    );

  } else if (topYoffsett < innerHeightOfWindow - 40) {
    changeColorNav(
      navHome,
      "nav-selected",
      "nav-not-selected",
      "nav-dark-selected",
      "nav-dark-not-selected"
    );
  }
});

// Function for changing color and size for selected tab in nav
function changeColorNav(
  selectedId,
  selectedClass,
  notSelectedClass,
  removedClass1,
  removedClass2
) {
  var liElements = document
    .getElementById("nav-container")
    .querySelectorAll("li");

  for (var i = 0; i < liElements.length; i++) {
    if (liElements[i] !== selectedId) {
      liElements[i].classList.remove(removedClass2);
      liElements[i].classList.remove(removedClass1);
      liElements[i].classList.add(notSelectedClass);
      liElements[i].style.border = "0";
    } else {
      selectedId.classList.add(selectedClass);
      selectedId.classList.remove(removedClass2);
    }
  }
}
