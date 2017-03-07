import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import { ToastContainer, ToastMessage,
} from "react-toastr";

import { handleSelectFieldsChange, goToTechnicalDetails } from '../actions/accountActions';
import * as types from '../actions/actionTypes';

/* */
import Users from '../../json/Users.json';
import Company from '../../json/Company.json';
import BillingLocation from '../../json/BillingLocation.json';
import ServiceLevel from '../../json/ServiceLevel.json';
import TrafficType from '../../json/TrafficType.json';
//import Countries from '../../json/Countries.json';
import Select from 'react-select';
require( '../../scss/style.scss' );

const ToastMessageFactory = React.createFactory( ToastMessage.animation );

class AccountCommDetails extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.accountCommInfo = this.props.accountObj || [];
    this.accountCommInfo.revSharing = this.props.accountObj.revSharing || "No";
  }
  handleSelectFieldsChange( target, value ) {
    this.props.handleSelectFieldsChange( value, target );
  }

  initializeData( _data, valueCol ) {

    var list = _data.map( function ( field ) {
      if ( typeof (field) == 'object' ) {
        return (
        <MenuItem
                  key={ field[ valueCol ] }
                  value={ field.name }
                  primaryText={ field.name } />
        );
      } else {
        return (
        <MenuItem
                  key={ field }
                  value={ field }
                  primaryText={ field } />
        );
      }

    } );
    return list;
  }

getOptions(input, callback) {
        setTimeout(function () {
            callback(null, {
                options: [
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' }
                ],
                // CAREFUL! Only set this to true when there are no more options,
                // or more specific queries will not be sent to the server.
                complete: true
            });
        }, 500);
    }
  render() {
    const styles = {
      radioButton: {
        marginBottom: 16,
      },
      radioButtonGrp: {
        float: "left"
      }
    };
    var listUsers = this.initializeData( Users.data, 'id' );
    var listBillingLocation = this.initializeData( BillingLocation.data, 'id' );
    var listServiceLevel = this.initializeData( ServiceLevel.data, 'id' );
    var listTrafficType = this.initializeData( TrafficType.data, 'id' );
    var listCompany = this.initializeData( Company.data, 'id' );
    var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
  ];
    return (
    <div>
      <div className="underline-h4">
        {/*<h4 className="breadcrumbs">Commercial Information</h4>*/}
        <ul className="breadcrumb">
       <li className="active">Commercial Information</li>
       <li><a href="#">Technical Details</a></li>
       <li><a href="#">Create Account</a></li>
   </ul>
      </div>
       <Grid fluid={true}>
       <Row className="show-grid">
         <Col
              componentClass={ ControlLabel }
              md={ 2 }> Account Manager:
         </Col>
         <Col md={ 6 }>
         <Select.Async
               name="form-field-name"
               placeholder="Select.."
               loadOptions={this.getOptions.bind(this)}
           />
         </Col>
         <Col
              mdHidden
              md={ 4 } />
       </Row>

              <Row className="show-grid">
                <Col
                     componentClass={ ControlLabel }
                     md={ 2 }> Company:
                </Col>
                <Col md={ 6 }>
                <Select.Async
                      name="form-field-name"
                      placeholder="Select.."
                      loadOptions={this.getOptions.bind(this)}
                  />
                </Col>
                <Col
                     mdHidden
                     md={ 4 } />
              </Row>
              <Row className="show-grid">
                <Col
                     componentClass={ ControlLabel }
                     md={ 2 }> Billing Location:
                </Col>
                <Col md={ 6 }>
                <Select.Async
                      name="form-field-name"
                      placeholder="Select.."
                      loadOptions={this.getOptions.bind(this)}
                  />
                </Col>
                <Col
                     mdHidden
                     md={ 4 } />
              </Row>
              <Row className="show-grid">
                <Col
                     componentClass={ ControlLabel }
                     md={ 2 }> Service Level:
                </Col>
                <Col md={ 6 }>
                <Select.Async
                      name="form-field-name"
                      placeholder="Select.."
                      loadOptions={this.getOptions.bind(this)}
                  />
                </Col>
                <Col
                     mdHidden
                     md={ 4 } />
              </Row>
              <Row className="show-grid">
                <Col
                     componentClass={ ControlLabel }
                     md={ 2 }> Traffic Type:
                </Col>
                <Col md={ 6 }>
                <Select.Async
                      name="form-field-name"
                      placeholder="Select.."
                      loadOptions={this.getOptions.bind(this)}
                  />
                </Col>
                <Col
                     mdHidden
                     md={ 4 } />
              </Row>
              <Row className="show-grid">
              <Col
                   mdHidden
                   md={ 2 } />

              <Col md={ 6 } className="pull-right">
             <Button className="sap-btn btn-wizard"   onClick={ this.goToTechnicalDetails.bind( this ) }>Next</Button>
              </Col>
              <Col
                   mdHidden
                   md={ 4 } />

              </Row>
 </Grid>
      <ToastContainer
                      toastMessageFactory={ ToastMessageFactory }
                      ref="container"
                      className="toast-top-right" />
    </div>
    )
  }
  handleRevSharingChanged( event, value ) {
    this.accountCommInfo.revSharing = value;
  }
  goToTechnicalDetails() {

    this.props.goToTechnicalDetails( this.accountCommInfo );

  }
  componentDidMount() {
    //this.refs.requesterName.getInputNode().value = sessionStorage.getItem( "Username" ) || "";
  }

  componentWillReceiveProps( nextProps ) {
    console.log("nextProps",nextProps);
    switch (nextProps.target) {
      case types.ACCOUNT_MGR_CHANGE:
        this.accountCommInfo.acctManager = nextProps.data;
        break;
      case types.ACCOUNT_COMPANY_CHANGE:
        this.accountCommInfo.company = nextProps.data;
        break;
      case types.ACCOUNT_BILLING_LOCATION:
        this.accountCommInfo.billingLocation = nextProps.data;
        break;
      case types.SERVICE_LEVEL:
        this.accountCommInfo.serviceLevel = nextProps.data;
        break;
      case types.TRAFFIC_TYPE:
        this.accountCommInfo.trafficType = nextProps.data;
        break;
    }

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
    handleSelectFieldsChange: handleSelectFieldsChange,
    goToTechnicalDetails: goToTechnicalDetails
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( AccountCommDetails );
