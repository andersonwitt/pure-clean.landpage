import Link from "../../atoms/link";

export type NavDataType = {
  title: string;
  onClick?: () => void;
};

interface INavLinkProps {
  navData: NavDataType[];
}

const NavLink: React.FC<INavLinkProps> = ({ navData }) => {
  return (
    <div>
      {navData.map((nav, index) => (
        <Link onClick={nav.onClick} key={`nav-link-${index}`}>
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLink;
