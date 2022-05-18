import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Container, Typography} from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Link } from 'react-router-dom'

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'blue'
};


const CartWidget = () => {
    return (
        <AddShoppingCartIcon sx={{ color: "black" }} />
    )
 }

function NavBar() {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar 
                    position="static"
                    sx={{ bgcolor: "white" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Typography variant="h4"> PAZ</Typography>
                        </IconButton>
                        <Link 
                            to="/" 
                            style={linkStyle}
                            >
                            <Typography
                                variant="h6"
                                >
                                Inicio
                            </Typography>
                        </Link>
                        <Link 
                            to="/categoria/:id" 
                            style={linkStyle}
                            >
                            <Typography
                                variant="h6"
                                >
                                Mercado
                            </Typography>
                        </Link>
                        <Link 
                            to="/about" 
                            style={linkStyle}
                            >
                            <Typography
                                variant="h6"
                                >
                                About
                            </Typography>
                        </Link>
                        <Link 
                            to="/contacto" 
                            style={linkStyle}
                            >
                            <Typography
                                variant="h6"
                                >
                                Contacto
                            </Typography>
                        </Link>
                        <CartWidget></CartWidget>
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
}

export default NavBar;