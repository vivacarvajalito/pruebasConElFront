import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import iFactura from '../../Interfaces/Interfaces';
import {Button, Col, Container, FloatingLabel, Form, Row} from 'react-bootstrap'
interface Props {
    addANewFactura: (factura: iFactura) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement| HTMLTextAreaElement | HTMLSelectElement>;

const AltaFacturas = (prop:Props) => {
    //facturas
    const [factura, setFactura] = useState({
        IDComision: 0, 
    NombrePrestador: "", 
    CuitPrestador: "",  
    NroPrestador: "",  
    TipoFactura: "", 
    ImporteFacturado: 0, 
    NroFactura: ""
    });
//prestadores de comisiones
const [prestadores, setPrestadores] = useState(['elija una comision']);
//comisiones
const [comisiones, setComisiones] = useState({
  nombreDeComision: '',
  idDeComision:0
});

//factura
    const handlerNewFactura = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        prop.addANewFactura(factura);
    }

    const handleInputChange = ({
        
        target : { name, value },
    }:HandleInputChange) => {
        setFactura({
            ...factura,
            [name]: value,
        });
    }

    //comisiones

    const handleComisionChange = ({
        
        target : { name, value },
    }:HandleInputChange) => {
        setComisiones(value);
    } 

    useEffect(() => {
      let comisionUno :string[] = ['Emmanuel','Juan','Erica'];
      let comisionDos :string[] = ['Alan','Celeste','Kevin'];
      let comisionTres :string[] = ['Edgardo','Lucia','Romina'];
      if(comisiones.nombreDeComision === 'a'){
        setPrestadores(comisionUno);
      }
      else if(comisiones.nombreDeComision === 'b'){
        setPrestadores(comisionDos);
      }
      else{
        setPrestadores(comisionTres);
      }
      console.log(prestadores);
        console.log(comisiones);
     }, [comisiones]);

     useEffect(() => {} , [prestadores]);
    


    return (
      <Fragment>
        <form onSubmit={handlerNewFactura}>
          <Container fluid>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Id de comision"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="id de la comision"
                    name="IDComision"
                    onChange={handleInputChange}
                    value={factura.IDComision}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Nombre del prestador"
                >
                  <Form.Control
                    type="text"
                    placeholder="Nombre del prestador"
                    name="NombrePrestador"
                    onChange={handleInputChange}
                    value={factura.NombrePrestador}
                  />
                </FloatingLabel>
              </Col>
            </Row>

            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Cuit del prestador"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="Cuit del prestador"
                    name="CuitPrestador"
                    onChange={handleInputChange}
                    value={factura.CuitPrestador}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Numero del prestador"
                >
                  <Form.Control
                    type="number"
                    placeholder="Numero del prestador"
                    name="NroPrestador"
                    onChange={handleInputChange}
                    value={factura.NroPrestador}
                  />
                </FloatingLabel>
              </Col>
            </Row>

            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Tipo de factura"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Tipo de factura"
                    name="TipoFactura"
                    onChange={handleInputChange}
                    value={factura.TipoFactura}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Importe facturado"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="Importe facturado"
                    name="ImporteFacturado"
                    onChange={handleInputChange}
                    value={factura.ImporteFacturado}
                  />
                </FloatingLabel>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Numero de factura"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="Numero de factura"
                    name="NroFactura"
                    onChange={handleInputChange}
                    value={factura.NroFactura}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <Form.Select onChange={handleComisionChange} value={comisiones.idDeComision} aria-label="Default select example">
                  <option value="a">Comision Uno</option>
                  <option value="b">Comision Dos</option>
                  <option value="c">Comision Tres</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
            <Col>
                <Form.Select   aria-label="Default select example">
                  { prestadores != null ? prestadores.map((prestador:string) =>
                   <option value={prestador}>{prestador}</option>) : null}
                  {/* <option value="prestadorUno">Comision Uno</option>
                  <option value="prestadorDos">Comision Dos</option>
                  <option value="prestadorTres">Comision Tres</option> */}
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col className="d-grid gap-2">
                <Button variant="primary" size="lg" type="submit">
                  Agregar
                </Button>
              </Col>
            </Row>
          </Container>
        </form>
      </Fragment>
    );

}


export default AltaFacturas;


