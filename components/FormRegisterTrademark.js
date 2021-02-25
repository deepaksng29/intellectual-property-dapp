import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterTrademark.module.css';
import { Link, Router } from '../routes';
import web3 from '../ethereum/web3';

class FormRegisterTrademark extends Component {
  continueRegistration = e => {
    e.preventDefault();
    this.props.nextStep(1);
  }

  backRegistration = e => {
    e.preventDefault();
    this.props.previousStep(1);
  }

  async componentDidMount() {
    const address = await web3.eth.getAccounts();
    if (address == "") {
      alert("Metamask is not setup correctly, please load Metamask and try again!");
      Router.pushRoute('/');
    }
  }

  markDesc_change = (event) => {
    const { changeForm } = this.props;
    changeForm('markDesc', document.getElementById("markDesc").value);
  }

  render() {
    const { values } = this.props;
    const { nextStep } = this.props;

    return (
      <Layout>
        <form className={style.form}>
          <h2>Intellectual Property Registration Form 2/2 (Trademark)</h2>
          <p className={style.markDescLabel}>Mark description:</p>
          <input id="markDesc" className={style.markDesc} type='text' value={this.props.markDesc} onChange={this.markDesc_change} />
          <button className={style.back} type='button' onClick={ this.backRegistration }>Back</button>
          <button className={style.next} type='button' onClick={ this.continueRegistration }>Next</button>
      </form>
      </Layout>
    );
  }
}

export default FormRegisterTrademark;