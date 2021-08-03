const clocks = document.querySelector("#h2clocks");

function getClock(){
    const date = new Date();
    clocks.innerText =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);