import { Box, Stack } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LeftIcons = () => {
    return (
        <Box sx={{ position: 'absolute', bottom: '0', left: '2%' }}>
            <Stack direction='column' spacing={5} alignItems='center'>

                <Box>
                    <GitHubIcon fontSize='medium' sx={{
                        color: '#ffffff', cursor: 'pointer',
                        transition: 'all 0.2s', '&:hover': {
                            transform: 'translateY(-10px)',
                            color: '#64ffda'
                        }
                    }} />
                </Box>
                <Box>
                    <LinkedInIcon fontSize='medium' sx={{
                        color: '#ffffff', cursor: 'pointer',
                        transition: 'all 0.2s', '&:hover': {
                            transform: 'translateY(-10px)',
                            color: '#64ffda'
                        }
                    }} />
                </Box>
                <Box>
                    <TwitterIcon fontSize='medium' sx={{
                        color: '#ffffff', cursor: 'pointer',
                        transition: 'all 0.2s', '&:hover': {
                            transform: 'translateY(-10px)',
                            color: '#64ffda'
                        }
                    }} />
                </Box>
                <Box>
                    <InstagramIcon fontSize='medium' sx={{
                        color: '#ffffff', cursor: 'pointer',
                        transition: 'all 0.2s', '&:hover': {
                            transform: 'translateY(-10px)',
                            color: '#64ffda'
                        }
                    }} />
                </Box>

                <Box sx={{ maxWidth: '5px', borderLeft: '1px solid white', bgcolor: 'white', height: '100px' }}></Box>
            </Stack>

        </Box>
    )
}

export default LeftIcons