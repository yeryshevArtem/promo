'use client'

import { FC } from "react"
import Link from "next/link"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from "@/components/avatar/Avatar";
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// Social media list component
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

// Social media
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const itemData = [
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

const socialMedia = [
    {
        id: 1,
        component: TwitterIcon,
        url: 'https://twitter.com/ArtemYeryshev'
    },
    {
        id: 2,
        component: GitHubIcon,
        url: 'https://github.com/yeryshevArtem'
    },
    {
        id: 2,
        component: LinkedInIcon,
        url: 'https://www.linkedin.com/in/artem-yeryshev-336024122/'
    }

]

interface pageProps { }

const page: FC<pageProps> = ({ }) => {
    return (
        <Container maxWidth="xl" className="mt-20 mb-20">
            <Grid container spacing={20}>
                <Grid item xs={12} md={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <Avatar />
                            <Typography variant="h3" gutterBottom className="mt-10">
                                Artem Yeryshev
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                Make your UI incredible
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                {
                                    socialMedia.map((media) => {
                                        return (
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Link href={media.url}>
                                                        <media.component />
                                                    </Link>
                                                </ListItemAvatar>
                                            </ListItem>
                                        );
                                    })
                                }
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/javascript.png"
                                        alt="JavaScript developer"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Senior Front-End Developer
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Experienced Front-End Developer who contributes high quality scalable
                                            UX functionality and technical leadership for large scale SaaS applications.
                                            Skilled at creating complex features and integrations while working with multinational teams,
                                            and functioning as the subject matter expert in UI development and architecture for cross functional
                                            development teams.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="auto"
                                        image="/tech-stack.jpg"
                                        alt="tech stack"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Tech stack
                                        </Typography>
                                        <Box sx={{ m: 2 }}>
                                            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                                                <Chip label="React" />
                                                <Chip label="Vue.js" />
                                                <Chip label="Redux & Vuex" />
                                                <Chip label="TypeScript" />
                                                <Chip label="Backbone & Marionette.js" />
                                                <Chip label="Front-End Microservices" />
                                                <Chip label="Jest & React Testing library" />
                                                <Chip label="Material UI" />
                                                <Chip label="React Hook Form" />
                                                <Chip label="JavaScript ES5 & ES6" />
                                                <Chip label="Next.js" />
                                                <Chip label="Node.js" />
                                                <Chip label="NestJS & Express" />
                                                <Chip label="Svelte" />
                                                <Chip label="SQL" />
                                                <Chip label="Scrum & Kanban" />
                                            </Stack>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="auto"
                                        image="/hobbies.jpg"
                                        alt="my hobbies"
                                    />
                                    <CardContent style={{ paddingRight: 0 }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            My hobbies
                                        </Typography>
                                        <ImageList sx={{ width: '100%', height: 450 }}>
                                            {itemData.map((item) => (
                                                <ImageListItem key={item.img}>
                                                    <img
                                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                        alt={item.title}
                                                        loading="lazy"
                                                    />
                                                    <ImageListItemBar
                                                        title={item.title}
                                                        position="below"
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    );
}

export default page