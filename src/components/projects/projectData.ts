import { ProjectCardProps } from './projectCard/ProjectCard';
import weather from '../../assets/projectImages/Weather.png';
import socialNetwork from '../../assets/projectImages/SocialNetwork.png';
import dogBreeds from '../../assets/projectImages/DogBreeds.png';
import noteList from '../../assets/projectImages/NoteList.png';
import memoryGame from '../../assets/projectImages/MemoryGame.png';
import comingSoon from '../../assets/projectImages/Coming soon.jpg';

const projects:ProjectCardProps[] = 
[
    {
        imgSrc: weather,
        header: "My Weather",
        description: "Website with users that shows the weather by fetching data with Rest API using technologies such as ",
        skills: "React , Tailwind ,Typescript , Express , Node.js , JWT , MongoDB.",
        gitUrl: "https://github.com/Saarxp/Weather-project",
    },
    {
        imgSrc: socialNetwork,
        header: "Social Network",
        description: "Social Network Website - Social network with Users that i made using pure ",
        skills:"Typescript, Scss, Html.",
        gitUrl: "https://github.com/Saarxp/Social-Network-Project",
    },
    {
        imgSrc: dogBreeds,
        header: "Dog Breeds",
        description: "Website that shows dog breeds with images and chat that you can talk with other users on the site. used technologies such as ",
        skills:"React , Scss , Typescript , Rest API, Express , Node.js , Socket.io.",
        gitUrl: "https://github.com/Saarxp/Dog-Breeds-With-Chat",
    },
    {
        imgSrc: noteList,
        header: "Note List",
        description: "Website to save notes for your self. used technologies such as ",
        skills:"Html , Scss , Typescript , MongoDB , Jest , Express , Node.js.",
        gitUrl: "https://github.com/Saarxp/Notes-Project",
    },
    {
        imgSrc: memoryGame,
        header: "Memory Game",
        description: "Memory game with 3 levels. can you beat level 3? made it with basic ",
        skills:"Html, Scss, Typescript",
        gitUrl: "https://github.com/Saarxp/Memory-Game",
    },
    {
        imgSrc: comingSoon,
        header: "Coming Soon...",
        description: "",
        skills:"",
        gitUrl: "",
    }
    
]

export default projects;