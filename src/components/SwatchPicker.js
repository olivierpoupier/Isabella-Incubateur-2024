import React, { useState } from 'react';
import Swatch from './Swatch';

const SwatchPicker = ({ images, selectedSwatches, maxSelection, onSwatchChange  }) => {
  const handleSwatchClick = (index) => {
    let newSelectedSwatches = [];

    if (selectedSwatches.includes(index)) {
      // Deselect the swatch if it's already selected
      newSelectedSwatches = selectedSwatches.filter(i => i !== index);
    } else if (maxSelection === 1) {
      // Select the swatch if the max selection is 1
      newSelectedSwatches = [index];
        
    } else if (selectedSwatches.length < maxSelection) {
      // Select the swatch if the max selection isn't reached
      newSelectedSwatches = [...selectedSwatches, index];
    }

    onSwatchChange(newSelectedSwatches); // Call the parent update function
  };

  return (
    <div style={{ display: 'flex', gap: '20px'}}>
      {images.map((image, index) => (
        <Swatch
          key={index}
          image={image}
          isSelected={selectedSwatches.includes(index)}
          onClick={() => handleSwatchClick(index)}
        />
      ))}
    </div>
  );
};

export default SwatchPicker;