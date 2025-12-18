import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data";
import "../style/ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail-container">
        <h2>Projet introuvable ❌</h2>
        <Link to="/projects" className="back-btn">← Retour aux projets</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <img src={project.image} alt={project.title} className="project-image" />
      <h1>{project.title}</h1>
      <p className="project-description">{project.description}</p>

      <div className="project-info">
        <p><strong>Technologies utilisées :</strong> {project.techs}</p>
        <p><strong>Durée :</strong> {project.duration}</p>
        <p><strong>Rôle :</strong> {project.role}</p>
      </div>

      <div className="project-actions">
        <a href={project.link} target="_blank" rel="noreferrer" className="btn-view">
          🌐 Voir le projet
        </a>
        <Link to="/projects" className="back-btn">← Retour</Link>
      </div>
    </div>
  );
}
