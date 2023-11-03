import GameEngines from "./GameEngines";
import "../../styles/pages/Projects.css"

const Tech = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <div>
            <h1>Software</h1>
            <div className="tech-dump">
                <p>
                    Among other things, I enjoy coding, mostly as a means to make tools for the "other" things I speak of.
                    <br />
                    wha?
                    <br />
                    If that doesn't make sense to you, its because it doesn't make sense. Anyways, I like working on low-level systems,
                    simulations and automation tools. I love writing everything (within reason) from scratch and my favorite languages are C, C++, python and JS.
                    I disagree with RAII and I will go out of my way to avoid dynamic dispatch. <i>"This is my design (Hannibal, 2013)"</i>.
                    <br /> <br />
                    Index
                    <nav>
                        <a href="" onClick={(e) => { e.preventDefault(); scrollToSection('section1'); }}>1. <u>Game Engines</u></a>
                        <br />
                        <a href="" onClick={(e) => { e.preventDefault(); scrollToSection('section2'); }}>2. <u>C/C++ Build Environment</u></a>
                        <br />
                        <a href="" onClick={(e) => { e.preventDefault(); scrollToSection('section3'); }}>3. <u>Websites</u></a>
                    </nav>
                    <br />
                </p>
                <h1 id="section1">Game Engines</h1>


                <GameEngines />

                <h1 id="section2">C/C++ Build Environment</h1>

                <h1 id="section3">Websites</h1>
            </div>
        </div>

    );
};

export default Tech;