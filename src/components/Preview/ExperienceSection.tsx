function ExperienceSection({ experiences = [] }) {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Experiência Profissional</h3>
      {experiences.length > 0 ? (
        experiences.map((exp, i) => (
          <div key={i} className="mb-4">
            <h4 className="font-bold text-lg">{exp.jobTitle}</h4>
            <p className="text-gray-600 mb-1">{exp.company} | {exp.duration}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Adicione suas experiências de trabalho mais relevantes.</p>
      )}
    </div>
  );
}

export default ExperienceSection;
