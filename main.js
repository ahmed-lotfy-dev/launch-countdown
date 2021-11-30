let timeText = document.querySelector(".time")
let dayContainer = document.getElementById("day");
let hourContainer = document.getElementById("hour");
let minuteContainer = document.getElementById("minute");
let secondContainer = document.getElementById("second");
// Set the date we're counting down to

// Function That Count The Time And The Time Difference
let countDown = () => {
    const now = new Date().getTime();
    const countDownDate = new Date("Nov 30, 2021 15:24:59").getTime();
    const distance = countDownDate - now;
    // Get today's date and time

    // Variables Each Time Fragment
    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    // Time calculations for days, hours, minutes and seconds
    const timeDays = Math.floor(distance / days);
    const timeHours = Math.floor((distance % days) / hours);
    const timeMinutes = Math.floor((distance % hours) / minutes);
    const timeSeconds = Math.floor((distance % minutes) / seconds)

    // Display the result in the elements
    // If The Time Less Than 10 Put Zero Before To Make It Still 2 Digits
    dayContainer.innerHTML = timeDays;
    hourContainer.innerHTML = timeHours < 10 ? "0" + timeHours : timeHours;
    minuteContainer.innerHTML = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    secondContainer.innerHTML = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    // If the count down is finished, write some text

    if (distance < 0) {
        clearInterval(count);
        dayContainer.innerHTML = 0;
        hourContainer.innerHTML = 0;
        minuteContainer.innerHTML = 0;
        secondContainer.innerHTML = 0;
        dayContainer.nextElementSibling.textContent = "Time"
        hourContainer.nextElementSibling.textContent = "Has"
        minuteContainer.nextElementSibling.textContent = "Been"
        secondContainer.nextElementSibling.textContent = "Ended"
    }
}
// Update the count down every 1 second
let count = setInterval(countDown, 900)





