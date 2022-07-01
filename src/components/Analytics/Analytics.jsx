import React from 'react';
import { Section } from './analyticsStyling';
import {BsFillCalendar2WeekFill} from 'react-icons/bs';
import {IoStatsChart} from 'react-icons/io5';
import {BiGroup} from 'react-icons/bi';
import {FiActivity} from 'react-icons/fi';

const Analytics = () =>{
    return (
        <Section>
            <div className="analytics">
                <div className="content">
                    <h5>Spent this Month</h5>
                    <h2>$625.50</h2>
                </div>
                <div className="logo">
                    <BsFillCalendar2WeekFill/>
                </div>
            </div>
            <div className="analytics">
                <div className="logo">
                    <IoStatsChart/>
                </div>
                <div className="content">
                    <h5>Earnings</h5>
                    <h2>$320.50</h2>
                </div>
            </div>
            <div className="analytics">
                <div className="logo">
                    <BiGroup/>
                </div>
                <div className="content">
                    <h5>New Clients</h5>
                    <h2>377</h2>
                </div>
            </div>
            <div className="analytics">
                
                <div className="content">
                    <h5>Activity</h5>
                    <h2>$550.50</h2>
                </div>
                <div className="logo">
                    <FiActivity/>
                </div>
            </div>
        </Section>
    )
}

export default Analytics;
