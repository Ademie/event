// navbar script
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.height = "70px";
    document.querySelector(".navbar").style.background = "rgb(99, 50, 205)";
    

  } else {
    document.querySelector(".navbar").style.height = "90px";
    document.querySelector(".navbar").style.background = "transparent";
  }
}






// set the date we're counting down to
let countDate = new Date("Jan 20, 2022 8:00:00").getTime()

// update the countdown every second
let x = setInterval(function(){
    // todays date and time
    let today = new Date().getTime()
    // difference btwn countdown date and today's date
    let diff = countDate - today 

    // time calculations
    let days = Math.floor(diff / (1000 * 60 *60 *24))
    let hours = Math.floor((diff % (1000 * 60 * 60 *24)) / (1000 * 60 *60))
    let minutes = Math.floor((diff % (1000 * 60 *60 )) / (1000 * 60))
    let seconds = Math.floor((diff % (1000 * 60 )) / (1000))

    // display the result in the count down text container
    document.querySelector("#days").innerHTML = days
    document.querySelector("#hours").innerHTML = hours
    document.querySelector("#minutes").innerHTML = minutes
    document.querySelector("#seconds").innerHTML = seconds

    // if the countdown is finished, write some text
    if (diff < 0){
        clearInterval(x)
    document.querySelector("#days").innerHTML = "The"
    document.querySelector("#hours").innerHTML = "event"
    document.querySelector("#minutes").innerHTML = "has"
    document.querySelector("#seconds").innerHTML = "ended"

    }
}, 1000)