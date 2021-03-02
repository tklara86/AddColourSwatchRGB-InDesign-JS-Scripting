//AddColourSwatchRGB.jsx
//An InDesign JavaScript 

//AddColourSwatchRGB.jsx 1.0 8 February 2021

//Creates multiple RGB colour swatches from HEX values
//Make sure that one of your colour swatch is in RGB otherwise it will throw an error



const colorSwatches = [

  {
    name: 'Blue purple',
    hexCode: '#A4B0F5'
  },
  {
    name: 'Orange dark',
    hexCode: '#F58F29'
  }
]

function hexToRGB(hex) {

  for (var i = 0; i < hex.length; i++) {
    if (hex[i].hexCode.charAt(0) === '#') {
      hex[i].hexCode = hex[i].hexCode.substr(1);
    }

    if ((hex[i].hexCode.length < 2) || (hex[i].hexCode.length > 6)) {
      return false;
    }

    var values = hex[i].hexCode.split(''),
      r,
      g,
      b;

    if (hex[i].hexCode.length === 6) {
      r = parseInt(values[0].toString() + values[1].toString(), 16);
      g = parseInt(values[2].toString() + values[3].toString(), 16);
      b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else if (hex[i].hexCode.length === 3) {
      r = parseInt(values[0].toString() + values[0].toString(), 16);
      g = parseInt(values[1].toString() + values[1].toString(), 16);
      b = parseInt(values[2].toString() + values[2].toString(), 16);
    } else {
      return false;
    }

    if (!hex[i].name || hex[i].name === '') {
      app.activeDocument.colors.add({
        colorValue: [r, g, b],
        name: "R=" + r + ' ' + "G=" + g + ' ' + "B=" + b
      });
    } else {
      app.activeDocument.colors.add({
        colorValue: [r, g, b],
        name: hex[i].name
      });
    }

  }
}


function main() {
  //Make sure a document is open.
  app.documents.length != 0 ? hexToRGB(colorSwatches) : alert('Please open a document');
}

main();