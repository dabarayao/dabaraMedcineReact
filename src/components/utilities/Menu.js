import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faCheck, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import '../styles/stepper.css';

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steppers = [
    {
      label: 'Renseignements',
      icon: faInfo,
    },
    {
      label: 'Choix',
      icon: faCheck,
    },
    {
      label: 'Vos informations utilisateurs',
      icon: faUser,
    },
    {
      label: 'Récapitulatif',
      icon: faClipboardList,
    },
  ];

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  return (
    <div className="stepper">
      {steppers.map((step, index) => (
        <div
          key={index}
          className={`stepper__step ${index === activeStep ? 'active' : ''}`}
          onClick={() => handleStepClick(index)}
        >
          <div className="stepper__step-icon">
            <FontAwesomeIcon icon={step.icon} />
          </div>
          <div className="stepper__step-label">{step.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
