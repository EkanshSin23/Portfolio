import React from 'react'
import Container from '@mui/material/Container';
import Navbar from '../Components/navbar/Navbar';
import { Box, Button, Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import LeftIcons from '../Components/leftIcons/LeftIcons';
import RightIcons from '../Components/rightIcons/RightIcons';
import logo from '../data/logo.png'


const About = () => {
    return (
        <Box sx={{ width: '100%', height: '100vh', bgcolor: '#0a192f', position: 'relative' }}>
            <Navbar />
            <LeftIcons />
            <RightIcons />
            <Container fixed sx={{ width: '100%', height: '89%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Stack direction='row' spacing={5}>
                    <Stack direction='column' spacing={5} sx={{ flex: '1' }}>
                        <Stack direction='column' spacing={1}>
                            <Stack direction='row' spacing={1} alignItems='center'>


                                <Typography sx={{ color: '#64ffda', fontSize: '20px', fontWeight: '600' }}>About Me </Typography>
                                <Box sx={{ maxHeight: '0px', borderTop: '1px solid white', bgcolor: 'white', minWidth: '40%' }}></Box>
                            </Stack>
                            <Typography sx={{ width: '100%', color: '#8892b0', fontSize: '20px' }}>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</Typography>
                            <Typography sx={{ width: '100%', color: '#8892b0', fontSize: '20px' }}>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</Typography>
                            <Typography sx={{ width: '100%', color: '#8892b0', fontSize: '20px' }}>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</Typography>
                            <Typography sx={{ width: '100%', color: '#8892b0', fontSize: '20px' }}>Here are a few technologies I’ve been working with recently:</Typography>
                            <Stack direction='row' mt={5} sx={{ width: '50%' }}>
                                <Stack direction='column' spacing={2} sx={{ flex: '1' }}>

                                    <Typography sx={{ width: '100%', color: '#8892b0', fontSize: '11px' }}><span style={{ color: '#64ffda' }}>></span>    JavaScript (ES6+)</Typography>
                                    <Typography sx={{ width: '100%', color: '#8892b0', fontSize: '11px' }}><span style={{ color: '#64ffda' }}>></span>    JavaScript (ES6+)</Typography>
                                    <Typography sx={{ width: '100%', color: '#8892b0', fontSize: '11px' }}><span style={{ color: '#64ffda' }}>></span>    JavaScript (ES6+)</Typography>

                                </Stack>
                                <Stack direction='column' spacing={2} sx={{ flex: '1' }}>

                                    <Typography sx={{ width: '100%', color: '#8892b0', fontSize: '11px' }}><span style={{ color: '#64ffda' }}>></span>    JavaScript (ES6+)</Typography>
                                    <Typography sx={{ width: '100%', color: '#8892b0', fontSize: '11px' }}><span style={{ color: '#64ffda' }}>></span>    JavaScript (ES6+)</Typography>
                                    <Typography sx={{ width: '100%', color: '#8892b0', fontSize: '11px' }}><span style={{ color: '#64ffda' }}>></span>    JavaScript (ES6+)</Typography>

                                </Stack>

                            </Stack>

                        </Stack>

                        {/* <Button variant='outlined' sx={{
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
                        </Button> */}

                    </Stack>
                    <Box sx={{
                        flex: '0.6', alignSelf: 'center', border: '4px solid #64ffda', borderTop: 'none', borderLeft: 'none', height: '50%', width: '70%', cursor: 'pointer',
                        transition: 'all 0.2s', '&:hover': {
                            // transform: 'translateY(-20px)'
                            border: '8px solid #64ffda',
                            borderTop: 'none', borderLeft: 'none',
                        }
                    }}>
                        <img src={logo} alt="" style={{
                            width: '100%',
                        }} />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default About