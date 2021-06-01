const reviewDropdown = document.querySelector(".reviews");
const decsriptionDropdown = document.querySelector(".description");
const specsDropdown = document.querySelector(".specs");
const reviewArrow = document.getElementById("reviewArrow");
const descriptionArrow = document.getElementById("descriptionArrow");
const specsArrow = document.getElementById("specsArrow");

function reviewSection() {
    if (reviewDropdown.style.display === "none") {
        reviewDropdown.style.display = "block";
        reviewArrow.classList.remove("fa-chevron-down");
        reviewArrow.classList.add("fa-chevron-up");
    } else {
        reviewDropdown.style.display = "none";
        reviewArrow.classList.remove("fa-chevron-up");
        reviewArrow.classList.add("fa-chevron-down");
    }
}

function descriptionSection() {
    if (decsriptionDropdown.style.display === "none") {
        decsriptionDropdown.style.display = "block";
        descriptionArrow.classList.remove("fa-chevron-down");
        descriptionArrow.classList.add("fa-chevron-up");
    } else {
        decsriptionDropdown.style.display = "none";
        descriptionArrow.classList.remove("fa-chevron-up");
        descriptionArrow.classList.add("fa-chevron-down");
    }
}

function specsSection() {
    if (specsDropdown.style.display === "none") {
        specsDropdown.style.display = "block";
        specsArrow.classList.remove("fa-chevron-down");
        specsArrow.classList.add("fa-chevron-up");
    } else {
        specsDropdown.style.display = "none";
        specsArrow.classList.remove("fa-chevron-up");
        specsArrow.classList.add("fa-chevron-down");
    }
}