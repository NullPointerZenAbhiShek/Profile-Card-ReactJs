import IMG_5294 from "./IMG_5294.jpg";
import "./App.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "SQL",
    level: "intermediate",
    color: "#FF3B00",
  },
];
function Avatar(props) {
  return (
    <div>
      <img src={props.photoName} alt="Abhishek" className="avatar" />
    </div>
  );
}
function Intro() {
  return (
    <div>
      <h1>Abhishek</h1>
      <p>
        Aspiring Backend Engineer with hands-on experience in Java, Python,
        Spring, and SQL. Skilled in backend development, database management,
        and automation. Eager to contribute to scalable, AI-integrated systems
      </p>
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar photoName={IMG_5294} />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

export default App;
