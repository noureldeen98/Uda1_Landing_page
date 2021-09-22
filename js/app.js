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
const listOfSections= document.querySelectorAll('section'); //  the listOfSections will contain the array of sections




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







function buildTheNav(){
    for(section of listOfSections){

         theLi =document.createElement('li'); // Creating the li tag to be appended to Ul tag 
         nameOfSection = section.getAttribute("data-nav"); // The name of section which will appear in the navBar
         targetSection =section.getAttribute("id");
         //theLi.textContent= `${nameOfSection}`; // appending the name of section to list of items in the navbars

         theLi.classList.add(targetSection );

         theAnchors = document.createElement('a');// creating anchor tags to added to the li tag
         theAnchors.textContent=nameOfSection;
         theAnchors.classList.add("menu__link");
         theAnchors.setAttribute("href","#"+targetSection);
         //theAnchors.setAttribute("style","pointer-events: none");
         theAnchors.setAttribute("data-link",targetSection);
         console.log(theAnchors);



         theLi.appendChild(theAnchors);





        // Scroll to anchor ID using scrollTO event
         
         //theLi.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
         
          listOfItems.appendChild(theLi);  
    
}
}buildTheNav();



// using scrollIntoView instead of href in anchor tags
let listOfLinks =document.querySelectorAll(".menu__link");
console.log(listOfLinks);
listOfLinks.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        e.preventDefault();// which is used to prevent the role of href and allow the scrolling by JS
      let theDataLink=document.getElementById((item.getAttribute("data-link")));
           
      theDataLink.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
})

})








// Add class 'active' to section when near top of viewport



// Add class 'active' to section when near top of viewport
// function to check the position of the section from all directions in html page
 function sectionBounds(theElement){
        let scrollPosi = theElement.getBoundingClientRect();
        return (
            scrollPosi.top>=0 &&
            scrollPosi.left >=0 &&
            scrollPosi.bottom<= (window.innerHeight || document.documentElement.clientHeight) &&
            scrollPosi.right<= (window.innerWidth || document.documentElement.clientWidth) 
        );
        
};
// the Event listner here adding the active class or not according to which section will appear in viewport
var findSection = listOfSections;
window.addEventListener("scroll",function(event){
    findSection.forEach(section=>{
        if(sectionBounds(section)){
            section.classList.add("your-active-class");
            section.style.cssText="background-color:purple";
        }
        else{
            section.classList.remove("your-active-class");
            section.style.cssText="background-color:none;";
        }
    });
},false);






/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



  
