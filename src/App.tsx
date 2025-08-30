import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css'
import PersonalInfo from './components/Form/PersonalInfo';

function App() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">SkillSynth - IA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
  
          </Nav>

          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Cole sua API Key"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"> Exportar PDF </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <h1 className="text-center my-4">Gerador de Currículos AI</h1>
      <PersonalInfo/>
    </div>
  );
}

export default App
