import { Fragment, useEffect, useState } from "react"
import iFactura from "../../Interfaces/Interfaces"
import AltaFacturas from "../../Molecules/Facturas/AltaFacturas"
import ListarFacturas from "../../Molecules/Facturas/ListarFacturas"
import ModificarFacturas from "../../Molecules/Facturas/ModificarFacturas"
const FacturasOrganismo = () => {
  //facturas
  const [facturas, setFacturas] = useState<iFactura[]>([]);
  const [facturaActual, setFacturaActual] = useState<iFactura>();

  const addANewFactura = (factura: iFactura) =>
    setFacturas([...facturas, factura]);

  const updateFactura = (factura: iFactura) => {    
    setFacturaActual(factura);
    (facturas[0] = factura);
  }
  useEffect(() => {

  }, [facturas, facturaActual]);
  

  return (
    <Fragment>
      <ListarFacturas facturas={facturas} />
      <AltaFacturas addANewFactura={addANewFactura} />
      {facturas.length > 0 ? (
        <ModificarFacturas
          updateFactura={updateFactura}
          factura={facturas[0]}
        />
      ) : null}
    </Fragment>
  );
};

export default FacturasOrganismo;