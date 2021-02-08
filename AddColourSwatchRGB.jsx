//AddColourSwatchRGB.jsx
//An InDesign JavaScript 
/*  
"AddColourSwatchRGB.jsx" 1.0 8 February 2021
*/
// Creates multiple RGB colour swatches
// Make sure that one of your colour swatch is in RGB. 
//If all your swatches are in CMYK it will throw an error.



const colorSwatches = [
  {
    swatchName: 'White',
    r: 255,
    g: 255,
    b: 255
  },
  {
    swatchName: 'Accent',
    r: 253,
    g: 149,
    b: 88
  },
  {
    swatchName: 'GreyLight',
    r: 245,
    g: 245,
    b: 245
  },
  {
    swatchName: 'GreyDark',
    r: 162,
    g: 162,
    b: 162,
  },
  {
    swatchName: 'BodyText',
    r: 188,
    g: 188,
    b: 188
  },
  {
    swatchName: 'BodyTextAlt',
    r: 41,
    g: 56,
    b: 69
  }
];

(function () {
  //Make sure a document is open.
  if (app.documents.length != 0) {
    getSwatchName(colorSwatches);
  }
  else {
    alert("Please open a document.");
  }
})();

function getSwatchName(swatch) {
  for (i = 0; i < swatch.length; i++) {
    app.activeDocument.colors.add({
      colorValue: [swatch[i].r, swatch[i].g, swatch[i].b],
      name: swatch[i].swatchName
    });
  }
}


