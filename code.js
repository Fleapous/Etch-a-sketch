let isDown;
let classicDown;
let rainbowDown;
let eraserDOwn;
let clearDown;

/* bindings */
let canvas = document.querySelector('.canvas');
let monoColor = document.querySelector('#black');
let Rainbow = document.querySelector('#rainbow');
let Eraser = document.querySelector('#eraser');
let value = document.createElement('div');
let control = document.querySelector('.controls');

/* event listeners */
canvas.addEventListener('mousedown', function (){
    isDown = true;
    console.log('true');
    paint();
});
canvas.addEventListener('mouseup', function (){
    isDown = false;
    console.log('false');
});


monoColor.addEventListener('click', function (){
    classicDown = !classicDown;
    rainbowDown = false;
    eraserDOwn = false;
});
Rainbow.addEventListener('click', function (){
    rainbowDown = !rainbowDown;
    classicDown = false;
    eraserDOwn = false;
});

Eraser.addEventListener('click', function (){
    eraserDOwn = !eraserDOwn;
    rainbowDown = false;
    classicDown = false;
});

/* slider value display */

let slider = document.querySelector('#canvas-size');
slider.addEventListener('input', function (){
    value.textContent = this.value;
    control.appendChild(value);
    canvasCreator(this.value)
})

function draw(color, elem) {
    if (isDown === true) {
        if (classicDown === true) {
            elem.style.background = `${color}`;
        }
    }
}

/* functions */
function paint(){
    let piece = document.querySelectorAll('.piece');
    piece.forEach(function (elem){
        elem.addEventListener('mouseenter', function (){
            draw('black', this);
        });
    });
}

function canvasCreator(size){
    let canvas = document.querySelector('.canvas')
    let pieceSize = 500 / size

    /*removing the old canvas */
    while (canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }

    /* Creating the new colors */
    for (let i = 0; i < size * size; i++){
        let canvasPiece = document.createElement('div')
        canvasPiece.classList.add('piece');
        canvasPiece.style.width = `${pieceSize}px`;
        canvasPiece.style.height = `${pieceSize}px`;
        /*canvasPiece.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;*/
        canvas.appendChild(canvasPiece);

    }

}

/* for testing the canvas responsiveness */
let test = document.getElementById('test');
test.addEventListener('mouseenter', function (){
    console.log('test triggered');
})

