import { Grid } from '@mui/material'
import Items from './Items'

const ItemList = ({verduras}) => {

    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            
                <Items verduras={verduras}></Items>

        </Grid>
    )

}

export default ItemList