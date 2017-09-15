let pixels = document.getElementsByClassName('pixel');
let colorInput = document.getElementById('color-input');

let selectedColor = colorInput.value;
let isMouseDown = false;

for (let i = 0; i < pixels.length; i++) {
  let pixel = pixels[i];
  
  pixel.addEventListener('mouseover', function(event) {
    if(isMouseDown) {
      this.style.background = selectedColor;
    }
  });
}

colorInput.addEventListener('input', function(event) {
  selectedColor = this.value;
});

document.addEventListener('mousedown', function (event) {
  isMouseDown = true;
});

document.addEventListener('mouseup', function (event) {
  isMouseDown = false;
})