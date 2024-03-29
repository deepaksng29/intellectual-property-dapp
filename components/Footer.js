import React, { Component } from 'react';
import style from '../styles/Footer.module.css';
import { Link } from '../routes';

class Footer extends Component  {
    state = {
        active: false
    }

    // set active state
    onMenuButtonClick = e => {
        e.preventDefault();
        this.setState({ active: !this.state.active });
    }

    render() {
        return (
            <footer className={style.footer}>
                <h2>Powered by Ethereum</h2>
                <div className={style.ethereumImage}>
                    <img alt="Ethereum Logo" src="/ethereum.png"/>
                </div>
                    <Link route="/privacypolicy"><h4 className={[style.privacyPolicy, style.footerButton].join(" ")}>Privacy Policy</h4></Link>
                    <Link route="/termsandconditions"><h4 className={[style.termsAndConditions, style.footerButton].join(" ")}>T&Cs</h4></Link>
                    <Link route="/aboutus"><h4 className={[style.aboutUs, style.footerButton].join(" ")}>About Us</h4></Link>
                    <Link route="/contactus"><h4 className={[style.contactUs, style.footerButton].join(" ")}>Contact Us</h4></Link>
            </footer>     
        );
    }
}

export default Footer;