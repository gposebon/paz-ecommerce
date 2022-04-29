import { CardMedia, Container } from "@mui/material";
import Back from '../../image/back.jpg'

function Header() {
    return (
        <Container>
            <CardMedia
                height="194"
                component="img"
                image={Back}
                alt="Paella dish"
            />

        </Container>
    );
}

export default Header;