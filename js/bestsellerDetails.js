const url = "https://charlottelucas.no/wp-json/wc/store/products/?per_page=20";

const bestsellerContainer = document.querySelector(".bestsellers");

async function getBestsellers() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        console.log(results);

        for(let i = 0; i < results.length; i++) {

            if(!results[i].review_count == 1) {
                continue
            }

            bestsellerContainer.innerHTML +=   `<div class="product">
                                                    <img src="${results[i].images[0].src}" alt="${results[i].name}">
                                                    <div class="name-price-container">
                                                        <h3 class="jacket-name">${results[i].name}</h3>
                                                        <p class="price-tag">${results[i].price_html}</p>
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
                                                                <p class="reviews-tag">${results[i].review_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[i].id}" class="button" alt="link to Autumn Comfort jacket page">View Jacket</a>
                                                            </div>
                                                </div>`
        }




    } catch (error) {
        console.log(error);
    }
}

getBestsellers();
