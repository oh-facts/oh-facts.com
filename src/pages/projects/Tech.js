import GameEngines from "./GameEngines";
import "../../styles/pages/Projects.css"

const Tech = () => {
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
                    simulations and automation tools. I love writing everything from scratch and my favorite language is C.


                    <br />
                </p>


                <GameEngines />
            </div>
        </div>

    );
};

export default Tech;