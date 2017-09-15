let colorInput = document.getElementById('color-input');
let canvas = document.getElementById('canvas');

let selectedColor = colorInput.value;

const pixelSize = 10;

let numberOfPixelsAcross = (canvas.offsetWidth / pixelSize).toPrecision(5);
let numberOfPixelsTall = (canvas.offsetHeight /pixelSize).toPrecision(5);
let numberOfPixelsToAddToCanvas = numberOfPixelsAcross * numberOfPixelsTall;

let pixels = [];

while (numberOfPixelsToAddToCanvas > 0) {
  let pixel = document.createElement('div');

  pixel.style.width = `${pixelSize}px`;
  pixel.style.height = `${pixelSize}px`;
  pixel.className += 'pixel';
  pixels.push(pixel);
  canvas.appendChild(pixel);
  numberOfPixelsToAddToCanvas--;
}

for (let i = 0; i < pixels.length; i++) {
  let pixel = pixels[i];
  
  pixel.addEventListener('mouseover', function(event) {
    // Check to see if the mouse button is being pressed
    // before changing the color of a pixel.
    if (event.buttons == 1 || event.buttons == 3) {
      this.style.background = selectedColor;
    }
  });
}

colorInput.addEventListener('input', function(event) {
  selectedColor = this.value;
});