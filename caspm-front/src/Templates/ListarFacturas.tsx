import { Fragment } from 'react';
import iFactura from '../Interfaces/Interfaces';

interface Props {
    facturas: iFactura[];
}
const ListarFacturas = (prop: Props) => {
    return(
        <Fragment>
            {prop.facturas.map((elemento,index) => <h3 key={index}>{elemento.NombrePrestador}</h3>)}
        </Fragment>
    )

}


export default ListarFacturas;