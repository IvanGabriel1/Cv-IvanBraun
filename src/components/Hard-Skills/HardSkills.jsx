import React from "react";
import "./hard-skills.css";

const HardSkills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Expo",
    "Redux Toolkit",
    "Context API",
    "Firebase",
    "Firestore",
    "Authentication",
    "GitHub",
    "Figma",
    "Responsive Design",
    "React Router",
    "Vite",
  ];

  return (
    <div className="hard-skills-container">
      <h4>Hard Skills</h4>

      <ul className="hard-skills-ul">
        {skills.map((skill, index) => (
          <li key={index} className="skill-chip">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HardSkills;
