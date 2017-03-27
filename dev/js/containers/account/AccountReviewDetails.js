import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";

import { createNewAccount,handleReviewDetailsBack } from '../../containers/account/actions/accountActions';
import * as types from '../../containers/account/actions/accountActionTypes';


require('../../../scss/style.scss');

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AccountReviewDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.Countries=[];
        this.state={
          accountInfo:this.props.accountObj || []
        };
        console.log("AccountReviewDetails accountInfo==",this.state.accountInfo);
    }
    handleReviewDetailsBack(){
        this.props.handleReviewDetailsBack(this.accountInfo);
    }

    createNewAccount() {
      this.props.createNewAccount( this.accountInfo );
    }
    render() {
        return (
          <div>
          <div className="stepwizard breadcrumb-container">
            <div className="stepwizard-row">
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-default btn-circle">1</button>
                    <p>Commercial Information</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-default btn-circle" >2</button>
                    <p>Technical Details</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-default btn-circle" >3</button>
                    <p>Account Name and Interfaces</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-primary btn-circle" disabled="disabled">4</button>
                    <p>Create Account</p>
                </div>
            </div>
            </div>
        <div className="controls-container">
        <div className="rec">
        <span>Review Details</span>
        </div>
        <Grid fluid={true}>
              <Row className="show-grid">
                <Col
                     componentClass={ ControlLabel }
                     md={ 3 }> Existing company contacts:
                </Col>
                <Col md={ 6 }>

                </Col>
                <Col
                     mdHidden
                     md={ 3 } />
              </Row>

                     <Row className="show-grid">
                       <Col
                            componentClass={ ControlLabel }
                            md={ 3 }> Name:
                       </Col>
                       <Col md={ 6 }>

                       </Col>
                       <Col
                            mdHidden
                            md={ 3 } />
                     </Row>
                     <Row className="show-grid">
                       <Col
                            componentClass={ ControlLabel }
                            md={ 3 }> Email:
                       </Col>
                       <Col md={ 6 }>

                       </Col>
                       <Col
                            mdHidden
                            md={ 3 } />
                     </Row>
                     <Row className="show-grid">
                       <Col
                            componentClass={ ControlLabel }
                            md={ 3 }> Country:
                       </Col>
                       <Col md={ 6 }>

                       </Col>
                       <Col
                            mdHidden
                            md={ 3 } />
                     </Row>
                     <Row className="show-grid">
                       <Col
                            componentClass={ ControlLabel }
                            md={ 3 }> Mobile phone number:
                       </Col>
                       <Col md={ 6 }>

                       </Col>
                       <Col
                            mdHidden
                            md={ 3 } />
                     </Row>
                     <Row className="show-grid">
                       <Col
                            componentClass={ ControlLabel }
                            md={ 3 }> Direct phone number:
                       </Col>
                       <Col md={ 6 }>

                       </Col>
                       <Col
                            mdHidden
                            md={ 3 } />
                     </Row>
                     <Row className="show-grid">
     <Col
          mdHidden
          md={ 3 } />

     <Col md={ 6 }>
      <Button className="sap-btn btn-wizard pull-right"   onClick={ this.createNewAccount.bind( this ) }>Create Account</Button>
    <Button className="sap-btn btn-wizard pull-right"   onClick={ this.handleReviewDetailsBack.bind( this ) }>Back</Button>
     </Col>
     <Col
          mdHidden
          md={ 3 } />

     </Row>

        </Grid>
      </div>
      <ToastContainer
                      toastMessageFactory={ ToastMessageFactory }
                      ref="container"
                      className="toast-top-right" />
      </div>
        )
    }

}
function mapStateToProps(state) {
    return { data: state.Account.data};
}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
            createNewAccount: createNewAccount,
            handleReviewDetailsBack:handleReviewDetailsBack,
          }, dispatch);
	}

export default connect(mapStateToProps, mapDispatchToProps)(AccountReviewDetails);
