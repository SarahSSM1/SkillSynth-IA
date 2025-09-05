import Card from 'react-bootstrap/Card';

function CVPreview({ cvData }: { cvData: any }) {
  return (
    <Card>
      <Card.Body>
        {/* Dados pessoais */}
        <Card.Title className="text-xl font-bold mb-2">{cvData.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {cvData.email} | {cvData.phone} | {cvData.linkedin}
        </Card.Subtitle>

        {/* Resumo profissional */}
        <Card.Text className="my-4">{cvData.summary}</Card.Text>

        {/* Experiência */}
        <Card.Title className="text-lg font-semibold mt-4">Experiência Profissional</Card.Title>
        {cvData.experience.map((exp: any, idx: number) => (
          <div key={idx} className="mb-3">
            <h5 className="font-semibold">{exp.jobTitle} - {exp.company}</h5>
            <span className="text-sm text-gray-500">{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}

        {/* Habilidades */}
        <Card.Title className="text-lg font-semibold mt-4">Habilidades</Card.Title>
        <ul className="list-disc list-inside">
          {cvData.skills.map((skill: string, idx: number) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default CVPreview;
