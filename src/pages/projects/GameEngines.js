import squares from "../../res/tech/squares.gif"
import redwardCullen from "../../res/tech/redward-cullen.png"
import ballSquare from "../../res/tech/eat_my_balls.png"

const GameEngines = () => {
    return (
        <div>

            <div className="game-engines">
                <h1>Game Engines</h1>
                
                Most of my development time, apart from course work is spent on my game engine, which I will use to make games, which
                will convey stories, my favourite thing ever. I like all formats of storytelling, writing, cinema, art, music and ofc,
                games. Games are nice because unlike other formats, they are interactive, and placing yourself as the protagonist is 
                nothing like YA self-inserts. "What even is a Game Engine?", you ask. What a silly question, I bet you'd never ask a 
                question like that. But if your friend does, tell them that a game engine is a set of libraries that handle some of the
                low level stuff games need access to. For eg, if you want to make a game about balls, you'd simply do draw(ball_image)
                and the engine would issue appropriate graphics card calls to make this happen. Ofc, drawing is only one, of many services
                an engine provides.
                <br />
                Over the last 4 months, I have written 2 engines, over 2 weekends, that I deemed feature complete (because they were speghatti
                ). However, helped me understand what to consider when working on projects
                of this complexity. Also, they built off of each other *drum roll* to give birth to the third generation, that I've spent 
                about 200 hours on.
                <h1>1. Yekate </h1>
                9th Aug, '23 - present
                <img className="squares_gif" src={squares} alt="a gif where lots of squares rotate" />
                <br />

                
                <br />
                <h1>2. Redward Cullen </h1>
                <img className="squares_gif" src={redwardCullen} alt="a gif where lots of squares rotate" />
                <br />
                <h1>3. Ball Square </h1>
                <img className="squares_gif" src={ballSquare} alt="a gif where lots of squares rotate" />
                <br />
            </div>

        </div>
    );
};

export default GameEngines;