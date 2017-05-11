import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
import BrandingHeader from './../common/components/BrandingHeader';
import Navigation from './../common/components/Navigation';
// import Company from './../../../../json/Company.json';
import Account from './../../../json/Account.json';
import { initializeData, setCloseAccountInfo } from './actions/accountActions';
import * as types from '../common/commonActionTypes';
require( './../../../scss/style.scss' );
require( './../../../scss/datePick.scss' );

class CloseAccount extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state = {
      modalHeading:'Close Account',
      closeAccInfo:{}
    };

  }

  render() {

    return (
      <Modal show={this.props.closeAction} onHide={this.handleCancel.bind(this)}>
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
                  <Col md={ 6 } >
                    <FormControl.Static>
                      {this.state.closeAccInfo.company}
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
                      {this.state.closeAccInfo.account}
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
                      {this.state.closeAccInfo.manager}
                    </FormControl.Static>
                  </Col>
                  <Col mdHidden md={ 3 }/>
                </Row>

                <Row className="show-grid">
                  <Col md={ 12 } className="error-msg">
                    WARNING : All Routing will be removed when the account is closed !<br/>
                    Please review the account details before proceeding.
                  </Col>
                </Row>
              </Grid>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseAccount.bind(this)}>Close Account</Button>
            <Button onClick={this.handleCancel.bind(this)}>Cancel</Button>
          </Modal.Footer>
      </Modal>
    );
  }

  handleCloseAccount(){
    this.props.setCloseAccountInfo(this.state.closeAccInfo);
    console.log(this.state.closeAccInfo);
    this.props.close();
  }

  handleCancel(){
    console.log(this.state.closeAccInfo);
    this.props.close();
  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps){
    var _closeAccInfo = nextProps.closeAccInfo||{};
    this.setState({closeAccInfo:_closeAccInfo});
  }
}

function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
      setCloseAccountInfo : setCloseAccountInfo,
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CloseAccount);
