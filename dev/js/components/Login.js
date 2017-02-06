import React, {Component, PropTypes} from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import { LinkContainer } from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions/index'
require('../../scss/style.scss');



class Login extends Component {
	
//	  handleSubmit (event){
//	    event.preventDefault();
//	    console.log("this.refs.username==",this.refs.username.value);
//	    const input = this.refs.username;
//	    //this.props.pushState('/dashboard');
//	    var result = this.props.login(input.value);
//	    console.log("resulte==",result);
//	    input.value = '';
//	  }
	  constructor(props, context) {
	      super(props, context);
	    }
	  render() {
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
		            <label className="text-block top-margin">User Name</label>
		            <input type="text" ref="username" className="form-control" 
		              placeholder="User Name" required=""  />

		            <label className="text-block top-margin">Password</label>
		            <input type="password" ref="inputPassword"
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
	  handleLogin(){
		  const input = this.refs.username;
		  this.props.login(input.value);
		    this.context.router.push('dashboard');
		  }
}

Login.contextTypes = {
		  router: React.PropTypes.object.isRequired
		};

function mapStateToProps(state) {
    return {
        //users: state.users
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({login: login}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Login);
