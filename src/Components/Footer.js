import React from "react";
import { NavLink } from 'react-router-dom';
import "../Styles/Footer.css";


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer-block">
                    <p className="footer-title">Company</p>
                    <NavLink to={"/about"} className={(navData) => (navData.isActive ? "footer-element" : 'footer-element')}>About</NavLink>
                    <NavLink to={"/services"} className={(navData) => (navData.isActive ? "footer-element" : 'footer-element')}>Services</NavLink>
                </div>
                <div className="footer-block">
                    <p className="footer-title">Contact us</p>
                    <p className="footer-element">Telephone</p>
                    <p className="footer-element">E-mail</p>
                </div>
                <div className="footer-block">
                    <p className="footer-title">Social Media</p>
                    <p className="footer-element">Facebook</p>
                    <p className="footer-element">Instagram</p>
                </div>

            </footer>
        )

    }
}

export default Footer;