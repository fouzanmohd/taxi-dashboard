import styled from 'styled-components';
import { cardStyle } from './../ReusableStyles';

export const Section = styled.section`
    display: grid;
    grid-template-columns:repeat(2,1fr);
    gap:1rem;
    .analytics{
        ${cardStyle};
        padding:1rem;
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        gap:1rem;
        transition: 0.5s ease-in-out;
        &:hover{
            background-color:#ffc107;
            color:#000
        }
        svg{
            color:#fff;
        }
    }
    .logo{
        background-color:#000;
        border-radius:3rem;
        padding:1.5rem;
        display:flex;
        justify-content:center;
        align-items:center;
        svg{
            font-size:1.5rem;
        }
    }

    @media screen and (min-width:280px) and (max-width:1080px){
        grid-template-columns: repeat(auto-fill, minmax(220px,1fr));
        .analytics{
            &:nth-of-type(3), &:nth-of-type(4){
                flex-direction:row-reverse;
            }
        }
    }
`