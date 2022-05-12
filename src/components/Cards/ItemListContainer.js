import * as React from 'react';
import { useEffect, useState } from 'react'
import { Container } from '@mui/material';
import ItemList from './ItemList';

import Acelga from '../../image/acelga.jpg'
import Lechuga from '../../image/lechuga.jpg'
import Tomate from '../../image/tomate.jpg'

const productos = [
    {
        "id": 1,
        "nombre": "Acelga",
        "precio": 120,
        "imagen":Acelga,
        "Alt": "Acelga",
        "stock": 15
    },
    {
        "id": 2,
        "nombre": "Lechuga",
        "precio": 70,
        "imagen": Lechuga,
        "Alt": "Lechuga",
        "stock": 20
    },
    {
        "id": 3,
        "nombre": "Tomate",
        "precio": 180,
        "imagen": Tomate,
        "Alt": "Tomate",
        "stock": 10
    },
]


const ItemListContainer = () => {

    const [verduras, setVerduras] = useState([])

    useEffect( () => { 
        const traeProductos = new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(productos)
        }, 2000 )
    })
    

    traeProductos.then( (res => {
        setVerduras(res)
    }))
    
},[])

    return (
        <Container sx={{ p: 5 }}>
            <ItemList verduras={verduras}></ItemList>
        </Container>
    )
}

export default ItemListContainer