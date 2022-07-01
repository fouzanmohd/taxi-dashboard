import React from 'react';
import Analytics from '../Analytics/Analytics';
import FAQ from '../FAQ/FAQ';
import NavBar from '../NavBar/NavBar';
import { Section } from './dashboardStyling';
import Earnings from './../Earnings/Earnings';
import Transfers from './../Transfers/Transfers';
import Profile from './../Profile/Profile';

const Dashboard = () =>{
    return (
        <>
        <Section>
            <NavBar/>
            <div className="grid">
                <div className="row__one">
                    <Analytics/>
                    <FAQ />
                </div>
                <div className="row__two">
                    <Earnings/>
                    <Transfers/>
                    <Profile />
                </div>
            </div>
        </Section>
        </>
    )
}

export default Dashboard;
