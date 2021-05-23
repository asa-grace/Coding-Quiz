var timeLeft = 10;

var downloadTimer = setInterval(function() {
    if (timeLeft <=0){
        clearInterval(downloadTimer);
    } 
    document.getElementById("progressBar").value = 10 - timeLeft;
    timeLeft-=1;
}, 1000);