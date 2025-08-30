import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Experience from './Experience';
import Skills from './Skills';


function PersonalInfo() {
  return (
    <>
        <Card border="info" style={{ margin: '4vh' }}>
          <Card.Header >
            <h4 style={{ margin: '5px' }}>Informações do Currículo</h4>
            <p style={{ padding: '3px' }}> Preencha os dados e veja o preview em tempo real </p>
          </Card.Header>
            
          <Card.Body>
              <Card.Title>Dados pessoais</Card.Title>
              <Card.Text>
                Informações básicas para contato
              </Card.Text>
              
    <hr />

              <Form>
                  <Form.Group className="mb-3" controlId="formGridNome">
                      <Form.Label>Nome Completo *</Form.Label>
                      <Form.Control placeholder="Seu nome completo" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridEmail">
                      <Form.Label>Email *</Form.Label>
                      <Form.Control type="email" placeholder="seu.email@exemplo.com" />
                  </Form.Group>

                  <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridTelefone">
                          <Form.Label>Telefone *</Form.Label>
                          <Form.Control placeholder="(11) 99999-9999" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridLinkedin">
                          <Form.Label>LinkedIn</Form.Label>
                          <Form.Control placeholder="linkedin.com/in/seuperfil" />
                      </Form.Group>
                  </Row>
                
                  <Form.Label>Resumo Profissional</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2" label="Descreva brevemente suas experiencia e objetivos profissionais...">
                    <Form.Control as="textarea" placeholder="Descreva brevemente suas experiencia e objetivos profissionais..." style={{ height: '100px' }} />
                  </FloatingLabel>

                  <Card.Text>
                    Este resumo aparecerá no topo do seu currículo
                  </Card.Text>
              </Form>
          </Card.Body>

          <Skills />
          <Experience /> 
      </Card>
    </>
    
  );
}

export default PersonalInfo;