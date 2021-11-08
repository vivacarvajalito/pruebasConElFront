import { Fragment } from "react";
import FacturasTemplate from "../Templates/FacturaTemplate";
import { BrowserRouter } from 'react-router-dom';

const FacturasPage = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <FacturasTemplate />
            </BrowserRouter>
        </Fragment>
    );
};
export default FacturasPage;