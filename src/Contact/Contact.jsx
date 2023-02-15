import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Navbar from '../Components/navbar/Navbar';
import { Box, Button, Card, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import LeftIcons from '../Components/leftIcons/LeftIcons';
import RightIcons from '../Components/rightIcons/RightIcons';
import { Link } from 'react-router-dom';


const Contact = () => {

    const email = 'ekanshsin232@gmail.com'
    return (
        <Box sx={{ width: '100%', height: '100vh', bgcolor: '#0a192f', position: 'relative' }}>
            <Navbar />
            <LeftIcons />
            <RightIcons />
            <Container fixed sx={{ width: '100%', height: '89%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '4%' }}>
                <Typography sx={{ color: '#64ffda', fontSize: '20px', fontWeight: '600' }}>What's Next?</Typography>

                <Typography sx={{ fontSize: '70px', fontWeight: '900', color: '#ccd6f6' }}>Get In Touch</Typography>

                <Typography sx={{ width: '60%', color: '#8892b0', fontSize: '20px' }}>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </Typography>





                <Button variant='outlined' sx={{
                    color: '#64ffda', borderColor: '#64ffda',
                    fontSize: '18px',
                    width: '30%',
                    height: '50px',


                    '&:hover': {
                        color: 'white',
                        borderColor: 'white',
                        bgcolor: 'rgba(255,255,255,0.1)'
                    }
                }}
                    href={`mailto:${email}`}
                >Say Hello
                </Button>



            </Container>
        </Box>
    )
}

export default Contact