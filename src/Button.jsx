function Button({onClick,children }) {
  return (
    <button className={`toggle-btn`} onClick={onClick}>
        {children}
    </button>
  );
}

export default Button;