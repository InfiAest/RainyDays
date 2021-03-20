var count = 1;
var itemAmount = document.querySelector("#count");

function add() {
    count++;
    itemAmount.value = count;
}

function subtract() {
    if (count > 1) {
        count--;
        itemAmount.value = count;
    }
}