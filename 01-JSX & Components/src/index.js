import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
    {
        skill: 'HTML+CSS',
        level: 'advanced',
        color: '#2662EA',
    },
    {
        skill: 'JavaScript',
        level: 'advanced',
        color: '#EFD81D',
    },
    {
        skill: 'Web Design',
        level: 'advanced',
        color: '#C3DCAF',
    },
    {
        skill: 'Git & GitHub',
        level: 'intermediate',
        color: '#E84F33',
    },
    {
        skill: 'Wordpress',
        level: 'advanced',
        color: '#21759B',
    },
    {
        skill: 'React',
        level: 'beginner',
        color: '#60DAFB',
    },
];

function App() {
    return (
        <div className="card">
            <Avatar imgPath="./profile.jpg" />
            <div className="data">
                <Intro
                    name="Than Htike"
                    intro="Frontend developer focused on building fast, responsive, and user-friendly web experiences. Experienced with WordPress, HTML, CSS, JavaScript, and currently deepening my skills in React."
                />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <div className="avatar">
            <img src={props.imgPath} alt="Than Htike" />
        </div>
    );
}

function Intro(props) {
    return (
        <div className="intro">
            <h1>{props.name}</h1>
            <p>{props.intro}</p>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill
                    key={skill.skill}
                    skill={skill.skill}
                    level={skill.level}
                    color={skill.color}
                />
            ))}
        </div>
    );
}

function Skill({ skill, level, color }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
                {level === 'beginner' && '👶'}
                {level === 'intermediate' && '👍'}
                {level === 'advanced' && '💪'}
            </span>
        </div>
    );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
