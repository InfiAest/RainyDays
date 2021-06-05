const detailsContainer = document.querySelector(".details");
const titleContainer = document.querySelector(".title-price-container");
const imageContainer = document.querySelector(".image-section");
const colourContainer = document.querySelector(".colour-section");
const sizeContainer = document.querySelector(".size-section");
const descriptionContainer = document.querySelector(".description");
const specsContainer = document.querySelector(".specs");
const cartImgContainer = document.querySelector(".cart-img-container");
const cartProductName = document.querySelector(".product-name");
let cartArray = [];

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://charlottelucas.no/wp-json/wc/store/products/" + id;

console.log(parseFloat(id));
cartArray.push(parseFloat(id));

async function getProductDetails() {

    try {
        const response = await fetch(url);
        const details = await response.json();
        
        createProductDetails(details);
    }
    catch (error) {
        console.log(error);
    }

}

getProductDetails();


function createProductDetails(details) {

    // console.log(details.price_html);

    var el = document.createElement( 'html' );
    el.innerHTML = details.price_html;

    var spans = el.querySelectorAll('bdi');

    for (i = 0; i < spans.length; i++) {
        var price = spans[i].innerText;
        let priceWithoutSymbol = price.slice(1);
        
        cartArray.push(priceWithoutSymbol);
        // console.log(cartArray);
    }
    cartArray.push(details.name);
    cartArray.push(details.images[0].src);

    titleContainer.innerHTML += `<h1 class="jacket-name">${details.name}</h1>
                                 <h2 class="price-tag">${details.price_html}</h2>`

    imageContainer.innerHTML += `<img class="product-img" src="${details.images[0].src}" alt="${details.name}">` 
    
    colourContainer.innerHTML += `${details.attributes[0].name}:
                                    <div class="radio-colours">
                                        <input type="radio" name="colour" id="${details.attributes[0].terms[0].name.replace(/\s/g,'-').toLowerCase()}" value="${details.attributes[0].terms[0].name}">
                                        <label for="${details.attributes[0].terms[0].name.replace(/\s/g,'-').toLowerCase()}" class="radio-label-colour"><i class="fas fa-circle ${details.name.replace(/\s/g,'-').toLowerCase()}-swatch-1"></i>${details.attributes[0].terms[0].name}</label>
                                        <input type="radio" name="colour" id="${details.attributes[0].terms[1].name.replace(/\s/g,'-').toLowerCase()}" value="${details.attributes[0].terms[1].name}">                                
                                        <label for="${details.attributes[0].terms[1].name.replace(/\s/g,'-').toLowerCase()}" class="radio-label-colour"><i class="fas fa-circle ${details.name.replace(/\s/g,'-').toLowerCase()}-swatch-2"></i>${details.attributes[0].terms[1].name}</label>
                                        <input type="radio" name="colour" id="${details.attributes[0].terms[2].name.replace(/\s/g,'-').toLowerCase()}" value="${details.attributes[0].terms[2].name}">
                                        <label for="${details.attributes[0].terms[2].name.replace(/\s/g,'-').toLowerCase()}" class="radio-label-colour"><i class="fas fa-circle ${details.name.replace(/\s/g,'-').toLowerCase()}-swatch-3"></i>${details.attributes[0].terms[2].name}</label>
                                    </div>`

    sizeContainer.innerHTML += `${details.attributes[1].name}:
                                <div class="radio-sizes">
                                    <input type="radio" name="size" id="xSmall" value="XS">
                                    <label for="xSmall" class="radio-label-size">${details.attributes[1].terms[0].name}</label>
                                    <input type="radio" name="size" id="small" value="S">
                                    <label for="small" class="radio-label-size">${details.attributes[1].terms[1].name}</label>
                                    <input type="radio" name="size" id="medium" value="M">
                                    <label for="medium" class="radio-label-size">${details.attributes[1].terms[2].name}</label>
                                    <input type="radio" name="size" id="large" value="L">
                                    <label for="large" class="radio-label-size">${details.attributes[1].terms[3].name}</label>
                                    <input type="radio" name="size" id="xLarge" value="XL">
                                    <label for="xLarge" class="radio-label-size">${details.attributes[1].terms[4].name}</label>
                                </div>`                                

   

    descriptionContainer.innerHTML += `<p>${details.short_description}</p>`

    specsContainer.innerHTML += `<p>${details.description}</p>`                                             

    cartProductName.innerHTML += `<h2>${details.name}</h2>`

    cartImgContainer.innerHTML += `<img class="cart-img" src="${details.images[0].src}" alt="${details.name}">`
}


// add to cart function

