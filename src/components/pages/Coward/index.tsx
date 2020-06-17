import React from 'react';
import Typed from 'react-typed';

import Option from '../../shared/Option';

interface IProps {
  onChange: (nextStep: string) => void;
}

const Coward: React.FC<IProps> = (props) => {
  const [showButton, setShowButton] = React.useState(false);

  function onChange(option: string) {
    props.onChange('2');
  }

  return (
    <div className="steps-container">
      <Typed
        typeSpeed={80}
        onComplete={() => setShowButton(true)}
        strings={[
          'Vai arregar, cuzida?'
        ]}
      />
      {showButton && (
        <Option onClick={onChange} options={['Tá me tirano?', 'Se liga ow!']} />
      )}
    </div>
  )
}

export default Coward;