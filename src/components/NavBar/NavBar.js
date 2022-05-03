import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Link, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



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
                            <MenuIcon />
                        </IconButton>
                        <Link 
                            href="#" 
                            color="black" 
                            sx={{ flexGrow: 1 }}
                            underline="none"
                            >
                            <Typography
                                variant="h6"
                                >
                                Inicio
                            </Typography>
                        </Link>
                        <Link 
                            href="#" 
                            color="black" 
                            sx={{ flexGrow: 1 }}
                            underline="none"
                            >
                            <Typography
                                variant="h6"
                                >
                                Mercado
                            </Typography>
                        </Link>
                        <Link 
                            href="#" 
                            color="black" 
                            sx={{ flexGrow: 1 }}
                            underline="none"
                            >
                            <Typography
                                variant="h6"
                                >
                                Sobre Nosotros
                            </Typography>
                        </Link>
                        <Link 
                            href="#" 
                            color="black" 
                            sx={{ flexGrow: 1 }}
                            underline="none"
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