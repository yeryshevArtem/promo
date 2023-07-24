import { FC } from "react"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Avatar from "@/components/common/avatar/Avatar";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import SocialMedia from "@/components/feature/social-media/SocialMedia";
import TechStack from "@/components/feature/tech-stack/TechStack";
import Hobbies from "@/components/feature/hobbies/Hobbies";


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
                            <SocialMedia />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
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
                        <Grid item md={6} xs={12}>
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
                                            <TechStack />
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item md={6} xs={12}>
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
                                        <Hobbies />
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