import "./Link.css";
interface ILinkProps {
  href?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Link: React.FC<ILinkProps> = ({ href = "", children, onClick }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    onClick?.(event);
  };

  return (
    <a className="link" href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
