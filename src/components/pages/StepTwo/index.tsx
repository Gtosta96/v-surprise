import React from 'react';
import Typed from 'react-typed';

import Option from '../../shared/Option';

interface IProps {
  onChange: (nextStep: string) => void;
}

const StepTwo: React.FC<IProps> = (props) => {
  const [showButton, setShowButton] = React.useState(false);

  function onChange(option: string) {
    if (option === 'Sim') {
      props.onChange('3');
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
          'Você tem certeza?'
        ]}
      />
      {showButton && (
        <Option onClick={onChange} options={['Sim', 'Não']} />
      )}
    </div>
  )
}

export default StepTwo;