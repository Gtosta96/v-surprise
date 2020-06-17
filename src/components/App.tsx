import React from 'react';

import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';
import StepFour from './pages/StepFour';
import StepFive from './pages/StepFive';
import Coward from './pages/Coward';

import './App.css';

function App() {
  const [step, setStep] = React.useState('4');

  function onChange(nextStep: string) {
    console.log(nextStep);
    setStep(nextStep);
  }

  const COMPONENTS: any = {
    '1': StepOne,
    '2': StepTwo,
    '3': StepThree,
    '4': StepFour,
    '5': StepFive,
    'coward': Coward
  };

  const CurrentStep = COMPONENTS[step] as any;
  return (
    <div className="App">
      <CurrentStep onChange={onChange} />
    </div>
  );
}

export default App;
