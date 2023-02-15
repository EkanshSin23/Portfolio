import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import Navbar from '../Components/navbar/Navbar';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import LeftIcons from '../Components/leftIcons/LeftIcons';
import RightIcons from '../Components/rightIcons/RightIcons';

const Experience = () => {

    const [tabActivated, setTabActivated] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
    });
    useEffect(() => {
        setTabActivated(() => {
            return { first: true }
        })
    }, [])

    const handleTabClick = (key) => {
        setTabActivated((prev) => {
            return { [key]: true }
        })
    }

    console.log(tabActivated)
    return (
        <Box sx={{ width: '100%', height: '100vh', bgcolor: '#0a192f', position: 'relative' }}>
            <Navbar />
            <LeftIcons />
            <RightIcons />
            <Container fixed sx={{ width: '100%', height: '89%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Stack direction='row' spacing={5}>

                    <Stack direction='column' spacing={1}>
                        <Stack direction='row' spacing={1} alignItems='center'>


                            <Typography sx={{ color: '#64ffda', fontSize: '20px', fontWeight: '600' }}>About Me </Typography>
                            <Box sx={{ maxHeight: '0px', bgcolor: 'white', borderTop: '1px solid white', minWidth: '80%' }}></Box>
                        </Stack>
                        <Stack direction='row' sx={{ width: '600px' }}>
                            <Stack direction='column' spacing={3} sx={{ width: '30%', flex: '0.5' }}>
                                <Typography key='1' sx={{
                                    cursor: 'pointer',

                                    color: tabActivated.first ? '#64ffda' : '#8892b0', fontWeight: tabActivated.second ? '700' : '500',
                                    borderLeft: tabActivated.first ? '3px solid #64ffda' : '1px solid white',
                                    paddingLeft: '10px'
                                }} onClick={() => handleTabClick('first')}>Trando</Typography>
                                <Typography key='2' sx={{
                                    cursor: 'pointer',
                                    color: tabActivated.second ? '#64ffda' : '#8892b0', fontWeight: tabActivated.second ? '700' : '500', borderLeft: '3px solid #64ffda',
                                    borderLeft: tabActivated.second ? '3px solid #64ffda' : '1px solid white', paddingLeft: '10px'
                                }} onClick={() => handleTabClick('second')}>Hewink</Typography>
                                <Typography key='3' sx={{
                                    cursor: 'pointer',
                                    color: tabActivated.third ? '#64ffda' : '#8892b0', fontWeight: tabActivated.third ? '700' : '500', borderLeft: '3px solid #64ffda',
                                    borderLeft: tabActivated.third ? '3px solid #64ffda' : '1px solid white', paddingLeft: '10px'
                                }} onClick={() => handleTabClick('third')}>Apple</Typography>
                                <Typography key='4' sx={{
                                    cursor: 'pointer',
                                    color: tabActivated.fourth ? '#64ffda' : '#8892b0', fontWeight: tabActivated.fourth ? '700' : '500', borderLeft: '3px solid #64ffda',
                                    borderLeft: tabActivated.fourth ? '3px solid #64ffda' : '1px solid white', paddingLeft: '10px'
                                }} onClick={() => handleTabClick('fourth')}>Scout</Typography>
                            </Stack>
                            <Stack sx={{ width: '100%', height: '300px', flex: '1' }}>
                                {tabActivated.first && <Stack direction='column' spacing={3}>
                                    <Stack direction='column'>  <Typography sx={{ fontSize: '27px', fontWeight: '700', color: '#ccd6f6' }} >React Developer <span style={{ color: '#64ffda' }}>@Trando</span></Typography>
                                        <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#8892b0', }} >Sep 2022 - Present</Typography>
                                    </Stack>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#8892b0' }} ><span style={{ color: '#64ffda', marginRight: '10px' }}>></span>
                                        Write modern, performant, maintainable code for a diverse array of client and internal projects

                                    </Typography>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#8892b0' }} ><span style={{ color: '#64ffda', marginRight: '10px' }}>></span>
                                        Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify

                                    </Typography>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#8892b0' }} ><span style={{ color: '#64ffda', marginRight: '10px' }}>></span>
                                        Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis

                                    </Typography>

                                </Stack>
                                }
                                {tabActivated.second && <Stack direction='column' spacing={3}>
                                    <Stack direction='column'>  <Typography sx={{ fontSize: '27px', fontWeight: '700', color: '#ccd6f6' }} >MERN Developer <span style={{ color: '#64ffda' }}>@Hewink</span></Typography>
                                        <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#8892b0', }} >Sep 2022 - Present</Typography>
                                    </Stack>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#8892b0' }} ><span style={{ color: '#64ffda', marginRight: '10px' }}>></span>
                                        Write modern, performant, maintainable code for a diverse array of client and internal projects

                                    </Typography>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#8892b0' }} ><span style={{ color: '#64ffda', marginRight: '10px' }}>></span>
                                        Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify

                                    </Typography>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#8892b0' }} ><span style={{ color: '#64ffda', marginRight: '10px' }}>></span>
                                        Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis

                                    </Typography>

                                </Stack>}
                                {tabActivated.third && <Stack direction='column' spacing={3}>
                                    <Stack direction='column'>  <Typography sx={{ fontSize: '27px', fontWeight: '700', color: '#ccd6f6' }} >Developer <span style={{ color: '#64ffda' }}>@Apple</span></Typography>
                                        <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#8892b0', }} >Sep 2022 - Present</Typography>
                                    </Stack>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#8892b0' }} ><span style={{ color: '#64ffda', marginRight: '10px' }}>></span>
                                        Write modern, performant, maintainable code for a diverse array of client and internal projects

                                    </Typography>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#8892b0' }} ><span style={{ color: '#64ffda', marginRight: '10px' }}>></span>
                                        Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify

                                    </Typography>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#8892b0' }} ><span style={{ color: '#64ffda', marginRight: '10px' }}>></span>
                                        Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis

                                    </Typography>

                                </Stack>}
                                {tabActivated.fourth && <Stack direction='column' spacing={3}>
                                    <Stack direction='column'>  <Typography sx={{ fontSize: '27px', fontWeight: '700', color: '#ccd6f6' }} >C++ Developer <span style={{ color: '#64ffda' }}>@Scout</span></Typography>
                                        <Typography sx={{ fontSize: '14px', fontWeight: '500', color: '#8892b0', }} >Sep 2022 - Present</Typography>
                                    </Stack>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#8892b0' }} ><span style={{ color: '#64ffda', marginRight: '10px' }}>></span>
                                        Write modern, performant, maintainable code for a diverse array of client and internal projects

                                    </Typography>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#8892b0' }} ><span style={{ color: '#64ffda', marginRight: '10px' }}>></span>
                                        Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify

                                    </Typography>
                                    <Typography sx={{ fontSize: '14px', fontWeight: '700', color: '#8892b0' }} ><span style={{ color: '#64ffda', marginRight: '10px' }}>></span>
                                        Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis

                                    </Typography>

                                </Stack>}
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack >


            </Container >
        </Box >
    )
}

export default Experience