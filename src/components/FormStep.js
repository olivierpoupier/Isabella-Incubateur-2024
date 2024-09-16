import { useState } from 'react';
import { Fraunces, Montserrat } from 'next/font/google';

const fraunces = Fraunces({
    weight: '500',
    subsets: ['latin']
});

const montserrat = Montserrat({
    weight: '200',
    subsets: ['latin']
});

const FormStep = ({ stepTitle, handlePrevious, handleNext, handleSubmit, children, cardColor, previousButtonColor, nextButtonColor, submitButtonColor }) => {
    return (
        <div className="card bg-white shadow-lg rounded-lg w-[90%] h-[90%] max-w-md flex flex-col justify-between p-6 mx-auto">
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
                    className={`${previousButtonColor} font-bold py-2 px-4 rounded`}
                    onClick={handlePrevious}
                    style={{ visibility: handlePrevious ? 'visible' : 'hidden' }}
                >
                    Previous
                </button>
                <div className="flex space-x-4">
                    {handleSubmit ? (
                        <button
                            className={`${submitButtonColor} font-bold py-2 px-4 rounded`}
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            className={`${nextButtonColor} font-bold py-2 px-4 rounded`}
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