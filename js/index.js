const wallpaper1 = document.getElementById("pink");
const wallpaper2 = document.getElementById("yellow");
const wallpaper3 = document.getElementById("green");
const wallpaper4 = document.getElementById("blue");
const wallpaper5 = document.getElementById("rand");
let homeMusic = new Audio("./audio/TechTalk.mp3");
var vol =.9;
var vol2 = .5;

homeMusic.autoplay = true;
homeMusic.loop = true;

function playMusic() { 
  homeMusic.play();
};

function pauseMusic() { 
  homeMusic.pause();
};

function lowerMusic() {  
  vol2=.3;
  homeMusic.volume = vol;
  if(vol>.1){
  vol = vol -.1;
  }
  else{
    vol =vol;
  }  
};

function higherMusic() { 
vol = .9;
  homeMusic.volume = vol2;
  if(vol<1){
  vol2= vol2 +.1;
  }
  else{
    vol2 = vol2;
  }
};

wallpaper1.addEventListener("click", () =>{
document.body.style.background = 'pink';
document.body.style.animation = 'blinkingBackgroundd 5s infinite';
});
wallpaper2.addEventListener("click", () =>{
document.body.style.background = 'lightgoldenrodyellow';
document.body.style.animation = 'blinkingBackgroundd 5s infinite';
});
wallpaper3.addEventListener("click", () =>{
document.body.style.background = 'lightseagreen';
document.body.style.animation = 'blinkingBackgroundd 5s infinite';
});
wallpaper4.addEventListener("click", () =>{
document.body.style.background = 'lightskyblue';
document.body.style.animation = 'blinkingBackgroundd 5s infinite';
});
wallpaper5.addEventListener("click", () =>{
document.body.style.animation = 'blinkingBackground 5s infinite';
document.dropdown.btn.style.color = 'white';
});


    
