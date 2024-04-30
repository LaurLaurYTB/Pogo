import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink, Routes, Route, Router } from 'react-router-dom';

const defaultTheme = createTheme();

function Succes()
{
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">

            <Box sx={{  
                marginTop: 32,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#172B4D',
                }}>

                <Typography component="h1" variant='h4' color={'#172B4D'}>
                    Reset password link sent.
                </Typography>
                <Typography component="h5" variant='h7' textAlign={'center'} color={'#44546F'} sx={{fontSize: 16}}>
                    Please follow the password reset instructions we sent to your email.
                </Typography>

                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, fontSize: 16 }}
                    component={RouterLink} to="/ForgotPasswordSucces2" href="/ForgotPasswordSucces2.js"
              
                    >
                    OK
                    </Button> 
                

               
                    
                

                    
                

            </Box>
        
        









            </Container>
            
        </ThemeProvider>
    );
}

export default Succes;