import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap';
import Select from 'react-select';
import { ToastContainer, ToastMessage} from "react-toastr";
import * as types from './../actions/accountActionTypes';
import { initializeData,handleChange, goToTechnicalDetails } from './../actions/accountActions';
import {initializeSelectOptions} from './../../common/Functions/commonFunctions';
import Toggle from 'react-toggle';
require( './../../../../scss/style.scss' );
require( './../../../../scss/react-toggle.scss' );
import Users from './../../../../json/Users.json';
import Company from './../../../../json/Company.json';
import BillingLocation from './../../../../json/BillingLocation.json';
import ServiceLevel from './../../../../json/ServiceLevel.json';
import TrafficType from './../../../../json/TrafficType.json';
const ToastMessageFactory = React.createFactory( ToastMessage.animation );

class AccountCommDetails extends React.Component {
  constructor( props, context ) {
    super( props, context );

    this.state={
        emptyFlag : true,
        acctCommInfo:this.props.accountObj || {}
    };

  }

  handleChange( e) {
      console.log("handleChange==",e.target.value);
    var info = this.state.acctCommInfo;
    info[e.target.name] = e.target.value;
    this.setState({acctCommInfo:info},function(){
      console.log("handleChange==",this.state.acctCommInfo);
    });
  }

  render() {
    return (
      <div>

        <div className="controls-container">
          <div className="rec">
            <span>Commercial Information</span>
          </div>
          <Grid fluid={true}>
            <Row className="show-grid">
              <Col componentClass={ ControlLabel } md={ 2 }>
                Requester:
              </Col>
              <Col md={ 6 }  >
                <FormControl
                  className="info_label"
                  type="text"
                  name="requesterName"
                  value={this.state.acctCommInfo.requesterName} />
              </Col>
              <Col mdHidden md={ 4 }/>
            </Row>
            <Row className="show-grid">
              <Col componentClass={ ControlLabel } md={ 2 }>
                Account Manager:
              </Col>
              <Col md={ 6 } >
                <FormControl componentClass="select"
                  name="acctManager"
                  value={this.state.acctCommInfo.acctManager}
                  onChange={this.handleChange.bind(this)}>
                  {this.userList}
                </FormControl>
              </Col>
              <Col mdHidden md={ 4 } />
            </Row>
            <Row className="show-grid">
              <Col componentClass={ ControlLabel } md={ 2 }>
                Company:
              </Col>
              <Col md={ 6 } className={this.state.acctCommInfo.company || this.state.emptyFlag ? false : "empty"}>
                <FormControl componentClass="select"
                  name="company"
                  value={this.state.acctCommInfo.company}
                  onChange={this.handleChange.bind(this)}>
                  {this.userList}
                </FormControl>
              </Col>
              <Col mdHidden md={ 4 } />
            </Row>
            <Row className="show-grid">
              <Col componentClass={ ControlLabel } md={ 2 }>
                Billing Location:
              </Col>
              <Col md={ 6 } className={this.state.acctCommInfo.billinglocation || this.state.emptyFlag ? false : "empty"}>

                <FormControl componentClass="select"
                  placeholder="Select billing location.."
                  name="billinglocation"
                  value={this.state.acctCommInfo.billinglocation}
                  onChange={this.handleChange.bind(this)}>
                  {this.BillingLocation}
                </FormControl>
              </Col>
              <Col mdHidden md={ 4 } />
            </Row>
            <Row className="show-grid">
              <Col componentClass={ ControlLabel } md={ 2 }>
                Service Level:
              </Col>
              <Col md={ 6 } className={this.state.acctCommInfo.servicelevel || this.state.emptyFlag ? false : "empty"}>
                <FormControl componentClass="select"
                  name="servicelevel"
                  value={this.state.acctCommInfo.servicelevel}
                  onChange={this.handleChange.bind(this)}>
                  {this.ServiceLevel}
                </FormControl>
              </Col>
              <Col mdHidden md={ 4 } />
            </Row>
            <Row className="show-grid">
              <Col componentClass={ ControlLabel } md={ 2 }>
                Traffic Type:
              </Col>
              <Col md={ 6 } className={this.state.acctCommInfo.traffictype || this.state.emptyFlag ? false : "empty"}>
                <FormControl componentClass="select"
                  name="traffictype"
                  value={this.state.acctCommInfo.traffictype}
                  onChange={this.handleChange.bind(this)}>
                  {this.TrafficType}
                </FormControl>
              </Col>
              <Col mdHidden md={ 4 } />
            </Row>
            <Row className="show-grid">
              <Col componentClass={ ControlLabel } md={ 2 }>
                Revenue Sharing:
              </Col>
              <Col md={ 6 }>
                <label>
                  <Toggle name="revSharing"
                    icons={{
                           checked:'Yes',
                           unchecked: 'No',
                    }}
                    //  defaultChecked={this.state.acctCommInfo.revSharing == "No" ? false : true}
                    value={this.state.acctCommInfo.revSharing}
                    onChange={this.handleChange.bind(this)} />
                </label>
              </Col>
              <Col mdHidden md={ 4 } />
            </Row>
          </Grid>
        </div>

        <div className="button-container">
          <Grid fluid={true}>
            <Row className="show-grid">
              <Col md={ 12 } >
                <ButtonToolbar>
                  <Button className="btn-primary" onClick={ this.goToTechnicalDetails.bind( this ) }>Next</Button>
                </ButtonToolbar>
              </Col>
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

  handleRevSharingChanged( event ) {
    // debugger;
    // var info = this.state.acctCommInfo;
    // switch (event.target.value) {
    //   case "No":
    //     info.revSharing = "Yes"
    //     break;
    //   case "Yes":
    //     info.revSharing = "No"
    //     break;
    // }
    // this.setState({accountCommInfo : info});
  //  this.state.acctCommInfo.revSharing = value;
  }

  goToTechnicalDetails() {
    // this.props.goToTechnicalDetails( this.state.acctCommInfo );
    var accountObjCheck = this.state.acctCommInfo;
     if(accountObjCheck.company && accountObjCheck.billinglocation
      && accountObjCheck.servicelevel && accountObjCheck.traffictype){
        console.log("error");
        this.props.goToTechnicalDetails( this.state.acctCommInfo );
      }
      else {
          console.log("no error");
        this.setState({emptyFlag:false});
    }
  }

  componentWillMount() {
    this.userList = initializeSelectOptions(Users.data,'name','id');
    this.BillingLocation = initializeSelectOptions(BillingLocation.data,'billinglocationname','billinglocationid');
    this.companyList = initializeSelectOptions(Company.data,'companyname','companyid');
    this.ServiceLevel = initializeSelectOptions(ServiceLevel.data,'servicelevelname','servicelevelid');
    this.TrafficType = initializeSelectOptions(TrafficType.data,'name','value');

    var info = this.state.acctCommInfo;
    //  info.revSharing = "No";
    info.requesterName = sessionStorage.getItem( "username" );
    this.setState({accountCommInfo : info});
  }

  componentWillReceiveProps( nextProps ) {

  }

}

function mapStateToProps( state ) {
  return {
    data: state.Account.data,
    target: state.Account.target
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    handleChange: handleChange,
    goToTechnicalDetails: goToTechnicalDetails
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( AccountCommDetails );
