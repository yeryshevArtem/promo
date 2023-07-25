import { FC } from "react"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const skills = [
    {
        id: "1",
        title: "React"
    },
    {
        id: "2",
        title: "Vue.js"
    },
    {
        id: "3",
        title: "Redux & Vuex"
    },
    {
        id: "4",
        title: "TypeScript"
    },
    {
        id: "5",
        title: "Backbone & Marionette.js"
    },
    {
        id: "6",
        title: "Front-End Microservices"
    },
    {
        id: "7",
        title: "Jest & React Testing library"
    },
    {
        id: "8",
        title: "Material UI"
    }, {
        id: "9",
        title: "React Hook Form"
    }
    , {
        id: "10",
        title: "JavaScript ES5 & ES6"
    }
    , {
        id: "11",
        title: "Next.js"
    },
    {
        id: "12",
        title: "Node.js"
    },
    {
        id: "13",
        title: "NestJS & Express"
    },
    {
        id: "14",
        title: "Svelte"
    },
    {
        id: "15",
        title: "SQL"
    },
    {
        id: "16",
        title: "Scrum & Kanban"
    }
]

interface TechStackProps { }

const TechStack: FC<TechStackProps> = ({ }) => {
    return (
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" className="text-black">
            {
                skills.map((skill) => {
                    return <Chip key={skill.id} label={skill.title} />
                })
            }
            
        </Stack>
    );

}

export default TechStack