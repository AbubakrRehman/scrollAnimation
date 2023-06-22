const boxes = document.querySelectorAll(".box");

function chechBoxes() {
    boxes.forEach((box) => {
        let viewportBottom = window.innerHeight / 5 * 4;
        if (box.getBoundingClientRect().top < viewportBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
}

chechBoxes();
window.addEventListener("scroll", chechBoxes)





