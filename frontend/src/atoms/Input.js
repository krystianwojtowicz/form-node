import "./Input.scss";

export const Input = (props) => {
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
