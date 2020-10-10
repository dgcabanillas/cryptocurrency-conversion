import React, { useEffect, useState } from 'react';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import { Button, Error } from '../styled';
import axios from 'axios';

const Formulario = ({ setMoneda, setCriptomoneda }) => {
    
    const [listaCrypto, setListaCrypto] = useState([]);
    const [error, setError] = useState( false );

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },   
        { codigo: 'PEN', nombre: 'Soles Peruanos' }
    ];

    const [moneda, SelectMoneda] =  useMoneda('Elige tu moneda','', MONEDAS);
    const [criptomoneda, SelectCrypto] = useCriptomoneda('Elige tu criptomoneda', '', listaCrypto);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const resultado = await axios.get( url );
            setListaCrypto( resultado.data.Data );
        }
        consultarAPI();
    }, []);

    const cotizarMoneda = e => {
        e.preventDefault();
        if( moneda==='' || criptomoneda==='' ) {
            setError( true );
            return;
        }
        setError( false );
        setMoneda( moneda );
        setCriptomoneda( criptomoneda );
    }

    return (  
        <form
            onSubmit={ cotizarMoneda }
        >
            <SelectMoneda />
            <SelectCrypto />
            <Button 
                type="submit"
                value="calcular"
            />
            { error && <Error className="error"> Se produjo un error </Error> }
        </form>
    );
}
 
export default Formulario;