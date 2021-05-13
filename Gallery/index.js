// function changeMeLeft() {
//     let image = document.getElementById ('image');
//     if (src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg") {
//         image.src = "https://static.dw.com/image/56615749_401.jpg";
//         }
//     if (src="https://static.dw.com/image/56615749_401.jpg") {
//         image.src = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg";
//         }

//     // catImage.src = "https://static.dw.com/image/56615749_401.jpg";
//     // catImage.src = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg";
//     // catImage.src = "http://c.files.bbci.co.uk/116AB/production/_115093317_neo4.jpg";


// }

// // function changeMeRight() {
// //     let catImage = document.getElementById ('catImage');
// //     catImage.src = "https://static.dw.com/image/56615749_401.jpg";
// // }





/* Устанавливаем индекс слайда по умолчанию */
let imageIndex = 1;
showImages(imageIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function changeMeRight() {
    showImages(imageIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function changeMeLeft() {
    showImages(imageIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentImage(n) {
    showImages(imageIndex = n);
}

/* Функция перелистывания */
function showImages(n) {
    let i;
    let images = document.getElementsByClassName("image");
    
    if (n > images.length) {
        imageIndex = 1
    }
    if (n < 1) {
        imageIndex = images.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let image of images) {
        image.style.display = "none";
    }   
    images[imageIndex - 1].style.display = "block"; 
}