
function canvasCreator(size){

}

let value = document.createElement('div');
let control = document.querySelector('.controls');

let slider = document.querySelector('#canvas-size');
slider.addEventListener('input', function (){
    value.textContent = this.value;
    control.appendChild(value);
})


