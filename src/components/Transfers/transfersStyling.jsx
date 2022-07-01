import styled from 'styled-components';
import { cardStyle } from './../ReusableStyles';

export const Section = styled.section`
${cardStyle};
display:flex;
flex-direction:column;
gap:1rem;
.title{
    h2{
        color:#ffc107;
        font-family:"Permanent Marker", cursive;
        letter-spacing: 0.3rem;
    }
}
.transactions{
    display:flex;
    flex-direction:column;
    gap:1rem;
    margin-top:1rem;
    .transaction{
        display:flex;
        justify-content:space-between;
        align-items:center;
        &__title{
            display:flex;
            gap:1rem;
            &__image{
                img{
                    height:2.5rem;
                    border-radius:3rem;
                }
            }
        }
        &__amount {
            background-color:#d7e41e1d;
            padding:0.2rem 0.5rem;
            width:4rem;
            border-radius:1rem;
            text-align:center;
            transition:0.3s ease-in-out;
            &:hover{
                background-color:#ffc107;
                span{
                    color:#000;
                }
            }
            span{
                color:#ffc107;
            }
        }
    }
}
.view{
    width:100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    color:#ffc107;
    text-decoration:none;
    font-weight:bold;
    margin-top:1rem;
    gap:0.5rem;
    svg{
        font-size:1.4rem;
        transition: 0.4s ease-in-out;
    }
    &:hover{
        svg{
            transform:translateX(0.4rem);
        }
    }
}

@media screen and (min-width:280px) and (max-width:1080px){
    .transactions{
       .transaction{
        flex-direction:column;
        align-items: center;
        gap:1rem;
      
       }
    }
    .title{
        h2{
           text-align:center;
        }
}
`