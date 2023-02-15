import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../data/logo.png'



const Navbar = () => {
    const navigate = useNavigate();

    const linkDesign = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '15px', '&:hover': {

            color: '#64ffda'
        }
    }
    return (
        <Box sx={{ bgcolor: '#0a192f', width: '100%' }}>
            <Stack px={5} direction='row' justifyContent="space-between" alignItems='center' sx={{ height: '80px' }}>
                <Box sx={{ flex: 1, color: 'white', cursor: 'pointer' }} onClick={() => navigate('/')}>
                    <img src={logo} alt="" style={{ width: '60px', height: '100%' }} />
                </Box>
                <Box sx={{ flex: 0.5, }}>

                    <Stack direction='row' justifyContent='space-between' alignItems='center'  >
                        <Link style={{ ...linkDesign }} to='/about'> <span style={{ color: '#64ffda', fontWeight: '700' }}>-></span> About </Link>
                        <Link style={{ ...linkDesign }} to='/experience'> <span style={{ color: '#64ffda', fontWeight: '700' }}>-></span>  Experience</Link>
                        <Link style={{ ...linkDesign }} to='/work'> <span style={{ color: '#64ffda', fontWeight: '700' }}>-></span>  Work</Link>
                        <Link style={{ ...linkDesign }} to='/contact'> <span style={{ color: '#64ffda', fontWeight: '700' }}>-></span>  Contact</Link>
                        <Button variant='outlined' sx={{
                            color: '#64ffda', borderColor: '#64ffda',
                            fontSize: '15px',
                            '&:hover': {
                                color: 'white',
                                borderColor: 'white',
                                bgcolor: 'rgba(255,255,255,0.1)'
                            }
                        }}>
                            Resume
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>

    )
}

export default Navbar


// #0a192f