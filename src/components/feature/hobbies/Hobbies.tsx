import { FC } from "react"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const hobbies = [
    {
        img: '/anime.jpg',
        title: 'Anime',
    },
    {
        img: '/tattoo.jpg',
        title: 'Tattoo',
    },
    {
        img: '/sport.jpg',
        title: 'Sport',
    },
    {
        img: '/literature.jpg',
        title: 'Literature',
    },
];


interface HobbiesProps { }

const Hobbies: FC<HobbiesProps> = () => {
    return (
        <ImageList sx={{ width: '100%', height: 450 }}>
            {hobbies.map((hobby) => (
                <ImageListItem key={hobby.img}>
                    <img
                        src={`${hobby.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${hobby.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={hobby.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={hobby.title}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default Hobbies