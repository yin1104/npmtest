import React from 'react';
import './Button.css'

export interface ButtonProps {
  label: string;
};

const Button:React.FC<ButtonProps> = (props: ButtonProps) => {
  return <button>Have a good coding {props.label}</button>
}

export default Button;