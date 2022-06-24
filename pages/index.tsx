import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Table from "../components/Table";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}> 
          <Container maxWidth="sm">
            <Button fullWidth style={{margin:"50px auto auto auto"}} variant="contained">Add New </Button>
          </Container>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          
            <Table />
        </Grid>
      </Grid>
    </Box>
  );
}


