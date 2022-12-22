import Container from '../commons/container';
import SkillBox from './SkillBox';

export default function Skills() {
  const content = (
    <div className="w-[1177px] flex justify-between">
      <SkillBox title="Frontend" />
      <SkillBox title="Backend" />
      <div className="w-[272px] h-[766px] flex flex-col justify-between gap-6">
        <SkillBox title="Version Control" />
        <SkillBox title="Communication" />
      </div>
    </div>
  );

  return <Container title="SKILLS" content={content}></Container>;
}
