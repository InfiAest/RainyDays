const url = "https://charlottelucas.no/wp-json/wc/v3/products/?per_page=20&consumer_key=ck_3ec56e0df1d84b1124aae1a0a1410ca10118e47c&consumer_secret=cs_aecf0438accdd0f441fdb569b49c89666b4806c3";

const topRatedContainer = document.querySelector(".top-rated");

async function getTopRated() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        for(let i = 0; i < results.length; i++) {

            const averageRating = results[i].average_rating;

            if(parseInt(averageRating) != 5) {
                continue;
            }


            topRatedContainer.innerHTML +=   `<div class="product-container">
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
                                                                    <i class="fas fa-circle ${results[i].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[i].attributes[0].options[0]}"></i>
                                                                    <i class="fas fa-circle ${results[i].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[i].attributes[0].options[1]}"></i>
                                                                    <i class="fas fa-circle ${results[i].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[i].attributes[0].options[2]}"></i>
                                                                </div>
                                                                <div class="star-container">
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <i class="fas fa-star"></i>
                                                                    <p class="reviews-tag">${results[i].rating_count}</p>
                                                                </div>
                                                                <div class="button-container">
                                                                    <a href="productpage.html?id=${results[i].id}" class="button" alt="link to ${results[i].name} jacket page">View Jacket</a>
                                                                </div>
                                                        </div>
                                                </div>`
        }




    } catch (error) {
        console.log(error);
    }
}

getTopRated();