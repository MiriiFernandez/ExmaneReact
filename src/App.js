import logo from "./logo.svg";
import "./App.css";
import Login from "./Componentes/login";
import Enlaces from "./Componentes/Enlaces";
import Home from "./pages/Home";
import Producto from "./Componentes/Producto";


function App() {
  return (
    <div className="App">
      <Login />
      <Enlaces path="pages/Home" name="home" />
      <Producto/>
    </div>
  );
}

export default App;
