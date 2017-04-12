import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

class InfoGeneralDeliveryTime extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Preferred Start Time(UTC) :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="startTime"
                      value="" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Preferred End Time(UTC) :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="endTime"
                      value="" />
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralDeliveryTime);
