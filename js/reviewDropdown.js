function toggleReviews() {
    const reviewsContainer = document.querySelector(".reviews-container");
    var displaySetting = reviewsContainer.style.display;
    const arrowButton = document.querySelector("#arrow-button");

    if (displaySetting === "block") {
        reviewsContainer.style.display = "none";
    } else {
        reviewsContainer.style.display = "block";
    }
}