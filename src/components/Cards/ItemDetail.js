import * as React from 'react';

import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ItemDetail = ({ verduras, id }) => {

    const filtro = verduras.filter((verdura) => verdura.id == id)

    return (
        <>
            <Grid item xs={4}>
                {filtro.map((verdura) => (
                    <Card sx={{ maxWidth: 300 }} key={verdura.id}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={verdura.imagen}
                            alt={verdura.alt}
                            sx={{ pb: 2 }}
                        />
                        <CardContent sx={{ border: 1 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {verdura.nombre}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Precio: {verdura.precio}
                            </Typography>
                        </CardContent>
                        <ItemCount inicial="1" stock="10"></ItemCount>
                    </Card>
                ))}
            </Grid>
            <Grid item xs={4}>
                {filtro.map((verdura) => (
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Detalles
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {verdura.descripcion}
                        </Typography>
                        <Link to="/carrito">
                            <Button variant="outlined">Ir al carrito</Button>
                        </Link>
                    </CardContent>
                ))}
            </Grid>
        </>
    )
}

export default ItemDetail
