function Projects() {
  const projects = [
    {
      title: "Event Registration System",
      desc: "React application for event registration",
      tech: "React, Vite",
    },
    {
      title: "Employee Data App",
      desc: "Fetch employee data from API",
      tech: "React, API",
    },
    {
      title: "Book Finder",
      desc: "Search books using API",
      tech: "JavaScript, HTML, CSS",
    },
  ];

  return (
    <section id="projects">
      <h2>Programming Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <p className="tech-tag">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
