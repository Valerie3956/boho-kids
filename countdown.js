// sale countdown


// set the date of the same


function updateCountdown(){
    
    let saleDate = (new Date("june 25, 2024 00:00:00").getTime())
    
    // today's date and time
    
    let now = new Date().getTime()
    
    // time difference
    
    let difference = saleDate - now
    
    // find days and hours

    let days = Math.floor(difference/(1000*60*60*24))
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    //select h2 and add countdown or sale has started announcement

    let countdown = document.getElementById("countdown")
    if (difference < 0) {
        countdown.textContent = ("Save now!");
    } else {
        countdown.textContent = (`Save in ${days} days, ${hours} hours`)
    }

}

// update countdown on initial render and every 15 minutes thereafter

updateCountdown()
let interval = setInterval(updateCountdown, 900000)


//  Function to scroll to the form section when the button is clicked 

    function scrollToForm() {
        const formSection = document.getElementById('signupForm');
        formSection.scrollIntoView({ behavior: 'smooth' });
        console.log("clicked")
    }

    const scrollButton = document.getElementById('scrollButton');
    const mobileButton = document.getElementById('mobileScrollButton')
    scrollButton.addEventListener('click', scrollToForm);
  mobileButton.addEventListener('click', scrollToForm);

