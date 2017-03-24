import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import { ToastContainer, ToastMessage} from "react-toastr";


import { handleSelectFieldsChange, goToTechnicalDetails } from '../../containers/account/actions/accountActions';


require( '../../../scss/style.scss' );
import Users from '../../../json/Users.json';
const ToastMessageFactory = React.createFactory( ToastMessage.animation );

class AccountCommDetails extends React.Component {
  constructor( props, context ) {
    super( props, context );
  //  this.accountCommInfo = this.props.accountObj || [];
    this.state={
      accountCommInfo:this.props.accountObj || []
    };
  //  this.accountCommInfo.revSharing = this.props.accountObj.revSharing || "No";
  }
  handleSelectFieldsChange( value ) {
    var info=this.state.accountCommInfo;
    info.acctManager=value;
    this.setState({accountCommInfo:info});
  //  this.props.handleSelectFieldsChange( value, target );
  }
  rearrangeCols(){


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
    var userList = Users.data.map(function (user) {
          return (
            {
              "label":user.name,
              "value":user.login,
            }
          );
      }.bind(this));
    var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
  ];
    return (
      <div>
      <div className="stepwizard breadcrumb-container">
        <div className="stepwizard-row">
            <div className="stepwizard-step">
                <button type="button" className="btn btn-primary btn-circle" disabled="disabled">1</button>
                <p>Commercial Information</p>
            </div>
            <div className="stepwizard-step">
                <button type="button" className="btn btn-circle inactive-step" disabled="disabled" >2</button>
                <p>Technical Details</p>
            </div>
            <div className="stepwizard-step">
                <button type="button" className="btn btn-circle inactive-step" disabled="disabled">3</button>
                <p>Account Name and Interfaces</p>
            </div>
            <div className="stepwizard-step">
                <button type="button" className="btn btn-circle inactive-step" disabled="disabled">4</button>
                <p>Create Account</p>
            </div>
        </div>
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
         <Select
               name="form-field-name"
               placeholder="Select.."
               options={userList}
               value={this.state.accountCommInfo.acctManager}
               onChange={this.handleSelectFieldsChange.bind(this)}
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
  //  this.accountCommInfo.revSharing = value;
  }
  goToTechnicalDetails() {

    this.props.goToTechnicalDetails( this.state.accountCommInfo );

  }
  componentDidMount() {
    //this.refs.requesterName.getInputNode().value = sessionStorage.getItem( "Username" ) || "";
  }

  componentWillReceiveProps( nextProps ) {
    console.log("nextProps",nextProps);
    // switch (nextProps.target) {
    //   case types.ACCOUNT_MGR_CHANGE:
    //     this.accountCommInfo.acctManager = nextProps.data;
    //     break;
    //   case types.ACCOUNT_COMPANY_CHANGE:
    //     this.accountCommInfo.company = nextProps.data;
    //     break;
    //   case types.ACCOUNT_BILLING_LOCATION:
    //     this.accountCommInfo.billingLocation = nextProps.data;
    //     break;
    //   case types.SERVICE_LEVEL:
    //     this.accountCommInfo.serviceLevel = nextProps.data;
    //     break;
    //   case types.TRAFFIC_TYPE:
    //     this.accountCommInfo.trafficType = nextProps.data;
    //     break;
    // }

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
