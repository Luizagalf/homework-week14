function changeMeRight() {
    let image = document.getElementById ('image');
    if (src="./1.jpeg") {
        image.src = "./2.jpeg";
        }
    if (src="./2.jpeg") {
        image.src = "./3.jpeg";
        }
    if (src="./3.jpeg") {
        image.src = "./4.jpeg";
        }
    if (src="./4.jpeg") {
        image.src = "./1.jpeg";
        }
}

function changeMeLeft() {
    let image = document.getElementById ('image');
    if (src="./4.jpeg") {
        image.src = "./3.jpeg";
        }
    if (src="./3.jpeg") {
        image.src = "./2.jpeg";
        }
    if (src="./2.jpeg") {
        image.src = "./1.jpeg";
        }
    if (src="./1.jpeg") {
        image.src = "./4.jpeg";
        }
}

