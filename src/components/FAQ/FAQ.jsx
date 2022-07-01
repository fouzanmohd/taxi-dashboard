import React from "react";
import { IoIosArrowForward, IoMdCash } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { cardStyle } from "../ReusableStyles";
import { Section } from "./faqStyling";

const FAQ = () => {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: "How to manage time and get good points for trips?",
    },
    {
      icon: <MdTimelapse />,
      text: "How to regulate transaction",
    },
    {
      icon: <IoMdCash />,
      text: "Withdraw money through an ATM",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Information for Drivers</h2>
      </div>
      <div className="faqs">
        {faqs.map((faq,idx) => {
          return (
            <div key={idx} className="faq">
              <div className="info">
                {faq.icon}
                <h4>{faq.text}</h4>
              </div>
              <IoIosArrowForward />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default FAQ;
