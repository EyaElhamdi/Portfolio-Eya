import React, { useState } from "react"; 
import { projects } from "../data"; 
import ProjectCard from "../components/ProjectCard";
import "../style/Projects.css"; 

export default function Projects() {
  const [search, setSearch] = useState(""); // État pour la recherche par texte
  const [category, setCategory] = useState("All"); 
  const [selectedProject, setSelectedProject] = useState(null);

  // Création d'une liste unique des catégories à partir des tags des projets
  const categories = ["All", ...new Set(projects.flatMap((p) => p.tags || []))];

  // Filtrage des projets selon recherche 
  const filteredProjects = projects.filter((project) => {
    const q = search.trim().toLowerCase(); // Nettoyage et passage en minuscule
    const matchesSearch =
      !q || // si recherche vide, tout s'affiche
      project.title.toLowerCase().includes(q) || // correspond au titre
      (project.description && project.description.toLowerCase().includes(q)); 
    const matchesCategory = category === "All" || (project.tags || []).includes(category);
    return matchesSearch && matchesCategory; 
  });

  return (
    <div className="projects-container"> 
      <h2>Mes Projets</h2> 

      
      <input
        type="text"
        placeholder="Rechercher un projet..."
        value={search} 
        onChange={(e) => setSearch(e.target.value)} // mise à jour de l'état
        className="project-search"
      />

      {/* Boutons de filtrage par catégorie */}
      <div className="project-categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)} // changement de catégorie au clic
            className={category === cat ? "active" : ""} 
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Liste des projets filtrés */}
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id} 
            project={project} 
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Modal: affichage des détails du projet */}
      {selectedProject && (
        <div
          className="modal-overlay" 
          onClick={() => setSelectedProject(null)} // fermer la modal au clic hors du contenu
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} 
          >
            
            
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <img src={selectedProject.image} alt={selectedProject.title} />
            <h3>{selectedProject.title}</h3>
            <p className="modal-longdesc">
              {selectedProject.longDesc || selectedProject.description}
            </p>

            <p><strong>Technologies :</strong> {selectedProject.techs}</p>
            {selectedProject.duration && (
              <p><strong>Durée :</strong> {selectedProject.duration}</p>
            )}
            {selectedProject.role && (
              <p><strong>Rôle :</strong> {selectedProject.role}</p>
            )}

            <div className="modal-actions">
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link"
                >
                  Voir la démo
                </a>
              )}
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-link"
                >
                  Voir le code
                </a>
              )}
            </div>

            {selectedProject.images && selectedProject.images.length > 1 && (
              <div className="modal-gallery">
                {selectedProject.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selectedProject.title} ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
