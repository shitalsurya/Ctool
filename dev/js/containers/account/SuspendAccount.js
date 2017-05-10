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
import { DateField, Calendar } from 'react-date-picker';
import * as types from '../common/commonActionTypes';
require( '././../../../scss/style.scss' );
require( '././../../../scss/datePick.scss' );

class SuspendAccount extends React.Component {
  constructor( props, context ) {
    super( props, context );

    this.state = {
        modalHeading:'Suspend Account',
    };

  }

  render() {
    var susAccInfo = this.props.susAccInfo||{};

    const onChange = (dateString, { dateMoment, timestamp }) => {
      susAccInfo.date = dateString;
    }

    return (
      <Modal show={this.props.suspendAction} onHide={this.handleCancel.bind(this)}>
          <Modal.Header closeButton>
              <Modal.Title>{this.state.modalHeading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Grid fluid={true}>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Company :
                  </Col>
                  <Col md={ 6 }>
                    <FormControl.Static>
                      {susAccInfo.company}
                    </FormControl.Static>
                  </Col>
                  <Col mdHidden md={ 3 }/>
                </Row>

                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Account :
                  </Col>
                  <Col md={ 6 } >
                    <FormControl.Static>
                      {susAccInfo.account}
                    </FormControl.Static>
                  </Col>
                  <Col mdHidden md={ 3 }/>
                </Row>

                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Date :
                  </Col>
                  <Col md={ 6 }>
                    <DateField
                      dateFormat="DD-MM-YYYY"
                      value={susAccInfo.date}
                      onChange={onChange}
                      updateOnDateClick={true}
                      collapseOnDateClick={true}
                      placeholder="Select Date.."
                    />
                  </Col>
                  <Col mdHidden md={ 3 }/>
                </Row>
              </Grid>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSuspendAccount.bind(this,susAccInfo)}>Suspend Account</Button>
            <Button onClick={this.handleCancel.bind(this,susAccInfo)}>Cancel</Button>
          </Modal.Footer>
      </Modal>
    );
  }

  handleSuspendAccount(susAccInfo){
    this.props.setSuspendAccountInfo(susAccInfo);
    console.log(susAccInfo);
    this.props.close();
  }

  handleCancel(susAccInfo){
    console.log(susAccInfo);
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
