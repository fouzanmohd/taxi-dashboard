import React from 'react';
import avatarImage from '../../assets/avatarImage.jpg'
import { HiArrowNarrowRight } from "react-icons/hi";
import { cardStyle } from '../ReusableStyles';
import { Section } from './transfersStyling';
const Transfers = () =>{
    const transactions = [
        {
          image: avatarImage,
          name: "From Fouzan",
          time: "Today, 16:36",
          amount: "+$50",
        },
        {
          image: avatarImage,
          name: "To Lionel Messi",
          time: "Today, 08:49",
          amount: "-$25",
        },
        {
          image: avatarImage,
          name: "From Adam John.",
          time: "Yesterday, 14:36",
          amount: "+$150",
        },
      ];
    return (
        <Section>
            <div className="title">
                <h2>Your Transfers</h2>
            </div>
            <div className="transactions">
                {transactions.map((transaction,idx)=>{
                    return (
                        <div className="transaction" key={idx}>
                            <div className="transaction__title">
                                <div className="transaction__title__image">
                                    <img src={transaction.image} alt=" transaction image" />
                                </div>
                                <div className="transaction__title__details">
                                    <h3>{transaction.name}</h3>
                                    <h5>{transaction.time}</h5>
                                </div>
                            </div>
                            <div className="transaction__amount">
                                <span>{transaction.amount}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <a href="#" className='view'>
                View All <HiArrowNarrowRight/>
            </a>
        </Section>
    )
}

export default Transfers;
