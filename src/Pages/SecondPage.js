import React from "react";
import { Grid, useMediaQuery, Box, Paper, styled, Stack, Pagination} from "@mui/material";
import {Link} from 'react-router-dom';


export function SecondPage(){
    const matches = useMediaQuery('(min-width:600px)');
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      const [open, setOpen] = React.useState(true);
    return(
        <div>
            <Link to='/first'>first로가기</Link>
            <Grid container spacing={2} alignItems="center" justifyContent="center" >
            <Grid item  style={{width:'30%'}}>
                <div style={{backgroundColor:'green',height:30}}>
                        {matches?'44':'11'}
                </div>
            </Grid>
            <Grid item style={{width:'30%'}} >
                <div style={{backgroundColor:'green',height:40}}>
                        22
                </div>
            </Grid>
            <Grid item  style={{width:'30%'}} >
                <div style={{backgroundColor:'green',height:50}}>
                        33
                </div>
            </Grid>
            </Grid>

            <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
                <Item>xs=6 md=8</Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={8}>
                <Item>xs=6 md=8</Item>
            </Grid>
            </Grid>

            <Stack spacing={2}>
                <Pagination count={10} color="primary" />
            </Stack>
            <Pagination count={10} showFirstButton showLastButton />

            
            
        </div>
    )
}