import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import InlineEdit from './../../common/components/InlineEdit';
import Toggle from 'react-toggle';
require('./../../../../scss/style.scss');
require('./../../../../scss/react-toggle.scss');
import BrandingHeader from './../../common/components/BrandingHeader';
import Navigation from './../../common/components/Navigation';
import * as types from './../../common/commonActionTypes';
import { getUserList, updateUserDetails } from './miscUsersActions';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class EditUserModal extends React.Component {
  constructor(props, context) {
      super(props, context);
        this.state={
             modalHeading:'CTool Uer Management Details',
             currentUser: this.props.location.state.currentUser,
             submenus:{
               head: types.MISCELLENEOUS,
               head_icon : "misc-icon",
               subVal:[
                 types.USER_MANAGEMENT,
                 types.COUNTRY_MANAGEMENT
               ]
             }
        }
  }

  handleInlineEditChange(name,val){
    this.currentUser = this.state.currentUser;
    console.log( "handleInlineEditChange this.currentUser==", this.currentUser );
    console.log("handleInlineEditChange name==",name);
    console.log("handleInlineEditChange val==",val);
    this.currentUser[name]=val;
    console.log( "after this.currentUser==", this.currentUser );
    this.props.updateUserDetails(this.currentUser);
  }

  render(){
    const info = this.state.currentUser;
    console.log("render currentUser==",info);
    const homepageOptions= [
        { value: 'Account', label: 'Account' },
        { value: 'Connections', label: 'Connections' }
    ];

    const roleOptions= [
        { value: 'Support', label: 'Support' },
        { value: 'ServiceDesk', label: 'ServiceDesk' }
    ];

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
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        User ID:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="id"
                          value={info.id} />
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
                          name="login"
                          value={info.login} />
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
                        <InlineEdit
                          name="locked"
                          type = "toggle"
                          value={info.locked}
                          icons={{
                             checked: 'Yes',
                             unchecked: 'No',
                          }}
                          onSave = {
                            this.handleInlineEditChange.bind(this)
                          }
                        />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Live:
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="live" type="text" value={info.live} onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        User homepage:
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="homepage" type="select" options={homepageOptions} value={info.homepage} onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Role:
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="role" type="select" options={roleOptions} value={info.role} onSave={this.handleInlineEditChange.bind(this)}  />
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
        if( nextProps.userDetails != {}){
          this.refs.container.success(`User created successfully.`, ``, {
              closeButton: true,
          });
            // this.state.showEditModal =false;
           this.currentUser =  nextProps.userDetails.details;
        }
        else{
            // this.state.showEditModal =true;
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
