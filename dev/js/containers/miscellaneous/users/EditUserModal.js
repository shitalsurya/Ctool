import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label,Alert} from 'react-bootstrap';
import InlineEdit from './../../common/components/InlineEdit';
import Toggle from 'react-toggle';
require('./../../../../scss/style.scss');
require('./../../../../scss/react-toggle.scss');
import BrandingHeader from './../../common/components/BrandingHeader';
import Navigation from './../../common/components/Navigation';
import * as types from './../../common/commonActionTypes';
import { getUserList, updateUserDetails } from './miscUsersActions';
import {homepageOptions,roleOptions} from './../../common/commonActionTypes';
import {initializeSelectOptions} from './../../common/Functions/commonFunctions';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class EditUserModal extends React.Component {
  constructor(props, context) {
      super(props, context);
        this.state={
             modalHeading:'CTool User Management Details',
             currentUser: this.props.location.state.currentUser,
             emailError:'',
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

  emailValidator(_email){
    // let regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let regexp = /^[a-zA-Z][a-zA-Z0-9_.]*@[a-zA-Z0-9_]{1,10}\.[a-zA-Z]{2,3}$/;
    let numberDecimal = regexp.test(_email);
    if (!numberDecimal) {
      return false;
    }
    return true;
  }

  handleInlineEditChange(name,val){
    var flag = true;
    var temp = JSON.stringify(this.state.currentUser);
    this.currentUser = JSON.parse(temp);
    console.log( "handleInlineEditChange this.currentUser==", this.currentUser );
    console.log("handleInlineEditChange this.state.currentUser==", this.state.currentUser);
    if(name === "email"){
        flag = this.emailValidator(val);
        var _errMsg = flag==false ?"Enter valid email address.":"";
          this.setState({emailError:_errMsg});
    }
    if(this.currentUser[name]!==val && flag){
      this.currentUser[name]=val;
      console.log( "after this.currentUser==", this.currentUser );
      this.props.updateUserDetails(name,this.currentUser);
    }
  }

  handleToggleChange(e){
    this.currentUser = this.state.currentUser;
    console.log( "handleInlineEditChange this.currentUser==", this.currentUser );
    this.currentUser[e.target.name] = e.target.checked ? 1 : 0;
    var urlKey=e.target.name;
    if(e.target.name=="locked"){
      console.log("this.currentUser[e.target.name]==",this.currentUser[e.target.name]);
      this.currentUser[e.target.name]==1? urlKey="unlock":urlKey="lock";
    }
    this.props.updateUserDetails(urlKey,this.currentUser);
  }

  render(){
    const info = this.state.currentUser;
    console.log("render currentUser==",info);
  //   this.homepageOptions = initializeSelectOptions(homepageOptions,'homepagename','homepage');
  // console.log("this.homepageOptions==",this.homepageOptions);
  //   this.roleOptions = initializeSelectOptions(roleOptions,'rolename','roleid');
  //       console.log("this.roleOptions==",this.roleOptions);

    return (
      <div>
        <BrandingHeader/>
        <Grid fluid={true}>
          <Row>
            <Col md={2}>
              <Navigation submenus={this.state.submenus}></Navigation>
            </Col>
            <Col md={10}>
              <div className="controls-container">
                <div className="rec">
                  <div className="page-heading">
                    {this.state.modalHeading}
                  </div>
                </div>
                <div>
                  <Grid fluid={true}>
                  {
                    this.state.emailError!=''&&
                    <Alert bsStyle="danger">
                      <strong>{this.state.emailError}</strong>
                    </Alert>
                  }
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        User ID:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="userid"
                          value={info.userid} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Login:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="loginid"
                          value={info.loginid} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Name:
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="name" type="text" value={info.name} onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Email:
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="email" type="text" value={info.email} onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Password:
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="password" type="text" value={info.password} onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Locked:
                      </Col>
                      <Col md={ 6 }>
                        <Toggle
                          name="locked"
                          icons={{
                             checked: 'Yes',
                             unchecked: 'No',
                          }}
                          defaultChecked={info.locked == 1 ? true : false}
                          value={info.locked}
                          onChange={this.handleToggleChange.bind(this)} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Live:
                      </Col>
                      <Col md={ 6 }>
                        <Toggle
                          name="liveaccount"
                          icons={{
                             checked: 'Yes',
                             unchecked: 'No',
                          }}
                          defaultChecked={info.liveaccount == 1 ? true : false}
                          value={info.liveaccount}
                          onChange={this.handleToggleChange.bind(this)} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        User homepage:
                      </Col>
                      <Col md={ 6 }>
                      <InlineEdit
                        name="homepage"
                        type="select"
                        options={homepageOptions}
                        optionsLabel="homepagename"
                        value={info.homepage}
                        onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Role:
                      </Col>
                      <Col md={ 6 }>
                      <InlineEdit
                        name="ctoolrole"
                        type="select"
                        options={roleOptions}
                        optionsLabel="ctoolrolename"
                        value={info.ctoolrole}
                        onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Insert Date:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="insertdate"
                          value={info.insertdate} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Update Date:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="updatedate"
                          value={info.updatedate} />
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
    );
  }

  componentWillMount(){

  }

  componentWillReceiveProps(nextProps){
    switch (nextProps.target) {
      case types.MISC_UPDATE_USERDETAILS_RESPONSE:
        console.log("nextProps.userDetails==",nextProps.userDetails);
        if( nextProps.userDetails == 0){
          this.refs.container.success(`User updated successfully.`, ``, {
              closeButton: true,
          });
            // this.state.showEditModal =false;
           this.currentUser =  nextProps.userDetails.details;
        }
        else{
            // this.state.showEditModal =true;
            console.log("this.state.currentUser==",this.state.currentUser);
            this.forceUpdate();
            this.refs.container.error(`Failed to update user.`, ``, {
                closeButton: true,
          });
        }
    }
  }
}

function mapStateToProps( state ) {
  return {
    target: state.MiscUsers.target,
    userDetails: state.MiscUsers.userDetails
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
      updateUserDetails : updateUserDetails
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( EditUserModal );
