const box = document.querySelectorAll(".container___box")
const boxNum = document.querySelectorAll(".box_num")
// Edede gore
boxNum.forEach(element => {
    if (parseInt(element.innerText) % 2 != 0) {
        element.parentElement.classList.add("tek")
    }
    else if (parseInt(element.innerHTML) % 2 == 0) {
        element.parentElement.classList.add("cut")
    }
});
// Setire gore
// for (let i = 0; i < box.length; i++) {
//     if (i % 2==0) {
//         box[i].classList.add("cut")
//     }
//     else if(i%2 !=0)
//     {
//         box[i].classList.add("tek")
//     }
// }