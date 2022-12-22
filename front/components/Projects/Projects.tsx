import Container from '../commons/container';
import ProjectBox from './ProjectBox';

const projects = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function Projects() {
  const content = (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-16">
        {projects.map((item) => (
          <ProjectBox key={item.id} />
        ))}
      </div>
    </div>
  );

  return <Container title="PROJECTS" content={content}></Container>;
}
