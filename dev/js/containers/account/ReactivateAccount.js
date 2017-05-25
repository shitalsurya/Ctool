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
      reactivateAccInfo:this.props.reactivateAccInfo||{}
    };
  }

  render() {
    return(
      <Modal show={this.props.reactivateAction} onHide={this.handleCancel.bind(this)}>
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
                      {this.state.reactivateAccInfo.company}
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
                      {this.state.reactivateAccInfo.accountname}
                    </FormControl.Static>
                  </Col>
                  <Col mdHidden md={ 3 }/>
                </Row>

                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 4 }>
                    Suspended on :
                  </Col>
                  <Col md={ 6 } >
                    <FormControl.Static>
                      {this.state.reactivateAccInfo.newsuspenddate}
                    </FormControl.Static>
                  </Col>
                  <Col mdHidden md={ 3 }/>
                </Row>
              </Grid>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleReactivateAccount.bind(this)}>Reactivate Account</Button>
            <Button onClick={this.handleCancel.bind(this)}>Cancel</Button>
          </Modal.Footer>

      </Modal>
      );
  }

  handleReactivateAccount(){
    console.log("this.state.reactivateAccInfo==",this.state.reactivateAccInfo);
    this.props.setReactivateAccountInfo(this.state.reactivateAccInfo);
    console.log(this.state.reactivateAccInfo);
    this.props.close();
  }

  handleCancel(){
    console.log(this.state.reactivateAccInfo);
    this.props.close();
  }


}

function mapStateToProps(state) {
    return {
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
      setReactivateAccountInfo : setReactivateAccountInfo,
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactivateAccount);;
