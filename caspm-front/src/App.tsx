import  {  useEffect, useState } from 'react';
import { Fragment } from 'react';
import ListarFacturas from './Templates/ListarFacturas';
import AltaFacturas from './Templates/AltaFacturas';
import ModificarFacturas from './Templates/ModificarFacturas';
import iFactura from './Interfaces/Interfaces';
const arr: string[] =[
  'emma',
  'celes',
  'jime'
];

const App = () => {
  const [facturas, setFacturas] = useState<iFactura[]>([]);
  const addANewFactura = (factura:iFactura) => setFacturas([...facturas, factura]); 
  
  const updateFactura = (factura:iFactura) => facturas[0] = factura;
  useEffect(() => {
    if(facturas.length > 0){
      console.log(facturas);
     // console.log(facturas.find(factura => factura.NombrePrestador === 'emma')+ facturas[0].NombrePrestador);
    }
  }, [facturas]);

  return (
    <Fragment>
      <ListarFacturas facturas={facturas} />
      <AltaFacturas addANewFactura={addANewFactura} />
      {facturas.length > 0 ? <ModificarFacturas updateFactura={updateFactura} factura={facturas[0]}/>:null}
      
    </Fragment>
  );
}

export default App;
