import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button, ButtonToolbar, HelpBlock, Checkbox } from 'react-bootstrap';
import Select from 'react-select';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
import { initializeData, createNewAccount, getMetadata,handleInterfaceDetailsBack,handleInterfaceDetailsNext } from './../actions/accountActions';
import * as types from './../../common/commonActionTypes';
require('./../../../../scss/style.scss');
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AccountInterfaces extends React.Component {
    constructor(props, context) {
        super(props, context);
      //  this.state.accountInterfacesInfo=this.props.accountObj || [];
        this.state={
          emptyFlag : true,
          emptyValFlag : true,
          accountInterfacesInfo:this.props.accountObj || []
        };
        console.log("this.state.accountInterfacesInfo==",this.state.accountInterfacesInfo);
    }

    handleTextFieldsChange(e){
      var info=this.state.accountInterfacesInfo;
      switch(e.target.name){
        case "techName":
          info.techName = e.target.value;
          break;
        case "commName":
          info.commName = e.target.value;
          break;
        case "defTPOA":
          info.interfaceVal.defTPOA = e.target.value;
          break;
        case "rplAdd":
          info.interfaceVal.rplAdd = e.target.value;
          break;
        case "moEnabled":
          info.interfaceVal.moEnabled = e.target.checked ? "Yes" : "No";
          if(!e.target.checked)
            info.interfaceVal.rplAdd = '';
          break;
        case "ipAdd":
          info.interfaceVal.ipAdd = e.target.value;
          break;
      }
      this.setState({accountInterfacesInfo:info});
    }

    handleSelectFieldsChange(target, value) {
      var info=this.state.accountInterfacesInfo;
      switch (target) {
          case types.ACCOUNT_EXSTACCTS_CHANGE:
              info.ExstAccts = value.value;
              break;
          case types.ACCOUNT_INTERFACE_CHANGE:
              info.accInterface = value.value;
              info.interfaceVal=[];
              info.interfaceVal.moEnabled="No"
              this.setState({emptyValFlag : true});
              break;
      }
      console.log("handleSelectFieldsChange info==",info);
      this.setState({accountInterfacesInfo:info});
    }

    handleInterfaceDetailsBack(){
      this.StoreTextFieldsData();
      this.props.handleInterfaceDetailsBack(this.accountInfo);
    }

    StoreTextFieldsData(){
      this.accountInfo=this.props.accountObj || [];
      this.accountInfo = Object.assign(this.accountInfo, this.state.accountInterfacesInfo);
      console.log("Account Info=", this.accountInfo);
    }

    handleInterfaceDetailsNext(){
      console.log(this.state.accountInterfacesInfo);
      var accountObjCheck = this.state.accountInterfacesInfo;
       if(accountObjCheck.techName && accountObjCheck.commName && accountObjCheck.ExstAccts
        && accountObjCheck.accInterface ){
          var _interfaceVal = accountObjCheck.interfaceVal;
          switch(accountObjCheck.accInterface)
          {
            case "HTTP":
              if(_interfaceVal.defTPOA && ((_interfaceVal.moEnabled=="Yes" && _interfaceVal.rplAdd) || (_interfaceVal.moEnabled=="No"))) {
                this.StoreTextFieldsData();
                this.props.handleInterfaceDetailsNext(this.accountInfo);
              }
              else
                this.setState({emptyValFlag:false});
              break;
            case "SMTP":
              if(_interfaceVal.defTPOA && _interfaceVal.rplAdd) {
                this.StoreTextFieldsData();
                this.props.handleInterfaceDetailsNext(this.accountInfo);
              }
              else
                this.setState({emptyValFlag:false});
              break;
            case "SMPP":
              if(_interfaceVal.defTPOA && _interfaceVal.ipAdd) {
                this.StoreTextFieldsData();
                this.props.handleInterfaceDetailsNext(this.accountInfo);
              }
              else
                this.setState({emptyValFlag:false});
              break;
          }
        }
        else {
          if(accountObjCheck.accInterface)
            this.setState({emptyValFlag:false});
          this.setState({emptyFlag:false});
      }
    }

    render() {
        return (
          <div>
            <div className="controls-container">
              <div className="rec">
                <span>Account Name and Interfaces</span>
              </div>
              <Grid fluid={true}>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Technical name:
                  </Col>
                  <Col md={ 6 } className={this.state.accountInterfacesInfo.techName || this.state.emptyFlag ? false : "empty"}>
                    <FormControl
                       type="text"
                       name="techName"
                       value={this.state.accountInterfacesInfo.techName}
                       onChange={this.handleTextFieldsChange.bind(this)}
                       placeholder="Enter technical name"/>
                  </Col>
                  <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Commercial name:
                  </Col>
                  <Col md={ 6 } className={this.state.accountInterfacesInfo.commName || this.state.emptyFlag ? false : "empty"}>
                  <FormControl
                       type="text"
                       name="commName"
                       value={this.state.accountInterfacesInfo.commName}
                       onChange={this.handleTextFieldsChange.bind(this)}
                       placeholder="Enter commercial name"/>
                  </Col>
                  <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Existing accounts :
                  </Col>
                  <Col md={ 6 } className={this.state.accountInterfacesInfo.ExstAccts || this.state.emptyFlag ? false : "empty"}>
                    <Select
                        placeholder="Select account.."
                        options={this.accountList}
                        value={this.state.accountInterfacesInfo.ExstAccts}
                        onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_EXSTACCTS_CHANGE)} />
                  </Col>
                  <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Interface:
                  </Col>
                  <Col md={ 6 } className={this.state.accountInterfacesInfo.accInterface || this.state.emptyFlag ? false : "empty"}>
                  <Select
                      placeholder="Select interface.."
                      options={this.interfaceList}
                      value={this.state.accountInterfacesInfo.accInterface}
                      onChange={this.handleSelectFieldsChange.bind(this,types.ACCOUNT_INTERFACE_CHANGE)} />
                  </Col>
                  <Col mdHidden md={ 3 } />
                </Row>
              </Grid>
            </div>

            {
              this.state.accountInterfacesInfo.accInterface === "HTTP" &&
              <div>
                <div className="controls-container" >
                   <div className="rec">
                     <span>MT Interfaces</span>
                   </div>
                   <Grid fluid={true}>
                       <Row className="show-grid">
                          <Col componentClass={ ControlLabel } md={ 3 }>
                             Default TPOA:
                          </Col>
                          <Col md={ 6 } className={this.state.accountInterfacesInfo.interfaceVal.defTPOA || this.state.emptyValFlag ? false : "empty"}>
                            <FormControl
                               type="text"
                               name="defTPOA"
                               value={this.state.accountInterfacesInfo.interfaceVal.defTPOA}
                               onChange={this.handleTextFieldsChange.bind(this)}
                               placeholder="Enter Default TPOA"/>
                          </Col>
                          <Col mdHidden md={ 3 } />
                        </Row>
                   </Grid>
                 </div>

                <div className="controls-container" >
                  <div className="rec">
                    <span>MO Interfaces</span>
                  </div>
                  <Grid fluid={true}>
                    <Row className="show-grid">
                        <Col componentClass={ ControlLabel } md={ 3 }>
                          MO Enabled:
                        </Col>
                        <Col md={ 6 }>
                           <Checkbox
                                name="moEnabled"
                                onClick={this.handleTextFieldsChange.bind(this)}>
                            [*Check this box only if you have a valid Customer MO Reply Address]
                           </Checkbox>
                        </Col>
                        <Col mdHidden md={ 3 } />
                    </Row>
                    <Row className="show-grid" hidden={this.state.accountInterfacesInfo.interfaceVal.moEnabled==="Yes" ? false : "hidden"}>
                        <Col componentClass={ ControlLabel } md={ 3 }>
                          Reply Address:
                        </Col>
                        <Col md={ 6 } className={this.state.accountInterfacesInfo.interfaceVal.rplAdd || this.state.emptyValFlag ? false : "empty"}>
                          <FormControl
                             type="text"
                             name="rplAdd"
                             value={this.state.accountInterfacesInfo.interfaceVal.rplAdd}
                             onChange={this.handleTextFieldsChange.bind(this)}
                             placeholder="Enter Reply Address"/>
                           <HelpBlock>(e.g. https://www.tobedecided.com)</HelpBlock>
                        </Col>
                        <Col mdHidden md={ 3 } />
                    </Row>
                  </Grid>
                </div>
              </div>
            }

            {
              this.state.accountInterfacesInfo.accInterface === "SMTP" &&
              <div>
                <div className="controls-container" >
                   <div className="rec">
                     <span>MT Interfaces</span>
                   </div>
                   <Grid fluid={true}>
                       <Row className="show-grid">
                          <Col componentClass={ ControlLabel } md={ 3 }>
                             Default TPOA:
                          </Col>
                          <Col md={ 6 } className={this.state.accountInterfacesInfo.interfaceVal.defTPOA || this.state.emptyValFlag ? false : "empty"}>
                            <FormControl
                               type="text"
                               name="defTPOA"
                               value={this.state.accountInterfacesInfo.interfaceVal.defTPOA}
                               onChange={this.handleTextFieldsChange.bind(this)}
                               placeholder="Enter Default TPOA"/>
                          </Col>
                          <Col mdHidden md={ 3 } />
                        </Row>
                   </Grid>
                 </div>

                <div className="controls-container" >
                  <div className="rec">
                    <span>MO Interfaces</span>
                  </div>
                  <Grid fluid={true}>
                    <Row className="show-grid" >
                        <Col componentClass={ ControlLabel } md={ 3 }>
                          SMTP Reply Address:
                        </Col>
                        <Col md={ 6 } className={this.state.accountInterfacesInfo.interfaceVal.rplAdd || this.state.emptyValFlag ? false : "empty"}>
                          <FormControl
                             type="text"
                             name="rplAdd"
                             value={this.state.accountInterfacesInfo.interfaceVal.rplAdd}
                             onChange={this.handleTextFieldsChange.bind(this)}
                             placeholder="Enter Reply Address"/>
                        </Col>
                        <Col mdHidden md={ 3 } />
                    </Row>
                  </Grid>
                </div>
              </div>
            }

            {
              this.state.accountInterfacesInfo.accInterface === "SMPP" &&
              <div>
                <div className="controls-container" >
                   <div className="rec">
                     <span>MT Interfaces</span>
                   </div>
                   <Grid fluid={true}>
                       <Row className="show-grid" >
                           <Col componentClass={ ControlLabel } md={ 3 }>
                             SMPP Client IP Address(es):
                           </Col>
                           <Col md={ 6 } className={this.state.accountInterfacesInfo.interfaceVal.ipAdd || this.state.emptyValFlag ? false : "empty"}>
                             <FormControl
                                type="text"
                                name="ipAdd"
                                value={this.state.accountInterfacesInfo.interfaceVal.ipAdd}
                                onChange={this.handleTextFieldsChange.bind(this)}
                                placeholder="Enter Reply Address"/>
                              <HelpBlock>(comma separated)</HelpBlock>
                           </Col>
                           <Col mdHidden md={ 3 } />
                       </Row>
                       <Row className="show-grid">
                          <Col componentClass={ ControlLabel } md={ 3 }>
                             Default TPOA:
                          </Col>
                          <Col md={ 6 } className={this.state.accountInterfacesInfo.interfaceVal.defTPOA || this.state.emptyValFlag ? false : "empty"}>
                            <FormControl
                               type="text"
                               name="defTPOA"
                               value={this.state.accountInterfacesInfo.interfaceVal.defTPOA}
                               onChange={this.handleTextFieldsChange.bind(this)}
                               placeholder="Enter Default TPOA"/>
                          </Col>
                          <Col mdHidden md={ 3 } />
                        </Row>
                   </Grid>
                 </div>
              </div>
            }

            <div className="button-container">
              <Grid fluid={true}>
                <Row className="show-grid">
                  <Col md={ 12 } >
                    <ButtonToolbar>
                      <Button className="btn-primary"   onClick={ this.handleInterfaceDetailsBack.bind( this ) }>Back</Button>
                      <Button className="btn-primary"   onClick={ this.handleInterfaceDetailsNext.bind( this ) }>Next</Button>
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

    componentWillMount(){
      var Interfaces = {
        "data": [
            {"name": "HTTP", "value": "HTTP"},
            {"name": "SMPP", "value": "SMPP"},
            {"name": "SMTP", "value": "SMTP"}
        ]
      };
      this.interfaceList = initializeData(Interfaces,'value');

      var Accounts = {
        "data": [
            {"name": "Mobile 365 Inc.", "value": 1},
            {"name": "Mobile 365 South Africa.", "value": 2},
            {"name": "Mobileway Australia", "value": 3},
            {"name": "Mobileway China", "value": 4}
        ]
      };
      this.accountList = initializeData(Accounts,'value');
    }

    componentWillReceiveProps (nextProps) {

    }

}

function mapStateToProps(state) {
    return { data: state.Account.data };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
          handleInterfaceDetailsBack:handleInterfaceDetailsBack,
          handleInterfaceDetailsNext:handleInterfaceDetailsNext
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInterfaces);
