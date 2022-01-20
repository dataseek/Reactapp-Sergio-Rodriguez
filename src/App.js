import './App.css';
import Navbar from "../components/Navbar";


const name = "Daniel";
const orangeColor = "orange";
const blueColor = "blue";
const redColor = "red";

function App() {
  return (
    <>
    <NavBar myColor={orangeColor} />
    <NavBar myColor={blueColor} />
    <NavBar myColor={redColor} />

    <h1>Hello user: {name}</h1>
  </>
  
  );
}



export default App;
