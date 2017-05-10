import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
require( '././../../../scss/style.scss' );
require( './../../../scss/datePick.scss' );
import Account from './../../../json/Account.json';
import BrandingHeader from './../common/components/BrandingHeader';
import Navigation from './../common/components/Navigation';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
import * as types from '../common/commonActionTypes';
import { initializeData, setReactivateAccountInfo } from './actions/accountActions';

class ReactivateAccount extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state = {
      modalHeading:'Reactivate Account',
    };
  }

  render() {
    var reactivateAccInfo = this.props.reactivateAccInfo||{};
    return(
      <Modal show={this.props.reactivateAction} onHide={this.handleCancel.bind(this)}>
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
                      {reactivateAccInfo.company}
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
                      {reactivateAccInfo.account}
                    </FormControl.Static>
                  </Col>
                  <Col mdHidden md={ 3 }/>
                </Row>
              </Grid>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleReactivateAccount.bind(this,reactivateAccInfo)}>Reactivate Account</Button>
            <Button onClick={this.handleCancel.bind(this,reactivateAccInfo)}>Cancel</Button>
          </Modal.Footer>
      </Modal>
      );
  }

  handleReactivateAccount(reactivateAccInfo){
    this.props.setReactivateAccountInfo(reactivateAccInfo);
    console.log(reactivateAccInfo);
    this.props.close();
  }

  handleCancel(reactivateAccInfo){
    console.log(reactivateAccInfo);
    this.props.close();
  }

  // handleSelectFieldsChange(target,value) {
  //   var info = this.state.reactivateAccInfo;
  //   switch (target) {
  //     case types.REACTIVATE_ACC_COMPANY:
  //       info = {};
  //       info.company = value.value;
  //       const reactivateAccObj = {
  //         "company" :value.value,
  //         "accounts" : Account
  //       }
  //       var updatedAccountList = this.props.handleReactivateAccCompany(reactivateAccObj);
  //       this.accountList = initializeData(updatedAccountList,'account');
  //       break;
  //     case types.REACTIVATE_ACC_ACCOUNT:
  //       info.account = value.value;
  //       var date = Account.data.filter(function (header, item) {
  //         if(header.account === value.value)
  //           return header.date;
  //       }.bind(this));
  //       if(date.length)
  //         info.date = date[0].date;
  //       else
  //         info.date = null;
  //       break;
  //   }
  //   this.setState({reactivateAccInfo:info,emptyFlag:false});
  // }

  componentWillMount() {

  }
}

function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
      setReactivateAccountInfo : setReactivateAccountInfo,
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactivateAccount);;
