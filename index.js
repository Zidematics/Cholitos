const image = document.querySelector('.hero-alien');
const container = document.querySelector('.hero-alien');

container.addEventListener('mousemove', (e) => {
    // Get the mouse position relative to the container
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    // Get the center of the image container
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;

    // Calculate the direction of the movement
    const deltaX = (mouseX - centerX) / centerX;
    const deltaY = (mouseY - centerY) / centerY;

    // Apply the movement to the image, making it move away from the cursor
    const distance = 30; // Max movement distance in px
    image.style.transform = `translate(${deltaX * distance}px, ${deltaY * distance}px)`;
});

container.addEventListener('mouseleave', () => {
    // Reset the image position when the mouse leaves the container
    image.style.transform = 'translate(0, 0)';
});

// Onscroll effect

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 350) {
    document.getElementById("myImg").className = "slideUp";
  }
}


//pop-up effect for phases

const popupBg = document.querySelector('main .blur-bg');
const phasePopup1 = document.querySelector("main .blur-bg .phase-popup1");
const phasePopup2 = document.querySelector("main .blur-bg .phase-popup2");
const phasePopup3 = document.querySelector("main .blur-bg .phase-popup3");
const phasePopup4 = document.querySelector("main .blur-bg .phase-popup4");
const phasePopup5 = document.querySelector("main .blur-bg .phase-popup5");


// Function to show the popup
function showPopup1() {
    popupBg.style.visibility = 'visible';
    // phasePopup1.style.visibility = 'visible';
    // phasePopup2.style.visibility = 'hidden';
    // phasePopup3.style.visibility = 'hidden';
    // phasePopup4.style.visibility = 'hidden';
    // phasePopup5.style.visibility = 'hidden';
}
// function showPopup2() {
//     popupBg.style.visibility = 'visible';
//     phasePopup1.style.visibility = 'hidden';
//     phasePopup2.style.visibility = 'visible';
//     phasePopup3.style.visibility = 'hidden';
//     phasePopup4.style.visibility = 'hidden';
//     phasePopup5.style.visibility = 'hidden';
// }

// Function to hide the popup
function hidePopup1() {
    popupBg.style.visibility = 'hidden'
}
function hidePopup() {
    popupBg.style.visibility = 'hidden'
}

