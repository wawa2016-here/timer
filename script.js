let timeInMinutes = 10;
let timeInSeconds = 59;

setInterval(() => { 
  let element = document.getElementById("Minutes");
  if (element) {
    document.getElementById("Minutes").innerHTML = " " + timeInMinutes + " "; 
  }
}, 1000); 
