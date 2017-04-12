import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

class InfoGeneralCommercial extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Account ID :
                </Col>
                <Col md={ 6 } >
                  <FormControl
                      type="text"
                      name="accID"
                      value="31353" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Technical Name :
                </Col>
                <Col md={ 6 } >
                  <FormControl
                      type="text"
                      name="techName"
                      value="ACCNAME12345_HTTP" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Revenue Sharing Status :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="revStatus"
                      value="No" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Extranet Address :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="exAdd"
                      value="http://172.24.229.51:8883/" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Disable Extranet Login :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="disExtranet"
                      value="No" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Extranet Login :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="extLogin"
                      value="ACCNAME12345_HTTP" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Extranet Password :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="extPassword"
                      value="PWD" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Message Encryption :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="msgEncrp"
                      value="No" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Message Body Removal :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="msgBodyRem"
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralCommercial);
