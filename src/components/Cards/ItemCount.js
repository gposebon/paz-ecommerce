import { useState } from 'react'
import { FormGroup, ButtonGroup, Button, Input} from '@mui/material';




const ItemCount = ({ inicial, stock, verdura}) => {

    const [cantidad, setCantidad] = useState(parseInt(inicial))
    const [value, setValue] = useState(0)
    const [carrito, setCarrito] = useState()
    const [id, setId] = useState()

    const addItem = (e) => {
        e.preventDefault()
        setCantidad( cantidad + 1)
        setValue(cantidad + 1)
    }

    const delItem = (e) => {
        e.preventDefault()
        setCantidad(cantidad - 1)
        setValue(cantidad - 1)
    }

    

    const agregarAlCarrito = (e) => {
        e.preventDefault() 
        setCarrito(value)
        setId(verdura.id)
        console.log(`Usted a agregado ${carrito} de el producto ${id}`)
    }

    
    
    return (
        <FormGroup>
            <ButtonGroup size="small" aria-label="small button group">
                {cantidad > 0 ? <Button onClick={delItem} > - </Button> : <Button disable="true"> - </Button>} 
                <Input inputProps={{ style: {textAlign: 'center'} }} value={cantidad} ></Input>
                {parseInt(stock) > cantidad ? <Button onClick={addItem}> + </Button> : <Button disable="true"> + </Button>}          
            </ButtonGroup>
            <Button variant="outlined" onClick={agregarAlCarrito}>Agregar al carrito</Button>
        </FormGroup>
    )

}

export default ItemCount