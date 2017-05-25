import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as types from './../../common/commonActionTypes';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button } from 'react-bootstrap';
import BrandingHeader from './../../common/components/BrandingHeader';
import Navigation from './../../common/components/Navigation';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class resetPassword extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      password:{},
      submenus:{
        head: types.MISCELLENEOUS,
        head_icon : "misc_icon",
        subVal:[
          types.USER_MANAGEMENT,
          types.COUNTRY_MANAGEMENT,
          types.RESET_PASSWORD
        ]
      }
    }
  }

  handleChange(e){
    var info = this.state.password;
    info[e.target.name] = e.target.value;
    console.log("password : " , info);
    this.setState({password : info});
  }

  handleResetPassword(){
    var info = this.state.password;

    if(info.newPassword === info.newPassword2 && info.newPassword != null && info.currentPassword != null){
      this.refs.container.success(`Password Changed`, ``, {
          closeButton: true,
      });
      console.log("password Changed : ", info);
    }
    else {
      this.refs.container.error(`Error`, ``, {
          closeButton: true,
      });
    }
    this.setState({password: {}});
  }

  render(){
    return(
      <div>
        <BrandingHeader/>
        <Grid fluid={true}>
          <Row>
            <Col md={2}>
              <Navigation submenus={this.state.submenus}></Navigation>
            </Col>
            <Col md={10}>
              <Grid fluid={ true }>
                <Row>
                  <Col className="line page-heading" md={ 12 }>
                    CTool Reset Password
                  </Col>
                </Row>
              </Grid>
              <div className="list-container">
                <div className="controls-container">
                  <Grid fluid={true}>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Current Password :
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          type="password"
                          name="currentPassword"
                          value={this.state.password.currentPassword||''}
                          onChange={this.handleChange.bind(this)}
                          placeholder="Enter current password"/>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        New Password :
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          type="password"
                          name="newPassword"
                          value={this.state.password.newPassword||''}
                          onChange={this.handleChange.bind(this)}
                          placeholder="Enter new password"/>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Re-Enter New Password :
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          type="password"
                          name="newPassword2"
                          value={this.state.password.newPassword2||''}
                          onChange={this.handleChange.bind(this)}
                          placeholder="Re-Enter new password"/>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                    <Row className="show-grid">
                      <Col md={ 12 } >
                        <Button className="btn-primary" onClick={ this.handleResetPassword.bind( this ) }>Reset Password</Button>
                      </Col>
                    </Row>
                  </Grid>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>

        <ToastContainer
          toastMessageFactory={ ToastMessageFactory }
          ref="container"
          className="toast-top-right" />
      </div>
    )
  }
}

export default (resetPassword);
