import React from 'react';
import Typed from 'react-typed';

import ILY from './ILY';

const StepFive: React.FC = () => {
  return (
    <div className="steps-container">
      <Typed
        typeSpeed={80}
        loop={true}
        strings={[
          'PARABÉNS',
          'CONGRATULATIONS',
          'PARABÉINZINHO',
          'PARAPAPAPAPAPA PA PA PA PA... NÃO, PERA',
          'IHULL',
        ]}
      />
        <ILY />
    </div>
  )
}

export default StepFive;