let isdown;


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
        canvasPiece.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        canvas.appendChild(canvasPiece);
        paint();
    }
}

let value = document.createElement('div');
let control = document.querySelector('.controls');

let slider = document.querySelector('#canvas-size');
slider.addEventListener('input', function (){
    value.textContent = this.value;
    control.appendChild(value);
    canvasCreator(this.value)
})

function paint(){

    let piece = document.querySelectorAll('.piece');
    piece.forEach(function (elem){
        elem.addEventListener('mouseenter', function (){
            console.log('anan');
        });
    });

}

function drawing(){
    let color;

    let isDown;
    let classic;
    let rainbow;

    if (isDown === true){
        if (classic === true){
            paint();
        }
        else if (rainbow ===  true){

        }
    }
}

let test = document.getElementById('test');
test.addEventListener('mouseenter', function (){
    console.log('test triggered');
})

