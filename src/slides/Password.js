import { useState } from 'react';
import FormStep from '@/components/FormStep';
import { calculateGradientSteps } from '@/utils/ColorCalc';

const PasswordSlide = ({ handleNext, colors, step }) => {
    const pin = process.env.NEXT_PUBLIC_PIN;
    const [stepData, setStepData] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setStepData({
            ...stepData,
            [name]: value
        });
    };

    const validateNext = () => {
        return stepData.password === pin
    }

    const next = () => {
        if (!validateNext()) {
            return;
        }

        handleNext();
    }

    return (
        <FormStep
            stepTitle="Bienvenue!"
            subtitle="Veuillez entrer le NIP"
            validateNext={validateNext}
            handleNext={next}
            currentColor={colors[step]}
            nextColor={colors[step + 1]}
        >
            <label htmlFor="name">NIP</label>
            <input
                className='w-full p-2 rounded tracking-[1rem] text-center text-[#ff868c] caret-transparent'
                type="text"
                name="password"
                placeholder='******'
                value={stepData.password || ""}
                onChange={handleChange} 
            />
        </FormStep>
    );
};

export default PasswordSlide;
