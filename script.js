let hour = document.getElementById("hour")
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let ampm = document.getElementById('ampm')

 let shift = 'morning';

let getTime = () =>{
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    if(hours>12){
       shift='evening'; 
    }
    if(hours>12){
        hours = hours-12;
    }
    

    hour.innerText=hours + ":";
    min.innerText=minutes + ":";
    sec.innerText=seconds +":";

    if(shift=='morning'){
        ampm.innerText = 'AM';
    }
    else{
        ampm.innerText = 'PM';
    }
}


setInterval(()=>{

    getTime()

}, 1000)