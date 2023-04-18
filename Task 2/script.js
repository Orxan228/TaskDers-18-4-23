const clrBtn = document.querySelector(".clrBtn")
clrBtn.addEventListener("click" , ()=> {
    var randRed = Math.floor(Math.random()*256);
    var randGreen = Math.floor(Math.random()*256);
    var randBlue = Math.floor(Math.random()*256);
    document.body.style.backgroundColor='rgb(' + randRed + ',' + randGreen + ',' + randBlue + ')';
})