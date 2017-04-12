import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

class InfoGeneralVolumeSetting extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Volume Type :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="volType"
                      value="None" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Volume Limit :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="volLimit"
                      value="" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Prelimit Alert (%) :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="preAlert"
                      value="" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Comments :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="commments"
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralVolumeSetting);
