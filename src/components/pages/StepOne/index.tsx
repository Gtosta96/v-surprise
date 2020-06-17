import React from 'react';
import Typed from 'react-typed';

import Option from '../../shared/Option';

interface IProps {
  onChange: (nextStep: string) => void;
}

const StepOne: React.FC<IProps> = (props) => {
  const [showButton, setShowButton] = React.useState(false);

  function onChange(option: string) {
    if (option === 'Sim') {
      props.onChange('2');
    } else {
      props.onChange('coward');
    }
  }

  return (
    <div className="steps-container">
      <Typed
        typeSpeed={80}
        onComplete={() => setShowButton(true)}
        strings={[
          'Olá, Verônica. Você está preparada?'
        ]}
      />
      {showButton && (
        <Option onClick={onChange} options={['Sim', 'Não']} />
      )}
    </div>
  )
}

export default StepOne;