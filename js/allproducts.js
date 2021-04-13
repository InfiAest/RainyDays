const url = "https://charlottelucas.no/wp-json/wc/store/products/?per_page=20";

const productContainer = document.querySelector(".products");

async function getProducts() {

    try {

        const response = await fetch(url);

        const result = await response.json();

        createHTML(result);

    }

    catch(error) {

        console.log(error);

    }
}

getProducts();




    function createHTML(result){

        for(let i = 0; i < result.length; i++) {

            const list = result[i];

            console.log(list.name);
            productContainer.innerHTML += `<div class="product">
                                                <img src="${list.images[0].src}" alt="${list.name}">
                                                    <div class="name-price-container">
                                                        <h3 class="jacket-name">${list.name}</h3>
                                                        <p class="price-tag">${list.price_html}</p>
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
                                                                <p class="reviews-tag">${list.review_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${list.id}" class="button" alt="link to Autumn Comfort jacket page">View Jacket</a>
                                                            </div>
                                                    </div>
                                                </div>`
        }
    }
