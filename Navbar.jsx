import React from "react";
import PetsIcon from '@mui/icons-material/Pets';
import { AppBar, Toolbar, Typography, colors } from "@mui/material";
import styled from "@emotion/styled";

const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
})

const StyledAppbar = styled(AppBar) ({
    backgroundColor: '#F7F8F9'
})

const Navbar = () => {
    return (
        <StyledAppbar>
            <StyledToolbar>
            
                <PetsIcon sx={{ color:'black' }} />  
                <Typography variant="h4" color={"black"}>Pogo</Typography>
            </StyledToolbar>
        </StyledAppbar>
    )
    
}

export default Navbar