var timeout = setTimeout(function(){""})

document.getElementById("Start Quiz").addEventListener("click", function() {
    var timeleft = 30;
    var downloadTimer = setInterval(function() {
    if (timeleft <=0){
        clearInterval(downloadTimer);
    } 
    document.getElementById("progressBar").value = 30 - timeleft;
    timeleft -= 1;
}, 1000);
})