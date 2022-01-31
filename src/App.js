import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav , NavDropdown} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function App() {
  return (
    <div className="App">
      <Navbar bg="success" variant="dark" expand="sm" collapseOnSelect>
        <Navbar.Brand href="#home">
        <img src={logo} className="App-logo" alt="logo" />
        </Navbar.Brand>        
        <NavbarToggle/>
        <NavbarCollapse>    
          <Nav>  
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">T-Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Jeans</NavDropdown.Item>
            </NavDropdown>  
            <Nav.Link href="#features">Today's Deal</Nav.Link>
            <Nav.Link href="#features">About us</Nav.Link>
          </Nav>  
        </NavbarCollapse>  
       
      </Navbar>
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
