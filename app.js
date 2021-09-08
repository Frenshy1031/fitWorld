// set footer Date().getFullYear()
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // fixed below 
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    // console.log(linksHeight);

    if(containerHeight === 0){
        // dynamically toggled the links
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }

});


//            fixed navbar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    // if scrollHeight is greather than navHeight
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
    }else {
        navbar.classList.remove("fixed-nav");
    }

// setup another if scrollHeight > than any #
if(scrollHeight > 500) {
    topLink.classList.add("show-link");
}else {
    topLink.classList.remove("show-link");
}

});
//Smooth Scroll
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener("click", function(e) {
        // prevent default behavior
       e.preventDefault();
        // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
        // console.log(id);
    const element = document.getElementById(id);
    // number of pixels from the top of the closest positioned parent element
// Calculate the heights
const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    console.log(position);
    
    if(!fixedNav){
        position: position - navHeight;
    }
    // setup for the navbar(top)
    if(navHeight > 82) {
        position = position + containerHeight;
    }

    window.scrollTo({
        left: 0, 
        top:position,
    });
    // close 
    linksContainer.style.height = 0;
  });
});


