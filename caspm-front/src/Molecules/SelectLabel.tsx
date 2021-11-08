import { ChangeEvent, Fragment } from "react"
import { FloatingLabel, Form } from "react-bootstrap"
type HandleInputChange = ChangeEvent<HTMLSelectElement>;
interface Props {
    handleInputChange: ({       
        target : { name, value },
    }:HandleInputChange) => void;
    valuesDelSelec:number| string;
    textoLabel:string;
    array:any[];
    name:string;
    valorDelOption:number[];
} 
const SelectLabel = (props:Props)=>{
    return(
        <Fragment>
            <FloatingLabel controlId="floatingSelect" label={props.textoLabel}>
                <Form.Select name={props.name} onChange={props.handleInputChange} value={props.valuesDelSelec} aria-label={props.textoLabel}>
                { props.array != null ? props.array.map((item:string , index:number) =>
                   <option key={index} value={props.valorDelOption[index]}>{item}</option>) : null}
                </Form.Select>
                </FloatingLabel>
        </Fragment>
    )
}
export default SelectLabel;