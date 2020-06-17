import React from 'react';
import useInterval from '@use-it/interval';

import veronicaoIMG from './veronicao.jpeg';

import './index.css';

interface IProps {
  onChange: (nextStep: string) => void;
}

const Game: React.FC<IProps> = (props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const refAudio = React.useRef<any>(null);

  const [counter, setCounter] = React.useState(0);
  const [img, setImg] = React.useState<any>(null);

  useInterval(() => {
    const { x, y } = getRandomPosition();

    const img = <img
      width="100px"
      height="150px"
      src={veronicaoIMG}
      alt="veronicao"
      style={{ position: 'fixed', top: y, left: x }}
      onClick={() => {
        if (refAudio && refAudio.current) {
          refAudio.current.play();
        }

        setCounter(counter + 1);
        if (counter === 10) {
          props.onChange('5');
        }
      }}
    />;

    setImg(img);
  }, 500);
  

  function getRandomPosition() {
    if (!ref || !ref.current) {
      return { x: undefined, y: undefined };
    }

    const { width, height } = ref.current.getBoundingClientRect();
    return { x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height) };
  }

  return (
    <div className="game-container" ref={ref}>
      {img}
      <audio ref={refAudio}>
        <source src="https://media.vocaroo.com/mp3/h5TW6zxFlWT" />
      </audio>
    </div>
  )
}

export default Game;