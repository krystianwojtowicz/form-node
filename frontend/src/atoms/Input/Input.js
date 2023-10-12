import "./Input.scss";

export const Input = (props) => {
  // eslint-disable-next-line react/prop-types
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
