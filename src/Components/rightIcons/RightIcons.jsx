import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
const RightIcons = () => {
    return (
        <Box sx={{ position: 'absolute', bottom: '0', right: '2%' }}>
            <Stack direction='column' spacing={3} alignItems='center'>


                <Box>
                    <EmailIcon fontSize='medium' sx={{
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

export default RightIcons