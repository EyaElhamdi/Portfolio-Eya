import React from "react";


export default function ProjectCard({ project, onOpen }) {
  return (
    <article 
      className="project-card" 
      onClick={onOpen} 
      role="button" 
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") onOpen(); }} 
    >
      <img src={project.image} alt={project.title} />

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      {/* Boutons "Voir" et "Démo" */}
      <div className="project-buttons">
        {/* Bouton Voir : stopPropagation pour éviter que le click sur la card se déclenche deux fois */}
        <button className="btn-view" onClick={(e) => { e.stopPropagation(); onOpen(); }}>
          Voir
        </button>

        
        {project.demo && (
          <a 
            className="btn-view" 
            href={project.demo} 
            target="_blank" 
            rel="noreferrer" 
            onClick={(e)=> e.stopPropagation()} // empêche le click de propager à la card
          >
            Démo
          </a>
        )}
      </div>

               {/* Affichage des tags du projet  */}

      <div className="project-tags">
        {(project.tags || []).map((t) => <span key={t} className="tag">{t}</span>)}
      </div>
    </article>
  );
}
