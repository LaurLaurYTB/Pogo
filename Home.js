import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { Link as RouterLink, Routes, Route, Router, Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { pink } from '@mui/material/colors';

const color = pink[500];

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2} marginTop={32} marginLeft={32}>
        <Link component={RouterLink} to="/Signin" href="/Signin.js">
            <Button variant="outlined" startIcon={<SendIcon />}>
                Log In
            </Button>
        </Link>
        <Link component={RouterLink} to="/Signup" href="/Signup.js">
            <Button variant="outlined" startIcon={<SendIcon />}>
                Sign Up 
            </Button>
        </Link>

        <Typography>
            We w8 for Catalin
        </Typography>
        <Typography color={color}>
         (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧    (￣_,￣ )   ¯\_(ツ)_/¯   (^◕.◕^)   ( ͡° ͜ʖ ͡°)   ¯\_( ͡° ͜ʖ ͡°)_/¯
        </Typography>
    </Stack>
  );
}