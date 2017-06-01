import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../../../common/components/InlineEdit';
require('./../../../../../scss/tabs.scss');
require('./../../../../../scss/style.scss');
import { updateHubAccountMTInfo } from './../../actions/accountGeneralActions';
import {NOTIFICATIONS} from './../../../common/commonActionTypes';
import {Typeahead} from 'react-bootstrap-typeahead';
import Countries from '../../../../../json/Countries.json';

class InfoGeneralMTSetting extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          mtSettingObj : this.props.infoGenMTSettings||{}
        }
    }

    handleInlineEditChange(name,val){
      console.log("name : ",name, "  val : ",val);
      var info = this.state.mtSettingObj;

      if(info[name]!==val){
        info[name]=val;
        this.setState({mtSettingObj : info},function(){
          console.log("update mt details==",this.state.mtSettingObj);
          this.props.updateHubAccountMTInfo(this.state.mtSettingObj);
        });
      }
    }

    handleTypeAheadChange(name,val){
        // var info = this.state.mtSettingObj;
        // if(info["name"]!==val){
        //   info["name"]=val.toString();
        //   console.log( "handleNLChange==", info );
        //   this.setState({mtSettingObj:info})
        // }
    }

    render() {
      console.log(" mtSettingObj : ",this.state.mtSettingObj);
      const options = [
        { "id" : 1 , "value" : "DEFAULT_ACK" }
      ];

        return (
          <div >
            <Grid fluid={true} className="inner_grid">
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Interface Type :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="interfaceType"
                      value={this.state.mtSettingObj.interfaceType} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  URL :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="url"
                      value={this.state.mtSettingObj.url} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Login :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="login"
                      value={this.state.mtSettingObj.login} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Password :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="password" type="text" value={this.state.mtSettingObj.password} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Encode_base64 :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="encode"
                      value={this.state.mtSettingObj.encode} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Notification Level :
                </Col>
                <Col md={ 8 }>
                  <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 3 }>
                      MW NOTIF :
                    </Col>
                    <Col md={ 7 }>
                    <InlineEdit
                      name="notificationid"
                      type="select"
                      options={NOTIFICATIONS}
                      optionsLabel="notificationname"
                        value={this.state.mtSettingObj.mwNotifid}
                      onSave={this.handleInlineEditChange.bind(this)}  />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 3 }>
                      SMSC NOTIF :
                    </Col>
                    <Col md={ 7 }>
                    <InlineEdit
                      name="notificationid"
                      type="select"
                      options={NOTIFICATIONS}
                      optionsLabel="notificationname"
                        value={this.state.mtSettingObj.smscNotifid}
                      onSave={this.handleInlineEditChange.bind(this)}  />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 3 }>
                      MOBILE NOTIF :
                    </Col>
                    <Col md={ 7 }>
                    <InlineEdit
                      name="notificationid"
                      type="select"
                      options={NOTIFICATIONS}
                      optionsLabel="notificationname"
                        value={this.state.mtSettingObj.mobileNotifid}
                      onSave={this.handleInlineEditChange.bind(this)}  />
                    </Col>
                  </Row>
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Notification Path :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="ntfPath" type="text" value={this.state.mtSettingObj.ntfPath} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Disable text body message on the extranet :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="disTxtBody"
                      value={this.state.mtSettingObj.disTxtBody===0?"No":"Yes"} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Countries excluded from blacklist :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="countryBlacklisted" type="multiSelect"
                    options={Countries.data}
                    optionsLabel="countryname"
                    value={this.state.mtSettingObj.countryBlacklisted}
                    onSave={this.handleTypeAheadChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>
            </Grid>
          </div>
        )
    }

    componentWillReceiveProps(nextProps) {

    }

}

function mapStateToProps(state) {
    return {
      infoGenMTSettings:state.Account.infoGenMTSettings,
      mwNotiflist:state.Common.mwNotiflist,
      smscNotiflist:state.Common.smscNotiflist,
      mobileNotiflist:state.Common.mobileNotiflist,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      updateHubAccountMTInfo:updateHubAccountMTInfo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralMTSetting);
