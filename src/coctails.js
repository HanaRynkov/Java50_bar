const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsContainer = document.querySelector(".details-container")
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class");
const hideButtonElement = document.getElementById("hide-button");
const HIDDEN = "hidden";
const IS_POINT = "is_point";
function showDetails() {
    mainElement.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function(){
        detailsContainer.classList.remove(IS_POINT)
    });

}
function hideDetails() {
    mainElement.classList.add(HIDDEN);
}

function setDetails(anchor) {
    console.log(anchor);
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    showDetails();
    console.log(dataImage);
    detailsImage.src = dataImage;
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");

}
const color = anchor.getAttribute("data-text-color");
    if (color) {
        detailsTitle.style.color = color;
    } else {
        detailsTitle.style.color = '';
    }
for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click",function(){
        setDetails(anchorElements[i]);
    } )
}
hideButtonElement.addEventListener("click",hideDetails);