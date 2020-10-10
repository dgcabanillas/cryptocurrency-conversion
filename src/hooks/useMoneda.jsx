import React, { Fragment, useState } from 'react';
import { Label, Select } from '../styled';

const useMoneda = ( label, initialState, options ) => {

    const [state, setState] = useState( initialState );

    const Seleccionar = () => (
        <Fragment>
            <Label> {label} </Label>
            <Select
                onChange={ e =>  setState( e.target.value )}
                value={state}
            > 
                <option value="">- Seleccione -</option>
                {   
                    options.map( option => 
                        <option key={option.codigo} value={option.codigo}> 
                            {option.nombre}
                        </option>
                    )    
                }
            </Select>
        </Fragment>
    );

    return [state, Seleccionar];
}
 
export default useMoneda;