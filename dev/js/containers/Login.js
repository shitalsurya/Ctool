import React, {Component, PropTypes} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginUser} from '../actions/actions';
require('../../scss/style.scss');



class Login extends Component {
	  constructor(props, context) {
	      super(props, context);
	    }
	  render() {
		  const {token} = this.props;
		    return (
		      <div className="App">
		        <nav className="navbar navbar-default navbar-static-top navbar-inverse">
		          <div className="container-fluid">
		            <div className="navbar-header">
		              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" 
		                      data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		              </button>
		              <a className="navbar-brand" href="#/ctool">CTOOL</a>
		            </div>
		          </div>
		        </nav>

		        <div className="login-container sap-form">
		          <form className="form-signin content" name="loginForm">
		            <h2 className="form-signin-heading">Login</h2>
		            <p>Hint: abc@test.com / abc</p>
		            <label className="text-block top-margin">User Name</label>
		            <input type="text" ref="userEmail" value="abc@test.com" className="form-control" 
		              placeholder="User Name" required=""  />

		            <label className="text-block top-margin">Password</label>
		            <input type="password" ref="userPassword" value="abc" 
		              className="form-control" placeholder="Password" required="" />

		            <button className="sap-btn sap-btn-primary btn-block" onClick={this.handleLogin.bind(this)}>Sign in</button>
		          </form>
		        </div>


		        <footer className="footer">
		          <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
		          <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 ">
		            <label>v6.6.6 &copy; CTOOL</label>
		          </div>
		          <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>

		        </footer>

		      </div>
		    );
		  }
	  componentWillMount () {
          this.checkAuth(this.props.token);
      }

      componentWillReceiveProps (nextProps) {
          this.checkAuth(nextProps.token);
      }

      checkAuth (token) {
          if (token) {
        	  this.context.router.push('dashboard');
          }
      }
	  handleLogin(){
		  const userEmail = this.refs.userEmail.value;
		  const userPassword = this.refs.userPassword.value;
		  this.props.loginUser(userEmail,userPassword);
	  }
}	

Login.contextTypes = {
		  router: React.PropTypes.object.isRequired
		};
function mapStateToProps(state) {
	  return { token: state.Auth.token };
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({loginUser: loginUser}, dispatch);
	}

	export default connect(mapStateToProps, mapDispatchToProps)(Login);
