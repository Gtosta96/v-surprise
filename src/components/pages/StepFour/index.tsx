import React from 'react';
import Typed from 'react-typed';

import Game from './Game';

interface IProps {
  onChange: (nextStep: string) => void;
}

const StepFour: React.FC<IProps> = (props) => {
  const [showButton, setShowButton] = React.useState(false);

  function onChange(option: string) {
    props.onChange(option)
  }

  return (
    <div className="steps-container">
    <Typed
      typeSpeed={80}
      onComplete={() => setShowButton(true)}
      strings={[
        'Então vamos lá...',
        'Clique em 10 Verônicãos... HE HE HE'
      ]}
    />
    {showButton && (
      <Game onChange={onChange} />
    )}
    </div>
  )
}

export default StepFour;