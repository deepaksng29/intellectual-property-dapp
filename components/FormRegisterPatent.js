import React, { Component } from 'react';
import Layout from './Layout';
import style from '../styles/FormRegisterPatent.module.css';
import { Router } from '../routes';
import web3 from '../ethereum/web3';

class FormRegisterTrademark extends Component {
  continueRegistration = e => {
    e.preventDefault();
    this.props.nextStep(1);
  }

  backRegistration = e => {
    e.preventDefault();
    this.props.previousStep(4);
  }

  async componentDidMount() {
    const address = await web3.eth.getAccounts();
    this.props.changeForm('address', address);
  }

  // state updates

  patentTitle_change = (event) => {
    const { changeForm } = this.props;
    changeForm('patentTitle', document.getElementById("patentTitle").value);
  }

  address1_change = (event) => {
    const { changeForm } = this.props;
    changeForm('address1_patent', document.getElementById("address1").value);
  }

  address2_change = (event) => {
    const { changeForm } = this.props;
    changeForm('address2_patent', document.getElementById("address2").value);
  }

  addressCity_change = (event) => {
    const { changeForm } = this.props;
    changeForm('addressCity_patent', document.getElementById("city").value);
  }

  addressCounty_change = (event) => {
    const { changeForm } = this.props;
    changeForm('addressCounty_patent', document.getElementById("county").value);
  }

  addressPostcode_change = (event) => {
    const { changeForm } = this.props;
    changeForm('addressPostcode_patent', document.getElementById("postcode").value);
  }

  addressCountry_change = (event) => {
    const { changeForm } = this.props;
    changeForm('addressCountry_patent', document.getElementById("country").value);
  }

  render() {
    const { values } = this.props;
    const { nextStep } = this.props;

    return (
      <Layout>
        <form className={style.form}>
          <h2>Intellectual Property Registration Form 2/2 (Patent)</h2>
          <p className={style.patentTitleLabel}>Title:</p>
          <input id="patentTitle" className={style.patentTitle} type='text' value={this.props.values.patentTitle} onChange={this.patentTitle_change} placeholder="Enter the title..." />
          <p className={style.address1Label}>Address line 1:</p>
          <input id="address1" className={style.address1} type='text' value={this.props.values.address1_patent} onChange={this.address1_change} placeholder="Enter the 1st line of address..." />
          <p className={style.address2Label}>Address line 2:</p>
          <input id="address2" className={style.address2} type='text' value={this.props.values.address2_patent} onChange={this.address2_change} placeholder="Enter the 2nd line of address..."/>
          <p className={style.addressCityLabel}>City:</p>
          <input id="city" className={style.city} type='text' value={this.props.values.addressCity_patent} onChange={this.addressCity_change} placeholder="Enter the city of your address..."/>
          <p className={style.addressCountyLabel}>County:</p>
          <input id="county" className={style.county} type='text' value={this.props.values.addressCounty_patent} onChange={this.addressCounty_change} placeholder="Enter the county of your address..."/>
          <p className={style.addressPostcodeLabel}>Postcode:</p>
          <input id="postcode" className={style.postcode} type='text' value={this.props.values.addressPostcode_patent} onChange={this.addressPostcode_change} placeholder="Enter the postcode of your address..."/>
          <p className={style.addressCountryLabel}>Country:</p>
          <input id="country" className={style.country} type='text' value={this.props.values.addressCountry_patent} onChange={this.addressCountry_change} placeholder="Enter the country of your address..."/>
          <button className={style.back} type='button' onClick={ this.backRegistration }>Back</button>
          <button className={style.next} type='button' onClick={ this.continueRegistration }>Next</button>
        </form>
      </Layout>
    );
  }
}

export default FormRegisterTrademark;
