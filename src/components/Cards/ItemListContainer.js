import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

import Acelga from '../../image/acelga.jpg'
import ItemCount from './ItemCount';


const ItemListContainer = ({verdura}) => {
    return (
        <Container>
            <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={Acelga}
                    alt="Acelga"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {verdura}
                    </Typography>
                </CardContent>
                <ItemCount inicial="1" stock="10"></ItemCount>
            </Card>
            
        </Container>
    )
}

export default ItemListContainer