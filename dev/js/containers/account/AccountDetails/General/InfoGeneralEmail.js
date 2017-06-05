import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../../../common/components/InlineEdit';

require('./../../../../../scss/tabs.scss');
require('./../../../../../scss/style.scss');
import {SERVICE_LEVEL,LEGAL_STATUS} from './../../../common/commonActionTypes';
import { initializeSelectOptions } from './../../../common/Functions/commonFunctions';
import { updateHubAccountCommercialInfo } from './../../actions/accountGeneralActions';

class InfoGeneralEmail extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state={
          emailInfoObj : [

          ]
                }
    }

    handleInlineEditChange(name,val){
      console.log("name : ",name, "  val : ",val);
      var info = this.state.emailInfoObj;

      if(info[name]!==val){
        info[name]=val;
        this.setState({emailInfoObj : info},function(){
          console.log("update comm details==",this.state.emailInfoObj);
          this.props.updateHubAccountCommercialInfo(this.state.emailInfoObj);
        });
      }
    }

    render() {
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
                    name="suspended"
                    value={this.state.emailInfoObj.login} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Password :
                </Col>
                <Col md={ 8 }>
                <InlineEdit
                  name="password"
                  type="text"
                  value={this.state.emailInfoObj.password}
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
                  optionsLabel="password"
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
                  name="senderdomain"
                  type="text"
                  value={this.state.emailInfoObj.senderdomain}
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
                  name="replydomain"
                  type="text"
                  value={this.state.emailInfoObj.replydomain}
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
                  name="senderoptions"
                  type="select"
                //  options={SENDEROPTIONS}
                  optionsLabel="senderoptions"
                  value={this.state.emailInfoObj.senderoptions}
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
                  name="replyoptions"
                  type="select"
                //  options={REPLYOPTION}
                  optionsLabel="replyoptions"
                  value={this.state.emailInfoObj.replyoptions}
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
                  name="account_mapping"
                  type="text"
                  value={this.state.emailInfoObj.account_mapping}
                  onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Schedule Enabled :
                </Col>
                <Col md={ 8 }>
                  //toggle
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
    return {
    //  infoGenComm:state.Account.infoGenComm

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
  //    updateHubAccountCommercialInfo:updateHubAccountCommercialInfo
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralEmail);
