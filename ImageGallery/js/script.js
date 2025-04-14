const mainImage = document.querySelector(".gallery-image img");
const thumbImages = document.querySelectorAll(".gallery-thumbnails img");

//console.log(thumbImages);
/*
for (let i = 0; i < thumbImages.length; i++) {
  thumbImages[i].addEventListener("mouseover", (event) => {
    //console.log(thumbImages[i]);
    //console.log(event.target.src);

    mainImage.src = event.target.src;
    mainImage.animate({ opacity: [0, 1] }, 500);
  });
}
*/

thumbImages.forEach((thumbImage) => {
  //console.log(thumbImage);
  thumbImage.addEventListener("mouseover", (event) => {
    //console.log(thumbImages[i]);
    //console.log(event.target.src);

    mainImage.src = event.target.src;
    mainImage.animate({ opacity: [0, 1] }, 500);
  });
});
