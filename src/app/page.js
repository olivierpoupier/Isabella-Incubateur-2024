"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LandingSlide from '@/slides/LandingSlide';
import Classiques from '@/slides/Classiques';
import { calculateGradientSteps } from '@/utils/ColorCalc';
import Fruites from '@/slides/Fruites';
import NoixEtEpices from '@/slides/NoixEtEpices';
import Themes from '@/slides/Themes';
import PasswordSlide from '@/slides/Password';


export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const numberOfSteps = 7; // including password and submission
  const [color1, color2] = ['#ffb04f', '#ffa3ea'];
  const colors = calculateGradientSteps(color1, color2, numberOfSteps).slice(0);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitionResponse, setSubmitionResponse] = useState(null);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const handleNext = (stepData) => {
    setDirection(1); // moving backward
    setStep(step + 1);

    if(stepData) {
      setFormData({ 
        ...formData, 
        ['step' + step]: stepData 
      });
    }
  }
  const handlePrev = () => {
    setDirection(-1); // moving backward
    setStep(step - 1);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (stepData) => {
    const finalData = stepData ? 
    { 
        ...formData, 
        ['step' + step]: stepData 
    } :
    formData;

    console.log('final data', finalData);
    // change to real url
    const response = await fetch(apiUrl, { // TODO change to real url
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalData),
    });

    if (response.ok) {
      alert('Commande bien reçue! \n Merci et à bientôt :)');
    } else {
      alert('Il y a eu une erreur lors de la commande \n Veuillez contacter Isabella et réessayer plus tard');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <PasswordSlide handleNext={handleNext} colors={colors} step={step} existingData={formData['step'+step]}/>;
      case 1:
        return <LandingSlide formData={formData} handleNext={handleNext} colors={colors} step={step} existingData={formData['step'+step]}/>;
      case 2:
        return <Classiques handleNext={handleNext} handlePrevious={handlePrev} colors={colors} step={step} existingData={formData['step'+step]}/>;
      case 3:
        return <Fruites handleNext={handleNext}  handlePrevious={handlePrev} colors={colors} step={step} existingData={formData['step'+step]}/>;
      case 4:
        return <NoixEtEpices handleNext={handleNext}  handlePrevious={handlePrev} colors={colors} step={step} existingData={formData['step'+step]}/>;
      case 5:
        return <Themes handleSubmit={handleSubmit}  handlePrevious={handlePrev} colors={colors} step={step} existingData={formData['step'+step]}/>;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {
        submitionResponse && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-100 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
              <h1 className="text-2xl font-bold text-center">{submitionResponse}</h1>
              <button
                onClick={() => setSubmitionResponse(null)}
                className="mt-4 bg-[#ffa3ea] text-white p-2 rounded"
              >
                Fermer
              </button>
            </div>
          </div>
        )
      }
      <motion.div
        initial={{ opacity: 0, x: -direction * 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction * 100 }}
        transition={{ duration: 0.5 }}
        key={step}
        className="w-full max-w-lg min-h-[90%]" // Centering the card with width constraints
      >
        {renderStep()}
      </motion.div>
    </div>
  );
}
