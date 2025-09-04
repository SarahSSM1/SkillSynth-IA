import ExperienceSection from './ExperienceSection';
import PersonalHeader from './PersonalHeader';
import SkillsSection from './SkillsSection';

const CVPreview = ({ cvData }) => {
  if (!cvData) return null;

  return (
    <div className="border border-gray-300 p-6 rounded-lg">
      <PersonalHeader {...cvData} />
      <ExperienceSection experiences={cvData.experience} />
      <SkillsSection skills={cvData.skills} />
    </div>
  );
};

export default CVPreview;
