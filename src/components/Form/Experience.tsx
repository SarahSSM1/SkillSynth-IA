import { Card } from "react-bootstrap";

interface ExperienceItem {
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

function Experience({ experiences }: ExperienceProps) {
  return (
    <>
      <Card.Title>Experiência Profissional</Card.Title>
      {experiences.length === 0 ? (
        <Card.Text>Adicione suas experiências de trabalho mais relevantes</Card.Text>
      ) : (
        experiences.map((exp, idx) => (
          <Card.Text key={idx}>
            <strong>{exp.jobTitle}</strong> - {exp.company} ({exp.duration})
            <br />
            {exp.description}
          </Card.Text>
        ))
      )}
    </>
  );
}

export default Experience;
