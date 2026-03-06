function Button({onClick,children,className }) {
  return (
    <button className={`toggle-btn ${className || ''}`} onClick={onClick}>
        {children}
    </button>
  );
}

export default Button;