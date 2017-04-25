import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../../common/components/InlineEdit';
require('./../../../../scss/tabs.scss');
require('./../../../../scss/style.scss');

class InfoGeneralDeliveryTime extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          deliveryTimeObj : {
            startTime : 'Some Random Time',
            endTime : 'Some Random Time'
          }
        }
    }

    handleInlineEditChange(val){

    }

    render() {

      var startOptions = [
        { "id":1 , "value":"Some Random Time"}
      ];
      var endOptions = [
        { "id":1 , "value":"Some Random Time"}
      ];

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Preferred Start Time(UTC) :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="startTime" type="select" options={startOptions} value={this.state.deliveryTimeObj.startTime} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 8 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Preferred End Time(UTC) :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="endTime" type="select" options={endOptions} value={this.state.deliveryTimeObj.endTime} onSave={this.handleInlineEditChange.bind(this)}  />
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
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralDeliveryTime);