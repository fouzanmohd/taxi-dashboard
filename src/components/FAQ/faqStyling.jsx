import styled from 'styled-components';
import { cardStyle } from './../ReusableStyles';

export const Section = styled.section`
${cardStyle};
.title{
    h2{
        color:#ffc107;
        font-family:"Permanent Marker", cursive;
        letter-spacing: 0.3rem;
    }
}
.faqs{
    display:flex;
    flex-direction:column;
    gap:1rem;
    margin-top:1rem;
    .faq{
        display:flex;
        justify-content:space-between;
        align-items:center;
        cursor:pointer;
        .info{
            display:flex;
            gap:1rem;
            align-items:center;
        }
        svg{
            font-size:1.4rem;
        }
        &:nth-of-type(2){
            border-top:0.01rem solid #6c6e6e;
            border-bottom:0.01rem solid #6c6e6e;
            padding:0.8rem 0
        }
    }

}

@media screen and (min-width:280px) and (max-width:1080px){
    svg{
        font-size:2rem !important;
    }
    .title{
        h2{
            text-align:center;
        }

    }
}
`