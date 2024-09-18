import { useState } from 'react';
import FormStep from '@/components/FormStep';
import SwatchPicker from '@/components/SwatchPicker';

const Themes = ({ handlePrevious, handleSubmit, colors, step }) => {
    const numberOfSelections = 2;
    const [selectedSwatches, setSelectedSwatches] = useState([]);

    const options = [
        {
            name: 'Fleur',
            image: '/assets/D1.png'
        }, {
            name: 'Pearl',
            image: '/assets/D2.png'
        }, {
            name: 'Disco',
            image: '/assets/D3.png'
        }, {
            name: 'Martini',
            image: '/assets/D4.png'
        }, {
            name: 'Plante',
            image: '/assets/E1.png'
        }, {
            name: 'Cailloux',
            image: '/assets/E2.png'
        }, {
            name: 'Champignons',
            image: '/assets/E3.png'
        }, {
            name: 'Porcelaine',
            image: '/assets/E4.png'
        }, 
    ]

    const images = options.map(option => option.image);

    function validateNext() {
        return selectedSwatches.length === numberOfSelections;
    }

    function submit() {
        if (selectedSwatches.length === 0 || !validateNext()) {
            return; // TODO: add disable on next button
        }


        const values = selectedSwatches.map((selectedSwatchIndex) => options[selectedSwatchIndex].name);
        console.log('selectedValues', values)
        handleSubmit(values);
    }

    return (
        <FormStep
            stepTitle="Thèmes"
            subtitle="Choisissez vos deux thèmes favoris"
            handlePrevious={handlePrevious}
            validateNext={validateNext}
            handleSubmit={submit}
            previousColor={colors[step - 1]}
            currentColor={colors[step]}
            nextColor={colors[step + 1]}
        >
            <SwatchPicker
                images={images} 
                maxSelection={numberOfSelections} 
                selectedSwatches={selectedSwatches} 
                onSwatchChange={setSelectedSwatches} 
            />
        </FormStep>
    );
};

export default Themes;
