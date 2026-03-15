const weddingDate = new Date("April 12, 2026 18:00:00").getTime();

setInterval(()=>{

let now = new Date().getTime();

let diff = weddingDate - now;

let days = Math.floor(diff/(1000*60*60*24));

let hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

let mins = Math.floor((diff%(1000*60*60))/(1000*60));

let sec = Math.floor((diff%(1000*60))/1000);

document.getElementById("timer").innerHTML =
days+"d "+hours+"h "+mins+"m "+sec+"s";

},1000);

function toggleMusic(){

let music=document.getElementById("music");

if(music.paused){
music.play();
}else{
music.pause();
}

}

