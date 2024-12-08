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

// Function to show the popup
function showPopup() {
    popupBg.style.visibility = 'visible'
}

// Function to hide the popup
function hidePopup() {
    popupBg.style.visibility = 'hidden'
}