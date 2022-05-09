import {ButtonHTMLAttributes} from 'react'
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export function Button({ isOutlined = false, ...props}:ButtonProps) {
  return (
    //Condicional para quando for Outlined
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props}/>    
  )
}