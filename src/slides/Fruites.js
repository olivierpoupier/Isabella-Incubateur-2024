import { useState } from 'react';
import FormStep from '@/components/FormStep';
import SwatchPicker from '@/components/SwatchPicker';

const Fruites = ({ handlePrevious, handleNext, colors, step }) => {
    const numberOfSelections = 1;
    const [selectedSwatch, setSelectedSwatches] = useState([]);

    const options = [
        {
            name: 'Fraises',
            image: '/assets/B1.png'
        }, {
            name: 'Oranges',
            image: '/assets/B2.png'
        }, {
            name: 'Citrons',
            image: '/assets/B3.png'
        }, {
            name: 'Bleuets',
            image: '/assets/B4.png'
        }, 
    ]

    const images = options.map(option => option.image);

    const validateNext = () => {
        return selectedSwatch.length === numberOfSelections;
    }

    next = () => {
        if (selectedSwatch.length === 0 || !validateNext()) {
            return; // TODO: add disable on next button
        }

        const value = options[selectedSwatch[0]].name;
        console.log('selectedValue', value)
        handleNext(value);
    }

    return (
        <FormStep
            stepTitle="Fruités"
            subtitle="Choisissez votre saveur favorite"
            handlePrevious={handlePrevious}
            validateNext={validateNext}
            handleNext={next}
            previousColor={colors[step - 1]}
            currentColor={colors[step]}
            nextColor={colors[step + 1]}
        >
            <SwatchPicker
                images={images} 
                maxSelection={1} 
                selectedSwatches={selectedSwatch} 
                onSwatchChange={setSelectedSwatches} 
            />
        </FormStep>
    );
};

export default Fruites;
