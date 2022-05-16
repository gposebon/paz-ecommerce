import { useState } from 'react'
import { FormGroup, ButtonGroup, Button, Input} from '@mui/material';

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
            <ButtonGroup size="small" aria-label="small button group">
                {cantidad > 0 ? <Button onClick={delItem} > - </Button> : <Button disable="true"> - </Button>} 
                <Input inputProps={{ style: {textAlign: 'center'} }} value={cantidad} onChange={handleChange} >{cantidad}</Input>
                {parseInt(stock) > cantidad ? <Button onClick={addItem}> + </Button> : <Button disable="true"> + </Button>}          
            </ButtonGroup>
            <Button variant="outlined">Agregar al carrito</Button>
        </FormGroup>
    )

}

export default ItemCount