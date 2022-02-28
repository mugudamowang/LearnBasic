insertHomeNav();

//具名函数
function insertHomeNav(){
    console.log("loading");
    let bodyEle = document.querySelector("body");
    let homeBtn = document.createElement("button");
    let homeA = document.createElement("a");
    homeA.innerText = "< HOME";
    homeA.href = "../index.html";
    homeBtn.style = "position: fixed; left:10px; top:10px; opacity: 0.3;";
    homeBtn.addEventListener("mouseover", () => {
        homeBtn.style.opacity = 1;
    })
    homeBtn.addEventListener("mouseleave", () => {
        homeBtn.style.opacity = 0.3;
    })
    homeBtn.appendChild(homeA);
    bodyEle.appendChild(homeBtn);
    console.log("着陆仓已就绪");
}

//IIFE
// !(function () {
//     console.log("object");
// })();