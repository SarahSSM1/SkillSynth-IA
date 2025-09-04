import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import PersonalInfo from './components/Form/PersonalInfo';
import CVPreview from './components/Preview/CVPreview';

function App() {
  const [cvData, setCvData] = useState({
    name: 'Seu Nome',
    email: 'seu.email@exemplo.com',
    phone: '(00) 00000-0000',
    linkedin: 'linkedin.com/in/seuperfil',
    summary: 'Clique em "Gerar Resumo AI" para criar um resumo profissional.',
    experience: [{
      jobTitle: 'Seu Cargo',
      company: 'Sua Empresa',
      duration: 'Período',
      description: 'Responsabilidades e conquistas.'
    }],
    skills: ['React', 'JavaScript', 'HTML', 'CSS']
  });

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      {/* Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary shadow-md">
        <Container fluid>
          <Navbar.Brand href="#">SkillSynth - IA</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Cole sua API Key" className="me-2" />
              <Button variant="outline-success">Exportar PDF</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Título */}
      <h1 className="text-center my-4 text-2xl font-semibold">Gerador de Currículos AI</h1>

      {/* Container 50/50 */}
      <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-7xl mx-auto">
        {/* Formulário (esquerda) */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <PersonalInfo cvData={cvData} setCvData={setCvData} />
          </div>
        </div>

        {/* Preview (direita) */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md h-full">
            <CVPreview cvData={cvData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
