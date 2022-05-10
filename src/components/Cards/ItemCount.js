import { useState } from 'react'
import { FormGroup, Button, Input, Typography} from '@mui/material';

const ItemCount = ({ inicial, stock}) => {


    const [cantidad, setCantidad] = useState(parseInt(inicial))

    const addItem = (e) => {
        e.preventDefault()
        setCantidad( cantidad + 1)
    }

    const delItem = (e) => {
        e.preventDefault()
        setCantidad(cantidad - 1)
    }

    const handleChange = (e) => {
        setCantidad(e.target.value) 
    }

    return (
        
        <FormGroup>
            {parseInt(stock) > cantidad ? <Button onClick={addItem}> + </Button> : <Button disable> + </Button>}
            <Input value={cantidad} onChange={handleChange}>{cantidad}</Input>
            {cantidad > 0 ? <Button onClick={delItem} > - </Button> : <Button disable> - </Button>}
            <Button variant="outlined">Agregar al carrito</Button>            
            </FormGroup>
    )

}

export default ItemCount