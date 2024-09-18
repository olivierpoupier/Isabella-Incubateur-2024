"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LandingSlide from '@/slides/LandingSlide';
import Classiques from '@/slides/Classiques';
import { calculateGradientSteps } from '@/utils/ColorCalc';
import Fruites from '@/slides/Fruites';
import NoixEtEpices from '@/slides/NoixEtEpices';
import Themes from '@/slides/Themes';


export default function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const numberOfSteps = 10; // including password and submission
  const [color1, color2] = ['#ffb04f', '#ffa3ea'];
  const colors = calculateGradientSteps(color1, color2, numberOfSteps).slice(0);
  console.log(colors);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    group1: '',
    group2: ''
  });
  const [submitionResponse, setSubmitionResponse] = useState(null);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const handleNext = () => {
    setDirection(1); // moving backward
    setStep(step + 1);
  }
  const handlePrev = () => {
    setDirection(-1); // moving backward
    setStep(step - 1);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log('formData', formData);
    // change to real url
    // const response = await fetch(apiUrl, { // TODO change to real url
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });

    // if (response.ok) {
    //   setSubmitionResponse('Gâteau commandé avec succès!');
    // } else {
    //   setSubmitionResponse('Il y a eu une erreur lors de la commande du gâteau \n Veuillez contacter Isabella et réessayer plus tard');
    // }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <LandingSlide formData={formData} handleChange={handleChange} handleNext={handleNext} colors={colors} step={step}/>;
      case 1:
        return <Classiques handleNext={handleNext} handlePrevious={handlePrev} colors={colors} step={step}/>; // step 2: name, date, time
      case 2:
        return <Fruites handleNext={handleNext}  handlePrevious={handlePrev} colors={colors} step={step}/>;
      case 3:
        return <NoixEtEpices handleNext={handleNext}  handlePrevious={handlePrev} colors={colors} step={step}/>;
      case 4:
        return <Themes handleSubmit={handleSubmit}  handlePrevious={handlePrev} colors={colors} step={step}/>;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
