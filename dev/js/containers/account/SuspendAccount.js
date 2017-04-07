import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import Company from '../../../json/Company.json';
import Account from '../../../json/Account.json';
import { initializeData, handleSuspendAccCompany } from './actions/accountActions';
import { DateField, Calendar } from 'react-date-picker'
import '../../../../node_modules/react-dates/css/SingleDatePicker.scss';
import * as types from './actions/accountActionTypes';
require( '../../../scss/style.scss' );
require( '../../../scss/datePick.scss' );

class SuspendAccount extends React.Component {
  constructor( props, context ) {
    super( props, context );

    this.state = {
      date : null,
      susAccInfo : this.props.susAccInfo || [],
    };

  }

  render() {
    let date = '2017-04-24';
    const onChange = (dateString, { dateMoment, timestamp }) => {
      console.log(dateString)
    }
    const options = [];

    return (
      <div>
        <div className="controls-container">

          <div className="rec">
            <div className="line page-heading">
              Suspend Account
            </div>
          </div>

          <div>
            <Grid fluid={true}>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Company :
                </Col>
                <Col md={ 6 }>
                  <Select
                        placeholder="Select Company.."
                        options={options}  />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Account :
                </Col>
                <Col md={ 6 }>
                  <Select
                        placeholder="Select Account.."
                        options={this.accountList}
                        value={this.state.susAccInfo.account}
                        onChange={this.handleSelectFieldsChange.bind(this,types.SUSPEND_ACC_ACCOUNT)}  />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Account Manager :
                </Col>
                <Col md={ 6 }>
                  <FormGroup>
                    <FormControl value={this.state.susAccInfo.manager} disabled/>
                  </FormGroup>
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Date :
                </Col>
                <Col md={ 6 }>
                  <DateField
                    dateFormat="YYYY-MM-DD"
                    defaultValue={date}
                    onChange={onChange}
                  />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

            </Grid>
          </div>
        </div>
      </div>
    );
  }


  handleSelectFieldsChange(target,value) {
    debugger;
    var info = this.state.susAccInfo;
    switch (target) {
      case types.SUSPEND_ACC_COMPANY:
        info.company = value.value;
        const spndAccObj = {
          "company" :value.value,
          "accounts" : Account
        }
        var updatedAccountList = this.props.handleSuspendAccCompany(spndAccObj);
        this.accountList = initializeData(updatedAccountList,'account');
        break;
      case types.SUSPEND_ACC_ACCOUNT:
        info.account = value.value;
        var manager = Account.data.filter(function (header, item) {
          if(header.account === value.value)
            return header.manager;
        }.bind(this));
        info.manager = manager[0].manager
        break;
    }
    this.setState({susAccInfo:info});
  }

  componentWillMount() {
    this.companyList = initializeData(Company,'code');
  }

}

function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
      handleSuspendAccCompany : handleSuspendAccCompany
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SuspendAccount);
