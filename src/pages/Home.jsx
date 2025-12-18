import React from "react";
import "../style/Home.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaUserAlt, FaPaintBrush, FaGamepad, FaMusic } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

const Home = () => {
  const skills = [
    { name: "Photoshop", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "Figma", percent: 70 },
    { name: "XD", percent: 75 },
    { name: "HTML/CSS", percent: 80 },
  ];

  const experiences = [
    { title: "Senior Graphic Designer", company: "Creative Studio", year: "2024 - Présent", desc: "Création d’identités visuelles, gestion d’une équipe de designers et supervision des projets clients majeurs." },
    { title: "Graphic Designer", company: "Vision Agency", year: "2022- 2024", desc: "Réalisation de supports marketing et coordination avec les équipes web pour les maquettes d’interfaces." },
  ];

  const education = [
    { title: "Baccalauréat en science économique et gestion", school: "Cité Mahragène", year: "2022" },
    { title: "Licence en informatique appliqué à la gestion spécialité Business Intelligence", school: "Institut Supèrieur de gestion Bizerte", year: "2023- 2026" },
  ];

  return (
    <div className="cv-container">
      {/* left section */}
      <div className="left-section">
        <div className="profile">
          <img src={profilePic} alt="Profil" className="profile-pic" />
          <h1>Eya HAMDI</h1>
          <h3>Business Intelligence Analyst</h3>
          <p className="meta"><FaMapMarkerAlt /> Tunisie</p>
        </div>

        <div className="contact">
          <h2>CONTACT</h2>
          <p><FaPhoneAlt /> +216 20 329 377</p>
          <p><FaEnvelope /> eya.hamdi@gmail.com</p>
          <p><FaGlobe /> www.portfolio.com</p>
        </div>

        <div className="about">
          <h2>ABOUT</h2>
          <p>
            Créative, organisée et passionnée par le design visuel et le développement front-end.
            Je combine esthétique et ergonomie pour offrir des expériences modernes et intuitives.
          </p>
        </div>

        <div className="skills">
          <h2>EXPERTISE</h2>
          {skills.map((s) => (
            <div className="skill-bar" key={s.name}>
              <div className="skill-title">
                <span>{s.name}</span>
                <span>{s.percent}%</span>
              </div>
              <div className="bar">
                <div className="progress" style={{ width: `${s.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="interests">
          <h2>INTEREST</h2>
          <div className="chips">
            <div className="chip"><FaPaintBrush /> HandBall</div>
            <div className="chip"><FaGamepad />Développement web & mobile </div>
            <div className="chip"><FaMusic /> Veille technologique</div>
            <div className="chip"><FaUserAlt /> Voyage & découvertes</div>
          </div>
        </div>
      </div>

      {/*RIGHT SECTION */}
      <div className="right-section">
        <section className="education section">
          <div className="section-title">
            <h2>EDUCATION</h2>
          </div>
          {education.map((e) => (
            <div className="edu-item" key={e.title}>
              <h3>{e.title}</h3>
              <p>{e.school}</p>
              <span className="year">{e.year}</span>
            </div>
          ))}
        </section>

        <section className="experience section">
          <div className="section-title">
            <h2>EXPERIENCE</h2>
          </div>
          <div className="experience-list">
            {experiences.map((exp) => (
              <div className="exp-item" key={exp.title}>
                <h3>{exp.title}</h3>
                <p><strong>{exp.company}</strong></p>
                <p>{exp.desc}</p>
                <span className="year">{exp.year}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="references section">
          <div className="section-title">
            <h2>REFERENCE</h2>
          </div>
          <div className="edu-item">
            <h3>TyLORDAR</h3>
            <p>Director</p>
            <p><FaPhoneAlt /> +216 51 654 987</p>
          </div>
        </section>

        <section className="awards section">
          <div className="section-title">
            <h2>AWARDS / EXTRA</h2>
          </div>
          <div className="edu-item">
            <h3>Bachelor </h3>
            <p>Company ANT</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
