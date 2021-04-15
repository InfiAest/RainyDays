const detailsContainer = document.querySelector(".details");

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

    console.log(details.name.replace(/\s/g,'').toLowerCase());




    detailsContainer.innerHTML += `<section class="details-section">
                                        <div class="title-price-container">
                                            <h1 class="jacket-name">${details.name}</h1>
                                            <h2 class="price-tag">${details.price_html}</h2>
                                        </div>
                                    </section>
                                    <section class="details-section">
                                        <div>
                                            <img class="product-img" src="${details.images[0].src}" alt="${details.name}">
                                        </div>
                                    </section>
                                    <section class="details-section">
                                        <form id="product-details-form" action="form-success.php" method="POST">
                                            <legend>Choose your details</legend>
                                            <label>
                                            ${details.attributes[0].name}:
                                                <div class="radio-colours">
                                                    <input type="radio" name="colour" id="mahoganyRed" value="red">
                                                    <label for="mahoganyRed" class="radio-label-colour"><i class="fas fa-circle ${details.name.replace(/\s/g,'-').toLowerCase()}-swatch-1"></i>${details.attributes[0].terms[0].name}</label>
                                                    <input type="radio" name="colour" id="mossGreen" value="green">                                
                                                    <label for="mossGreen" class="radio-label-colour"><i class="fas fa-circle ${details.name.replace(/\s/g,'-').toLowerCase()}-swatch-2"></i>${details.attributes[0].terms[1].name}</label>
                                                    <input type="radio" name="colour" id="moonGrey" value="grey">
                                                    <label for="moonGrey" class="radio-label-colour"><i class="fas fa-circle ${details.name.replace(/\s/g,'-').toLowerCase()}-swatch-3"></i>${details.attributes[0].terms[2].name}</label>
                                                </div>
                                            </label>
                                            <label>
                                            ${details.attributes[1].name}:
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
                                                </div>
                                            </label>
                                            <label>
                                                Quantity:
                                                <div class="item-container">
                                                    <input type="button" value="-" id="minus" class="amount-button" onclick="subtract()">
                                                    <input type="text" size="25" value="1" id="count" class="amount-text">
                                                    <input type="button" value="+" id="plus" class="amount-button" onclick="add()">
                                                </div>
                                            </label>
                                        </form>
                                        
                                        <div class="button-container">
                                            <a href="#" role="button" id="add-to-cart-button" class="button">Add to cart</a>
                                        </div>
                                    </section>
                                    <section class="details-section">
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
                                    </section>`;

}