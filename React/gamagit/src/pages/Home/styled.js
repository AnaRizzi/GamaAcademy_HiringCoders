import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-itens: center;
    justify-content: center;
`

export const Input = styled.input`
    border: 1px, solid, #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 2rem;
    padding: 5px;

    &focus,
    &active{
        outline:none;
        box-shadow:none;
    }
`

export const Button = styled.button`
    border: 1px, solid, #000;
    border-radius: 0 .25rem .25rem 0;
    height: 3rem;
    background: #000;
    color: #fff;

    &focus, &active{
        outline:none;
        box-shadow:none;
    }
`

