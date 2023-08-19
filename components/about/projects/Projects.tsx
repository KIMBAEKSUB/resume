import ProjectItem from "./ProjectItem";
import AboutTitle from "../ui/AboutTitle";
import { BsFilter } from "react-icons/bs";
import AboutLayout from "../ui/AboutLayout";

const Projects = () => {
    
    // font-color #232A55

    return <AboutLayout>
            <AboutTitle
                title="Projects"
                subtitle="Here are some projects I have worked on."
            />
            <p className="p-3 is-flex is-justify-content-flex-end is-align-items-center">
                <button className="button is-link is-light is-small">FILTER : <BsFilter className="is-size-6" /></button>
            </p>
            <ProjectItem 
                title="Personal Website"
                startDate="2021-07-20"
                endDate="2021-07-20"
                description="This website is a personal website for me. It is built using React and Typescript."
                langs={["React", "Typescript", "Redux"]}
                rolesNumber={255}
            />
    </AboutLayout>;
}

export default Projects;