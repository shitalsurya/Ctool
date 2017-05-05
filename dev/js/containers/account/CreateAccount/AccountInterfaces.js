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
      console.log(this.state.accountInterfacesInfo);
      var accountObjCheck = this.state.accountInterfacesInfo;
       if(accountObjCheck.techName && accountObjCheck.commName && accountObjCheck.ExstAccts
        && accountObjCheck.accInterface ){
          switch(accountObjCheck.accInterface)
          {
            case "HTTP":
              if(accountObjCheck.defTPOA && ((accountObjCheck.moEnabled=="Yes" && accountObjCheck.rplAdd) || (accountObjCheck.moEnabled=="No"))) {
                this.StoreTextFieldsData();
                this.props.handleInterfaceDetailsNext(this.accountInfo);
              }
              else
                this.setState({emptyValFlag:false});
              break;
            case "SMTP":
              if(accountObjCheck.defTPOA && accountObjCheck.rplAdd) {
                this.StoreTextFieldsData();
                this.props.handleInterfaceDetailsNext(this.accountInfo);
              }
              else
                this.setState({emptyValFlag:false});
              break;
            case "SMPP":
              if(accountObjCheck.defTPOA && accountObjCheck.rplAdd) {
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
                       onChange={this.handleChange.bind(this)}
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
                       onChange={this.handleChange.bind(this)}
                       placeholder="Enter commercial name"/>
                  </Col>
                  <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Existing accounts :
                  </Col>
                  <Col md={ 6 } className={this.state.accountInterfacesInfo.ExstAccts || this.state.emptyFlag ? false : "empty"}>
                    <FormControl componentClass="select"
                      name="ExstAccts"
                      value={this.state.accountInterfacesInfo.ExstAccts}
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
                  <Col md={ 6 } className={this.state.accountInterfacesInfo.accInterface || this.state.emptyFlag ? false : "empty"}>
                    <FormControl componentClass="select"
                      name="accInterface"
                      value={this.state.accountInterfacesInfo.accInterface}
                      onChange={this.handleChange.bind(this)}>
                      {this.interfaceList}
                    </FormControl>
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
                          <Col md={ 6 } className={this.state.accountInterfacesInfo.defTPOA || this.state.emptyValFlag ? false : "empty"}>
                            <FormControl
                               type="text"
                               name="defTPOA"
                               value={this.state.accountInterfacesInfo.defTPOA}
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
                        <Col md={ 6 } className={this.state.accountInterfacesInfo.rplAdd || this.state.emptyValFlag ? false : "empty"}>
                          <FormControl
                             type="text"
                             name="rplAdd"
                             value={this.state.accountInterfacesInfo.rplAdd}
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
                          <Col md={ 6 } className={this.state.accountInterfacesInfo.defTPOA || this.state.emptyValFlag ? false : "empty"}>
                            <FormControl
                               type="text"
                               name="defTPOA"
                               value={this.state.accountInterfacesInfo.defTPOA}
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
                        <Col md={ 6 } className={this.state.accountInterfacesInfo.rplAdd || this.state.emptyValFlag ? false : "empty"}>
                          <FormControl
                             type="text"
                             name="rplAdd"
                             value={this.state.accountInterfacesInfo.rplAdd}
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
                           <Col md={ 6 } className={this.state.accountInterfacesInfo.rplAdd || this.state.emptyValFlag ? false : "empty"}>
                             <FormControl
                                type="text"
                                name="rplAdd"
                                value={this.state.accountInterfacesInfo.rplAdd}
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
                          <Col md={ 6 } className={this.state.accountInterfacesInfo.defTPOA || this.state.emptyValFlag ? false : "empty"}>
                            <FormControl
                               type="text"
                               name="defTPOA"
                               value={this.state.accountInterfacesInfo.defTPOA}
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
      var Interfaces = {
        "data": [
            {"name": "HTTP", "value": "HTTP"},
            {"name": "SMPP", "value": "SMPP"},
            {"name": "SMTP", "value": "SMTP"}
        ]
      };
      this.interfaceList = initializeSelectOptions(Interfaces.data,'name','value');
    }

    componentWillReceiveProps (nextProps) {
      console.log("componentWillReceiveProps==",nextProps);
      this.accountList = initializeSelectOptions(nextProps.AcctList,'customername','customerid');
      console.log("this.accountList==",this.accountList);
    }

}

function mapStateToProps(state) {
    return {
      // data: state.Account.data,
      target : state.Common.target,
      AcctList : state.Common.acctList
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
