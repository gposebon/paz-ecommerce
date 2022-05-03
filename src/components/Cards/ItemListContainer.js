import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

import Acelga from '../../image/acelga.jpg'


const ItemListContainer = () => {
    return (
        <Container>
            <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={Acelga}
                    alt="Lechuga"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Acelga
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Ir a compras</Button>
                </CardActions>
            </Card>
        </Container>
    )
}

export default ItemListContainer