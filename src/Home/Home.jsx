import React from 'react'
import Container from '@mui/material/Container';
import Navbar from '../Components/navbar/Navbar';
import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import LeftIcons from '../Components/leftIcons/LeftIcons';
import RightIcons from '../Components/rightIcons/RightIcons';

const Home = () => {
    return (
        <Box sx={{ width: '100%', height: '100vh', bgcolor: '#0a192f', position: 'relative' }}>
            <Navbar />
            <LeftIcons />
            <RightIcons />
            <Container fixed sx={{ width: '100%', height: '89%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Stack direction='column' spacing={5}>
                    <Stack direction='column' spacing={1}>


                        <Typography sx={{ color: '#64ffda', fontSize: '20px', fontWeight: '600' }}>Hi, my name is</Typography>
                        <Typography sx={{ fontSize: '70px', fontWeight: '900', color: '#ccd6f6' }}>Ekansh Singh</Typography>
                        <Typography sx={{ fontSize: '70px', fontWeight: '900', color: '#8892b0' }}>I build things for the web.</Typography>
                        <Typography sx={{ width: '60%', color: '#8892b0', fontSize: '20px' }}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</Typography>

                    </Stack>

                    <Button variant='outlined' sx={{
                        color: '#64ffda', borderColor: '#64ffda',
                        fontSize: '18px',
                        width: '30%',

                        '&:hover': {
                            color: 'white',
                            borderColor: 'white',
                            bgcolor: 'rgba(255,255,255,0.1)'
                        }
                    }}>
                        Resume
                    </Button>

                </Stack>
            </Container>
        </Box >
    )
}

export default Home