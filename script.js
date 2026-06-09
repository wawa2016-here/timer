let timeInMinutes = 10;
let timeInSeconds = 59;

setInterval(() => { 
  let element = document.getElementById("Minutes");
    document.getElementById("Minutes").innerHTML = " " + timeInMinutes + " "; 
  }
}, 60000); 
