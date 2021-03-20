const itemAmountModal = document.querySelector("#item-amount-modal");
const closeModal = document.querySelector(".close");
var count = 1;
var itemAmount = document.querySelector("#count");

function plus() {
    itemAmountModal.style.display = "flex";
    count++;
    itemAmount.value = count;
}

function minus() {
    if (count > 1) {
        itemAmountModal.style.display = "flex";
        count--;
        itemAmount.value = count;
    }
}


window.onclick = function(event) {
    if (event.target === itemAmountModal) {
        itemAmountModal.style.display = "none";
    }
}


closeModal.onclick = function() {
    itemAmountModal.style.display = "none";
}