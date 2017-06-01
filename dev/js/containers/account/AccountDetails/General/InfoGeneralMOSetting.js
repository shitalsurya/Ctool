import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../../../common/components/InlineEdit';
require('./../../../../../scss/tabs.scss');
require('./../../../../../scss/style.scss');
import { updateHubAccountMOInfo } from './../../actions/accountGeneralActions';

class InfoGeneralMOSetting extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state =  {
           moSettingObj : this.props.infoGenMOSettings || {}
        }
    }

    handleInlineEditChange(name,val){
      console.log("name : ",name, "  val : ",val);
      var info = this.state.moSettingObj;

      if(info[name]!==val){
        info[name]=val;
        this.setState({moSettingObj : info},function(){
          console.log("update MO details==",this.state.moSettingObj);
          this.props.updateHubAccountMOInfo(this.state.moSettingObj);
        });
      }
    }

    render() {
      console.log("moSettingObj : ",this.state.moSettingObj);
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
                      name="intrfType"
                      value={this.state.moSettingObj.intrfType} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Reply Address :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="replyAdd" type="text" value={this.state.moSettingObj.replyAdd} onSave={this.handleInlineEditChange.bind(this)}  />
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
                      value={this.state.moSettingObj.login} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Password :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="password"
                      value={this.state.moSettingObj.password} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  MO Spool Path out :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="pathOut" type="text" value={this.state.moSettingObj.pathOut} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Disable text bode message on the extranet :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="disTxtBdy"
                      value={this.state.moSettingObj.disTxtBdy===0?"No":"Yes"} />
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
      infoGenMOSettings : state.Account.infoGenMOSettings
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      updateHubAccountMOInfo:updateHubAccountMOInfo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralMOSetting);
