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
                  Country Manager :
                </Col>
                <Col md={ 6 } >
                  <FormControl
                      type="text"
                      name="cntryMgr"
                      value="Wei Leng" />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Account Manager :
                </Col>
                <Col md={ 6 } >
                  <FormControl
                      type="text"
                      name="accMgr"
                      value="ww@sybase.com" />
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
