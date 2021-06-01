const detailsContainer = document.querySelector(".details");
const titleContainer = document.querySelector(".title-price-container");
const imageContainer = document.querySelector(".image-section");
const colourContainer = document.querySelector(".colour-section");
const sizeContainer = document.querySelector(".size-section");
const descriptionContainer = document.querySelector(".description");
const specsContainer = document.querySelector(".specs");
const cartImgContainer = document.querySelector(".cart-img-container");
const cartProductName = document.querySelector(".product-name");
const cartColourSize = document.querySelector(".colour-size-container");
const cartPriceContainer = document.querySelector(".price-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://charlottelucas.no/wp-json/wc/store/products/" + id;

console.log(parseFloat(id));

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

    titleContainer.innerHTML += `<h1 class="jacket-name">${details.name}</h1>
                                 <h2 class="price-tag">${details.price_html}</h2>`

    imageContainer.innerHTML += `<img class="product-img" src="${details.images[0].src}" alt="${details.name}">` 
    
    colourContainer.innerHTML += `${details.attributes[0].name}:
                                    <div class="radio-colours">
                                        <input type="radio" name="colour" id="mahoganyRed" value="red">
                                        <label for="mahoganyRed" class="radio-label-colour"><i class="fas fa-circle ${details.name.replace(/\s/g,'-').toLowerCase()}-swatch-1"></i>${details.attributes[0].terms[0].name}</label>
                                        <input type="radio" name="colour" id="mossGreen" value="green">                                
                                        <label for="mossGreen" class="radio-label-colour"><i class="fas fa-circle ${details.name.replace(/\s/g,'-').toLowerCase()}-swatch-2"></i>${details.attributes[0].terms[1].name}</label>
                                        <input type="radio" name="colour" id="moonGrey" value="grey">
                                        <label for="moonGrey" class="radio-label-colour"><i class="fas fa-circle ${details.name.replace(/\s/g,'-').toLowerCase()}-swatch-3"></i>${details.attributes[0].terms[2].name}</label>
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

    cartColourSize.innerHTML += `<i class="fas fa-circle ${details.name.replace(/\s/g,'-').toLowerCase()}-swatch-1"></i>
                                 <p>${details.attributes[0].terms[0].name}, Size: ${details.attributes[1].terms[0].name}</p>`

    cartPriceContainer.innerHTML += `<p>${details.price_html}</p>`

    cartImgContainer.innerHTML += `<img class="cart-img" src="${details.images[0].src}" alt="${details.name}">`
}


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