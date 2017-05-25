import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, ButtonGroup, Button, InputGroup, Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../containers/login/loginActions';
import ReactDOM from 'react-dom';
require( './login.scss' );
var logoImg=require("../../../images/sybase-365.jpg");

class Login extends Component {
  constructor( props, context ) {
    super( props, context );
    this.state = {
      errors: {
        userEmail: "",
        userPassword: ""
      }
    }
  }

  render() {
    const style = {
      margin: 12
    };
    return (
      <div>
        {/*<nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
  							 <img src={logoImg} />
            </div>
            <div
                 className="collapse navbar-collapse"
                 id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#">Sybase 365 Configuration Tool</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>*/}
        <div className="content">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4 login-form">
            <div className="login-container">
              <span className="logo">Login to CTOOL</span>
  						<Grid fluid={ true }>
  						  <Row className="show-grid">
  						    <Col mdHidden md={ 1 } />
  						    <Col md={ 10 }>
                    <FormGroup>
                      <InputGroup>
                        <InputGroup.Addon>
                          <Glyphicon glyph="user" />
                        </InputGroup.Addon>
                        <FormControl
                          type="text"
                          ref="userEmail"
  						            placeholder="Enter your Username" />
  						        </InputGroup>
  						      </FormGroup>
  						    </Col>
  						    <Col mdHidden md={ 1 } />
  						  </Row>
  						  <Row className="show-grid">
  						    <Col mdHidden md={ 1 } />
  						    <Col md={ 10 }>
    						    <FormGroup>
    						      <InputGroup>
    						        <InputGroup.Addon>
    						          <Glyphicon glyph="lock" />
    						        </InputGroup.Addon>
    						        <FormControl
			                     type="password"
			                     ref="userPassword"
			                     placeholder="Enter your Password" />
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
  					            onClick={this.handleLogin.bind(this)} >
    						      Login
    						    </Button>
                    <Button bsStyle="link" onClick={this.handleForgotPassword.bind(this)}>
                      Forgot Password
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
    );
  }

  // componentDidMount() {
  //   this.refs.userEmail.value = 'user';
  //   this.refs.userPassword.value = 'password';
  // }
  componentWillReceiveProps( nextProps ) {
    this.checkAuth( nextProps );
  }

  checkAuth( nextProps ) {
    if ( nextProps.error == false ) {
      this.context.router.push( 'launchpad' );
      console.log("token==",nextProps.token);
      // sessionStorage.setItem("username",this.refs.userEmail);
    }
    if ( nextProps.error == true ) {
      alert( "failed" );
    }
  }

  handleLogin() {
    const userEmail = ReactDOM.findDOMNode(this.refs.userEmail).value;
    const userPassword =ReactDOM.findDOMNode(this.refs.userPassword).value;
    var _requesterid =  "708";
    sessionStorage.setItem( "userid",_requesterid);
      sessionStorage.setItem( "username",userEmail);
    this.props.loginUser( userEmail.toUpperCase(), userPassword.toUpperCase() );
  }

  handleForgotPassword(){
    this.context.router.push( 'ForgotPassword' );
  }

  validate( field ) {
    var errors = {};
    this.refs[ field ].getValue() == "" ? errors[ field ] = "Required" : errors[ field ] = "";
    if ( this.refs.userEmail.getValue() == "" && this.refs.userPassword.getValue() == "" ) {
      errors[ "userEmail" ] = "Required";
      errors[ "userPassword" ] = "Required";
    }

    this.setState( {
      errors: errors
    } );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps( state ) {
  return {
    token: state.Auth.token,
    error: state.Auth.error
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    loginUser: loginUser
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Login );
