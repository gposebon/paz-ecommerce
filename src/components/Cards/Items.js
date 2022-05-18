import {CardActions, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Items = ({ verduras }) => {
    return (
        <>
                {verduras.map((verdura) => (
                <Grid item  xs={2} sm={4} md={4} >
                    <Card sx={{ maxWidth: 250}} key={verdura.id}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={verdura.imagen}
                            alt={verdura.alt}
                            sx={{pb:2}}
                        />
                        <CardContent sx={{ border: 1}}>
                            <Typography gutterBottom variant="h5" component="div">
                                {verdura.nombre}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Precio: {verdura.precio}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to={`/item/${verdura.id}`}>
                                <Button>Detalles</Button>
                            </Link>
                        </CardActions>
                        <ItemCount inicial="1" stock="10"></ItemCount>
                    </Card>
                </Grid>
                ))}
        </>
    )
}

export default Items