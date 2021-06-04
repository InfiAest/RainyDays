// const detailsForm = document.querySelector("#product-details-form");
// const addToCartModal = document.querySelector("#add-to-cart-modal");
// const colourError = document.querySelector("#colourError");
// const sizeError = document.querySelector("#sizeError");
// const addToCartButton = document.querySelector("#add-to-cart-button");
// const quantity = document.querySelector(".amount-text");
// const size = document.getElementsByName('size');
// const colour = document.getElementsByName('colour');

// function validateDetailsForm(event) {

//     event.preventDefault();

//     var formIsValid = true;

//     if ((colour[0].checked || colour[1].checked || colour[2].checked)) {
//         colourError.style.display = "none";
//     } else {
//         colourError.style.display = "block";
//         formIsValid = false;
//     }

//     if ((size[0].checked || size[1].checked || size[2].checked || size[3].checked || size[4].checked)) {
//         sizeError.style.display = "none";
//     } else {
//         sizeError.style.display = "block";
//         formIsValid = false;
//     }
    
//     // for(i = 0; i < colour.length; i++) {
//     //     if(colour[i].checked) {
//     //         console.log(colour[i].value);
//     //     }
//     // }
//     // for(i = 0; i < size.length; i++) {
//     //     if(size[i].checked) {
//     //         console.log(size[i].value);
//     //     }
//     // }
//     if (formIsValid === true) {
        
//         addToCartButton.onclick = function() {
//             console.log(quantity.value);
//         }
//     }

//     // console.log(quantity.value);
//     // addToCartModal.style.display = "flex";
     
// }

// detailsForm.addEventListener("submit", validateDetailsForm);

// // addToCartButton.onclick = function() {
// //     //get value of amount textbox    
// //     const amountValue = document.querySelector(".amount-text");
// //     console.log(amountValue.value);
// //     addToCartModal.style.display = "flex";
// // }
// window.onclick = function(event) {
//     if (event.target === addToCartModal) {
//         addToCartModal.style.display = "none";
//     }
// }