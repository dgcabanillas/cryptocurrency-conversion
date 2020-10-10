import React, { Fragment, useState } from 'react';
import { Label, Select } from '../styled';

const useCriptomoneda = ( label, initialState, options ) => {
    const [state, setState] = useState( initialState );

    const SelectCrypto = () => (
        <Fragment>
            <Label> {label} </Label>
            <Select
                onChange={ e =>  setState( e.target.value )}
                value={state}
            > 
                <option value="">- Seleccione -</option>
                {
                    options.map( option => 
                        <option 
                            key={option.CoinInfo.Id} 
                            value={option.CoinInfo.Name}
                        > 
                            {option.CoinInfo.FullName}
                        </option>
                    )    
                }
            </Select>
        </Fragment>
    );

    return [state, SelectCrypto];
}
 
export default useCriptomoneda;