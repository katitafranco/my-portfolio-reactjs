/* import { useState } from "react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };

  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Project A", "Project B", "Project C"].map((project) => (
          <div
            key={project}
            onClick={() => handleProjectClick(project)}
            className={`p-4 border rounded-lg ${
              selectedProject === project ? "bg-wine text-white" : "bg-white"
            }`}
          >
            {project}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
 */

const ProjectsSection = () => {
  return (
    <section
      id="proyectos"
      className="h-screen w-full bg-red-100 flex items-center justify-center"
    >
      <div className="text-center text-black p-4">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="mt-4 text-xl">Here are some of my recent works.</p>
      </div>
    </section>
  );
};

export default ProjectsSection;
