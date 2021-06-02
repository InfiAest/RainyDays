const url = "https://charlottelucas.no/wp-json/wc/v3/products/?per_page=20&consumer_key=ck_3ec56e0df1d84b1124aae1a0a1410ca10118e47c&consumer_secret=cs_aecf0438accdd0f441fdb569b49c89666b4806c3";

const topRated1Mobile = document.querySelector(".mobile-top-rated-1");
const topRated2Mobile = document.querySelector(".mobile-top-rated-2");
const topRated3Mobile = document.querySelector(".mobile-top-rated-3");
const topRated4Mobile = document.querySelector(".mobile-top-rated-4");
const topRated5Mobile = document.querySelector(".mobile-top-rated-5");
const topRated6Mobile = document.querySelector(".mobile-top-rated-6");
const topRated1Tablet = document.querySelector(".tablet-top-rated-1");
const topRated2Tablet = document.querySelector(".tablet-top-rated-2");
const topRated3Tablet = document.querySelector(".tablet-top-rated-3");
const topRated4Tablet = document.querySelector(".tablet-top-rated-4");
const topRated5Tablet = document.querySelector(".tablet-top-rated-5");
const topRated6Tablet = document.querySelector(".tablet-top-rated-6");
const topRated1Desktop = document.querySelector(".desktop-top-rated-1");
const topRated2Desktop = document.querySelector(".desktop-top-rated-2");
const topRated3Desktop = document.querySelector(".desktop-top-rated-3");
const topRated4Desktop = document.querySelector(".desktop-top-rated-4");
const topRated5Desktop = document.querySelector(".desktop-top-rated-5");
const topRated6Desktop = document.querySelector(".desktop-top-rated-6");

