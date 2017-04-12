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
                  Account Commercial Name :
                </Col>
                <Col md={ 6 } >
                  <FormControl
                      type="text"
                      name="name"
                      value="(Live)" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Billing Location :
                </Col>
                <Col md={ 6 } >
                  <FormControl
                      type="text"
                      name="billing"
                      value="Mobile 365 Inc" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Opened :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="opened"
                      value="12 Jan 2017" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Suspended :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="suspended"
                      value="" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Closed :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="closed"
                      value="" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Service Level :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="serviceLevel"
                      value="Standard" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Legal Status :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="status"
                      value="UNSIGNED" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Comment :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="comment"
                      value="N/A" />
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
