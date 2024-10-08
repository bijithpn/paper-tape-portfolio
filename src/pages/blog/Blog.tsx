import React, { useEffect, useState } from "react";
import { projects } from "../../data/projects";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.flatMap((project) => project.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects.sort()
      : projects.filter((project) =>
          project.category.includes(selectedCategory)
        );

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "selected" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
