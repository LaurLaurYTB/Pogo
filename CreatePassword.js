import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink, Routes, Route, Router } from 'react-router-dom';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Createpassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{  
            marginTop: 32,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#172B4D',
          }}
        >
         
          <Typography component="h1" variant='h4' color={'#172B4D'}>
          Change your password
          </Typography>
          <Typography component="h5" variant='h7' color={'#44546F'} textAlign={'center'} >
          Create a new password for your account.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
            <Typography component="h6" variant='h7' color={'#44546F'} textAlign={'left'} >
                At least 10 characters.
            </Typography>
             <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Confirm Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
 
            <Button
              
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              component={RouterLink} to="/Signin" href="/Signin.js" 
            
            >
              Reset Password
            </Button>
            
            

            
              
          
               
               
                
         
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}