import React from "react";
import './Button.css';
const Button: React.FC<{texto:string,edad:number}> = ({texto,edad}) => {
  return <button onClick = {()=>console.log({edad})} className="btn">{texto}</button>;
};

export default Button;
