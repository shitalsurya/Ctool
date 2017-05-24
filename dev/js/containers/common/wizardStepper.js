import React from 'react';
// require('../../../scss/style.scss');
import style from './WizardStepper.style.css';

class WizardStepper extends React.Component {
  constructor( props, context ) {
    super( props, context );
  }


  render() {
    return (
      <div className={style.stepwizard + " " +style.breadcrumb_container}>
        <div className={style.stepwizard_row + " non-clickable"}>
            <div className={style.stepwizard_step}>
                <button type="button" className={this.props.buttonStyle.commStyle} >
                  1
                </button>
                <p>Commercial Information</p>
            </div>
            <div className={style.stepwizard_step}>
                <button type="button" className={this.props.buttonStyle.techStyle} >
                  2
                </button>
                <p>Customer Contacts</p>
            </div>
            <div className={style.stepwizard_step}>
                <button type="button" className={this.props.buttonStyle.intrStyle} >
                  3
                </button>
                <p>Technical Details</p>
            </div>
            <div className={style.stepwizard_step}>
                <button type="button" className={this.props.buttonStyle.revwStyle} >
                  4
                </button>
                <p>Summary & Confirmation</p>
            </div>
        </div>
      </div>
    );
  }

}

export default WizardStepper;
