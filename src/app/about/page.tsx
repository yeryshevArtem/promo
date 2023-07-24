import { FC } from "react"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from "@/components/avatar/Avatar";

interface pageProps { }

const page: FC<pageProps> = ({ }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Avatar />
                </Grid>
                <Grid item xs={8}>
                    <p>Bio</p>
                </Grid>
            </Grid>
        </Box>
    );
}

export default page