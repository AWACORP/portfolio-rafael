import { projectList } from "../datas/projectList";

function ProjectList() {
  const categories = projectList.reduce(
    (acc, project) =>
      acc.includes(project.category) ? acc : acc.concat(project.category),
    []
  );

  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul>
        {projectList.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
