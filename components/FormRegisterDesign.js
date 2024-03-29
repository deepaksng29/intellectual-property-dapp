import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterDesign.module.css';
import { Router } from '../routes';
import web3 from '../ethereum/web3';

class FormRegisterDesign extends Component {
  continueRegistration = e => {
    e.preventDefault();
    this.props.nextStep(1);
  }

  backRegistration = e => {
    e.preventDefault();
    this.props.previousStep(7);
  }

  async componentDidMount() {
    // verify accounts
    const address = await web3.eth.getAccounts();
    this.props.changeForm('address', address);
  }

  comment_change = (event) => {
    // update state
    const { changeForm } = this.props;
    changeForm('comment', document.getElementById("comment").value);
  }

  render() {
    const { values } = this.props;
    const { nextStep } = this.props;

    return (
      <Layout>
        <form className={style.form}>
          <h2>Intellectual Property Registration Form 2/2 (Design)</h2>
          <p className={style.commentLabel}>Comment:</p>
          <input id="comment" className={style.comment} type='text' value={this.props.values.comment} onChange={this.comment_change} placeholder="Enter a comment for your design..." />
          <button className={style.back} type='button' onClick={ this.backRegistration }>Back</button>
          <button className={style.next} type='button' onClick={ this.continueRegistration }>Next</button>
        </form>
      </Layout>
    );
  }
}

export default FormRegisterDesign;
