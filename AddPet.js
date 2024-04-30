import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { Link as RouterLink, Routes, Route, Router } from 'react-router-dom';




export default function AddPet() {
  const [value, setValue] = React.useState(0);

  const defaultTheme = createTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



 
  

  const dogBreeds = [
    { label: 'Rasa matii' },]

  const gender = [
    {label: 'Male'},
    {label: 'Female'},
    {label: 'Puppy'},
  ]  

  // const weight = [
  //   {label: '0 - 5'},
  //   {label: '5 - 10'},
  //   {label: '10 - 15'},
  //   {label: '15 - 20'},
  //   {label: '20 - 25'},
  //   {label: '25 - 30'},
  //   {label: '35 - 40'},
  //   {label: '40 - 45'},
  //   {label: '50 - 55'},
  //   {label: '60 - 65'},
  //   {label: '70 - 75'},
  // ]
    

  return (
    <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
        <Box
          sx={{  
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: '#172B4D',
          }}
        >

        <Typography  component="h1" variant='h4' color={'#172B4D'} align='center'>
            What type of pet do you want to add?
        </Typography>

        <Tabs margin="dense" value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab  iconPosition="start" label="Dog" />
            <Tab  iconPosition="start" label="Cat" />
        </Tabs>

      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}

    >

   

      <TextField  required margin="dense" fullWidth label="Please enter pet's name" id="fullWidth" />

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={dogBreeds}
        renderInput={(params) => <TextField {...params} label="Please select pet's breed" 
        required 
        margin="dense"
        freeSolo
        />}
      />

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={gender}
        renderInput={(params) => <TextField {...params} label="Please select pet's gender"
        required 
        margin="dense" />}
      />

      <TextField 
      required 
      margin="dense" 
      fullWidth 
      label="Please enter pet's weight" 
      id="fullWidth"
      InputProps={{
        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
      }} />

        {/* date picker start */}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
        <DatePicker sx={{width: 500}} label="Pet's Birthday" />
        </DemoContainer>
        </LocalizationProvider>

        {/* date picker end */}
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        component={RouterLink} to="/" href="/Home.js"
        >
        Save
      </Button>




    </Box>
    
    </Container>
   </ThemeProvider>
    
  );
}
