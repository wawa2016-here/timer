let totalSeconds = 10 * 60;

const timerInterval = setInterval(() => {
    
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
}, 1000); 
