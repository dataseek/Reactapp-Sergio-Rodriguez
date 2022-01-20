import "./NavBar.css";

const NavBar = (props) => {
  console.log(props);

  return (
    <nav
      className="Navigation"
      style={{ border: `10px solid ${props.myColor}` }}
    >
      <ul>
        <li>Home</li>
        <li>Galeria</li>
        <li>Info</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default NavBar;