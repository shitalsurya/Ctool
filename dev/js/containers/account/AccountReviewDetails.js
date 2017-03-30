import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";

import { createNewAccount,handleReviewDetailsBack } from '../../containers/account/actions/accountActions';
import * as types from '../../containers/account/actions/accountActionTypes';


require('../../../scss/style.scss');

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AccountReviewDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.Countries=[];
        this.state={
          interfaceFlag : false,
          accountInfo:this.props.accountObj || []
        };
        console.log("AccountReviewDetails accountInfo==",this.state.accountInfo);
    }

    handleReviewDetailsBack(){
        this.props.handleReviewDetailsBack(this.accountInfo);
    }

    createNewAccount() {
      this.props.createNewAccount( this.state.accountInfo );
    }
    render() {
      const accountCreateInfo = [
        {
          'title' : 'Commercial Information',
          'infoList' : [
            {
              'subtitle' : 'Account Manager',
              'value' : 'acctManager'
            },
            {
              'subtitle' : 'Company',
              'value' : 'company'
            },
            {
              'subtitle' : 'Billing Location',
              'value' : 'billingLocation'
            },
            {
              'subtitle' : 'Service Level',
              'value' : 'serviceLevel'
            },
            {
              'subtitle' : 'Traffic Type',
              'value' : 'trafficType'
            }
          ]
        },

        {
          'title' : 'Technical Information',
          'infoList' : [
            {
              'subtitle' : 'Existing Company Contacts',
              'value' : 'exstContacts'
            },
            {
              'subtitle' : 'Name',
              'value' : 'name'
            },
            {
              'subtitle' : 'Email',
              'value' : 'email'
            },
            {
              'subtitle' : 'Country',
              'value' : '-'
            },
            {
              'subtitle' : 'Mobile Phone Number',
              'value' : 'MobNo'
            },
            {
              'subtitle' : 'Direct Phone Number',
              'value' : 'DirectNo'
            }
          ]
        },

        {
          'title' : 'Account Name and Interfaces',
          'infoList' : [
            {
              'subtitle' : 'Technical name',
              'value' : 'techName'
            },
            {
              'subtitle' : 'Commercial name',
              'value' : 'commName'
            },
            {
              'subtitle' : 'Existing accounts',
              'value' : 'ExstAccts'
            },
            {
              'subtitle' : 'Interface',
              'value' : 'accInterface'
            }
          ]
        }
      ];

    const titleMapping = function(list, index) {
      return (
        <div key={index} className="controls-container">
          <div className="rec">
            <span>{list.title}</span>
          </div>
          <Grid fluid={true}>
            {list.infoList.map(gridRowMapping)}
          </Grid>
        </div>
      );
    }

    const gridRowMapping = function(list, index) {

        return (
            <Row key={index} className="show-grid">
                <Col
                    componentClass={ ControlLabel }
                    md={ 3 }> {list.subtitle}:
                </Col>
                <Col md={ 6 }>
                  {this.state.accountInfo[list.value]}
                </Col>
                <Col
                    mdHidden
                    md={ 3 } />
            </Row>
        )
    }.bind(this);

        return (
          <div>
          <div className="stepwizard breadcrumb-container">
            <div className="stepwizard-row">
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-default btn-circle">1</button>
                    <p>Commercial Information</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-default btn-circle" >2</button>
                    <p>Technical Details</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-default btn-circle" >3</button>
                    <p>Account Name and Interfaces</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-primary btn-circle" disabled="disabled">4</button>
                    <p>Create Account</p>
                </div>
            </div>
          </div>

          <div>
              {accountCreateInfo.map(titleMapping)}
          </div>

        <div className="controls-container" hidden={this.state.interfaceFlag ? false : "hidden"}>
        <div className="rec">
        <span>MT Interfces</span>
         </div>
                    <Grid fluid={true}>
                        <Row className="show-grid">
                            <Col
                                componentClass={ ControlLabel }
                                md={ 3 }> Default TPOA:
                            </Col>
                            <Col md={ 6 }>
                              <textarea rows="1" cols="10"></textarea>
                            </Col>
                            <Col
                                mdHidden
                                md={ 3 } />
                        </Row>

                    </Grid>
         </div>

        <div className="controls-container" hidden={this.state.interfaceFlag ? false : "hidden"}>
        <div className="rec">
        <span>MO Interfces</span>
         </div>
                    <Grid fluid={true}>
                        <Row className="show-grid">
                            <Col
                                componentClass={ ControlLabel }
                                md={ 3 }> HTTP URL:
                            </Col>
                            <Col md={ 6 }>
                              <textarea rows="1" cols="50"></textarea>
                            </Col>
                            <Col
                                mdHidden
                                md={ 3 } />
                        </Row>

                    </Grid>
         </div>


      <Row className="show-grid">
        <Col
            mdHidden
            md={ 3 } />

        <Col md={ 6 }>
        <Button className="sap-btn btn-wizard pull-right"   onClick={ this.createNewAccount.bind( this ) }>Create Account</Button>
        <Button className="sap-btn btn-wizard pull-right"   onClick={ this.handleReviewDetailsBack.bind( this ) }>Back</Button>
        </Col>
        <Col
            mdHidden
            md={ 3 } />

     </Row>

       <ToastContainer
                      toastMessageFactory={ ToastMessageFactory }
                      ref="container"
                      className="toast-top-right" />

      </div>

        )
    }

    componentWillMount() {
      if(this.state.accountInfo.accInterface == "HTTP")
        this.setState({interfaceFlag:true});
      else
        this.setState({interfaceFlag:false});
    }

componentWillReceiveProps(nextProps){
  switch(nextProps.target){
    case types.ACCOUNT_CREATE_NEW_SUCCESS:
        this.refs.container.success(`Account created successfully.`, ``, {
            closeButton: true,
        });
        break;
    case types.ACCOUNT_CREATE_NEW_FAILURE:
        this.refs.container.error(`Failed to create new account.`, ``, {
            closeButton: true,
        });
        break;
      }
  }
}
function mapStateToProps(state) {
    return { data: state.Account.data , target: state.Account.target};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
          createNewAccount: createNewAccount,
          handleReviewDetailsBack:handleReviewDetailsBack,
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountReviewDetails);
