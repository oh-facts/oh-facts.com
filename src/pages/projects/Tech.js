import GameEngines from "./GameEngines";
import "../../styles/pages/Projects.css"
import Card from "../../components/Card";
import default_image from '../../res/common/saidup.png';

import maria from "../../res/tech/maria-saidup.png"

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

                <div className='card-container'>
                    <Card to="/projects/tech/game-engines" imageSrc={maria} alt="placeholder" category="Game Engines" />
                    <Card to="/projects/tech/build-environment" imageSrc={default_image} alt="placeholder" category="C/C++ build environment" />
                    <Card to="/projects/tech/websites" imageSrc={default_image} alt="placeholder" category="websites" />
                </div>

            </div>
        </div>

    );
};

export default Tech;