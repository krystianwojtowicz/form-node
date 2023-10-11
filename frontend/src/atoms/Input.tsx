import React, { ChangeEvent, FocusEvent } from "react";
import "./Input.scss";

interface InputProps {
  id: string;
  name: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  value: string;
  error: string;
  label: string;
}

export const Input: React.FC<InputProps> = (props) => {
  const { id, name, type, onChange, onBlur, value, error, label } = props;

  return (
    <div className="input-container">
      <label id="label">{label}</label>
      <input
        className="input"
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};
