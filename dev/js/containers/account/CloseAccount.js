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
    };

  }

  render() {
    var closeAccInfo = this.props.closeAccInfo||{};
    return (
      <Modal show={this.props.closeAction} onHide={this.handleCancel.bind(this)}>
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
                  <Col md={ 6 } >
                    <FormControl.Static>
                      {closeAccInfo.company}
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
                      {closeAccInfo.account}
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
            <Button onClick={this.handleCloseAccount.bind(this,closeAccInfo)}>Close Account</Button>
            <Button onClick={this.handleCancel.bind(this,closeAccInfo)}>Cancel</Button>
          </Modal.Footer>
      </Modal>
    );
  }

  handleCloseAccount(closeAccInfo){
    this.props.setCloseAccountInfo(closeAccInfo);
    console.log(closeAccInfo);
    this.props.close();
  }

  handleCancel(closeAccInfo){
    console.log(closeAccInfo);
    this.props.close();
  }

  componentWillMount() {

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
