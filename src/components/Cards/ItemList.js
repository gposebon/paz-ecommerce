import { Grid, Container } from '@mui/material'
import Items from './Items'


const ItemList = ({verdura, id}) => {
    
    

    return (
        <Container sx={{ p: 5 }} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Items verdura={verdura} ></Items>
            </Grid>
        </Container>    
        )

}

export default ItemList