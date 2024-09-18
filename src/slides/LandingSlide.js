import { useState } from 'react';
import FormStep from '@/components/FormStep';
import { calculateGradientSteps } from '@/utils/ColorCalc';

const LandingSlide = ({ handleNext, colors, step }) => {
    const [stepData, setStepData] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStepData({
            ...stepData,
            [name]: value
        });
    };

    return (
        <FormStep
            stepTitle="Bienvenue!"
            handleNext={() => handleNext(stepData)}
            currentColor={colors[step]}
            nextColor={colors[step + 1]}
        >
            <label htmlFor="name">Votre nom</label>
            <input
                className='w-full p-2 rounded'
                type="text"
                name="name"
                placeholder='Isabella'
                value={stepData.name || ""}
                onChange={handleChange} 
            />

            <label htmlFor="dateLivraison">Date de livraison</label>
            <select
                className='w-full p-2 rounded'
                name="dateLivraison"
                value={stepData.dateLivraison || ""}
                onChange={handleChange} 
            >
                <option value="2024-09-22">22 Septembre 2024</option>
            </select>

            <label htmlFor="name">Heure de livraison</label>
            <input
                className='w-full p-2 rounded'
                type="text"
                name="heureDeLivraison"
                placeholder='11h11'
                value={stepData.heureDeLivraison || ""}
                onChange={handleChange} 
            />
        </FormStep>
    );
};

export default LandingSlide;
