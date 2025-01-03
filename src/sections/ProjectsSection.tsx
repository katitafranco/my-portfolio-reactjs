const ProjectsSection = () => (
  <section
    id="projects"
    className="min-h-screen w-full flex flex-col items-center justify-center bg-wine text-white"
  >
    <h2 className="text-4xl font-bold">Projects</h2>
    <p className="mt-2 text-xl">Here are some of my favorite works:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white shadow-md rounded p-4">
        <h3 className="font-bold text-lg">Project Name</h3>
        <p className="text-sm mt-2">Short description of the project.</p>
        <a
          href="https://github.com/tuusuario/proyecto"
          target="_blank"
          rel="noopener noreferrer"
          className="text-wine underline mt-4 block"
        >
          View Project
        </a>
      </div>
    </div>
  </section>
);
export default ProjectsSection;
