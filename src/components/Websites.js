import ProjectCard from "./ProjectCard";

const Websites = () => {
    const website_data = [
        {
            title: "Insomniac Angels",
            bio: "The first React website I made. Overengineered at places that don't require it, and underengineered at places that need. \
            it. Lots of effects, carousels and media viewers, written without the help of external libraries and took much too effort to \
            look decent on mobile browsers. It helped me keep in mind the things needed when building something of this complexity. \
            Hosted through netlify.",
            link: "https://github.com/oh-facts/insomniac-angels-dot-com",
        },
        {
            title: "personal website",
            bio: "Made this website to archive things I've done, opinions I've had and thoughts I've thought. \
            Its written in React and is hosted through github pages. Since I've already done this before \
            I made sure to check if it displayed correctly on mobile browsers. I intend to work on the backend to \
            handle the blog and hold my unfounded opininons.",
            link: "https://github.com/oh-facts/oh-facts.com",

        }]
    return (
        <div>
            {website_data.map((dataItem, index) => (
                <ProjectCard
                    key={index}
                    title={dataItem.title}
                    bio={dataItem.bio}
                    link={dataItem.link}
                />
            ))}
        </div>
    )
}
export default Websites;