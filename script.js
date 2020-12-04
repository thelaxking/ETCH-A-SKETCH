const gridNo = document.querySelector(".gridNo");
const black = document.querySelector(".black");
const multiColor = document.querySelector(".multi-color");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const box = document.querySelector("#box");

function creatingGrid(g) {
    for (let i = 0; i < g * g; i++) {
        let children = document.createElement("div");
        children.classList.add("children");
        box.appendChild(children);
    }
    let children = document.querySelectorAll(".children");
    children.forEach(children => {
        children.style.backgroundColor = "white";
    });
}

function sizeOfGrid(size) {
    box.style.setProperty("--grid-rows", size);
    box.style.setProperty("--grid-cols", size);
}

function delGrid() {
    box.innerHTML = "";
}

gridNo.addEventListener("click", function () {
    let size = prompt("Grid size? 0-64");
    if (size > 64) {
        delGrid();
        sizeOfGrid(10);
        creatingGrid(10);
        return alert("Please enter a number below 64");
    } else if (size > 0) {
        delGrid();
        sizeOfGrid(size);
        creatingGrid(size);
    } else if (size == null) {
        delGrid();
        sizeOfGrid(10);
        creatingGrid(10);
    }
});

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function randomColor() {
    return ("rgb(" + random(0, 255) + ", " + random(0, 255) + ", " + random(0, 255) + ")");
}

function setColor(color) {
    const children = document.querySelectorAll("div");
    for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("mouseover", function (e) {
            if (color == "black") {
                e.target.style.backgroundColor = "black";
            } else if (color == "multiColor") {
                e.target.style.backgroundColor = randomColor();
            } else {
                e.target.style.backgroundColor = "white";
            }
        });
    }
}

black.addEventListener("click", () => {
    let color = "black";
    setColor(color);
});

multiColor.addEventListener("click", () => {
    let color = "multiColor";
    setColor(color);
});

eraser.addEventListener("click", () => {
    let color = "erase";
    setColor(color);
});

clear.addEventListener("click", reset);

function reset() {
    let children = document.querySelectorAll(".children");
    children.forEach(children => {
        children.style.backgroundColor = "white";
    });
}

sizeOfGrid(10);
creatingGrid(10);