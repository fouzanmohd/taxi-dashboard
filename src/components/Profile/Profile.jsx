import React from 'react';
import { Section } from './profileStyling';
import {HiOutlineLocationMarker} from 'react-icons/hi'
import image from '../../assets/avatarImage.jpg'
const Profile = () =>{
    return (
        <Section>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="title">
                <h2>Fouzan</h2>
                <h5><HiOutlineLocationMarker/> Birmingham, UK</h5>
            </div>
            <div className="info">
                <div className="container">
                    <h5>Days at work</h5>
                    <h3>25</h3>
                </div>
                <div className="container">
                    <h5>Rides</h5>
                    <h3>400</h3>
                </div>
                <div className="container">
                    <h5>Hours</h5>
                    <h3>87</h3>
                </div>
            </div>
        </Section>
    )
}

export default Profile;
