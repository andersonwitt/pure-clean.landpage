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
    <>
      {navData.map((nav, index) => (
        <Link onClick={nav.onClick} key={`nav-link-${index}`}>
          {nav.title}
        </Link>
      ))}
    </>
  );
};

export default NavLink;
