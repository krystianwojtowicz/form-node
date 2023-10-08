import "./Input.scss";

export const Input = (props) => {
  const { id, name, type, placeholder, onChange, onBlur, value, error, label } =
    props;

  return (
    <div className="input-container">
      <label id="label">{label}</label>
      <input
        className="input"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};
