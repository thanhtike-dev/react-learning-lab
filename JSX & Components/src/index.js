import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

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
            <Skill skill="HTML & Css" emoji="🧑‍💻" color="pink" />
            <Skill skill="Javascript" emoji="💪" color="orange" />
            <Skill skill="React" emoji="👶" color="yellow" />
            <Skill skill="Wordpress" emoji="🧑" color="silver" />
        </div>
    );
}

function Skill(props) {
    return (
        <div className="skill" style={{ backgroundColor: props.color }}>
            <span>{props.skill}</span>
            <span>{props.emoji}</span>
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
