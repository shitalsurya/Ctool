import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import { ToastContainer, ToastMessage,
} from "react-toastr";

import { handleSelectFieldsChange, goToTechnicalDetails } from '../../containers/account/actions/accountActions';


require( '../../../scss/style.scss' );

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

    var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
  ];
    return (
      <div>
      <div className="breadcrumb-container">
      <ul className="breadcrumb">
     <li className="active">Commercial Information</li>
     <span className="glyphicon glyphicon-menu-right"/>
     <li><a href="#">Technical Details</a></li>
      <span className="glyphicon glyphicon-menu-right"/>
     <li><a href="#">Create Account</a></li>
     </ul>
      </div>
    <div className="controls-container">
    <div className="rec">
    <span>Commercial Information</span>
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
    </div>
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
