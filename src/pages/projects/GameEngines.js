import squares from "../../res/tech/squares.gif"
import squares_still from "../../res/tech/squares.png"
import redwardCullen from "../../res/tech/redward-cullen.png"
import ballSquare from "../../res/tech/eat_my_balls.png"
import EngineCard from "../../components/Engine_Card";

const GameEngines = () => {

    const engine_data = [
        {
            title: "Yekate",
            date: "9th Aug, '23 - present",
            gif_link: squares,
            img_link: squares_still,
            bio: "A complete rewrite, except for the build process from Redward Cullen (Gen 2)",
            link: "https://github.com/oh-facts/YK-Game-Engine",
        },
        {
            title: "Redward Cullen ",
            date: "place-holder",
            gif_link: redwardCullen,
            img_link: redwardCullen,
            bio: "Ball square could only support balls and squares, and sometimes you want to be able to do more. Hence, this engine \
            was created. Some of the original code was reused, and most of it was scrapped. Its biggest features were an ECS, \
            collision detection and resolution. I also experimented with putting the rendering on a separate thread and it only crashed sometimes, \
            and had none of the performance benefits you'd expect.Truly, a piece of work.",
            link: "https://github.com/oh-facts/Redward-Cullen",

        },
        {
            title: "Ball Square",
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

    ]
    return (
        <div>

            <div className="game-engines">
                Most of my development time, apart from course work is spent on my game engine, which I use to make games, which
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
                of this complexity. Also, they were semi rewrites and is currently in *drum roll* in it's 3rd generation, on which I've spent
                ~ 300 hours.
                
                {engine_data.map((dataItem, index) => (
                    <EngineCard
                        key={index}
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