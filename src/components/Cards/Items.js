import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';

const Items = ({verduras}) => {
    return (
        <>
        {verduras.map( (verdura) => (
            <Card sx={{ maxWidth: 250 }} key={verdura.id}>
            <CardMedia
                    component="img"
                    height="140"
                    image={verdura.imagen}
                    alt={verdura.alt}
                />
                <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                            Verdura: {verdura.nombre}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Precio: $ {verdura.precio}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Stock: {verdura.stock}
                        </Typography>
                </CardContent>
                <ItemCount inicial="1" stock="10"></ItemCount>
            </Card>
        ))
        }
        
        </>
        )
    }

export default Items