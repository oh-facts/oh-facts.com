import CxxBuild from "../../components/CxxBuild";
import GameEngines from "../../components/GameEngines";
import Websites from "../../components/Websites"
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

                {
                    /*
                    Among other things, I enjoy coding, mostly as a means to make tools for the "other" things I just mentioned.
                    <br />
                    wha?
                    <br />
                    If that doesn't make sense to you, its because it doesn't make sense. Anyways, 
                     */
                }
                I like working on low-level systems, simulations and automation tools.
                I love writing everything (within reason) from scratch.

                <br /> <br />

                <div className="index">
                    <div>
                        <b>Index</b>
                        <nav>
                            <a href="" onClick={(e) => { e.preventDefault(); scrollToSection('section1'); }}>1. <u>Game Engines</u></a>
                            <br />
                            <a href="" onClick={(e) => { e.preventDefault(); scrollToSection('section2'); }}>2. <u>C/C++ Build Environment</u></a>
                            <br />
                            <a href="" onClick={(e) => { e.preventDefault(); scrollToSection('section3'); }}>3. <u>Websites</u></a>
                        </nav>
                    </div>
                </div>

                {/*
                       Todo: Make this a function if it grows further
                */}


                <br />

                <h2 id="section1">Game Engines</h2>

                <GameEngines />

                <h2 id="section2"></h2>
                <hr />
                <br />
                <CxxBuild />

                <br />
                <br />
                <hr />
                <br />
                <h2 id="section3">Websites</h2>
                <Websites />
            </div>
        </div>

    );
};

export default Tech;