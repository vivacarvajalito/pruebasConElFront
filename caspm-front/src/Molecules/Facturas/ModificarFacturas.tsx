import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import iFactura from '../../Interfaces/Interfaces';

interface Props {
    updateFactura: (factura: iFactura) => void;
    factura: iFactura;
}

type HandleInputChange = ChangeEvent<HTMLInputElement| HTMLTextAreaElement>;
const ModificarFacturas = (prop:Props) => {
    const [factura, setFactura] = useState({
        IDComision: prop.factura.IDComision, 
    NombrePrestador: prop.factura.NombrePrestador, 
    CuitPrestador: prop.factura.CuitPrestador,
    NroPrestador: prop.factura.NroPrestador,
    TipoFactura: prop.factura.TipoFactura,
    ImporteFacturado: prop.factura.ImporteFacturado,
    NroFactura: prop.factura.NroFactura,
    });


    const handlerNewFactura = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        prop.updateFactura(factura);
    }

    const handleInputChange = ({
        
        target : { name, value },
    }:HandleInputChange) => {
        setFactura({
            ...factura,
            [name]: value,
        });
    }
    return(       
        <Fragment>
            <form onSubmit={handlerNewFactura}>
                <h3>Modificar Factura</h3>
                <label>IdComision</label>
                <input type="number" name="IDComision" onChange={handleInputChange} value={factura.IDComision}></input>
                <label>NombrePrestador</label>
                <input type="text" name="NombrePrestador" onChange={handleInputChange} value={factura.NombrePrestador}></input>
                <label>CuitPrestador</label>
                <input type="text" name="CuitPrestador" onChange={handleInputChange} value={factura.CuitPrestador}></input>
                <label>NroPrestador</label>
                <input type="text" name="NroPrestador" onChange={handleInputChange} value={factura.NroPrestador}></input>
                <label>TipoFactura</label>
                <input type="text" name="TipoFactura" onChange={handleInputChange} value={factura.TipoFactura}></input>
                <label>ImporteFacturado</label>
                <input type="number" name="ImporteFacturado" onChange={handleInputChange} value={factura.ImporteFacturado}></input>
                <label>NroFactura</label>
                <input type="text" name="NroFactura" onChange={handleInputChange} value={factura.NroFactura}></input>
                <button >Agregar</button>
            </form>
        </Fragment>
    
            
    )

}


export default ModificarFacturas;