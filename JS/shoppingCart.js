const cartItems = JSON.parse(localStorage.getItem("cartList"));

const cartImg = document.querySelector(".cart-image");
const cartText = document.querySelector(".cart-text");
const cartItem = document.querySelector(".cart-item");
const cartTotalPrice = document.querySelector(".cart-total-price");
const itemContainer = document.querySelector(".item-flex-container");
const removeItemButton = document.querySelector(".remove-item-button");
const checkoutButton = document.querySelector(".checkout-button");

var total = parseInt(cartItems[1])*parseInt(cartItems[7]);

console.log(cartItems);

cartText.style.display = "none";
cartImg.innerHTML = `<img src="${cartItems[3]}" class="cart-img" alt="${cartItems[2]} jacket">`
cartItem.innerHTML = `<div class="cart-info">
                        <div class="name-size-container">
                            <div class="cart-name-container">
                                <a href="productpage.html?id=${cartItems[0]}" alt="link to ${cartItems[2]} jacket page"><h2>${cartItems[2]}</h2></a>
                            </div> 
                            <div class="cart-colour-container">
                            <i class="fas fa-circle ${cartItems[2].replace(/\s/g,'-').toLowerCase()}${cartItems[5]}"></i>
                            <p class="cart-colour-name">${cartItems[4]}</p>
                            </div>
                            <div class="cart-size-container">
                                <p>Size: ${cartItems[6]}</p>
                            </div>
                        </div>
                        <div class="item-price-container">
                            <p>${cartItems[7]} item(s)</p>
                            <div class="cart-price-container">
                                <p>£${total}</p>
                            </div>
                        </div>`

removeItemButton.innerHTML += `<i class="far fa-trash-alt"></i>` 
checkoutButton.href = `checkout.html`                                       

cartTotalPrice.innerHTML = `£${total}`

removeItemButton.addEventListener('click', function(){
    localStorage.removeItem("cartList");
    cartText.style.display = "block";
    cartImg.style.display = "none";
    cartItem.style.display = "none";
    removeItemButton.style.display = "none";
    cartTotalPrice.innerHTML = `£0.00`
    checkoutButton.href = `` 
});

