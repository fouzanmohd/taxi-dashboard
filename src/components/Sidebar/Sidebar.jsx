import React, { useEffect, useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard, FaTaxi } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Section,ResponsiveNav } from "./sidebarStyling";


const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false)
  const html = document.querySelector('html');
  html.addEventListener('click', ()=> setNavbarState(false))
  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaTaxi />
            <span>My Taxi</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li className={currentLink === 1 ? "active" : ""}>
                <a onClick={() => setCurrentLink(1)} href="#">
                  <MdSpaceDashboard />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className={currentLink === 2 ? "active" : ""}>
                <a onClick={() => setCurrentLink(2)} href="#">
                  <RiDashboard2Fill />
                  <span>Riders</span>
                </a>
              </li>
              <li className={currentLink === 3 ? "active" : ""}>
                <a onClick={() => setCurrentLink(3)} href="#">
                  <FaAddressCard />
                  <span>Payment Details</span>
                </a>
              </li>
              <li className={currentLink === 4 ? "active" : ""}>
                <a onClick={() => setCurrentLink(4)} href="#">
                  <GiTwirlCenter />
                  <span>Learning Center</span>
                </a>
              </li>
              <li className={currentLink === 5 ? "active" : ""}>
                <a onClick={() => setCurrentLink(5)} href="#">
                  <BsFillChatTextFill />
                  <span>FAQs</span>
                </a>
              </li>
              <li className={currentLink === 6 ? "active" : ""}>
                <a onClick={() => setCurrentLink(6)} href="#">
                  <IoSettings />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span className="logout">Logout</span>
          </a>
        </div>
      </Section>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
                <li className={currentLink === 1 ? "active" : ""}>
                  <a onClick={() => setCurrentLink(1)} href="#">
                    <MdSpaceDashboard />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className={currentLink === 2 ? "active" : ""}>
                  <a onClick={() => setCurrentLink(2)} href="#">
                    <RiDashboard2Fill />
                    <span>Riders</span>
                  </a>
                </li>
                <li className={currentLink === 3 ? "active" : ""}>
                  <a onClick={() => setCurrentLink(3)} href="#">
                    <FaAddressCard />
                    <span>Payment Details</span>
                  </a>
                </li>
                <li className={currentLink === 4 ? "active" : ""}>
                  <a onClick={() => setCurrentLink(4)} href="#">
                    <GiTwirlCenter />
                    <span>Learning Center</span>
                  </a>
                </li>
                <li className={currentLink === 5 ? "active" : ""}>
                  <a onClick={() => setCurrentLink(5)} href="#">
                    <BsFillChatTextFill />
                    <span>FAQs</span>
                  </a>
                </li>
                <li className={currentLink === 6 ? "active" : ""}>
                  <a onClick={() => setCurrentLink(6)} href="#">
                    <IoSettings />
                    <span>Settings</span>
                  </a>
                </li>
            </ul>
        </div>
      </ResponsiveNav>
    </>
  );
};


export default Sidebar;
