import squares from "../res/tech/squares.gif"
import squares_still from "../res/tech/squares.png"
import redwardCullen from "../res/tech/redward-cullen.png"
import ballSquare from "../res/tech/eat_my_balls.png"
import ProjectCard from "./ProjectCard";
import ReactMarkdown from 'react-markdown';

const GameEngines = () => {

    const engine_data = [
        {
            title: "YK",
            date: "9th Aug, '23 - present",
            gif_link: squares,
            img_link: squares_still,
            bio: "My favorite project so far,  and something I intend to stick with in the long run \
            . I've been trying to write everything myself (NiH syndrome), and only rely on some harware specific \
            libraries. It is written in C and uses opengl to render graphics. It can simulate 2d rigidbody physics and can render millions of triangles \
            through instancing. Once the engine is mature enough, I will work on a raytracing pipeline.",
            link: "https://github.com/oh-facts/YK-Game-Engine",
        },
        /*

        
        {
            title: "Redward Cullen ",
            ver: "gen2",
            date: "place-holder",
            gif_link: redwardCullen,
            img_link: redwardCullen,
            bio: "My first engine could only support balls and squares, and sometimes you want to be able to do more. Hence, this engine \
            was created. Some of the original code was reused, and most of it was scrapped. Its features were an ECS, \
            and collision handling. I also experimented with putting the rendering on a separate thread and it only crashed sometimes, \
            and had none of the performance benefits you'd expect. A certified masterpiece.",
            link: "https://github.com/oh-facts/Redward-Cullen",

        },
        {
            title: "Ball Square",
            ver: "gen1",
            date: "3rd April, '23 - 15th April, '23",
            gif_link: ballSquare,
            img_link: ballSquare,
            bio: "Unity has always been my go-to engine, until I participated in a Ludum Dare where Unity's compile times were starting to kill me. Commenting  \
            one line of code took 10 seconds and crashes were frequent (I have a Ryzen 5800, 8 cores). And thus, a new character arc started where I decided to make \
            my own tools from scratch.  \
            I picked C++ and SFML and made \"Eat my balls\", where balls fell from the sky and you had to eat them. Sometimes squares fell too, but if you ate them, \
            you'd lose all your points. The \"engine\" side of things was then abstracted away to form the Ball Square Engine and was used to make Hit My Balls, \
            a glorified pong clone",
            link: "https://github.com/oh-facts/hit-my-balls/tree/main/BSE",
        }
        */

    ]

    return (
        <div>
            
             {/*
                game engine prologue starts here
            */}

            <div className="game-engines">
                "What even is a Game Engine?", you ask. What a silly question, I bet you'd never ask a
                question like that. But if your friend does, tell them that a game engine is a set of libraries that handle some of the
                low level stuff games need access to. <br /><br />
                For eg, if you want to make a game about balls, you'd simply write
                <ReactMarkdown>
                    ```
                    draw(ball_image, position, size);
                    ```
                </ReactMarkdown>
                and the engine would issue appropriate graphics card calls to make this happen. Ofc, drawing is only one, of many services
                an engine provides.
                <br />
                Over the last few months, I have written and rewritten 3 engines, each building upon the previous in some way. Due to the nature of
                software like this, performance and scalability is of high priority.

                 {/*
                    game engine descriptions start here
                 */}
                {engine_data.map((dataItem, index) => (
                    <ProjectCard
                        key={index}
                        gen={dataItem.ver}
                        title={dataItem.title}
                        date={dataItem.date}
                        gif_src={dataItem.gif_link}
                        image_src={dataItem.img_link}
                        bio={dataItem.bio}
                        link={dataItem.link}
                    />
                ))}

            </div>

        </div>
    );
};

export default GameEngines;


/*
Make a component that stores images (as carousel), has two sidebars for features and links,
and has desc at bottom
*/