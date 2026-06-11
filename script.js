let totalSeconds = 10 * 60;

function updateTimer() {
    totalSeconds--;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("Minutes").innerHTML = minutes + ":" + seconds;

    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        document.getElementById("Minutes").innerHTML = "Time's Up!";
    }
}

// Fixed: The interval is set, matching your clean configuration
const timerInterval = setInterval(updateTimer, 1000);
