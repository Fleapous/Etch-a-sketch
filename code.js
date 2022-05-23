
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



