export const Input = (props) => {
  const { id, name, type, placeholder, onChange, onBlur, value, error } = props;

  return (
    <div className="input-container">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {error && <p>{error}</p>}
    </div>
  );
};
