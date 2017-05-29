import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
// import Company from '././../../../json/Company.json';
import BrandingHeader from './../common/components/BrandingHeader';
import Navigation from './../common/components/Navigation';
import Account from '././../../../json/Account.json';
import { initializeData, setSuspendAccountInfo } from './actions/accountActions';
// import { DateField, Calendar } from 'react-date-picker';
import * as types from '../common/commonActionTypes';
require( '././../../../scss/style.scss' );
require( '././../../../scss/datePick.scss' );
var DatePicker = require("react-bootstrap-date-picker");

class SuspendAccount extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.today = new Date();
    this.state = {
        value:this.today.toISOString(),
        modalHeading:'Suspend Account',
        susAccInfo : this.props.susAccInfo || {}
    };
  }

  dateFormatter(_date){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = _date.getDate() + " " + months[_date.getMonth()] + " " + _date.getFullYear();
    var time = _date.toLocaleTimeString();
    if(_date.getHours < 10 || (_date.getHours > 12 && _date.getHours < 22))
      time = "0" + time;
    var fullDate = date + " " + time ;
    return fullDate;
  }

  handleChange(_value) {
    var info = this.state.susAccInfo;
    if(_value == null)
      _value = this.today.toISOString();
    var _date = new Date(_value);
    info.newsuspenddate = this.dateFormatter(_date);
    this.setState({
      susAccInfo:info,
      value: _value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
    });
  }

  render() {

    // const onChange = (dateString, { dateMoment, timestamp }) => {
    //   var _susAccInfo = this.state.susAccInfo;
    //   if(_susAccInfo.date <= dateMoment._d){
    //     _susAccInfo.date = dateMoment._d;
    //   }
    //   this.setState({susAccInfo:_susAccInfo});
    // }

    return (
      <Modal show={this.props.suspendAction} onHide={this.handleCancel.bind(this)}>
          <Modal.Header closeButton>
              <Modal.Title>{this.state.modalHeading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Grid fluid={true}>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 4 }>
                    Company :
                  </Col>
                  <Col md={ 6 }>
                    <FormControl.Static>
                      {this.state.susAccInfo.company}
                    </FormControl.Static>
                  </Col>
                  <Col mdHidden md={ 3 }/>
                </Row>

                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 4 }>
                    Account :
                  </Col>
                  <Col md={ 6 } >
                    <FormControl.Static>
                      {this.state.susAccInfo.accountname}
                    </FormControl.Static>
                  </Col>
                  <Col mdHidden md={ 3 }/>
                </Row>

                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 4 }>
                    Account Manager :
                  </Col>
                  <Col md={ 6 } >
                    <FormControl.Static>
                      {this.state.susAccInfo.accountmanager}
                    </FormControl.Static>
                  </Col>
                  <Col mdHidden md={ 3 }/>
                </Row>

                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 4 }>
                    Suspend Date :
                  </Col>
                  <Col md={ 6 }>
                    <DatePicker
                      id="example-datepicker"
                      dateFormat="DD-MM-YYYY"
                      clearButtonElement={<div>Now</div>}
                      minDate={this.today.toISOString()}
                      showTodayButton={true}
                      todayButtonLabel={"Now"}
                      value={this.state.value}
                      onChange={this.handleChange.bind(this)} />
                    {/*
                      <DateField
                        forceValidDate
                        dateFormat="DD-MM-YYYY"
                        value={this.state.susAccInfo.date}
                        onChange={onChange.bind(this)}
                        updateOnDateClick={true}
                        collapseOnDateClick={true}
                        placeholder="Select Date.."
                      />
                    */}
                  </Col>
                  <Col mdHidden md={ 3 }/>
                </Row>
              </Grid>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSuspendAccount.bind(this)}>Suspend Account</Button>
            <Button onClick={this.handleCancel.bind(this)}>Cancel</Button>
          </Modal.Footer>
      </Modal>
    );
  }

  handleSuspendAccount(){
    console.log("this.state.susAccInfo==",this.state.susAccInfo);
    this.props.setSuspendAccountInfo(this.state.susAccInfo);
    console.log(this.state.susAccInfo);
    this.props.close();
  }

  handleCancel(){
    console.log(this.state.susAccInfo);
    this.props.close();
  }

  // handleSelectFieldsChange(target,value) {
  //
  //   var info = this.state.susAccInfo;
  //   switch (target) {
  //     case types.SUSPEND_ACC_COMPANY:
  //       info = {};
  //       info.company = value.value;
  //       const spndAccObj = {
  //         "company" :value.value,
  //         "accounts" : Account
  //       }
  //     //  var updatedAccountList = this.props.handleSuspendAccCompany(spndAccObj);
  //   //    this.accountList = initializeData(updatedAccountList,'account');
  //       break;
  //     case types.SUSPEND_ACC_ACCOUNT:
  //       info.account = value.value;
  //       var manager = Account.data.filter(function (header, item) {
  //         if(header.account === value.value)
  //           return header.manager;
  //       }.bind(this));
  //       if(manager.length)
  //         info.manager = manager[0].manager;
  //       else
  //         info.manager = null;
  //       break;
  //   }
  //   this.setState({susAccInfo:info,emptyFlag:false});
  // }

  componentWillMount() {
    var info = this.state.susAccInfo;
    info.newsuspenddate = this.dateFormatter(this.today);
    this.setState({susAccInfo:info});
  }

}

function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
      setSuspendAccountInfo : setSuspendAccountInfo,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SuspendAccount);