async function getTopRated() {
    try {
        const response = await fetch(url);

        const results = await response.json();

        for(let i = 0; i < results.length; i++) {

            const averageRating = results[i].average_rating;

            if(parseInt(averageRating) != 5) {
                continue;
            }  
        }
        topRated1Mobile.innerHTML +=   `<div class="product-container">
                                            <div class="image-container">
                                            <a href="productpage.html?id=${results[0].id}" alt="link to ${results[0].name} jacket page"><img class="product-img" src="${results[0].images[0].src}" alt="${results[0].name}"></a>
                                            </div>
                                                <div class="name-price-container">
                                                <a href="productpage.html?id=${results[0].id}" alt="link to ${results[0].name} jacket page"><h3 class="jacket-name">${results[0].name}</h3></a>
                                                    <p class="price-tag">£${results[0].price}.00</p>
                                                </div>
                                                <div class="colours-reviews-container">
                                                    <p class="colours-tag">3 colours available</p>
                                                        <div class="colour-container">
                                                            <i class="fas fa-circle ${results[0].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[0].attributes[0].options[0]}"></i>
                                                            <i class="fas fa-circle ${results[0].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[0].attributes[0].options[1]}"></i>
                                                            <i class="fas fa-circle ${results[0].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[0].attributes[0].options[2]}"></i>
                                                        </div>
                                                        <div class="star-container">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <p class="reviews-tag">${results[0].rating_count}</p>
                                                        </div>
                                                        <div class="button-container">
                                                            <a href="productpage.html?id=${results[0].id}" class="button" alt="link to ${results[0].name} jacket page">View Jacket</a>
                                                        </div>
                                                </div>
                                        </div>`

        topRated1Tablet.innerHTML +=   `<div class="product-container">
                                            <div class="image-container">
                                            <a href="productpage.html?id=${results[0].id}" alt="link to ${results[0].name} jacket page"><img class="product-img" src="${results[0].images[0].src}" alt="${results[0].name}"></a>
                                            </div>
                                                <div class="name-price-container">
                                                <a href="productpage.html?id=${results[0].id}" alt="link to ${results[0].name} jacket page"><h3 class="jacket-name">${results[0].name}</h3></a>
                                                    <p class="price-tag">£${results[0].price}.00</p>
                                                </div>
                                                <div class="colours-reviews-container">
                                                    <p class="colours-tag">3 colours available</p>
                                                        <div class="colour-container">
                                                            <i class="fas fa-circle ${results[0].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[0].attributes[0].options[0]}"></i>
                                                            <i class="fas fa-circle ${results[0].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[0].attributes[0].options[1]}"></i>
                                                            <i class="fas fa-circle ${results[0].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[0].attributes[0].options[2]}"></i>
                                                        </div>
                                                        <div class="star-container">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <p class="reviews-tag">${results[0].rating_count}</p>
                                                        </div>
                                                        <div class="button-container">
                                                            <a href="productpage.html?id=${results[0].id}" class="button" alt="link to ${results[0].name} jacket page">View Jacket</a>
                                                        </div>
                                                </div>
                                        </div>`

        topRated1Desktop.innerHTML +=   `<div class="product-container">
                                            <div class="image-container">
                                            <a href="productpage.html?id=${results[0].id}" alt="link to ${results[0].name} jacket page"><img class="product-img" src="${results[0].images[0].src}" alt="${results[0].name}"></a>
                                            </div>
                                                <div class="name-price-container">
                                                <a href="productpage.html?id=${results[0].id}" alt="link to ${results[0].name} jacket page"><h3 class="jacket-name">${results[0].name}</h3></a>
                                                    <p class="price-tag">£${results[0].price}.00</p>
                                                </div>
                                                <div class="colours-reviews-container">
                                                    <p class="colours-tag">3 colours available</p>
                                                        <div class="colour-container">
                                                            <i class="fas fa-circle ${results[0].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[0].attributes[0].options[0]}"></i>
                                                            <i class="fas fa-circle ${results[0].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[0].attributes[0].options[1]}"></i>
                                                            <i class="fas fa-circle ${results[0].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[0].attributes[0].options[2]}"></i>
                                                        </div>
                                                        <div class="star-container">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <p class="reviews-tag">${results[0].rating_count}</p>
                                                        </div>
                                                        <div class="button-container">
                                                            <a href="productpage.html?id=${results[0].id}" class="button" alt="link to ${results[0].name} jacket page">View Jacket</a>
                                                        </div>
                                                </div>
                                        </div>`

        topRated2Mobile.innerHTML +=   `<div class="product-container">
                                                <div class="image-container">
                                                <a href="productpage.html?id=${results[1].id}" alt="link to ${results[1].name} jacket page"><img class="product-img" src="${results[1].images[0].src}" alt="${results[1].name}"></a>
                                                </div>
                                                    <div class="name-price-container">
                                                    <a href="productpage.html?id=${results[1].id}" alt="link to ${results[1].name} jacket page"><h3 class="jacket-name">${results[1].name}</h3></a>
                                                        <p class="price-tag">£${results[1].price}.00</p>
                                                    </div>
                                                    <div class="colours-reviews-container">
                                                        <p class="colours-tag">3 colours available</p>
                                                            <div class="colour-container">
                                                                <i class="fas fa-circle ${results[1].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[1].attributes[0].options[0]}"></i>
                                                                <i class="fas fa-circle ${results[1].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[1].attributes[0].options[1]}"></i>
                                                                <i class="fas fa-circle ${results[1].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[1].attributes[0].options[2]}"></i>
                                                            </div>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <p class="reviews-tag">${results[1].rating_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[1].id}" class="button" alt="link to ${results[1].name} jacket page">View Jacket</a>
                                                            </div>
                                                    </div>
                                            </div>`
                                            
        topRated2Tablet.innerHTML +=   `<div class="product-container">
                                                <div class="image-container">
                                                <a href="productpage.html?id=${results[1].id}" alt="link to ${results[1].name} jacket page"><img class="product-img" src="${results[1].images[0].src}" alt="${results[1].name}"></a>
                                                </div>
                                                    <div class="name-price-container">
                                                    <a href="productpage.html?id=${results[1].id}" alt="link to ${results[1].name} jacket page"><h3 class="jacket-name">${results[1].name}</h3></a>
                                                        <p class="price-tag">£${results[1].price}.00</p>
                                                    </div>
                                                    <div class="colours-reviews-container">
                                                        <p class="colours-tag">3 colours available</p>
                                                            <div class="colour-container">
                                                                <i class="fas fa-circle ${results[1].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[1].attributes[0].options[0]}"></i>
                                                                <i class="fas fa-circle ${results[1].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[1].attributes[0].options[1]}"></i>
                                                                <i class="fas fa-circle ${results[1].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[1].attributes[0].options[2]}"></i>
                                                            </div>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <p class="reviews-tag">${results[1].rating_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[1].id}" class="button" alt="link to ${results[1].name} jacket page">View Jacket</a>
                                                            </div>
                                                    </div>
                                            </div>`

        topRated2Desktop.innerHTML +=   `<div class="product-container">
                                                <div class="image-container">
                                                <a href="productpage.html?id=${results[1].id}" alt="link to ${results[1].name} jacket page"><img class="product-img" src="${results[1].images[0].src}" alt="${results[1].name}"></a>
                                                </div>
                                                    <div class="name-price-container">
                                                    <a href="productpage.html?id=${results[1].id}" alt="link to ${results[1].name} jacket page"><h3 class="jacket-name">${results[1].name}</h3></a>
                                                        <p class="price-tag">£${results[1].price}.00</p>
                                                    </div>
                                                    <div class="colours-reviews-container">
                                                        <p class="colours-tag">3 colours available</p>
                                                            <div class="colour-container">
                                                                <i class="fas fa-circle ${results[1].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[1].attributes[0].options[0]}"></i>
                                                                <i class="fas fa-circle ${results[1].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[1].attributes[0].options[1]}"></i>
                                                                <i class="fas fa-circle ${results[1].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[1].attributes[0].options[2]}"></i>
                                                            </div>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <p class="reviews-tag">${results[1].rating_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[1].id}" class="button" alt="link to ${results[1].name} jacket page">View Jacket</a>
                                                            </div>
                                                    </div>
                                            </div>`

        topRated3Mobile.innerHTML +=   `<div class="product-container">
                                                <div class="image-container">
                                                <a href="productpage.html?id=${results[2].id}" alt="link to ${results[2].name} jacket page"><img class="product-img" src="${results[2].images[0].src}" alt="${results[2].name}"></a>
                                                </div>
                                                    <div class="name-price-container">
                                                    <a href="productpage.html?id=${results[2].id}" alt="link to ${results[2].name} jacket page"><h3 class="jacket-name">${results[2].name}</h3></a>
                                                        <p class="price-tag">£${results[2].price}.00</p>
                                                    </div>
                                                    <div class="colours-reviews-container">
                                                        <p class="colours-tag">3 colours available</p>
                                                            <div class="colour-container">
                                                                <i class="fas fa-circle ${results[2].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[2].attributes[0].options[0]}"></i>
                                                                <i class="fas fa-circle ${results[2].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[2].attributes[0].options[1]}"></i>
                                                                <i class="fas fa-circle ${results[2].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[2].attributes[0].options[2]}"></i>
                                                            </div>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <p class="reviews-tag">${results[2].rating_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[2].id}" class="button" alt="link to ${results[2].name} jacket page">View Jacket</a>
                                                            </div>
                                                    </div>
                                            </div>`

        topRated3Tablet.innerHTML +=   `<div class="product-container">
                                                <div class="image-container">
                                                <a href="productpage.html?id=${results[2].id}" alt="link to ${results[2].name} jacket page"><img class="product-img" src="${results[2].images[0].src}" alt="${results[2].name}"></a>
                                                </div>
                                                    <div class="name-price-container">
                                                    <a href="productpage.html?id=${results[2].id}" alt="link to ${results[2].name} jacket page"><h3 class="jacket-name">${results[2].name}</h3></a>
                                                        <p class="price-tag">£${results[2].price}.00</p>
                                                    </div>
                                                    <div class="colours-reviews-container">
                                                        <p class="colours-tag">3 colours available</p>
                                                            <div class="colour-container">
                                                                <i class="fas fa-circle ${results[2].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[2].attributes[0].options[0]}"></i>
                                                                <i class="fas fa-circle ${results[2].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[2].attributes[0].options[1]}"></i>
                                                                <i class="fas fa-circle ${results[2].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[2].attributes[0].options[2]}"></i>
                                                            </div>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <p class="reviews-tag">${results[2].rating_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[2].id}" class="button" alt="link to ${results[2].name} jacket page">View Jacket</a>
                                                            </div>
                                                    </div>
                                            </div>`

        topRated3Desktop.innerHTML +=   `<div class="product-container">
                                            <div class="image-container">
                                            <a href="productpage.html?id=${results[2].id}" alt="link to ${results[2].name} jacket page"><img class="product-img" src="${results[2].images[0].src}" alt="${results[2].name}"></a>
                                            </div>
                                                <div class="name-price-container">
                                                <a href="productpage.html?id=${results[2].id}" alt="link to ${results[2].name} jacket page"><h3 class="jacket-name">${results[2].name}</h3></a>
                                                    <p class="price-tag">£${results[2].price}.00</p>
                                                </div>
                                                <div class="colours-reviews-container">
                                                    <p class="colours-tag">3 colours available</p>
                                                        <div class="colour-container">
                                                            <i class="fas fa-circle ${results[2].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[2].attributes[0].options[0]}"></i>
                                                            <i class="fas fa-circle ${results[2].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[2].attributes[0].options[1]}"></i>
                                                            <i class="fas fa-circle ${results[2].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[2].attributes[0].options[2]}"></i>
                                                        </div>
                                                        <div class="star-container">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <p class="reviews-tag">${results[2].rating_count}</p>
                                                        </div>
                                                        <div class="button-container">
                                                            <a href="productpage.html?id=${results[2].id}" class="button" alt="link to ${results[2].name} jacket page">View Jacket</a>
                                                        </div>
                                                </div>
                                        </div>`    

        topRated4Mobile.innerHTML +=   `<div class="product-container">
                                                <div class="image-container">
                                                <a href="productpage.html?id=${results[3].id}" alt="link to ${results[3].name} jacket page"><img class="product-img" src="${results[3].images[0].src}" alt="${results[3].name}"></a>
                                                </div>
                                                    <div class="name-price-container">
                                                    <a href="productpage.html?id=${results[3].id}" alt="link to ${results[2].name} jacket page"><h3 class="jacket-name">${results[3].name}</h3></a>
                                                        <p class="price-tag">£${results[3].price}.00</p>
                                                    </div>
                                                    <div class="colours-reviews-container">
                                                        <p class="colours-tag">3 colours available</p>
                                                            <div class="colour-container">
                                                                <i class="fas fa-circle ${results[3].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[3].attributes[0].options[0]}"></i>
                                                                <i class="fas fa-circle ${results[3].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[3].attributes[0].options[1]}"></i>
                                                                <i class="fas fa-circle ${results[3].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[3].attributes[0].options[2]}"></i>
                                                            </div>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <p class="reviews-tag">${results[3].rating_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[3].id}" class="button" alt="link to ${results[3].name} jacket page">View Jacket</a>
                                                            </div>
                                                    </div>
                                            </div>`

        topRated4Tablet.innerHTML +=   `<div class="product-container">
                                                <div class="image-container">
                                                <a href="productpage.html?id=${results[3].id}" alt="link to ${results[3].name} jacket page"><img class="product-img" src="${results[3].images[0].src}" alt="${results[3].name}"></a>
                                                </div>
                                                    <div class="name-price-container">
                                                    <a href="productpage.html?id=${results[3].id}" alt="link to ${results[2].name} jacket page"><h3 class="jacket-name">${results[3].name}</h3></a>
                                                        <p class="price-tag">£${results[3].price}.00</p>
                                                    </div>
                                                    <div class="colours-reviews-container">
                                                        <p class="colours-tag">3 colours available</p>
                                                            <div class="colour-container">
                                                                <i class="fas fa-circle ${results[3].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[3].attributes[0].options[0]}"></i>
                                                                <i class="fas fa-circle ${results[3].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[3].attributes[0].options[1]}"></i>
                                                                <i class="fas fa-circle ${results[3].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[3].attributes[0].options[2]}"></i>
                                                            </div>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <p class="reviews-tag">${results[3].rating_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[3].id}" class="button" alt="link to ${results[3].name} jacket page">View Jacket</a>
                                                            </div>
                                                    </div>
                                            </div>`

        topRated4Desktop.innerHTML +=   `<div class="product-container">
                                            <div class="image-container">
                                            <a href="productpage.html?id=${results[3].id}" alt="link to ${results[3].name} jacket page"><img class="product-img" src="${results[3].images[0].src}" alt="${results[3].name}"></a>
                                            </div>
                                                <div class="name-price-container">
                                                <a href="productpage.html?id=${results[3].id}" alt="link to ${results[2].name} jacket page"><h3 class="jacket-name">${results[3].name}</h3></a>
                                                    <p class="price-tag">£${results[3].price}.00</p>
                                                </div>
                                                <div class="colours-reviews-container">
                                                    <p class="colours-tag">3 colours available</p>
                                                        <div class="colour-container">
                                                            <i class="fas fa-circle ${results[3].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[3].attributes[0].options[0]}"></i>
                                                            <i class="fas fa-circle ${results[3].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[3].attributes[0].options[1]}"></i>
                                                            <i class="fas fa-circle ${results[3].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[3].attributes[0].options[2]}"></i>
                                                        </div>
                                                        <div class="star-container">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <p class="reviews-tag">${results[3].rating_count}</p>
                                                        </div>
                                                        <div class="button-container">
                                                            <a href="productpage.html?id=${results[3].id}" class="button" alt="link to ${results[3].name} jacket page">View Jacket</a>
                                                        </div>
                                                </div>
                                        </div>`

        topRated5Mobile.innerHTML +=   `<div class="product-container">
                                                <div class="image-container">
                                                <a href="productpage.html?id=${results[4].id}" alt="link to ${results[4].name} jacket page"><img class="product-img" src="${results[4].images[0].src}" alt="${results[4].name}"></a>
                                                </div>
                                                    <div class="name-price-container">
                                                    <a href="productpage.html?id=${results[4].id}" alt="link to ${results[2].name} jacket page"><h3 class="jacket-name">${results[4].name}</h3></a>
                                                        <p class="price-tag">£${results[4].price}.00</p>
                                                    </div>
                                                    <div class="colours-reviews-container">
                                                        <p class="colours-tag">3 colours available</p>
                                                            <div class="colour-container">
                                                                <i class="fas fa-circle ${results[4].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[4].attributes[0].options[0]}"></i>
                                                                <i class="fas fa-circle ${results[4].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[4].attributes[0].options[1]}"></i>
                                                                <i class="fas fa-circle ${results[4].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[4].attributes[0].options[2]}"></i>
                                                            </div>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <p class="reviews-tag">${results[4].rating_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[4].id}" class="button" alt="link to ${results[4].name} jacket page">View Jacket</a>
                                                            </div>
                                                    </div>
                                            </div>`

        topRated5Tablet.innerHTML +=   `<div class="product-container">
                                                <div class="image-container">
                                                <a href="productpage.html?id=${results[4].id}" alt="link to ${results[4].name} jacket page"><img class="product-img" src="${results[4].images[0].src}" alt="${results[4].name}"></a>
                                                </div>
                                                    <div class="name-price-container">
                                                    <a href="productpage.html?id=${results[4].id}" alt="link to ${results[2].name} jacket page"><h3 class="jacket-name">${results[4].name}</h3></a>
                                                        <p class="price-tag">£${results[4].price}.00</p>
                                                    </div>
                                                    <div class="colours-reviews-container">
                                                        <p class="colours-tag">3 colours available</p>
                                                            <div class="colour-container">
                                                                <i class="fas fa-circle ${results[4].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[4].attributes[0].options[0]}"></i>
                                                                <i class="fas fa-circle ${results[4].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[4].attributes[0].options[1]}"></i>
                                                                <i class="fas fa-circle ${results[4].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[4].attributes[0].options[2]}"></i>
                                                            </div>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <p class="reviews-tag">${results[4].rating_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[4].id}" class="button" alt="link to ${results[4].name} jacket page">View Jacket</a>
                                                            </div>
                                                    </div>
                                            </div>`

        topRated5Desktop.innerHTML +=   `<div class="product-container">
                                            <div class="image-container">
                                            <a href="productpage.html?id=${results[4].id}" alt="link to ${results[4].name} jacket page"><img class="product-img" src="${results[4].images[0].src}" alt="${results[4].name}"></a>
                                            </div>
                                                <div class="name-price-container">
                                                <a href="productpage.html?id=${results[4].id}" alt="link to ${results[2].name} jacket page"><h3 class="jacket-name">${results[4].name}</h3></a>
                                                    <p class="price-tag">£${results[4].price}.00</p>
                                                </div>
                                                <div class="colours-reviews-container">
                                                    <p class="colours-tag">3 colours available</p>
                                                        <div class="colour-container">
                                                            <i class="fas fa-circle ${results[4].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[4].attributes[0].options[0]}"></i>
                                                            <i class="fas fa-circle ${results[4].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[4].attributes[0].options[1]}"></i>
                                                            <i class="fas fa-circle ${results[4].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[4].attributes[0].options[2]}"></i>
                                                        </div>
                                                        <div class="star-container">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <p class="reviews-tag">${results[4].rating_count}</p>
                                                        </div>
                                                        <div class="button-container">
                                                            <a href="productpage.html?id=${results[4].id}" class="button" alt="link to ${results[4].name} jacket page">View Jacket</a>
                                                        </div>
                                                </div>
                                        </div>`

        topRated6Mobile.innerHTML +=   `<div class="product-container">
                                                <div class="image-container">
                                                <a href="productpage.html?id=${results[5].id}" alt="link to ${results[5].name} jacket page"><img class="product-img" src="${results[5].images[0].src}" alt="${results[5].name}"></a>
                                                </div>
                                                    <div class="name-price-container">
                                                    <a href="productpage.html?id=${results[5].id}" alt="link to ${results[5].name} jacket page"><h3 class="jacket-name">${results[5].name}</h3></a>
                                                        <p class="price-tag">£${results[5].price}.00</p>
                                                    </div>
                                                    <div class="colours-reviews-container">
                                                        <p class="colours-tag">3 colours available</p>
                                                            <div class="colour-container">
                                                                <i class="fas fa-circle ${results[5].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[5].attributes[0].options[0]}"></i>
                                                                <i class="fas fa-circle ${results[5].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[5].attributes[0].options[1]}"></i>
                                                                <i class="fas fa-circle ${results[5].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[5].attributes[0].options[2]}"></i>
                                                            </div>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <p class="reviews-tag">${results[5].rating_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[5].id}" class="button" alt="link to ${results[5].name} jacket page">View Jacket</a>
                                                            </div>
                                                    </div>
                                            </div>`

        topRated6Tablet.innerHTML +=   `<div class="product-container">
                                                <div class="image-container">
                                                <a href="productpage.html?id=${results[5].id}" alt="link to ${results[5].name} jacket page"><img class="product-img" src="${results[5].images[0].src}" alt="${results[5].name}"></a>
                                                </div>
                                                    <div class="name-price-container">
                                                    <a href="productpage.html?id=${results[5].id}" alt="link to ${results[5].name} jacket page"><h3 class="jacket-name">${results[5].name}</h3></a>
                                                        <p class="price-tag">£${results[5].price}.00</p>
                                                    </div>
                                                    <div class="colours-reviews-container">
                                                        <p class="colours-tag">3 colours available</p>
                                                            <div class="colour-container">
                                                                <i class="fas fa-circle ${results[5].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[5].attributes[0].options[0]}"></i>
                                                                <i class="fas fa-circle ${results[5].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[5].attributes[0].options[1]}"></i>
                                                                <i class="fas fa-circle ${results[5].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[5].attributes[0].options[2]}"></i>
                                                            </div>
                                                            <div class="star-container">
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <i class="fas fa-star"></i>
                                                                <p class="reviews-tag">${results[5].rating_count}</p>
                                                            </div>
                                                            <div class="button-container">
                                                                <a href="productpage.html?id=${results[5].id}" class="button" alt="link to ${results[5].name} jacket page">View Jacket</a>
                                                            </div>
                                                    </div>
                                            </div>`

        topRated6Desktop.innerHTML +=   `<div class="product-container">
                                            <div class="image-container">
                                            <a href="productpage.html?id=${results[5].id}" alt="link to ${results[5].name} jacket page"><img class="product-img" src="${results[5].images[0].src}" alt="${results[5].name}"></a>
                                            </div>
                                                <div class="name-price-container">
                                                <a href="productpage.html?id=${results[5].id}" alt="link to ${results[5].name} jacket page"><h3 class="jacket-name">${results[5].name}</h3></a>
                                                    <p class="price-tag">£${results[5].price}.00</p>
                                                </div>
                                                <div class="colours-reviews-container">
                                                    <p class="colours-tag">3 colours available</p>
                                                        <div class="colour-container">
                                                            <i class="fas fa-circle ${results[5].name.replace(/\s/g,'-').toLowerCase()}-swatch-1" title="${results[5].attributes[0].options[0]}"></i>
                                                            <i class="fas fa-circle ${results[5].name.replace(/\s/g,'-').toLowerCase()}-swatch-2" title="${results[5].attributes[0].options[1]}"></i>
                                                            <i class="fas fa-circle ${results[5].name.replace(/\s/g,'-').toLowerCase()}-swatch-3" title="${results[5].attributes[0].options[2]}"></i>
                                                        </div>
                                                        <div class="star-container">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <p class="reviews-tag">${results[5].rating_count}</p>
                                                        </div>
                                                        <div class="button-container">
                                                            <a href="productpage.html?id=${results[5].id}" class="button" alt="link to ${results[5].name} jacket page">View Jacket</a>
                                                        </div>
                                                </div>
                                        </div>`

    } catch (error) {
        console.log(error);
    }
}

getTopRated();