import React from 'react';
import './index.css';

interface IProps {
  options: any[];
  onClick?: (option: string) => void;
}

const Option: React.FC<IProps> = (props) => {
  return (
    <div className="option-container">
      {props.options.map((option) => (
        <button
          className="option-button"
          key={option}
          onClick={() => props.onClick && props.onClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default Option;