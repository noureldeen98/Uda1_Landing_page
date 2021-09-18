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

var scrollPosit  =document.documentElement.scrollTop; // to get the of section from top



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

         theLi.textContent= nameOfSection; // appending the name of section to list of items in the navbars

         theLi.innerHTML = `<a class="menu__link" href='#${targetSection}'>${nameOfSection}</a>`;  // Scroll to anchor ID using scrollTO event

         listOfItems.appendChild(theLi);
     
         
         
        
    }

   
    
}buildTheNav();




// Add class 'active' to section when near top of viewport

/*
var scrollPosit  =document.documentElement.scrollTop; // to get the of section from top
 // The name of section which will appear in the navBar

for(section of listOfSections){
    nameOfSection = section.getAttribute("data-nav");
    section.addEventListner("scroll",function(){
        if(scrollPosit>=section.offsetTop && scrollPosit<section.offsetTop+offsetHeight){
            console.log(nameOfSection);
        }
    })
}
*/

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
        }
        else{
            section.classList.remove("your-active-class");
        }
    });
},false);


// function to creat the active classes 
/*function creatActiveSection(){
  for (sec of listOfSections){
        if(sectionBounds(sec)){
           if (sec.classList.contains("your-active-class")){
            sec.classList.remove("your-active-class");
                     
           }else{
            sec.classList.add("your-active-class");
           }
           
        }
    }
  
}  
document.addEventListener("scroll",creatActiveSection);


/*function creatActiveSection(){
    
    for(sec of listOfSections){
        let scrollPosi = sec.getBoundingClientRect();
        if(scrollPosi.top >= 0 && scrollPosi.top < window.innerHeight){
            if (!sec.classList.contains("your-active-class")){
                sec.classList.add("your-active-class");          
               }else{
                sec.classList.remove("your-active-class");
               }
        }
    }
     
}document.addEventListener("scroll",creatActiveSection);*/







/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



  