import React, { useEffect, useState } from 'react';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario'
import { Contenedor, Heading, Imagen } from './styled';
import Result from './components/Result';
import Spinner from './components/Spinner';

const App = () => {

    const [moneda, setMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState( false );

    useEffect( () => {
        const cotizarCriptomoneda = async () => {
            if( moneda === '' ) return;

            const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
            
            setCargando( true );
            const resultado = await axios.get( url );
            
            setTimeout( () => {
                setCargando( false );
                setResultado( resultado.data.DISPLAY[criptomoneda][moneda] );
            }, 1000);
        };
        cotizarCriptomoneda();
    }, [moneda, criptomoneda]);

    return (  
        <Contenedor>
            <div>
                <Imagen
                    src={imagen}
                    alt="imagen-crypto"
                />
            </div>
            <div>
                <Heading> Criptomonedas al instante </Heading>
                <Formulario 
                    setMoneda={setMoneda}
                    setCriptomoneda={setCriptomoneda}
                />
                { cargando ? <Spinner /> : <Result resultado={resultado}/> }
            </div>
        </Contenedor>
    );
}
 
export default App;