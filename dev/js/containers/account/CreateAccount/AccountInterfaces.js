import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button, ButtonToolbar, HelpBlock, Checkbox } from 'react-bootstrap';
import Select from 'react-select';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
import { initializeData,  handleInterfaceDetailsBack,handleInterfaceDetailsNext } from './../actions/accountActions';
import * as types from './../../common/commonActionTypes';
import {getList} from './../../common/commonActions';
import {initializeSelectOptions} from './../../common/Functions/commonFunctions';
require('./../../../../scss/style.scss');
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AccountInterfaces extends React.Component {
    constructor(props, context) {
        super(props, context);
      //  this.state.accountInterfacesInfo=this.props.accountObj || [];
        this.state={
          emptyFlag : true,
          emptyValFlag :true,
          accountInterfacesInfo:this.props.accountObj || []
        };
        console.log("this.state.accountInterfacesInfo==",this.state.accountInterfacesInfo);
    }

    handleChange(e){
      console.log("handleChange==",e.target.value);
      var info = this.state.accountInterfacesInfo;
      if(e.target.name === "accInterface"){
        info[e.target.name] = e.target.value;
        info.moEnabled="No";
        info.defTPOA='';
        info.rplAdd='';
        this.setState({emptyValFlag:true});
      }
      else if (e.target.name == "moEnabled") {
        info[e.target.name] = e.target.checked ? "Yes" : "No";
        if(!e.target.checked)
          info.rplAdd = '';
      }
      else if (e.target.name == "scheduleEnabled") {
        info[e.target.name] = e.target.checked ? "Yes" : "No";
      }
      else{
        info[e.target.name] = e.target.value;
      }
      this.setState({accountInterfacesInfo:info},function(){
        console.log("handleChange==",this.state.accountInterfacesInfo);
      });
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
      console.log("handleInterfaceDetailsNext==",this.state.accountInterfacesInfo);
      var accountObjCheck = this.state.accountInterfacesInfo;
      if(this.props.accType === "sms"){
        // if(accountObjCheck.techName && accountObjCheck.commName && accountObjCheck.ExstAccts
        //  && accountObjCheck.interfacetype ){
           switch(accountObjCheck.interfacetype)
           {
             case "HTTP":
              // if(accountObjCheck.defTPOA && ((accountObjCheck.moEnabled=="Yes" && accountObjCheck.rplAdd) || (accountObjCheck.moEnabled=="No"))) {
                 this.StoreTextFieldsData();
                 this.props.handleInterfaceDetailsNext(this.accountInfo);
            //   }
              // else
            //     this.setState({emptyValFlag:false});
               break;
             case "SMTP":
            //   if(accountObjCheck.defTPOA && accountObjCheck.rplAdd) {
                 this.StoreTextFieldsData();
                 this.props.handleInterfaceDetailsNext(this.accountInfo);
            //   }
            //   else
            //     this.setState({emptyValFlag:false});
               break;
             case "SMPP":
          //     if(accountObjCheck.defTPOA && accountObjCheck.rplAdd) {
                 this.StoreTextFieldsData();
                 this.props.handleInterfaceDetailsNext(this.accountInfo);
              //  }
              //  else
              //    this.setState({emptyValFlag:false});
               break;
           }
      //    }
      //    else {
      //      if(accountObjCheck.interfacetype)
      //        this.setState({emptyValFlag:false});
      //      this.setState({emptyFlag:false});
      //  }
      }
      else if(this.props.accType === "email"){
        // if(accountObjCheck.techName && accountObjCheck.commName && accountObjCheck.emailAccInterface
        //  && accountObjCheck.acsMethod ){
           this.StoreTextFieldsData();
           this.props.handleInterfaceDetailsNext(this.accountInfo);
        // }
      //    else {
      //      if(accountObjCheck.interfacetype)
      //        this.setState({emptyValFlag:false});
      //      this.setState({emptyFlag:false});
      //  }
      }
    }

    render() {
        return (
          <div>
            <div className="controls-container">
              <div className="rec">
                <span>Technical Details</span>
              </div>
              <Grid fluid={true}>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Technical name:
                  </Col>
                  <Col md={ 6 } className={this.state.accountInterfacesInfo.customername || this.state.emptyFlag ? false : "empty"}>
                    <FormControl
                      type="text"
                      name="customername"
                      value={this.state.accountInterfacesInfo.customername}
                      onChange={this.handleChange.bind(this)}
                      placeholder="Enter technical name"/>
                  </Col>
                  <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Commercial name:
                  </Col>
                  <Col md={ 6 } className={this.state.accountInterfacesInfo.extranetcustomername || this.state.emptyFlag ? false : "empty"}>
                    <FormControl
                      type="text"
                      name="extranetcustomername"
                      value={this.state.accountInterfacesInfo.extranetcustomername}
                      onChange={this.handleChange.bind(this)}
                      placeholder="Enter commercial name"/>
                  </Col>
                  <Col mdHidden md={ 3 } />
                </Row>
                {this.props.accType === "sms" &&
                  <div>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Existing accounts :
                      </Col>
                      <Col md={ 6 } className={this.state.accountInterfacesInfo.customerid || this.state.emptyFlag ? false : "empty"}>
                        <FormControl componentClass="select"
                          name="customerid"
                          value={this.state.accountInterfacesInfo.customerid}
                          onChange={this.handleChange.bind(this)}>
                          {this.accountList}
                        </FormControl>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Interface:
                      </Col>
                      <Col md={ 6 } className={this.state.accountInterfacesInfo.interfacetype || this.state.emptyFlag ? false : "empty"}>
                        <FormControl componentClass="select"
                          name="interfacetype"
                          value={this.state.accountInterfacesInfo.interfacetype}
                          onChange={this.handleChange.bind(this)}>
                          <option key="HTTP" value="HTTP" selected>HTTP</option>
                          <option key="SMTP" value="SMTP">SMTP</option>
                          <option key="SMPP" value="SMPP">SMPP</option>
                          <option key="SMPP SWIFTLET" value="SMPP SWIFTLET">SMPP SWIFTLET</option>
                        </FormControl>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                  </div>
                }
                {this.props.accType === "email" &&
                  <div>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Interface:
                      </Col>
                      <Col md={ 6 } className={this.state.accountInterfacesInfo.interfacetype || this.state.emptyFlag ? false : "empty"}>
                        <FormControl componentClass="select"
                          name="interfacetype"
                          value={this.state.accountInterfacesInfo.interfacetype}
                          onChange={this.handleChange.bind(this)}>
                          <option key="IN365_EMAIL" value="IN365_EMAIL">IN365_EMAIL</option>
                        </FormControl>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Access Method:
                      </Col>
                      <Col md={ 6 } className={this.state.accountInterfacesInfo.acsMethod || this.state.emptyFlag ? false : "empty"}>
                        <FormControl componentClass="select"
                          name="acsMethod"
                          value={this.state.accountInterfacesInfo.acsMethod}
                          onChange={this.handleChange.bind(this)}>
                          <option key="VPN" value="VPN">VPN</option>
                          <option key="Non VPN" value="Non VPN">Non VPN</option>
                        </FormControl>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Schedule Enabled:
                      </Col>
                      <Col md={ 6 }>
                        <Checkbox
                          name="scheduleEnabled"
                          className = "checkboxCentered"
                          onClick={this.handleChange.bind(this)}/>
                      </Col>
                      <Col mdHidden md={ 3 } />
                    </Row>
                  </div>
                }
              </Grid>
            </div>

            {
              this.state.accountInterfacesInfo.interfacetype === "HTTP" &&
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
                        <Col md={ 6 } className={this.state.accountInterfacesInfo.defaulttpoa || this.state.emptyValFlag ? false : "empty"}>
                          <FormControl
                            type="text"
                            name="defaulttpoa"
                            value={this.state.accountInterfacesInfo.defaulttpoa}
                            onChange={this.handleChange.bind(this)}
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
                            className = "checkboxCentered"
                            onClick={this.handleChange.bind(this)}>
                            [*Check this box only if you have a valid Customer MO Reply Address]
                          </Checkbox>
                        </Col>
                        <Col mdHidden md={ 3 } />
                      </Row>
                      <Row className="show-grid" hidden={this.state.accountInterfacesInfo.moEnabled==="Yes" ? false : "hidden"}>
                        <Col componentClass={ ControlLabel } md={ 3 }>
                          Reply Address:
                        </Col>
                        <Col md={ 6 } className={this.state.accountInterfacesInfo.customerreplyaddress || this.state.emptyValFlag ? false : "empty"}>
                          <FormControl
                            type="text"
                            name="customerreplyaddress"
                            value={this.state.accountInterfacesInfo.customerreplyaddress}
                            onChange={this.handleChange.bind(this)}
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
              this.state.accountInterfacesInfo.interfacetype === "SMTP" &&
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
                        <Col md={ 6 } className={this.state.accountInterfacesInfo.defaulttpoa || this.state.emptyValFlag ? false : "empty"}>
                          <FormControl
                            type="text"
                            name="defaulttpoa"
                            value={this.state.accountInterfacesInfo.defaulttpoa}
                            onChange={this.handleChange.bind(this)}
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
                        <Col md={ 6 } className={this.state.accountInterfacesInfo.customerreplyaddress || this.state.emptyValFlag ? false : "empty"}>
                          <FormControl
                            type="text"
                            name="customerreplyaddress"
                            value={this.state.accountInterfacesInfo.customerreplyaddress}
                            onChange={this.handleChange.bind(this)}
                            placeholder="Enter Reply Address"/>
                        </Col>
                        <Col mdHidden md={ 3 } />
                      </Row>
                    </Grid>
                  </div>
                </div>
            }

            {
              this.state.accountInterfacesInfo.interfacetype === "SMPP" &&
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
                        <Col md={ 6 } className={this.state.accountInterfacesInfo.customerreplyaddress || this.state.emptyValFlag ? false : "empty"}>
                          <FormControl
                            type="text"
                            name="customerreplyaddress"
                            value={this.state.accountInterfacesInfo.customerreplyaddress}
                            onChange={this.handleChange.bind(this)}
                            placeholder="Enter Reply Address"/>
                          <HelpBlock>(comma separated)</HelpBlock>
                        </Col>
                        <Col mdHidden md={ 3 } />
                      </Row>
                      <Row className="show-grid">
                        <Col componentClass={ ControlLabel } md={ 3 }>
                          Default TPOA:
                        </Col>
                        <Col md={ 6 } className={this.state.accountInterfacesInfo.defaulttpoa || this.state.emptyValFlag ? false : "empty"}>
                          <FormControl
                            type="text"
                            name="defaulttpoa"
                            value={this.state.accountInterfacesInfo.defaulttpoa}
                            onChange={this.handleChange.bind(this)}
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
      this.props.getList("interface");
    }

    componentWillReceiveProps (nextProps) {
      console.log("componentWillReceiveProps==",nextProps);
      this.accountList = initializeSelectOptions(nextProps.AcctList,'name','customerid');
      console.log("this.accountList==",this.accountList);
    }

}

function mapStateToProps(state) {
    return {
      // data: state.Account.data,
      target : state.Common.target,
      AcctList : state.Common.acctList,
      accType : state.Account.accType ||"sms"
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getList:getList,
    handleInterfaceDetailsBack:handleInterfaceDetailsBack,
    handleInterfaceDetailsNext:handleInterfaceDetailsNext
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountInterfaces);
