// Declearing variables
// For containers
var heroContainer = document.getElementById("hero-container");
var whereContainer = document.getElementById("where-container");
var wishlistContainer = document.getElementById("wishlist-container");
var contactContainer = document.getElementById("contact-container");
var coronaContainer = document.getElementById("corona-container");

// For navbar
var navHome = document.getElementById("nav-home");
var navWhere = document.getElementById("nav-where");
var navWishlist = document.getElementById("nav-wishlist");
var navContact = document.getElementById("nav-contact");
var navCorona = document.getElementById("nav-corona");

// Function to change the color of the
window.addEventListener("scroll", () => {
  // Getting innerHeight of window to use as default when
  // changing color of nav
  var innerHeightOfWindow = window.innerHeight;
  var topYoffsett = window.pageYOffset;
  if (topYoffsett >= innerHeightOfWindow - 40) {
    navHome.classList.add("nav-not-selected");
    navHome.classList.remove("nav-selected");
    navWhere.classList.add("nav-selected");
    navWhere.classList.remove("nav-not-selected");

    changeColorNav(
      navWhere,
      "nav-dark-selected",
      "nav-dark-not-selected",
      "nav-selected",
      "nav-not-selected"
    );
  }
});

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
    } else {
      selectedId.classList.add(selectedClass);
      selectedId.classList.remove(removedClass2);
    }
  }
}
