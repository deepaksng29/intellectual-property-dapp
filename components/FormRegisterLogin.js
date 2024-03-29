import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterLogin.module.css';
import { Router } from '../routes';
import Web3 from "web3";

class FormRegisterLogin extends Component {
  state = {
    metamaskLoaded: false
  }

  logIn = async e => {
    e.preventDefault();
    let web3;

    // check metamask installation
    if (typeof window.web3 == 'undefined') {
      alert("Please install Metamask and try again.")
      Router.push("/");
    } else {
      web3 = new Web3(window.ethereum)
      window.ethereum.enable();

      const accounts = await web3.eth.getAccounts();

      if (accounts.length == 0) {
        this.setState({ metamaskLoaded: false });
      } else {
        this.setState({ metamaskLoaded: true });
      }
    }
  }


  render() {
    const { values } = this.props;
    const { nextStep } = this.props
    const metamaskLoaded = this.state.metamaskLoaded;

    if (metamaskLoaded) {
      this.props.nextStep(1);
    }
    
    return (
      <Layout>
        <div className={style.grid}>      
          <a className={style.img} href="https://metamask.io/" target="_blank"><img className={style.img} src="/metamask.svg" alt="Metamask Logo" /></a>
          <button className={style.button} type="button" onClick={ this.logIn }>LOGIN</button>
        </div>
      </Layout>
    );
  }
}

export default FormRegisterLogin;
