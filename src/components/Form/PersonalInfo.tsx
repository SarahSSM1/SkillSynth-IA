import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Experience from './Experience';
import Skills from './Skills';

interface PersonalInfoProps {
  cvData: any;
  setCvData: (data: any) => void;
}

function PersonalInfo({ cvData, setCvData }: PersonalInfoProps) {
  const handleChange = (field: string, value: string) => {
    setCvData({ ...cvData, [field]: value });
  };

  return (
    <Card border="info" style={{ margin: '4vh' }}>
      <Card.Header>
        <h4>Informações do Currículo</h4>
        <p>Preencha os dados e veja o preview em tempo real</p>
      </Card.Header>

      <Card.Body>
        <Card.Title>Dados pessoais</Card.Title>
        <Card.Text>Informações básicas para contato</Card.Text>
        <hr />

        <Form>
          <Form.Group className="mb-3" controlId="formGridNome">
            <Form.Label>Nome Completo *</Form.Label>
            <Form.Control
              placeholder="Seu nome completo"
              value={cvData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control
              type="email"
              placeholder="seu.email@exemplo.com"
              value={cvData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridTelefone">
              <Form.Label>Telefone *</Form.Label>
              <Form.Control
                placeholder="(11) 99999-9999"
                value={cvData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLinkedin">
              <Form.Label>LinkedIn</Form.Label>
              <Form.Control
                placeholder="linkedin.com/in/seuperfil"
                value={cvData.linkedin}
                onChange={(e) => handleChange('linkedin', e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Label>Resumo Profissional</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Descreva brevemente suas experiências e objetivos profissionais..."
          >
            <Form.Control
              as="textarea"
              placeholder="Descreva brevemente suas experiências e objetivos profissionais..."
              style={{ height: '100px' }}
              value={cvData.summary}
              onChange={(e) => handleChange('summary', e.target.value)}
            />
          </FloatingLabel>
          <Card.Text>Este resumo aparecerá no topo do seu currículo</Card.Text>
        </Form>

        {/* Skills Dinâmicas */}
        <Skills cvData={cvData} setCvData={setCvData} />

        {/* Experiência */}
        <Experience experiences={cvData.experience} />
      </Card.Body>
    </Card>
  );
}

export default PersonalInfo;