const detailsForm = document.querySelector("#product-details-form");
const addToCartModal = document.querySelector("#add-to-cart-modal");
const colourError = document.querySelector("#colourError");
const sizeError = document.querySelector("#sizeError");
const addToCartButton = document.querySelector("#add-to-cart-button");
const quantity = document.querySelector(".amount-text");
const size = document.getElementsByName('size');
const colour = document.getElementsByName('colour');


function validateDetailsForm(event) {

    event.preventDefault();

    var formIsValid = true;

    if ((colour[0].checked || colour[1].checked || colour[2].checked)) {
        colourError.style.display = "none";
    } else {
        colourError.style.display = "block";
        formIsValid = false;
    }

    if ((size[0].checked || size[1].checked || size[2].checked || size[3].checked || size[4].checked)) {
        sizeError.style.display = "none";
    } else {
        sizeError.style.display = "block";
        formIsValid = false;
    }
    
    // WHY DOES THIS NOT WORK???
    // for(i = 0; i < colour.length; i++) {
    //     if(colour[i].checked) {
    //         colourError.style.display = "none";
    //     } else {
    //     colourError.style.display = "block";
    //     formIsValid = false;
    //     }
    // }
    // for(i = 0; i < size.length; i++) {
    //     if(size[i].checked) {
    //         sizeError.style.display = "none";
    //     } else {
    //         sizeError.style.display = "block";
    //         formIsValid = false;
    //     }
    // }

    if (formIsValid === true) {
        
        addToCartButton.onclick = function() {
            

            for(i = 0; i < colour.length; i++) {
                if(colour[i].checked) {
                    cartArray.push(colour[i].value);
                }
            }
            if (colour[0].checked) {
                cartArray.push("-swatch-1");
            }
            if (colour[1].checked) {
                cartArray.push("-swatch-2");
            }
            if (colour[2].checked) {
                cartArray.push("-swatch-3");
            }
            for(i = 0; i < size.length; i++) {
                if(size[i].checked) {
                    cartArray.push(size[i].value);
                }
            }
            cartArray.push(quantity.value);
            console.log(cartArray);
            
            addToCartModal.style.display = "flex";

            addDetailsToCart(cartArray);
            localStorage.setItem("cartList", JSON.stringify(cartArray));
        }
    }
    
}

function addDetailsToCart(cartArray) {

    const cartColour = document.querySelector(".cart-colour");
    const cartSize = document.querySelector(".cart-size");
    const cartQuantity = document.querySelector(".quantity-container");
    const cartPriceContainer = document.querySelector(".price-container");

    var total = parseInt(cartArray[1])*parseInt(cartArray[7]);

    // console.log(parseInt(cartArray[0]));

    cartColour.innerHTML += `<i class="fas fa-circle ${cartArray[2].replace(/\s/g,'-').toLowerCase()}${cartArray[5]}"></i>
                            <p class="cart-colour-name">${cartArray[4]}</p>`

    cartSize.innerHTML += `<p>Size: ${cartArray[6]}</p>`

    cartQuantity.innerHTML += `<p>${cartArray[7]} Item(s)</p>`

    cartPriceContainer.innerHTML += `<p>£${total}</p>`
}


detailsForm.addEventListener("submit", validateDetailsForm, addDetailsToCart);




//get product reviews

const reviewUrl = "https://charlottelucas.no/wp-json/wc/store/products/reviews/";

const reviewsContainer = document.querySelector(".reviews");

async function getReviews() {

    try {

        const response = await fetch(reviewUrl);

        const result = await response.json();

        createProductReviews(result);

    }

    catch(error) {

        console.log(error);

    }
}

getReviews();


function createProductReviews(result) {

    reviewsContainer.innerHTML = `<p>There are currently no reviews to display!</p>`

    for(let i = 0; i < result.length; i++) {
        // console.log(result[i]);
        // console.log(result[i].product_id);
        // reviewsContainer.innerHTML += `<section class="details-section">
        //                                     <p>Hi</p>
        //                                 </section>`  
        if (result[i].product_id === parseFloat(id)) {
            console.log(result[i]);
            reviewsContainer.innerHTML = `<div class="review-flexbox">
                                                <div class="avatar-container">
                                                    <img src="${result[i].reviewer_avatar_urls[96]}" alt="user avatar">
                                                </div>
                                                <div class="review-details">
                                                    <div class="review-name-rating">
                                                        <h3 class="reviewHeading">${result[i].reviewer}</h3>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <p class="reviews-tag">${result[i].rating}</p>
                                                            </div>
                                                    </div>
                                                    <p class="reviewDate">${result[i].formatted_date_created}</p>
                                                    <p>${result[i].review}</p>
                                                </div>
                                            </div>`
        }
        
    }                                            

}