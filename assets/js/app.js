let colorInput = document.getElementById('color-input');
let canvas = document.getElementById('canvas');

let selectedColor = colorInput.value;
let isMouseDown = false;

const pixelHeight = 10;
const pixelWidth = 10;

let numberOfPixelsAcross = (canvas.offsetWidth / pixelWidth).toPrecision(5);
let numberOfPixelsTall = (canvas.offsetHeight /pixelHeight).toPrecision(5);

let numberOfPixelsToAddToCanvas = numberOfPixelsAcross * numberOfPixelsTall;

let pixels = [];

while (numberOfPixelsToAddToCanvas > 0) {
  let pixel = document.createElement('div');
  pixel.style.width = `${pixelWidth}px`;
  pixel.style.height = `${pixelHeight}px`;
  pixel.className += 'pixel';

  pixels.push(pixel);
  canvas.appendChild(pixel);

  numberOfPixelsToAddToCanvas--;
}

for (let i = 0; i < pixels.length; i++) {
  let pixel = pixels[i];
  
  pixel.addEventListener('mouseover', function(event) {
    if (isMouseDown) {
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