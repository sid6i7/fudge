import { Button, ThemeProvider } from '@mui/material'
import React from 'react'
import {theme} from '../themes/Buttons';
import cupcake from '../images/cupcake_error.jpg';
import { Link } from 'react-router-dom';

export const DoesNotExistPage = () => {
  return (
    <div id='does-not-exist-container'>
        <h1 id='does-not-exist-error'>Error 404</h1>
        <h2 id='does-not-exist-message'>Oops.. That page does not exist</h2>
        <p>Here's some cupcakes instead</p>
        <img src={cupcake} id='does-not-exist-img'/>
        <ThemeProvider theme={theme}>
            <Button variant='contained' color='black' id='does-not-exist-btn' >
                <Link to="/" style={{color: 'white', textDecoration: 'none'}}>
                Back to Home
                </Link>
            </Button>
        </ThemeProvider>
    </div>
  )
}
