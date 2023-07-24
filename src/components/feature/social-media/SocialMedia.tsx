'use client'
import { FC } from "react"
import Link from "next/link"

// Social media
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Social media list component
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';


const socialMedia = [
    {
        id: 1,
        component: TwitterIcon,
        url: 'https://twitter.com/ArtemYeryshev',
        title: 'ArtemYeryshev'
    },
    {
        id: 2,
        component: GitHubIcon,
        url: 'https://github.com/yeryshevArtem',
        title: 'yeryshevArtem'
    },
    {
        id: 3,
        component: LinkedInIcon,
        url: 'https://www.linkedin.com/in/artem-yeryshev-336024122/',
        title: 'artem-yeryshev-336024122'
    },
    {
        id: 4,
        component: AlternateEmailIcon,
        url: "mailto:artem.yeryshev@gmail.com",
        title: "artem.yeryshev@gmail.com"
    }
];

interface SocialMediaProps { }

const SocialMedia: FC<SocialMediaProps> = ({}) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {socialMedia.map((media) => {
                return (
                    <Link href={media.url} key={media.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <media.component />
                            </ListItemAvatar>
                            <ListItemText primary={media.title} />
                        </ListItem>
                    </Link>

                );
            })}
        </List>
    );
}

export default SocialMedia