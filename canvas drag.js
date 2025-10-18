let canvas1 = document.querySelector("#drop1")
let canvas2 = document.querySelector("#drop2");
let picture = document.querySelector("#theimage");

function dragimage(ev){ // function on the image
    ev.dataTransfer.setData("text", ev.target.id)

}

function allowThisToDrop(hot) {
    hot.preventDefault();
}

function dropimage(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data))

}