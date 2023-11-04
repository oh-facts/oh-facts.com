import disco_gif from "../res/common/dancingloop.gif"
import "../styles/pages/Home.css"

const Home = () => {
    return (
        <div className="Home">
            <br /> <br /> <br />
            <img className="disco-fox-gif" src={disco_gif} alt="GIF" />
            <p>
                
                hi, this is my website.
                < br />
                You can find projects, ramblings and other creative endeavors here.
            </p >
            <div className="Bio">
                I am a junior at uni, majoring in computer science.
                <br />
                I like sushi, physics and filmmaking
                <br /> <br />
                and you :D
                <br /> <br />
                 {/*
                       Todo: Make this a function if it grows further
                 */}
                <a href="https://github.com/oh-facts" target="_blank" rel="noopener noreferrer"> <u> github</u> ↗ </a> &nbsp;
                <a href="https://www.linkedin.com/in/abhyuday-srivastava-423777293/" target="_blank" rel="noopener noreferrer"><u>linkedin</u> ↗ </a> &nbsp;
                <a href="https://www.youtube.com/channel/UCfYuZbToCun8OkYJ5K37Nig" target="_blank" rel="noopener noreferrer"><u>youtube</u> ↗ </a> &nbsp;
                
            </div>
        </div>

    );
};

export default Home;