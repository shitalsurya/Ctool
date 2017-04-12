import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

class InfoGeneralMTSetting extends React.Component {
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
                      name="interfaceType"
                      value="HTTP" />
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
                      value="http://sms-pp.sapmobileservices.com/cmc/accname12348581/accname12348581.sms" />
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
                      value="accname12348581" />
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
                      value="JuF6HJi" />
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
                      value="YWNjbmFtZTEyMzQ4NTgxOkp1Rmo2SEpp" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Notification Level :
                </Col>
                <Col md={ 6 }>
                  <Col componentClass={ ControlLabel } md={ 5 }>
                    MW NOTIF :
                  </Col>
                  <Col md={ 7 }>
                    <FormControl
                        type="text"
                        name="mwNotif"
                        value="DEFAULT_ACK" />
                  </Col>
                  <Col componentClass={ ControlLabel } md={ 5 }>
                    SMSC NOTIF :
                  </Col>
                  <Col md={ 7 }>
                    <FormControl
                        type="text"
                        name="smscNotif"
                        value="DEFAULT_ACK" />
                  </Col>
                  <Col componentClass={ ControlLabel } md={ 5 }>
                    MOBILE NOTIF :
                  </Col>
                  <Col md={ 7 }>
                    <FormControl
                        type="text"
                        name="mobileNotif"
                        value="DEFAULT_ACK" />
                  </Col>
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Notification Path :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="ntfPath"
                      value="/usr/mobileway/notifs/outputspool/http" />
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
                      value="No" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Countries excluded from blacklist :
                </Col>
                <Col md={ 6 }>
                  {/*<Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 5 }>
                      Country :
                    </Col>
                    <Col md={ 6 }>*/}
                      <FormControl
                          type="text"
                          name="country"
                          value="" />
                  {/*</Col>
                  </Row>
                  <Row className="show-grid">
                    <Button bsStyle="primary">Add Contact</Button>
                  </Row>*/}
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
