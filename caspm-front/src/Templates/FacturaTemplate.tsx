import { Fragment, useEffect, useState } from "react"
import { Route, Routes } from 'react-router-dom';
import iFactura from "../Interfaces/Interfaces"
import AltaFacturas from "../Organisms/Factura/Facturas/AltaFacturas"
import ListarFacturas from "../Organisms/Factura/Facturas/ListarFacturas"
import ModificarFacturas from "../Organisms/Factura/Facturas/ModificarFacturas"
const FacturasTemplate = () => {
  //facturas
  const [facturas, setFacturas] = useState<iFactura[]>([]);
  const [facturaActual, setFacturaActual] = useState<iFactura>();
  const addANewFactura = (factura: iFactura) => {
    debugger
    setFacturas([...facturas, factura]);
    console.log(facturas);
  }
  const updateFactura = (factura: iFactura) => {
    setFacturaActual(factura);
    (facturas[0] = factura);
  }
  useEffect(() => {
  }, [facturas, facturaActual]);
  return (
    <Fragment>
      <Routes>
        <Route path="/alta" element={<AltaFacturas addANewFactura= {addANewFactura}  />} />
        <Route path="/modificar" element={facturas.length > 0 ? (
          <ModificarFacturas
            updateFactura={updateFactura}
            factura={facturas[0]}
          />
        ) : null} />
        <Route path="/listar" element={<ListarFacturas facturas={facturas} />} />
      </Routes>
    </Fragment>
  );
};
export default FacturasTemplate;