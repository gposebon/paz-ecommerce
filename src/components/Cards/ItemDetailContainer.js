import { Grid } from "@mui/material"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ({ verduras, id }) => {

    return (
        <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ p: 5 }}
        >
            <ItemDetail verduras={verduras} id={id} />
        </Grid>
    )
}

export default ItemDetailContainer