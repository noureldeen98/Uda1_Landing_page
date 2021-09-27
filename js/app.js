/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

const listOfItems = document.getElementById('navbar__list'); // The listOfItems is the menu which will contain the items.
const listOfSections = document.querySelectorAll('section'); //  the listOfSections will contain the array of sections

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

// building the navbar anchors
function buildTheNav() {
    for (section of listOfSections) {
        theLi = document.createElement('li'); // Creating the li tag to be appended to Ul tag 
        nameOfSection = section.getAttribute("data-nav"); // The name of section which will appear in the navBar
        targetSection = section.getAttribute("id");
        theLi.classList.add(targetSection);
        theAnchors = document.createElement('a'); // creating anchor tags to added to the li tag
        theAnchors.textContent = nameOfSection;
        theAnchors.classList.add("menu__link");
        theAnchors.setAttribute("href", "#" + targetSection);
        theAnchors.setAttribute("data-link", targetSection);
        theLi.style.cssText = "margin:7px"
        theLi.appendChild(theAnchors);
        listOfItems.appendChild(theLi);
    }
}
// ./building the navbar anchors

// using scrollIntoView instead of href in anchor tags
function scrollIntoSectionSmooth() {
    let listOfLinks = document.querySelectorAll(".menu__link");
    // console.log(listOfLinks);
    listOfLinks.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault(); // which is used to prevent the role of href and allow the scrolling by JS
            let theDataLink = document.getElementById((item.getAttribute("data-link")));
            // Navigate into section smoothly
            theDataLink.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            });
        })
    })
}
// ./using scrollIntoView instead of href in anchor tags
// smooth navigate to link

// Build the navigation
buildTheNav();

// scrollToSection 
scrollIntoSectionSmooth()


// Add class 'active' to section when near top of viewport
// function to check the position of the section from all directions in html page
function sectionBounds(theElement) {
    let scrollPosit = theElement.getBoundingClientRect();
    let ratioOfPointOfView = window.innerHeight * 24 / 100;
    return (
        scrollPosit.top < ratioOfPointOfView && scrollPosit.bottom > ratioOfPointOfView
    );
};
// ./function to check the position of the section from all directions in html page

// the Event listner here adding the active class or not according to which section will appear in viewport
const linksOfSections = document.querySelectorAll(".menu__link");
window.addEventListener("scroll", function () {

    // looping to get each section individual to add or remove active class 
    listOfSections.forEach((section, index) => {
        if (sectionBounds(section)) {
            section.classList.add("your-active-class");
            linksOfSections[index].classList.add("active");
        } else {
            section.classList.remove("your-active-class");
            linksOfSections[index].classList.remove("active");
        }
    });
}, false);


/**
 * End Main Functions
 * Begin Events
 * 
 */
