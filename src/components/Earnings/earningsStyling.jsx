import styled from 'styled-components';
import { cardStyle } from '../ReusableStyles';

export const Section = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    min-height:20rem;
    width:20rem;
    margin:0 auto;
    ${cardStyle};
    padding: 2rem 0 0 0;
    .top{
        .info{
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:0.3rem;
            h1{
                font-size:2rem;
            }
            .growth{
                background-color:#d7e41e1d;
                padding:.5rem;
                border-radius:1rem;
                transition:0.3s ease-in-out;
                &:hover{
                    background-color:#ffc107;
                    cursor:pointer;
                    span{
                        color:#000;
                    }
                }
                
            }
            span{
                color:#ffc107;
            }
        }
    }
    .chart{
        height:70%;
        .reacharts-default-tooltip{
            background-color: #000 !important;
            border-color:#000 !important;
        }
    }

    @media screen and (min-width:280px) and (max-width:1080px){
        display:flex;
        align-items: center;
        justify-content:center; 
     }


`