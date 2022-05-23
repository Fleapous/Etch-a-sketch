
function canvasCreator(size){
    let canvas = document.querySelector('.canvas')

    /*removing the old canvas */
    while (canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
    }

    /* Creating the new colors */
    for (let i = 0; i < size * size; i++){
        let canvasPiece = document.createElement('div')
        canvasPiece.classList.add('piece');
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



