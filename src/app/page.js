"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import LandingSlide from '@/slides/LandingSlide';


export default function Home() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    group1: '',
    group2: ''
  });
  const [submitionResponse, setSubmitionResponse] = useState(null);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // change to real url
    const response = await fetch('https://your-basin-url.basin.com', { // TODO change to real url
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitionResponse('Gâteau commandé avec succès!');
    } else {
      setSubmitionResponse('Il y a eu une erreur lors de la commande du gâteau \n Veuillez contacter Isabella et réessayer plus tard');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <LandingSlide formData={formData} handleChange={handleChange} handleNext={handleNext} />;
      case 1:
        return <div></div>; // step 2: name, date, time
      case 2:
        return <div></div>; 
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        key={step}
        className="w-full max-w-md" // Centering the card with width constraints
      >
        {renderStep()}
      </motion.div>
    </div>
  );
}
