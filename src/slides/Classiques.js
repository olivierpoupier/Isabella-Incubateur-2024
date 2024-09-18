import { useState } from 'react';
import FormStep from '@/components/FormStep';
import SwatchPicker from '@/components/SwatchPicker';

const Classiques = ({ handlePrevious, handleNext, colors, step }) => {
    const numberOfSelections = 1;
    const [selectedSwatch, setSelectedSwatches] = useState([]);

    const options = [
        {
            name: 'Chocolat',
            image: '/assets/A1.png'
        }, {
            name: 'Vanille',
            image: '/assets/A2.png'
        }, {
            name: 'Red Velvet',
            image: '/assets/A3.png'
        }, {
            name: 'Caramel',
            image: '/assets/A4.png'
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
            stepTitle="Classiques"
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

export default Classiques;
