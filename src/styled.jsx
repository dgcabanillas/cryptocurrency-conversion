import styled from '@emotion/styled';

export const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    @media (min-width:992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

export const Imagen = styled.img`
    max-width: 100%;
    margin-top: 2rem;
`;

export const Heading = styled.h1`
    font-family: "Bebas Neue", cursive;
    color: #FFF;
    text-align: left;
    font-weight: 700;
    font-size: 50px;
    margin-bottom: 50px;
    margin-top: 2rem;
    &::after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66A2FE;
        display: block;
    }
`;

export const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

export const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    --webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

export const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 20px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    text-transform: uppercase;
    &:hover{
        background-color: #326AC0;
        cursor: pointer;
    }
`;

export const Error = styled.p`
    font-family: 'Roboto', cursive;
    background-color: #b7322c;
    padding: .7rem;
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
    border-radius: 10px;
`;

export const ResultContainer = styled.div`
    padding: 20px 0;
    color: #FFF;
    font-family: Roboto, 'Open Sans', sans-serif
`;

export const Info = styled.p`
    font-size: 18px;
    span {
        font-weight: bold;
    }
`;

export const Price = styled.span`
    font-size: 30px;
`;