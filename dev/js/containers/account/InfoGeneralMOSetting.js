import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

class InfoGeneralMOSetting extends React.Component {
    constructor(props, context) {
        super(props, context);
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
                      value="HTTP" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Reply Address :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="replyAdd"
                      value="http://192.168.60.99:888/cgi-bin/trash.pl" />
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
                      value="N/A" />
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
                      value="N/A" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  MO Spool Path out :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="pathOut"
                      value="/opt/HUB/routermo/outputspool/defaulttrash/" />
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
                      value="No" />
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
