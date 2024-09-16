function hexToRgb(hex) {
    // Remove the hash (#) if present
    hex = hex.replace('#', '');
  
    // Parse the 6-character hex string
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
  
    return [r, g, b];
  }
  
  function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  }
  
  export function calculateGradientSteps(color1, color2, steps) {
    let rgb1 = hexToRgb(color1);
    let rgb2 = hexToRgb(color2);
  
    let stepFactor = 1 / (steps - 1);
    let gradientArray = [];
  
    for (let i = 0; i < steps; i++) {
      let r = Math.round(rgb1[0] + stepFactor * i * (rgb2[0] - rgb1[0]));
      let g = Math.round(rgb1[1] + stepFactor * i * (rgb2[1] - rgb1[1]));
      let b = Math.round(rgb1[2] + stepFactor * i * (rgb2[2] - rgb1[2]));
  
      gradientArray.push(rgbToHex(r, g, b));
    }
  
    return gradientArray;
  }