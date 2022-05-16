import * as React from 'react';
import { Container } from '@mui/material';
import ItemList from './ItemList';





const ItemListContainer = ( {verduras}) => {

    return (
        <Container sx={{ p: 5 }} >
            <ItemList verduras={verduras}></ItemList>
        </Container>
    )
}

export default ItemListContainer