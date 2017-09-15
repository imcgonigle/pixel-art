let pixels = document.getElementsByClassName('pixel');
let colorSelections = document.getElementsByClassName('color-selection');

let selectedColor = '#ffc0cb';

for (let i = 0; i < pixels.length; i++) {
  let pixel = pixels[i];
  
  pixel.addEventListener('mouseover', function(event) {
    this.style.background = selectedColor;
  });
}

for (let i = 0; i < colorSelections.length; i++) {
  let colorSelection = colorSelections[i];

  colorSelection.addEventListener('click', function(event) {
    console.log(this.value)
  });
}