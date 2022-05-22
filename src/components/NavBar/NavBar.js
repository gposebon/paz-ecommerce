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
                        <Link to="/"
                            style={linkStyle}>
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Typography variant="h4"> PAZ</Typography>
                        </IconButton>
                        </Link>
                        
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                                >
                                <Link to="/"
                                    style={linkStyle}
                                    >
                                    Inicio
                                </Link>
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                                >
                                <Link 
                                    to="/categoria/:id" 
                                    style={linkStyle}
                                    >
                                Mercado
                                </Link>
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                                >
                                <Link 
                                    to="/about" 
                                    style={linkStyle}
                                    >
                                Sobre Nosotros
                                </Link>
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1 }}
                                >
                                <Link 
                                    to="/contacto" 
                                    style={linkStyle}
                                    >
                                Contacto
                                </Link>
                            </Typography>
                        <Link to="/carrito" 
                            style={linkStyle}>
                            <CartWidget></CartWidget>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
}

export default NavBar;