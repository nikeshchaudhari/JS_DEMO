// const blub = document.querySelector(".container")
// const button = document.querySelectorAll("button")
// const onBtn = button[0]
// const offBtn =button[1]

// onBtn.addEventListener("click",function(){
//     blub.style.backgroundColor = "yellow";
//     blub.style.boxShadow="0 0 30px yellow"
// })
// offBtn.addEventListener("click", function () {
//   blub.style.backgroundColor = "black";
//   blub.style.boxShadow = "none"
// });

// const bulb = document.querySelector(".container")
// const onBtn = document.querySelector(".btnon")
// const offBtn = document.querySelector(".btnoff")

// onBtn.addEventListener("click",function(){
//     bulb.style.backgroundColor = "yellow"
// })
// offBtn.addEventListener("click",function(){
//     bulb.style.backgroundColor="black"
// })

const fan = document.querySelector(".fan");
const onbtn = document.querySelector(".onbtn");
const offbtn = document.querySelector(".offbtn");
const lowbtn = document.querySelector(".lowbtn");
const mediumbtn = document.querySelector(".mediumbtn");
const highbtn = document.querySelector(".highbtn");

onbtn.addEventListener("click", function () {
  fan.style.animationDuration = "1s";
});
offbtn.addEventListener("click", function () {
  fan.style.animationDuration = "0s";
});

lowbtn.addEventListener("click", function () {
     fan.style.animation = "rotate 1.5s linear infinite";
  
}); 

mediumbtn.addEventListener("click",function(){
    fan.style.animation = "rotate 0.8s linear infinite"
})

highbtn.addEventListener("click",function(){
    fan.style.animation = "rotate 0.5s linear infinite" 
})
