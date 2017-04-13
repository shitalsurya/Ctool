import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../common/components/InlineEdit';
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

class InfoGeneralMOSetting extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state =  {
           moSettingObj : {
             intrfType : 'HTTP',
             replyAdd : 'http://192.168.60.99:888/cgi-bin/trash.pl',
             login : 'N/A',
             password : 'N/A',
             pathOut : '/opt/HUB/routermo/outputspool/defaulttrash/',
             disTxtBdy : 'No'
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
                      name="intrfType"
                      value={this.state.moSettingObj.intrfType} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Reply Address :
                </Col>
                <Col md={ 6 }>
                  <InlineEdit value={this.state.moSettingObj.replyAdd} onSave={this.handleInlineEditChange.bind(this)}  />
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
                      value={this.state.moSettingObj.login} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Password :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="password"
                      value={this.state.moSettingObj.password} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  MO Spool Path out :
                </Col>
                <Col md={ 6 }>
                  <InlineEdit value={this.state.moSettingObj.pathOut} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Disable text bode message on the extranet :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="disTxtBdy"
                      value={this.state.moSettingObj.disTxtBdy} />
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralMOSetting);
