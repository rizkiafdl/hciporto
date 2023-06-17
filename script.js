let starts = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behinds = document.getElementById("mountains_behind");
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById("mountains_front");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1 + 'px';
    mountains_behinds.style.top = value * 0.5 + 'px';

     // Calculate rotation angle based on scroll position
    // let rotationAngle = value * 0.1;

    //  // Apply rotation to the moon object
    // mountains_behinds.style.transform = 'rotate(' + rotationAngle + 'deg)';
})