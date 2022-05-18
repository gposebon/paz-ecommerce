import * as React from 'react';
import { useEffect, useState } from 'react'

import ItemList from './ItemList'
// Imagenes
import Acelga from '../../image/acelga.jpg'
import Lechuga from '../../image/lechuga.jpg'
import Tomate from '../../image/tomate.jpg'
import Batata from '../../image/batata.jpg'
import Calabaza from '../../image/calabaza.jpg'
import Berenjena from '../../image/berenjena.jpg'



const productos = [
    {
        "id": 1,
        "nombre": "Acelga",
        "precio": 120,
        "imagen": Acelga,
        "alt": "Acelga",
        "stock": 15,
        "descripcion": "Planta bianual de la que se aprovechan las hojas. El tallo tiene forma de disco en su primer año, y si la planta no es recolectada o se dedica a obtención de semillas, se desarrolla ramificándose y emitiendo flores. Las hojas son de limbo entero y amplio, con el nervio central desarrollado y carnoso. La semilla queda atrapada en el fruto o glomérulo, presenta de 2-4 semillas por glomérulo, y generalmente se comercializa así. Existen dos tipos de acelgas según sus hojas, las variedades amarillas o rubias de hoja verde amarillenta y las variedades verdes, de hojas color verde oscuro."
    },
    {
        "id": 2,
        "nombre": "Lechuga",
        "precio": 70,
        "imagen": Lechuga,
        "alt": "Lechuga",
        "stock": 20,
        "descripcion": "Lactuca sativa, conocida comúnmente como lechuga, es una planta herbácea propia de las regiones semitempladas que se cultiva como alimento. Debido a las muchas variedades que existen y a su cultivo cada vez mayor en invernaderos, se puede consumir durante todo el año."
    },
    {
        "id": 3,
        "nombre": "Tomate",
        "precio": 180,
        "imagen": Tomate,
        "alt": "Tomate",
        "stock": 10,
        "descripcion": "Solanum lycopersicum, conocida comúnmente como tomatera, es una especie de planta herbácea del género Solanum de la familia Solanaceae; es nativa de América Central y del norte y noroeste de Sudamérica; su uso como comida se habría originado en el sureste de México hace dos mil seiscientos años."
    },
    {
        "id": 4,
        "nombre": "Batata",
        "precio": 150,
        "imagen": Batata,
        "alt": "Batata",
        "stock": 10,
        "descripcion": "Planta vivaz de la familia de las convolvuláceas , de tallo rastrero y ramoso , hojas alternas , acorazonadas y profundamente lobuladas , flores grandes , acampanadas , rojas por dentro , blancas por fuera , y raíces como las de la patata ."
    },
    {
        "id": 5,
        "nombre": "Berenjena",
        "precio": 120,
        "imagen": Berenjena,
        "alt": "Berenjena",
        "stock": 10,
        "descripcion": "La berenjena (Solanum melongena) es una planta de fruto comestible, generalmente anual, del género Solanum dentro de la familia de las solanáceas."
    },
    {
        "id": 6,
        "nombre": "Calabaza",
        "precio": 158,
        "imagen": Calabaza,
        "alt": "Calabaza",
        "stock": 10,
        "descripcion": "La calabaza es una baya de cáscara dura. Es el fruto de las cucurbitáceas (del género Cucurbita) y es un fruto de tipo pepónide. Algunos autores también incluyen a los frutos del género Lagenaria, y a los frutos de las plantas de la familia de las bignoniáceas, como los árboles de calabazas Crescentia y Amphitecna. Las calabazas se encuentran tanto de manera silvestre como cultivada. Las calabazas, incluidas las silvestres, son de tamaño grande, de más de 5 cm de diámetro"
    },

]




const ItemListContainer = () => {

    const [verduras, setVerduras] = useState([])

    useEffect(() => {
        const traeProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })


        traeProductos.then((res => {
            setVerduras(res)
        }))

    }, [])
    
    
    return (
        <> 
            <ItemList verduras={verduras} />
        </>
    )
}

export default ItemListContainer