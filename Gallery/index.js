let imageIndex = 1;
showImages(imageIndex);

let currentImage = (n) => {
    showImages(imageIndex = n);
}

let changeMeRight = () => {
    showImages(imageIndex += 1);
}

let changeMeLeft = () => {
    showImages(imageIndex -= 1);
}

/* Перелистывание */
function showImages(n) {
    let i;
    let images = document.getElementsByClassName("image");
    
    if (n > images.length) {
        imageIndex = 1
    }
    if (n < 1) {
        imageIndex = images.length
    }
  
  /* Ццикл for */
    for (let image of images) {
        image.style.display = "none";
    }   
    images[imageIndex - 1].style.display = "block"; 
}