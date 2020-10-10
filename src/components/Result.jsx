import React from 'react';
import { Info, Price, ResultContainer } from '../styled';

const Result = ({resultado}) => {

    if( Object.keys(resultado).length === 0 ) return null;
    
    return (  
        <ResultContainer>
            <Price> El precio es: <span> { resultado.PRICE } </span> </Price>
            <Info> El precio más alto del día: <span> { resultado.HIGHDAY } </span> </Info>
            <Info> El precio más bajo del día: <span> { resultado.LOWDAY } </span> </Info>
            <Info> Variación últimas 24 horas: <span> { resultado.CHANGEPCT24HOUR } </span> </Info>
            <Info> Última Actualización: <span> { resultado.LASTUPDATE } </span> </Info>
        </ResultContainer>
    );

}
 
export default Result;