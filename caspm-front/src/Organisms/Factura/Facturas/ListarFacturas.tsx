import { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import iFactura from '../../../Interfaces/Interfaces';
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
interface Props {
  facturas: iFactura[];
}
const ListarFacturas = (prop: Props) => {
  return (
    <Fragment>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Numero De Factura</th>
            <th>Nombre Del Prestador</th>
            <th>Cuit Prestador</th>
            <th>Importe Facturado</th>
            <th> </th>
          </tr>
        </thead>
        {prop.facturas.map((elemento, index) => (
          <tbody key={index}>
            <tr >
              <td>{index}</td>
              <td>{elemento.NombrePrestador}</td>
              <td>{elemento.CuitPrestador}</td>
              <td>${elemento.ImporteFacturado}</td>
              <td><BsFillPencilFill size={25} /><BsFillTrashFill size={25} /></td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Fragment>
  );
}
export default ListarFacturas;