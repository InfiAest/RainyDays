const detailsContainer = document.querySelector(".details");

const titleContainer = document.querySelector(".title-price-container");
const imageContainer = document.querySelector(".image-section");
const colourContainer = document.querySelector(".colour-section");
const sizeContainer = document.querySelector(".size-section");

const descriptionContainer = document.querySelector(".description");
const cartImgContainer = document.querySelector(".cart-img-container");
const cartProductName = document.querySelector(".product-name");
const cartColourSize = document.querySelector(".colour-size-container");
const cartPriceContainer = document.querySelector(".price-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://charlottelucas.no/wp-json/wc/store/products/" + id;

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

    // console.log(details.name.replace(/\s/g,'').toLowerCase());

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

   

    descriptionContainer.innerHTML += `<section class="details-section">
                                            <div class="description-container">
                                                <h2>Description:</h2>
                                                <p>${details.short_description}</p>
                                            </div>
                                        </section>
                                        <section class="details-section">
                                            <div class="specs-container">
                                                <h2>Specs:</h2>
                                                <p>${details.description}</p>
                                            </div>
                                        </section>
                                        <section class="details-section">
                                            <div class="reviews-container">
                                                <h2>Reviews:</h2>
                                            </div>
                                        </section>`            


    cartProductName.innerHTML += `<h2>${details.name}</h2>`

    cartColourSize.innerHTML += `<i class="fas fa-circle ${details.name.replace(/\s/g,'-').toLowerCase()}-swatch-1"></i>
                                 <p>${details.attributes[0].terms[0].name}, Size: ${details.attributes[1].terms[0].name}</p>`

    cartPriceContainer.innerHTML += `<p>${details.price_html}</p>`

    cartImgContainer.innerHTML += `<img class="cart-img" src="${details.images[0].src}" alt="${details.name}">`
}