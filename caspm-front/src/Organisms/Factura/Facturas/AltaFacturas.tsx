import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import iFactura from '../../../Interfaces/Interfaces';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import InputLabel from '../../../Molecules/InputLabel';
import SelectLabel from '../../../Molecules/SelectLabel';
import { Link } from 'react-router-dom';
interface Props{
  addANewFactura: (factura: iFactura) => void;
}
type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
const AltaFacturas = ( prop:Props ) => {
  //facturas
  const [factura, setFactura] = useState({
    IDComision: 0,
    NombrePrestador: "",
    CuitPrestador: "",
    NroPrestador: "",
    TipoFactura: "",
    ImporteFacturado: 0,
    NroFactura: "",
    FechaDePeriodo: new Date().toLocaleDateString(),
    FechaDePrestacion: new Date().toLocaleTimeString(),
    FechaDeFactura: new Date().toLocaleDateString()
  });
  //prestadores de comisiones
  const [prestadores, setPrestadores] = useState(['elija una comision']);
  const [idPrestadores, setIdPrestadores] = useState([0]);
  const [prestador, setPrestador] = useState(0);
  const [cuitDePrestador, setCuitDePrestador] = useState("");
  const [numeroDePrestador, setNumeroDePrestador] = useState("");
  //comisiones
  const [comision, setComision] = useState(0);
  //factura
  const handlerNewFactura = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    prop.addANewFactura(factura);
  }
  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setFactura({
      ...factura,
      [name]: value,
    });
  }
  //comisiones
  const handleComisionChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setComision(Number.parseInt(value));
    setFactura({
      ...factura,
      [name]: value,
    });
  }
  //prestador
  const handlePrestadorChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setPrestador(Number.parseInt(value));
    setFactura({
      ...factura,
      [name]: value,
    });
  }
  useEffect(() => {
    let comisionUno: string[] = ['Emmanuel', 'Juan', 'Erica'];
    let comisionDos: string[] = ['Alan', 'Celeste', 'Kevin'];
    let comisionTres: string[] = ['Edgardo', 'Lucia', 'Romina'];
    if (comision === 0) {
      setPrestadores(comisionUno);
      setIdPrestadores([0, 1, 2]);
    }
    else if (comision === 1) {
      setPrestadores(comisionDos);
      setIdPrestadores([3, 4, 5]);
    }
    else {
      setPrestadores(comisionTres);
      setIdPrestadores([6, 7, 8]);
    }
  }, [comision]);
  useEffect(() => {
  }, [prestadores]);
  useEffect(() => {
    switch (prestador) {
      case (0): {
        setCuitDePrestador("38258916");
        setNumeroDePrestador("95849-258");
        break;
      }
      case (1): {
        setCuitDePrestador("34698957");
        setNumeroDePrestador("95549-2218");
        break;
      }
      case (2): {
        setCuitDePrestador("31158916");
        setNumeroDePrestador("98859-889");
        break;
      }
      case (3): {
        setCuitDePrestador("32588996");
        setNumeroDePrestador("55549-158");
        break;
      }
      case (4): {
        setCuitDePrestador("32558957");
        setNumeroDePrestador("123549-25488");
        break;
      }
      case (5): {
        setCuitDePrestador("35252222");
        setNumeroDePrestador("91119-98");
        break;
      }
      case (6): {
        setCuitDePrestador("37278717");
        setNumeroDePrestador("2524849-158");
        break;
      }
      case (7): {
        setCuitDePrestador("34278819");
        setNumeroDePrestador("11119-2338");
        break;
      }
      default: {
        setCuitDePrestador("54879652");
        setNumeroDePrestador("99999-2228");
        break;
      }
    }
  }, [prestador]);

  useEffect(() => {
    setFactura({
      ...factura,
      "NroPrestador": numeroDePrestador, "CuitPrestador": cuitDePrestador
    });
  }, [cuitDePrestador]);
  return (
    <Fragment>
      <form onSubmit={handlerNewFactura}>
        <Container fluid>
          <Row>
            <Col>
              <SelectLabel name="IDComision" handleInputChange={handleComisionChange} valuesDelSelec={comision}
                textoLabel="Seleccione una comision" array={["comision uno", "comision Dos", "comision tres"]}
                valorDelOption={[0, 1, 2]}></SelectLabel>
            </Col>
            <Col>
              <InputLabel handleInputChange={handleInputChange}
                factura={factura} textoLabel="Ingrese periodo"
                placeHolder="Ingrese periodo"
                nombreDelCampo="FechaDePeriodo"
                type="date" valor={factura.FechaDePeriodo} disabled={false}></InputLabel>
            </Col>
          </Row>

          <Row>
            <Col>
              <InputLabel handleInputChange={handleInputChange}
                factura={factura} textoLabel="Fecha de presentacion"
                placeHolder="Fecha de presentacion"
                nombreDelCampo="FechaDePrestacion"
                type="date" valor={factura.FechaDePrestacion} disabled={false}></InputLabel>
            </Col>

            <Col>
              <SelectLabel name="NombrePrestador" handleInputChange={handlePrestadorChange} valuesDelSelec={prestador}
                textoLabel="Seleccione un prestador" array={prestadores}
                valorDelOption={idPrestadores}></SelectLabel>
            </Col>

            <Col>
              <InputLabel handleInputChange={handleInputChange}
                factura={factura} textoLabel="Cuit del prestador"
                placeHolder="Cuit del prestador"
                nombreDelCampo="CuitPrestador"
                type="text" valor={cuitDePrestador} disabled={true}></InputLabel>
            </Col>
          </Row>

          <Row>
            <Col>
              <InputLabel handleInputChange={handleInputChange}
                factura={factura} textoLabel="Numero del prestador"
                placeHolder="Numero del prestador"
                nombreDelCampo="NroPrestador"
                type="text" valor={numeroDePrestador} disabled={true}></InputLabel>
            </Col>
            <Col>
              <InputLabel handleInputChange={handleInputChange}
                factura={factura} textoLabel="Tipo de factura"
                placeHolder="Tipo de factura"
                nombreDelCampo="TipoFactura"
                type="text" valor={factura.TipoFactura} disabled={false}></InputLabel>
            </Col>
            <Col>
              <InputLabel handleInputChange={handleInputChange}
                factura={factura} textoLabel="Importe facturado"
                placeHolder="Importe facturado"
                nombreDelCampo="ImporteFacturado"
                type="number" valor={factura.ImporteFacturado} disabled={false}></InputLabel>
            </Col>
          </Row>

          <Row>
            <Col>
              <InputLabel handleInputChange={handleInputChange}
                factura={factura} textoLabel="Numero de factura"
                placeHolder="Numero de factura"
                nombreDelCampo="NroFactura"
                type="text" valor={factura.NroFactura} disabled={false}></InputLabel>
            </Col>
            <Col>
              <InputLabel handleInputChange={handleInputChange}
                factura={factura} textoLabel="Fecha de factura"
                placeHolder="Fecha de factura"
                nombreDelCampo="FechaDeFactura"
                type="date" valor={factura.FechaDeFactura} disabled={false}></InputLabel>
            </Col>
          </Row>

          <Row>
            <Col >
              <Link to="/listar" className="d-grid gap-2">
                <Button variant="primary" size="lg" type="submit">
                  Agregar
                </Button>
              </Link>
            </Col>
            <Col >
              <Link to="/listar" className="d-grid gap-2">
                <Button variant="secondary" size="lg" type="button">
                  Volver
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </form>
    </Fragment>
  );
}
export default AltaFacturas;