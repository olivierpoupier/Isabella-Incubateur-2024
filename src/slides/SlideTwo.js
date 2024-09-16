import { useState } from 'react';
import FormStep from '@/components/FormStep';

const Slide2 = ({ handlePrevious, handleNext, colors, step }) => {
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
            stepTitle="Step 2!"
            handlePrevious={handlePrevious}
            handleNext={() => handleNext(stepData)}
            previousColor={colors[step - 1]}
            currentColor={colors[step]}
            nextColor={colors[step + 1]}
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

export default Slide2;
