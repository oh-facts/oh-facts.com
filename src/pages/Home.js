import disco_gif from "../res/common/dancingloop.gif"

const Home = () => {
    return (
        <div className="Home">
            <br /> <br /> <br />
            <img src={disco_gif} alt="GIF" />
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
                and poop you :D
            </div>
        </div>

    );
};

export default Home;