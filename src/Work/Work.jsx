import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Navbar from '../Components/navbar/Navbar';
import { Box, Card, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import LeftIcons from '../Components/leftIcons/LeftIcons';
import RightIcons from '../Components/rightIcons/RightIcons';
import logo from '../data/logo.png'
import GitHubIcon from '@mui/icons-material/GitHub';

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Item({ item }) {
    return (
        // <Paper>
        <Stack direction='row' spacing={5} sx={{ width: '100%' }}>

            <Stack direction='column' spacing={1} sx={{}}>
                <Stack direction='row' spacing={0} alignItems='center' justifyContent='center' sx={{ width: '700px' }}>
                    <Typography sx={{ color: '#64ffda', fontSize: '20px', fontWeight: '600', width: '450px' }}>Some Things I’ve Built </Typography>
                    <Box sx={{ maxHeight: '0px', bgcolor: 'white', borderTop: '1px solid white', width: '90%' }}></Box>
                </Stack>
                <Stack direction='row'>
                    <Box sx={{ flex: '1' }}>
                        <img src={logo} alt=""

                        />
                    </Box>
                    <Stack direction='column' spacing={2} >
                        <Typography sx={{ textAlign: 'end', color: '#64ffda' }}>Featured Project</Typography>
                        {/* <Typography sx={{ textAlign: 'end', color: '#64ffda' }}>{props.item.name}</Typography> */}
                        <Typography sx={{ textAlign: 'end', color: '#ccd6f6', fontSize: '25px', fontWeight: '700' }}>{item?.name}</Typography>
                        <Box px={2} sx={{ bgcolor: '#112240', height: '150px' }}>
                            <Stack alignItems='center' justifyContent='center' sx={{ width: '100%', height: '100%' }}><Typography sx={{ textAlign: 'end', color: '#8892b0' }}>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</Typography>
                            </Stack>
                        </Box>
                        <Stack direction='row' justifyContent='flex-end' spacing={2}>
                            <span style={{ color: '#8892b0' }}>VS Code</span>
                            <span style={{ color: '#8892b0' }}>VS Code</span>
                            <span style={{ color: '#8892b0' }}>VS Code</span>
                            <span style={{ color: '#8892b0' }}>VS Code</span>
                            <span style={{ color: '#8892b0' }}>VS Code</span>

                        </Stack>
                        <Stack alignSelf='flex-end'>
                            <GitHubIcon fontSize='medium' sx={{
                                color: '#ffffff', cursor: 'pointer',
                                transition: 'all 0.2s', '&:hover': {
                                    transform: 'translateY(-10px)',
                                    color: '#64ffda'
                                }
                            }} />
                        </Stack>

                    </Stack>
                </Stack>

            </Stack>
        </Stack>
        // </Paper>
    )
}

const Work = () => {
    var items = [
        {
            name: "UPSC Hindi",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "KGM Game",
            description: "Hello World!"
        }
    ]

    return (
        <Box sx={{ width: '100%', height: '100vh', bgcolor: '#0a192f', position: 'relative' }}>
            <Navbar />
            <LeftIcons />
            <RightIcons />
            <Container fixed sx={{ width: '100%', height: '89%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Carousel sx={{ width: '100%', bgcolor: '#0a192f' }}
                    stopAutoPlayOnHover={true}
                    animation='slide'
                    NextIcon='Next'
                    PrevIcon='Prev'
                    duration='1000'
                >
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>

            </Container>
        </Box>
    )
}

export default Work