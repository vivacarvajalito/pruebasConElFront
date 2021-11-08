import { ChangeEvent, Fragment } from "react"
import { FloatingLabel, Form } from "react-bootstrap"
import iFactura from "../Interfaces/Interfaces";
type HandleInputChange = ChangeEvent<HTMLInputElement>;
interface Props {
    handleInputChange: ({       
        target : { name, value },
    }:HandleInputChange) => void;
    factura:iFactura;
    textoLabel:string;
    placeHolder:string;
    nombreDelCampo:string;
    type:string;
    disabled:boolean;
    valor:any;
}
const InputLabel = (props:Props) => {
    return(
        <Fragment>
            <FloatingLabel
                  controlId="floatingInput"
                  label={props.textoLabel}
                  className="mb-3"
                >
                  <Form.Control
                    type={props.type}
                    placeholder={props.placeHolder}
                    name={props.nombreDelCampo}
                    onChange={props.handleInputChange}
                    value={props.valor} disabled={props.disabled}
                  />
                </FloatingLabel>
        </Fragment>
    )
}
export default InputLabel;