import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";

import { createNewAccount, handleSelectFieldsChange, getMetadata,handleTechDetailsBack } from '../actions/accountActions';
import * as types from '../actions/actionTypes';


require('../../scss/style.scss');

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AccountTechnicalDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.Countries=[];
        this.accountTechDetailsInfo=this.props.accountObj || [];
        console.log("this.accountTechDetailsInfo==",this.accountTechDetailsInfo);
    }

    handleSelectFieldsChange(target, event, key, value) {
        this.props.handleSelectFieldsChange(value, target);
    }
    handleTechDetailsBack(){
       this.StoreTextFieldsData();
        this.props.handleTechDetailsBack(this.accountInfo);
    }
    StoreTextFieldsData(){
       this.accountCommInfo=this.props.accountObj || [];
      this.accountTechDetailsInfo.name = this.refs.name.getValue();
      this.accountTechDetailsInfo.email = this.refs.email.getValue();
      this.accountTechDetailsInfo.MobNo = this.refs.MobNo.getValue();
        this.accountTechDetailsInfo.DirectNo = this.refs.DirectNo.getValue();

        this.accountTechDetailsInfo.techName = this.refs.techName.getValue();
        this.accountTechDetailsInfo.commName = this.refs.commName.getValue();
        this.accountInfo = Object.assign(this.accountCommInfo, this.accountTechDetailsInfo);
        console.log("Account Info=", this.accountInfo);
    }
    handleTechDetailsNext(){


     this.StoreTextFieldsData();
        this.props.createNewAccount(this.accountInfo);
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
        return (
          <div>
          <div className="breadcrumb-container">
            {/*<h4 className="breadcrumbs">Commercial Information</h4>*/}
            <ul className="breadcrumb">
           <li><a>Commercial Information</a></li>
           <li className="active">Technical Details</li>
           <li><a>Create Account</a></li>
           </ul>
          </div>
        <div className="controls-container">
        <div className="rec">
        <span>Technical Contact</span>
        </div>
           <Grid fluid={true}>
           <Row className="show-grid">
             <Col
                  componentClass={ ControlLabel }
                  md={ 3 }> Existing company contacts:
             </Col>
             <Col md={ 6 }>
             <Select.Async
                   name="form-field-name"
                   placeholder="Select contacts.."
                   loadOptions={this.getOptions.bind(this)}
               />
             </Col>
             <Col
                  mdHidden
                  md={ 3 } />
           </Row>

                  <Row className="show-grid">
                    <Col
                         componentClass={ ControlLabel }
                         md={ 3 }> Name:
                    </Col>
                    <Col md={ 6 }>
                    <FormControl
                                 type="text"
                                 ref="userEmail"
                                 placeholder="Enter your name" />
                    </Col>
                    <Col
                         mdHidden
                         md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                    <Col
                         componentClass={ ControlLabel }
                         md={ 3 }> Email:
                    </Col>
                    <Col md={ 6 }>
                    <FormControl
                                 type="email"
                                 ref="userEmail"
                                 placeholder="Enter your email" />
                    </Col>
                    <Col
                         mdHidden
                         md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                    <Col
                         componentClass={ ControlLabel }
                         md={ 3 }> Country:
                    </Col>
                    <Col md={ 6 }>
                    <Select.Async
                          name="form-field-name"
                          placeholder="Select country.."
                          loadOptions={this.getOptions.bind(this)}
                      />
                    </Col>
                    <Col
                         mdHidden
                         md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                    <Col
                         componentClass={ ControlLabel }
                         md={ 3 }> Mobile phone number:
                    </Col>
                    <Col md={ 6 }>
                    <FormControl
                                 type="text"
                                 ref="userEmail"
                                 placeholder="Enter your mobile phone number"/>
                    </Col>
                    <Col
                         mdHidden
                         md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                    <Col
                         componentClass={ ControlLabel }
                         md={ 3 }> Direct phone number:
                    </Col>
                    <Col md={ 6 }>
                    <FormControl
                                 type="text"
                                 ref="userEmail"
                                 placeholder="Enter your direct phone number"/>
                    </Col>
                    <Col
                         mdHidden
                         md={ 3 } />
                  </Row>

     </Grid>

        </div>
        <div className="controls-container">
        <div className="rec">
        <span>Account Name and Interfaces</span>
        </div>
      <Grid fluid={true}>
      <Row className="show-grid">
        <Col
             componentClass={ ControlLabel }
             md={ 3 }> Technical name:
        </Col>
        <Col md={ 6 }>
        <FormControl
                     type="text"
                     ref="userEmail"
                     placeholder="Enter technical name"/>
        </Col>
        <Col
             mdHidden
             md={ 3 } />
      </Row>
      <Row className="show-grid">
        <Col
             componentClass={ ControlLabel }
             md={ 3 }> Commercial name:
        </Col>
        <Col md={ 6 }>
        <FormControl
                     type="text"
                     ref="userEmail"
                     placeholder="Enter commercial name"/>
        </Col>
        <Col
             mdHidden
             md={ 3 } />
      </Row>
      <Row className="show-grid">
        <Col
             componentClass={ ControlLabel }
             md={ 3 }> Existing accounts :
        </Col>
        <Col md={ 6 }>
        <Select.Async
              name="form-field-name"
              placeholder="Select account.."
              loadOptions={this.getOptions.bind(this)}
          />
        </Col>
        <Col
             mdHidden
             md={ 3 } />
      </Row>
      <Row className="show-grid">
        <Col
             componentClass={ ControlLabel }
             md={ 3 }> Interface:
        </Col>
        <Col md={ 6 }>
        <Select.Async
              name="form-field-name"
              placeholder="Select interface.."
              loadOptions={this.getOptions.bind(this)}
          />
        </Col>
        <Col
             mdHidden
             md={ 3 } />
      </Row>
      <Row className="show-grid">
      <Col
           mdHidden
           md={ 3 } />

      <Col md={ 6 }>
       <Button className="sap-btn btn-wizard pull-right"   onClick={ this.handleTechDetailsNext.bind( this ) }>Next</Button>
     <Button className="sap-btn btn-wizard pull-right"   onClick={ this.handleTechDetailsBack.bind( this ) }>Back</Button>
      </Col>
      <Col
           mdHidden
           md={ 3 } />

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
    componentWillMount(){
        // var countryList = localStorage.getItem("countryList");
        // if(countryList){
        //   console.log("get from cache");
        //     this.Countries = this.initializeData(JSON.parse(countryList),'code');
        //     console.log("this.Countries==",this.Countries);
        // }
        // else{
        //     console.log("get from backend");
        //     this.props.getMetadata();
        // }
    }
componentDidMount(){
  // this.refs.name.getInputNode().value = this.props.accountObj.name||"";
  //   this.refs.email.getInputNode().value = this.props.accountObj.email||"";
  //     this.refs.MobNo.getInputNode().value = this.props.accountObj.MobNo||"";
  //       this.refs.DirectNo.getInputNode().value = this.props.accountObj.DirectNo||"";
  //         this.refs.techName.getInputNode().value = this.props.accountObj.techName||"";
  //           this.refs.commName.getInputNode().value = this.props.accountObj.commName||"";

}
    componentWillReceiveProps (nextProps) {
        switch(nextProps.target){
        case types.ACCOUNT_COMPANY_CONTACT:
        	this.accountTechDetailsInfo.ExstContacts=nextProps.data;
        	break;
        case types.ACCOUNT_COUNTRY_CHANGE:
        	this.accountTechDetailsInfo.Country=nextProps.data;
        	break;
            case types.ACCOUNT_EXSTACCTS_CHANGE:
                this.accountTechDetailsInfo.ExstAccts = nextProps.data;
                break;
            case types.ACCOUNT_INTERFACE_CHANGE:
                this.accountTechDetailsInfo.accInterface = nextProps.data;
                break;
            case types.ACCOUNT_GET_COUNTRY_LIST_SUCCESS:
              if(JSON.stringify(nextProps.data)!=""){
                localStorage.setItem("countryList",JSON.stringify(nextProps.data));
                this.Countries = this.initializeData(nextProps.data,'code');
              }
                break;
            case types.ACCOUNT_GET_COUNTRY_LIST_FAILURE:
                alert("Failed to get countries");
                break;
            case types.ACCOUNT_CREATE_NEW_SUCCESS:
               //alert("Account created successfully.");
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
    return { data: state.Account.data, target: state.Account.target };
}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({handleSelectFieldsChange:handleSelectFieldsChange,
            createNewAccount: createNewAccount,
            handleTechDetailsBack:handleTechDetailsBack,
            getMetadata:getMetadata}, dispatch);
	}

export default connect(mapStateToProps, mapDispatchToProps)(AccountTechnicalDetails);
