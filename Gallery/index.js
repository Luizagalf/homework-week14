function changeMeRight() {
    let src = document.getElementById ('image');
    if (src.src.includes("1.jpeg")) {
        src.src = "./2.jpeg";
        return;
        }
    if (src.src.includes("2.jpeg")) {
        src.src = "./3.jpeg";
        return;
        }
    if (src.src.includes("3.jpeg")) {
        src.src = "./4.jpeg";
        return;
        }
    if (src.src.includes("4.jpeg")) {
        src.src = "./1.jpeg";
        return;
        }
}

function changeMeLeft() {
    let src = document.getElementById ('image');
    if (src.src.includes("4.jpeg")) {
        src.src = "./3.jpeg";
        return;
        }
    if (src.src.includes("3.jpeg")) {
        src.src = "./2.jpeg";
        return;
        }
    if (src.src.includes("2.jpeg")) {
        src.src = "./1.jpeg";
        return;
        }
    if (src.src.includes("1.jpeg")) {
        src.src = "./4.jpeg";
        return;
        }
}

