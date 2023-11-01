import { Link } from "react-router-dom";

const EngineCard = ({ title, date, image_src, bio, link }) => {
    return (
        <div>
            <br />
            <div className="game-engines">

                <div className="game-engines-vbox">
                    <h1>{title}</h1>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        github link ↗
                    </a>
                    <p>{date}</p>

                    <img className="squares_gif" src={image_src} alt="a gif where lots of squares rotate" />


                    <p>{bio}</p>
                </div>


            </div>
        </div>
    );
};


export default EngineCard;
