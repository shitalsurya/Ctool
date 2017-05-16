import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button, ButtonToolbar } from 'react-bootstrap';
import BrandingHeader from './../../common/components/BrandingHeader';
import Navigation from './../../common/components/Navigation';
import { handleAccType } from '../actions/accountActions';
require('./../../../../scss/style.scss');
require('./accType.scss');
import * as types from '../../common/commonActionTypes'

class AccountType extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {
      type:'sms',
      submenus:{
        head: types.ACCOUNT_LIST,
        head_icon : "accounts-icon",
        subVal:[
          types.ACCOUNT_CREATE
        ]
      }
    }
  }

  render(){
    this.props.handleAccType(this.state.type);
    return(
      <div>
        <BrandingHeader/>
        <Grid fluid={true}>
          <Row>
            <Col md={2}>
              <Navigation submenus={this.state.submenus}/>
            </Col>
            <Col md={10}>
              <div className="content">
                <div className="line page-heading">
                  CTool Create Account
                </div>
                <div>
                  <div className="controls-container">
                    <div className="rec">
                      <span>Create Account Type</span>
                    </div>
                    <Grid fluid={true}>
                      <Row className="show-grid">
                        <Col componentClass={ ControlLabel } md={4}>
                          Select the type of account to be created :
                        </Col>
                        <Col md={6}>
                          <ButtonGroup justified>
                            <Button href="#CreateAccount" className="grp-btn" name="sms" onClick={() => this.setState({type:'sms'})}>
                              <span className="add-icon"></span>
                              <span>SMS Account</span>
                            </Button>
                            <Button href="#CreateAccount" className="grp-btn" name="email" onClick={() => this.setState({type:'email'})}>
                              <span className="add-icon"></span>
                              <span>IN365 Email Account</span>
                            </Button>
                          </ButtonGroup>
                        </Col>
                        <Col mdHidden md={ 4 }/>
                      </Row>
                    </Grid>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}

AccountType.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        handleAccType : handleAccType
      }
    , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountType);
