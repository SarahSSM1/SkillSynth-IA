function SkillsSection({ skills = [] }) {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Habilidades</h3>
      {skills.length > 0 ? (
        <ul className="list-disc list-inside text-gray-700">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Adicione suas principais competências técnicas.</p>
      )}
    </div>
  );
}

export default SkillsSection;
