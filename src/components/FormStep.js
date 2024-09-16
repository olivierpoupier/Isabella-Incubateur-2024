import { useState } from 'react';
import { Fraunces, Montserrat } from 'next/font/google';
import { lightenColor } from '@/utils/ColorCalc';

const fraunces = Fraunces({
    weight: '500',
    subsets: ['latin']
});

const montserrat = Montserrat({
    weight: '200',
    subsets: ['latin']
});

const FormStep = ({ stepTitle, handlePrevious, handleNext, handleSubmit, children, currentColor, previousColor, nextColor }) => {
    const cardColor = lightenColor(currentColor);
    console.log(cardColor);

    return (
        <div 
            className={`card bg-[${cardColor}] shadow-lg rounded-lg w-[90%] h-[90%] max-w-md flex flex-col justify-between p-6 mx-auto`}
            style={{ backgroundColor: cardColor }}
        >
            <div className="header">
                {
                    stepTitle &&
                    <h2 className={`${fraunces.className} text-3xl mb-6`}>
                        {stepTitle}
                    </h2>
                }
            </div>
            <div className="body w-full max-w-md">
                <form className={`${montserrat.className} flex flex-col items-center space-y-4 w-full`}>
                    {children}
                </form>
            </div>
            <div className={`${montserrat.className} footer mt-6 flex justify-between`}>
                <button
                    className={`${previousColor} font-bold py-2 px-4 rounded`}
                    style={{ 
                        backgroundColor: previousColor,
                        visibility: handlePrevious ? 'visible' : 'hidden'
                    }}
                    onClick={handlePrevious}
                >
                    Previous
                </button>
                <div className="flex space-x-4">
                    {handleSubmit ? (
                        <button
                            className={`font-bold py-2 px-4 rounded`}
                            style={{ backgroundColor: currentColor }}
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            className={`font-bold py-2 px-4 rounded`}
                            style={{ backgroundColor: nextColor }}
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
};

export default FormStep;