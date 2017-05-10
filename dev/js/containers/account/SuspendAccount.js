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
        susAccInfo : {}
    };

  }

  render() {
    
    const onChange = (dateString, { dateMoment, timestamp }) => {
      var _susAccInfo = this.state.susAccInfo;
      if(_susAccInfo.date <= dateMoment._d){
        _susAccInfo.date = dateMoment._d;
      }
      this.setState({susAccInfo:_susAccInfo});
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
                      {this.state.susAccInfo.account}
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
                      {this.state.susAccInfo.manager}
                    </FormControl.Static>
                  </Col>
                  <Col mdHidden md={ 3 }/>
                </Row>

                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 4 }>
                    Suspend Date :
                  </Col>
                  <Col md={ 6 }>
                    <DateField
                      forceValidDate
                      dateFormat="DD-MM-YYYY"
                      value={this.state.susAccInfo.date}
                      onChange={onChange.bind(this)}
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
            <Button onClick={this.handleSuspendAccount.bind(this)}>Suspend Account</Button>
            <Button onClick={this.handleCancel.bind(this)}>Cancel</Button>
          </Modal.Footer>
      </Modal>
    );
  }

  handleSuspendAccount(){
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

  }

  componentWillReceiveProps(nextProps){
    var _susAccInfo = nextProps.susAccInfo||{};
    _susAccInfo.date = new Date();
    this.setState({susAccInfo:_susAccInfo});
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
