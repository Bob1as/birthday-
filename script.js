/* =========================
Birthday Website Script
For Anam ❤️
========================= */

// Play Background Music
function playMusic(){

const music = document.getElementById("bgMusic");

if(music){

    music.play();

    alert("🎵 Music Started!");

}

}

// Floating Hearts Effect
function createHeart(){

const heart = document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";
heart.style.left = Math.random() * 100 + "vw";
heart.style.bottom = "-30px";

heart.style.fontSize =
Math.random() * 20 + 15 + "px";

heart.style.zIndex = "999";

heart.style.pointerEvents = "none";

document.body.appendChild(heart);

heart.animate(

    [
        {
            transform:"translateY(0)",
            opacity:1
        },
        {
            transform:"translateY(-120vh)",
            opacity:0
        }
    ],

    {
        duration:6000,
        iterations:1
    }

);

setTimeout(()=>{
    heart.remove();
},6000);

}

// Create Hearts Every 1.5 Seconds
setInterval(createHeart,1500);

// Sparkles Effect
function createSparkle(){

const sparkle = document.createElement("div");

sparkle.innerHTML = "✨";

sparkle.style.position = "fixed";

sparkle.style.left =
Math.random() * 100 + "vw";

sparkle.style.top =
Math.random() * 100 + "vh";

sparkle.style.fontSize = "20px";

sparkle.style.zIndex = "998";

sparkle.style.pointerEvents = "none";

document.body.appendChild(sparkle);

sparkle.animate(

    [
        {opacity:0},
        {opacity:1},
        {opacity:0}
    ],

    {
        duration:3000
    }

);

setTimeout(()=>{
    sparkle.remove();
},3000);

}

setInterval(createSparkle,2000);

// Scroll Animation
const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

});

window.addEventListener("DOMContentLoaded",()=>{

const elements = document.querySelectorAll(

".glass-card, .quality-card, .dua-card, .timeline-card, .gallery-grid img"

);

elements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all 1s ease";

observer.observe(el);

});

});

// Stars Background Generator
window.addEventListener("load",()=>{

const starsContainer = document.querySelector(".stars");

if(starsContainer){

for(let i=0;i<120;i++){

let star = document.createElement("span");

star.innerHTML = "✦";

star.style.position = "absolute";

star.style.left =
Math.random()*100 + "%";

star.style.top =
Math.random()*100 + "%";

star.style.opacity =
Math.random();

star.style.fontSize =
Math.random()*10 + 8 + "px";

starsContainer.appendChild(star);

}

}

});

// Welcome Fade Effect
window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition =
"opacity 1.5s ease";

document.body.style.opacity="1";

},100);

});

// Scroll To Top Utility
function goTop(){

window.scrollTo({

top:0,
behavior:"smooth"

});

}

