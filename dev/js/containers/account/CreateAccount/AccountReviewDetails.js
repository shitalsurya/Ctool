import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button, ButtonToolbar } from 'react-bootstrap';
import Select from 'react-select';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
import { createNewAccount,handleReviewDetailsBack } from './../actions/accountActions';
import * as types from './../../common/commonActionTypes';

require('./../../../../scss/style.scss');
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AccountReviewDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.Countries=[];
        this.state={
          mtFlag : false,
          moFlag : false,
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
              'subtitle' : 'Requester',
              'value' : 'requesterName'
            },
            {
              'subtitle' : 'Account Manager',
              'value' : 'accountmanagerid'
            },
            {
              'subtitle' : 'Company',
              'value' : 'companyid'
            },
            {
              'subtitle' : 'Billing Location',
              'value' : 'billinglocationid'
            },
            {
              'subtitle' : 'Service Level',
              'value' : 'servicelevel'
            },
            {
              'subtitle' : 'Traffic Type',
              'value' : 'trafficid'
            }
          ]
        },

        {
          'title' : 'Technical Information',
          'infoList' : [
            {
              'subtitle' : 'Existing Company Contacts',
              'value' : 'contactid'
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
              'value' : 'country'
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
              'value' : 'customername'
            },
            {
              'subtitle' : 'Commercial name',
              'value' : 'extranetcustomername'
            },
            {
              'subtitle' : 'Existing accounts',
              'value' : 'customerid'
            },
            {
              'subtitle' : 'Interface',
              'value' : 'interfacetype'
            }
          ]
        },

        {
          'title' : 'MT Interfaces',
          'infoList' : [
            {
              'subtitle' : 'Default TPOA',
              'value' : 'defaulttpoa'
            },
            {
              'subtitle' : 'SMPP Client IP Address(es)',
              'value' : 'customerreplyaddress',
              'hidden' : this.state.smppFlag
            }
          ],
          'hidden' : this.state.mtFlag,
          'interface' : true
        },

        {
          'title' : 'MO Interfaces',
          'infoList' : [
            {
              'subtitle' : 'MO Enabled',
              'value' : 'moEnabled',
              'hidden' : this.state.httpFlag
            },
            {
              'subtitle' : 'Reply Address',
              'value' : 'customerreplyaddress',
              'hidden' : this.state.enableFlag
            },
            {
              'subtitle' : 'SMTP Reply Address',
              'value' : 'customerreplyaddress',
              'hidden' : this.state.smtpFlag
            }
          ],
          'hidden' : this.state.moFlag,
          'interface' : true
        }
      ];

      const titleMapping = function(list, index) {
        return (
          <div key={index} className="controls-container" hidden={list.hidden ? "hidden" : false}>
            <div className="rec">
              <span>{list.title}</span>
            </div>
            <Grid fluid={true}>
              {
                list.infoList.map(gridRowMapping)
              }
            </Grid>
          </div>
        );
      }

      const gridRowMapping = function(list, index) {
          return (
            <Row key={index} className="show-grid" hidden={list.hidden ? "hidden" : false}>
                <Col
                    componentClass={ ControlLabel }
                    md={ 3 }> {list.subtitle}:
                </Col>
                <Col md={ 6 }>
                  {this.state.accountInfo.labels[list.value]}
                </Col>
                <Col
                    mdHidden
                    md={ 3 } />
            </Row>
          )
      }.bind(this);

        return (
          <div>
            {accountCreateInfo.map(titleMapping)}
            <div className="button-container">
              <Grid fluid={true}>
                <Row className="show-grid">
                  <Col md={ 12 } >
                    <ButtonToolbar>
                      <Button className="btn-primary"   onClick={ this.handleReviewDetailsBack.bind( this ) }>Back</Button>
                      <Button className="btn-primary"   onClick={ this.createNewAccount.bind( this ) }>Create Account</Button>
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

    componentWillMount() {
      this.setState({httpFlag:true,smppFlag:true,smtpFlag:true,enableFlag:true});
      var info=this.state.accountInfo;
      switch(info.accInterface){
        case "HTTP":
          var _flag = info.moEnabled === "Yes" ? false : true;
          this.setState({mtFlag:false,moFlag:false,httpFlag:false,enableFlag:_flag});
          break;
        case "SMPP":
          this.setState({mtFlag:false,moFlag:true,smppFlag:false});
          break;
        case "SMTP":
          this.setState({mtFlag:false,moFlag:false,smtpFlag:false});
          break;
      }
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
