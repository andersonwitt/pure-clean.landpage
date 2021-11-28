import "./Button.css";

interface IButtonProps {
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button className="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
