import { useState } from 'react';
import FormStep from '@/components/FormStep';

const LandingSlide = ({ handleNext }) => {
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
        >
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
