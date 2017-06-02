import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, ButtonGroup, Button, InputGroup, Glyphicon } from 'react-bootstrap';
require( './login.scss' );

class ForgotPassword extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      password : {},
      empty:false
    }
  }

  handleChange(e){
    var info = this.state.password;
    info[e.target.name] = e.target.value;
    console.log("password : " ,info);
    this.setState({password:info});
  }

  handleSubmit(){
    console.log("password : ",this.state.password);
    var info = this.state.password;
    if(info.userid && info.email)
      this.setState({password:{},empty:false});
    else
      this.setState({empty:true})
  }

  render(){
    return (
      <div>
        <div className="content">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4 login-form">
            <div className="login-container">
              <span className="logo">Forgot Password</span>
              <FormControl.Static>
                Please enter registered email-id. Reset password link will be sent to you via email.
              </FormControl.Static>
              <Grid fluid={ true }>
                <Row className="show-grid">
                  <Col mdHidden md={ 1 } />
                  <Col md={ 10 } className={(this.state.empty && !this.state.password.userid) ? "empty" : false }>
                    <FormGroup>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Glyphicon glyph="user" />
                        </InputGroup.Addon>
                        <FormControl
                          type="text"
                          name="userid"
                          value={this.state.password.userid||''}
                          onChange={this.handleChange.bind(this)}
                          placeholder="Enter your User Id" />
                      </InputGroup>
                    </FormGroup>
                  </Col>
                  <Col mdHidden md={ 1 } />
                </Row>
                <Row className="show-grid">
  						    <Col mdHidden md={ 1 } />
  						    <Col md={ 10 } className={(this.state.empty && !this.state.password.email) ? "empty" : false }>
                    <FormGroup>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Glyphicon glyph="envelope" />
                        </InputGroup.Addon>
                        <FormControl
                          type="text"
                          name="email"
                          value={this.state.password.email||''}
                          onChange={this.handleChange.bind(this)}
  						            placeholder="Enter your Email Id" />
  						        </InputGroup>
  						      </FormGroup>
  						    </Col>
  						    <Col mdHidden md={ 1 } />
  						  </Row>
                <Row className="show-grid">
  						    <Col mdHidden md={ 1 } />
  						    <Col md={ 10 }>
    						    <Button
  					            className="sap-btn"
  					            type="submit"
  					            onClick={this.handleSubmit.bind(this)} >
    						      Submit
    						    </Button>
  						    </Col>
  						    <Col mdHidden md={ 1 } />
  						  </Row>
              </Grid>
            </div>
          </div>
          <div className="col-sm-4">
          </div>
        </div>
        <footer className="container-fluid text-left">
          <p>
              v1.0 © 2017 Sybase 365 Inc. All rights reserved
          </p>
        </footer>
      </div>
    )
  }
}

export default (ForgotPassword);
