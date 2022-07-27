// let burger = document.getElementById("burger");
// let topdown = document.getElementById("topdown");

// burger.addEventListener("click", () => {
//     if (topdown.style.opacity == 0) {
//         topdown.style.opacity = 1;
//     } else {
//         topdown.style.opacity = 0;
//     }
// });

$(document).ready(() => {
    $("#topdown").hide();

    $("#burger").click(() => {
        $("#topdown").slideToggle("fast");
    });

    // $("#play").click(() => {
    //     if (document.body.style.width <= 768) {
    //         alert("Зайдите в с ПК чтобы играть на сервере !!!");
    //         return false;
    //     } 
    //     else if (document.body.style.width > 1024) {
    //         return true;
    //     }
    // })
});