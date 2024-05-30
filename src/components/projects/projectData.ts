import { ProjectCardProps } from './projectCard/ProjectCard';
import img from '../../assets/images/kindpng_3704903.png';
import socialNetworkImage from '../../assets/projectImages/SocialNetwork.png';
import dogBreeds from '../../assets/projectImages/DogBreeds.png';
import noteList from '../../assets/projectImages/NoteList.png';

const projects:ProjectCardProps[] = 
[
    {
        imgSrc: img,
        header: "My Weather",
        description: "Website with users that shows the weather by fetching data with Rest API using technologies such as React , Tailwind ,Typescript , Express , Node.js , JWT , MongoDB.",
        gitUrl: "https://github.com/Saarxp/Weather-project",
    },
    {
        imgSrc: socialNetworkImage,
        header: "Social Network",
        description: "Social Network Website - Social network that i made using pure Typescript, Scss, Html with Users.",
        gitUrl: "https://github.com/Saarxp/Social-Network-Project",
    },
    {
        imgSrc: dogBreeds,
        header: "Dog Breeds",
        description: "Website that shows dog breeds with images and chat that you can talk with other users on the site. used technologies such as React , Scss , Typescript , Rest API, Express , Node.js , Socket.io.",
        gitUrl: "https://github.com/Saarxp/Weather-project",
    },
    {
        imgSrc: noteList,
        header: "Note List",
        description: "Website to save notes for your self. used technologies such as Html , Scss , Typescript , MongoDB , Jest , Express , Cookie-parser.",
        gitUrl: "https://github.com/Saarxp/Weather-project",
    },
    {
        imgSrc: img,
        header: "My Weather",
        description: "My Weather project is a project i built with",
        gitUrl: "https://github.com/Saarxp/Weather-project",
    },
    {
        imgSrc: img,
        header: "My Weather",
        description: "My Weather project is a project i built with",
        gitUrl: "https://github.com/Saarxp/Weather-project",
    }
    
]

export default projects;