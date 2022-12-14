window.addEventListener("mousemove", (e) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
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
 btn1.style.background = "rgba(255, 255, 255, 0.3);";
 btn2.style.background = "rgba(255, 255, 255, 0.3);";

}) 
movingBg.addEventListener('mouseleave', () => {
    movingBg.style.left = "0%";

   }) 
