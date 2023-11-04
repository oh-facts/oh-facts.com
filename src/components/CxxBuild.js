import ProjectCard from "./ProjectCard";

const CxxBuild = () => {
    const data = [
        {
            title: "c/c++ build environment",
            bio: "Setting up C/C++ environments can be tiring, especially if you prefer not using IDEs because they are less malleable. \
            This repository is meant to be used as a base with a cmakelists set up, and a couple scripts to link/compile and run projects. \
            There's some vendor libraries to help show how other libraries can be added. I intend to add a vcpkg manifest file and some \
            common tooling libraries. ",
            link: "https://github.com/oh-facts/cxx-build-environment-template",
        }]

    return (
        <div>
            {data.map((dataItem, index) => (
                <ProjectCard
                    key={index}
                    title={dataItem.title}
                    bio={dataItem.bio}
                    link={dataItem.link}
                />
            ))}
        </div>
    );
};

export default CxxBuild;