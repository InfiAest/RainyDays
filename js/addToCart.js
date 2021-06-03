const addToCartModal = document.querySelector("#add-to-cart-modal");

const addButton = document.querySelector("#add-to-cart-button");

addButton.onclick = function() {
    //get value of amount textbox    
    const amountValue = document.querySelector(".amount-text");
    console.log(amountValue.value);
    addToCartModal.style.display = "flex";
}

window.onclick = function(event) {
    if (event.target === addToCartModal) {
        addToCartModal.style.display = "none";
    }
}


