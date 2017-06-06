import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../../../common/components/InlineEdit';
require('./../../../../../scss/tabs.scss');
require('./../../../../../scss/style.scss');
import Toggle from 'react-toggle';
import { initializeSelectOptions } from './../../../common/Functions/commonFunctions';
import { updateHubAccountEmailInfo } from './../../actions/accountGeneralActions';

class InfoGeneralEmail extends React.Component {
    constructor(props, context) {

        super(props, context);

        this.state={
          emailInfoObj : this.props.infoGenEmail||{},
            scheduleenableflag: "Yes"
                }
    }

    toggleOnChange(name,value){
      console.log("value==",value);
        var _scheduleenableflag = value=="Yes"?"Yes":"No";
       this.setState({scheduleenableflag : __scheduleenableflag  });
       this.name=value;
       console.log("this.name==",this.name);
    }
    handleInlineEditChange(name,val){
      console.log("name : ",name, "  val : ",val);
      var info = this.state.emailInfoObj;

      if(info[name]!==val){
        info[name]=val;
        this.setState({emailInfoObj : info},function(){
          console.log("update email details==",this.state.emailInfoObj);
          this.props.updateHubAccountEmailInfo(this.state.emailInfoObj);
        });
      }
    }

    render() {
      debugger;
        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Interface Type:
                </Col>
                <Col md={ 8 }  >
                  <FormControl
                    className="info_label"
                    type="text"
                    name="interfacetype"
                    value={this.state.emailInfoObj.interfacetype} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                URL :
                </Col>
                <Col md={ 8 }>
                <InlineEdit
                  name="url"
                  type="text"
                  value={this.state.emailInfoObj.url}
                  onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Login:
                </Col>
                <Col md={ 8 }>
                  <FormControl
                    className="info_label"
                    type="text"
                    name="customerlogin"
                    value={this.state.emailInfoObj.customerlogin} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Password :
                </Col>
                <Col md={ 8 }>
                <InlineEdit
                  name="customerpassword"
                  type="text"
                  value={this.state.emailInfoObj.customerpassword}
                  onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Encode_base64:
                </Col>
                <Col md={ 8 }  >
                  <FormControl
                    className="info_label"
                    type="text"
                    name="encode_base"
                    value={this.state.emailInfoObj.encode_base} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Email Provider :
                </Col>
                <Col md={ 8 }>
                <InlineEdit
                  name="emailprovider"
                  type="select"
                //  options={EMAILPROVIDER}
                  optionsLabel="emailprovider"
                  value={this.state.emailInfoObj.emailprovider}
                  onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Sender Email Domain :
                </Col>
                <Col md={ 8 }>
                <InlineEdit
                  name="senderemaildomain"
                  type="text"
                  value={this.state.emailInfoObj.senderemaildomain}
                  onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Reply To Email Domain :
                </Col>
                <Col md={ 8 }>
                <InlineEdit
                  name="replytoemaildomain"
                  type="text"
                  value={this.state.emailInfoObj.replytoemaildomain}
                  onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Sender Check Option :
                </Col>
                <Col md={ 8 }>
                <InlineEdit
                  name="sendercheckoption"
                  type="select"
                //  options={SENDEROPTIONS}
                  optionsLabel="sendercheckoption"
                  value={this.state.emailInfoObj.sendercheckoption}
                  onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Reply To Check Option :
                </Col>
                <Col md={ 8 }>
                <InlineEdit
                  name="replytocheckoption"
                  type="select"
                //  options={REPLYOPTION}
                  optionsLabel="replytocheckoption"
                  value={this.state.emailInfoObj.replytocheckoption}
                  onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Default User:
                </Col>
                <Col md={ 8 }  >
                  <FormControl
                    className="info_label"
                    type="text"
                    name="defaultuser"
                    value={this.state.emailInfoObj.defaultuser} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Default Password :
                </Col>
                <Col md={ 8 }>
                <InlineEdit
                  name="defaultpassword"
                  type="select"
                //  options={DEFAULTPASSWORD}
                  optionsLabel="defaultpassword"
                  value={this.state.emailInfoObj.defaultpassword}
                  onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Email Provider URL:
                </Col>
                <Col md={ 8 }>
                <InlineEdit
                  name="emailproviderurl"
                  type="select"
                //  options={EMAILPROVIDERURL}
                  optionsLabel="emailproviderurl"
                  value={this.state.emailInfoObj.emailproviderurl}
                  onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Sender Account Mapping :
                </Col>
                <Col md={ 8 }>
                <InlineEdit
                  name="senderaccountmapping"
                  type="text"
                  value={this.state.emailInfoObj.senderaccountmapping}
                  onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Schedule Enabled :
                </Col>
                <Col md={ 8 }>
                <Toggle
                  name="scheduleenableflag"
                  icons={{
                     checked: 'Yes',
                     unchecked: 'No',
                  }}
                  defaultChecked={this.state.scheduleenableflag == "Yes" ? true : false}
                  value={this.state.scheduleenableflag}
                  onChange={this.toggleOnChange.bind(this)} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
              <Button bsStyle="primary">Send Email Updates</Button>
              </Row>
            </Grid>
          </div>
        )
    }
}

function mapStateToProps(state) {
  debugger;
    return {
      infoGenEmail : state.Account.infoGenEmail

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      updateHubAccountEmailInfo:updateHubAccountEmailInfo
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralEmail);
