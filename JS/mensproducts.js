const url = "https://charlottelucas.no/wp-json/wc/v3/products/?per_page=20&consumer_key=ck_3ec56e0df1d84b1124aae1a0a1410ca10118e47c&consumer_secret=cs_aecf0438accdd0f441fdb569b49c89666b4806c3";

const productContainer = document.querySelector(".products");

async function getMens() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        for(let i = 0; i < results.length; i++) {

            const tags = results[i].tags;

            // tags.forEach(tags => { console.log(tags.name) })

            if(tags[0].name == "womens") {
                continue;
            }

            productContainer.innerHTML +=   `<div class="product-container">
                                                <div class="image-container">
                                                <a href="productpage.html?id=${results[i].id}" alt="link to ${results[i].name} jacket page"><img class="product-img" src="${results[i].images[0].src}" alt="${results[i].name}"></a>
                                                </div>
                                                    <div class="name-price-container">
                                                    <a href="productpage.html?id=${results[i].id}" alt="link to ${results[i].name} jacket page"><h3 class="jacket-name">${results[i].name}</h3></a>
                                                        <p class="price-tag">£${results[i].price}.00</p>
                                                     </div>
                                                     <div class="colours-reviews-container">
                                                        <p class="colours-tag">3 colours available</p>
                                                            <div class="colour-container">
                                                                <i class="fas fa-circle cliff-climber-swatch-1" title="Black"></i>
                                                                <i class="fas fa-circle cliff-climber-swatch-2" title="Blueberry Blue"></i>
                                                                <i class="fas fa-circle cliff-climber-swatch-3" title="Silver Grey"></i>
                                                            </div>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="far fa-star"></i>
                                                                <p class="reviews-tag">${results[i].rating_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[i].id}" class="button" alt="link to ${results[i].name} jacket page">View Jacket</a>
                                                            </div>
                                                </div>`
        }




    } catch (error) {
        console.log(error);
    }
}

getMens();
