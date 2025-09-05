import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Skills({ cvData, setCvData }) {
  const handleChange = (index, value) => {
    const newSkills = [...cvData.skills];
    newSkills[index] = value;
    setCvData({ ...cvData, skills: newSkills });
  };

  return (
    <Card.Body>
      <Card.Title>Habilidades</Card.Title>
      {cvData.skills.map((skill, idx) => (
        <Form.Control
          key={idx}
          value={skill}
          onChange={(e) => handleChange(idx, e.target.value)}
          placeholder={`Habilidade ${idx + 1}`}
          className="mb-2"
        />
      ))}
    </Card.Body>
  );
}

export default Skills;
