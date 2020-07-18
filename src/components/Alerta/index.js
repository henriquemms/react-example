import React from 'react';

import {Alert} from 'react-bootstrap'


function Alerta(props) {

    return (
        <>
            {!!props.show&&(
                <Alert variant={props.variant}>
                    {props.mensagem}
                </Alert>
                )
            }
        </>
    )   
}

export default Alerta;
