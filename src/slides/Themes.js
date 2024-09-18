import { useState } from 'react';
import FormStep from '@/components/FormStep';
import SwatchPicker from '@/components/SwatchPicker';

const Themes = ({ handlePrevious, handleSubmit, colors, step }) => {
    const [selectedSwatch, setSelectedSwatches] = useState([]);

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

    function submit() {
        if (selectedSwatch.length === 0) {
            return; // TODO: add disable on next button
        }

        const value = options[selectedSwatch[0]].name;
        console.log('selectedValue', value)
        handleSubmit(value);
    }

    return (
        <FormStep
            stepTitle="Thèmes"
            subtitle="Choisissez vos deux thèmes favoris"
            handlePrevious={handlePrevious}
            handleSubmit={submit}
            previousColor={colors[step - 1]}
            currentColor={colors[step]}
            nextColor={colors[step + 1]}
        >
            <SwatchPicker
                images={images} 
                maxSelection={2} 
                selectedSwatches={selectedSwatch} 
                onSwatchChange={setSelectedSwatches} 
            />
        </FormStep>
    );
};

export default Themes;
