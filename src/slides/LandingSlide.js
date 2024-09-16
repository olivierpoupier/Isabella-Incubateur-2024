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
            stepTitle="Welcome!"
            handleNext={() => handleNext(stepData)}
            currentColor={colors[step]}
            nextColor={colors[step + 1]}
        >
            <label htmlFor="name">Votre nom</label>
            <input 
                type="text"
                name="name"
                value={stepData.name || ""}
                onChange={handleChange} 
            />
        </FormStep>
    );
};

export default LandingSlide;
