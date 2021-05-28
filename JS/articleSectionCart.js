const url = "https://charlottelucas.no/wp-json/wc/v3/products/?per_page=20&consumer_key=ck_3ec56e0df1d84b1124aae1a0a1410ca10118e47c&consumer_secret=cs_aecf0438accdd0f441fdb569b49c89666b4806c3";

const forgotItemContainer = document.querySelector(".last-minute-items");

async function getForgottenItems() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        for(let i = 0; i < results.length; i++) {

            const randomProducts = results[Math.floor(Math.random() * results.length)];

            if (i === 3) {
                break;
            }
            
            forgotItemContainer.innerHTML +=   `<div class="product-container">
                                                    <div class="image-container">
                                                    <a href="productpage.html?id=${randomProducts.id}" alt="link to ${randomProducts.name} jacket page"><img class="product-img" src="${randomProducts.images[0].src}" alt="${randomProducts.name}"></a>
                                                    </div>
                                                        <div class="name-price-container">
                                                        <a href="productpage.html?id=${randomProducts.id}" alt="link to ${randomProducts.name} jacket page"><h3 class="jacket-name">${randomProducts.name}</h3></a>
                                                            <p class="price-tag">£${randomProducts.price}.00</p>
                                                        </div>
                                                        <div class="colours-reviews-container">
                                                            <p class="colours-tag">3 colours available</p>
                                                                <div class="colour-container">
                                                                    <i class="fas fa-circle ${randomProducts.name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${randomProducts.attributes[0].options[0]}"></i>
                                                                    <i class="fas fa-circle ${randomProducts.name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${randomProducts.attributes[0].options[1]}"></i>
                                                                    <i class="fas fa-circle ${randomProducts.name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${randomProducts.attributes[0].options[2]}"></i>
                                                                </div>
                                                                <div class="star-container">
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <p class="reviews-tag">${randomProducts.rating_count}</p>
                                                                </div>
                                                                <div class="button-container">
                                                                    <a href="productpage.html?id=${randomProducts.id}" class="button" alt="link to ${randomProducts.name} jacket page">View Jacket</a>
                                                                </div>
                                                        </div>
                                                </div>`
        }




    } catch (error) {
        console.log(error);
    }
}

getForgottenItems();