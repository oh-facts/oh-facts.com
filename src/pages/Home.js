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
                I like sushi, physics and C
                <br /> <br />
                and you :D
                <br /> <br />
                <a href="https://github.com/oh-facts"> <u> github</u> ↗ </a> &nbsp;
                <a href="https://www.linkedin.com/in/abhyuday-srivastava-423777293/"><u>linkedin</u> ↗ </a> &nbsp;
                <a href="https://www.youtube.com/channel/UCfYuZbToCun8OkYJ5K37Nig"><u>youtube</u> ↗ </a> &nbsp;
                <a href="https://open.spotify.com/user/uho1ipe8k26c5x1otn51p3sh9"><u>spotify</u> ↗</a> &nbsp;
            </div>
        </div>

    );
};

export default Home;