'use client'

import { FC } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface spinnerProps { }

const Spinner: FC<spinnerProps> = ({ }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )
}

export default Spinner