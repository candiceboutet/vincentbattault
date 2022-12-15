

window.addEventListener("mousemove", (e) => {
   xLocation = e.pageX + 5;
   yLocation = e.pageY + 5;
    mouse.style.left = xLocation + "px";
    mouse.style.top = yLocation + "px";
    })
    
    window.addEventListener("mousedown", () => {
       mouse.style.transform = "scale(2) translate(-25%, -25%)";
       
    })
    window .addEventListener("mouseup", () => {
       mouse.style.transform = "scale(1) translate(-50%, -50%)";
       
    });

    const btnBox = document.querySelector(".btn-box");
const movingBg = document.getElementById("moving-bg");


btn2.addEventListener('mouseover', () => {

   movingBg.style.left = "40%";
   movingBg.style.transition = "0.5s";
//  btn1.style.background = "rgba(255, 255, 255, 0.3);";
//  btn2.style.background = "rgba(255, 255, 255, 0.3);";
 aboutBtn.style.color = "black";
 homeBtn.style.color = "white";

}) 
movingBg.addEventListener('mouseleave', () => {
    movingBg.style.left = "0%";
    aboutBtn.style.color = "white";
    homeBtn.style.color = "black";
   }) 
