import React from 'react';
import Typed from 'react-typed';

import Option from '../../shared/Option';

interface IProps {
  onChange: (nextStep: string) => void;
}

const StepThree: React.FC<IProps> = (props) => {
  const [showButton, setShowButton] = React.useState(false);

  function onChange(option: string) {
    props.onChange('4');
  }

  return (
    <div className="steps-container">
    <Typed
      typeSpeed={80}
      onComplete={() => setShowButton(true)}
      strings={[
        'Você tem CERTEZA MESMO?'
      ]}
    />
    {showButton && (
      <Option onClick={onChange} options={['Aff, que ranço!', 'Atribulado']} />
    )}
    </div>
  )
}

export default StepThree;