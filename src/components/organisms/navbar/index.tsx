import "./NavBar.css";
import NavLink, { NavDataType } from "../../molecules/NavLink";

export const navData: NavDataType[] = [
  {
    title: "Nossos Serviços",
  },
  {
    title: "Sobre nós",
  },
  {
    title: "Portfólio",
  },
  {
    title: "Nosso Time",
  },
];

const NavBar = () => {
  return (
    <nav className="navbar">
      <>
        <h6>1</h6>
        <NavLink navData={navData} />
      </>
    </nav>
  );
};

export default NavBar;
