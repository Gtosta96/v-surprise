import React from 'react';
import Typed from 'react-typed';
import { heart } from './heart';

const ILY: React.FC = () => {
  return (
    <div className="steps-container">
      <Typed
        typeSpeed={10}
        strings={[
          heart,
        ]}
      >
        <pre />
        </Typed>
    </div>
  )
}

export default ILY;