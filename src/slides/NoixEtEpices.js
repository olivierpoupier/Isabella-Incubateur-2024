import { useState } from 'react';
import FormStep from '@/components/FormStep';
import SwatchPicker from '@/components/SwatchPicker';

const NoixEtEpices = ({ handlePrevious, handleNext, colors, step }) => {
    const numberOfSelections = 1;
    const [selectedSwatch, setSelectedSwatches] = useState([]);

    const options = [
        {
            name: 'Matcha',
            image: '/assets/C1.png'
        }, {
            name: 'Pistache',
            image: '/assets/C2.png'
        }, {
            name: 'Cafe',
            image: '/assets/C3.png'
        }, {
            name: 'Grenoble',
            image: '/assets/C4.png'
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
        
        handleNext(value);
    }

    return (
        <FormStep
            stepTitle="Noix et Épices"
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
                maxSelection={numberOfSelections} 
                selectedSwatches={selectedSwatch} 
                onSwatchChange={setSelectedSwatches} 
            />
        </FormStep>
    );
};

export default NoixEtEpices;
