import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../common/components/InlineEdit';
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

class InfoGeneralMTSetting extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          mtSettingObj : {
            interfaceType : 'HTTP',
            url : 'http://sms-pp.sapmobileservices.com/cmc/accname12348581/accname12348581.sms',
            login : 'accname12348581',
            password : 'JuF6HJi',
            encode : 'YWNjbmFtZTEyMzQ4NTgxOkp1Rmo2SEpp',
            mwNotif : 'DEFAULT_ACK',
            smscNotif : 'DEFAULT_ACK',
            mobileNotif : 'DEFAULT_ACK',
            ntfPath : '/usr/mobileway/notifs/outputspool/http',
            disTxtBody : 'No',
            country : ''
          }
        }
    }

    handleInlineEditChange(val){
      //<InlineEdit value={this.state.acctCommName} onSave={this.handleInlineEditChange.bind(this)}  />
    }

    render() {

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Interface Type :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="interfaceType"
                      value={this.state.mtSettingObj.interfaceType} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  URL :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="url"
                      value={this.state.mtSettingObj.url} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Login :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="login"
                      value={this.state.mtSettingObj.login} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Password :
                </Col>
                <Col md={ 6 }>
                  <InlineEdit value={this.state.mtSettingObj.password} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Encode_base64 :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="encode"
                      value={this.state.mtSettingObj.encode} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Notification Level :
                </Col>
                <Col md={ 6 }>
                  <Row>
                    <Col componentClass={ ControlLabel } md={ 5 }>
                      MW NOTIF :
                    </Col>
                    <Col md={ 7 }>
                      <InlineEdit value={this.state.mtSettingObj.mwNotif} onSave={this.handleInlineEditChange.bind(this)}  />
                    </Col>
                  </Row>
                  <Row>
                    <Col componentClass={ ControlLabel } md={ 5 }>
                      SMSC NOTIF :
                    </Col>
                    <Col md={ 7 }>
                      <InlineEdit value={this.state.mtSettingObj.smscNotif} onSave={this.handleInlineEditChange.bind(this)}  />
                    </Col>
                  </Row>
                  <Row>
                    <Col componentClass={ ControlLabel } md={ 5 }>
                      MOBILE NOTIF :
                    </Col>
                    <Col md={ 7 }>
                      <InlineEdit value={this.state.mtSettingObj.mobileNotif} onSave={this.handleInlineEditChange.bind(this)}  />
                    </Col>
                  </Row>
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Notification Path :
                </Col>
                <Col md={ 6 }>
                  <InlineEdit value={this.state.mtSettingObj.ntfPath} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Disable text body message on the extranet :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="disTxtBody"
                      value={this.state.mtSettingObj.disTxtBody} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Countries excluded from blacklist :
                </Col>
                <Col md={ 6 }>
                      <FormControl
                          type="text"
                          name="country"
                          value={this.state.mtSettingObj.country} />
                </Col>
                <Col mdHidden md={ 3 }/>
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
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralMTSetting);
