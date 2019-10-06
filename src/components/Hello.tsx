import React from 'react'
import './Hello.css';

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export const Hello: React.FC<Props> = ({ name, enthusiasmLevel = 1 }) => {
  if (enthusiasmLevel  <= 0) {
    throw new Error('enthusiasmLevel is lees than zero')
  }

  function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}