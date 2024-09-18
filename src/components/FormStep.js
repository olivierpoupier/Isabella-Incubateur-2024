import { useState } from 'react';
import { Fraunces, Montserrat } from 'next/font/google';
import { lightenColor } from '@/utils/ColorCalc';

const fraunces = Fraunces({
    weight: '500',
    subsets: ['latin']
});

const montserrat = Montserrat({
    weights: ['400', '600'],
    subsets: ['latin']
});

const FormStep = ({ stepTitle, subtitle, handlePrevious, validateNext, handleNext, handleSubmit, children, currentColor, previousColor, nextColor }) => {
    const cardColor = lightenColor(currentColor);

    return (
        <div 
            className={`card bg-[${cardColor}] shadow-lg rounded-lg w-[90%] h-[90%] max-w-lg flex flex-col justify-between p-6 mx-auto mt-6 mb-6`}
            style={{ backgroundColor: cardColor }}
        >
            <div className="header">
                {
                    stepTitle &&
                    <h2 className={`${fraunces.className} text-3xl`}>
                        {stepTitle}
                    </h2>
                }
                {
                    subtitle &&
                    <p className={`${montserrat.className} text-md text-gray-600 mb-6`}>
                        {subtitle}
                    </p>
                }
            </div>
            <div className="body w-full max-w-lg">
                <form className={`${montserrat.className} flex flex-col items-center space-y-4 w-full`}>
                    {children}
                </form>
            </div>
            <div className={`${montserrat.className} footer mt-6 flex justify-between`}>
                <button
                    className={`${previousColor} font-bold py-2 px-4 rounded-[50%]`}
                    style={{ 
                        backgroundColor: previousColor,
                        visibility: handlePrevious ? 'visible' : 'hidden'
                    }}
                    onClick={handlePrevious}
                >
                    &lt;
                </button>
                <div className="flex space-x-4">
                    {handleSubmit ? (
                        <button
                            className={`font-bold py-2 px-4 rounded`}
                            style={{ backgroundColor: currentColor }}
                            onClick={handleSubmit}
                        >
                            Commander!
                        </button>
                    ) : (
                        <button
                            className={`font-bold py-2 px-4 rounded-[50%] `}
                            style={{ backgroundColor: nextColor }}
                            onClick={handleNext}
                            {
                                ...validateNext && { disabled: !validateNext() }
                            }
                        >
                            &gt;
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
};

export default FormStep;