import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../../common/components/InlineEdit';
require('./../../../../scss/tabs.scss');
require('./../../../../scss/style.scss');

class InfoGeneralVolumeSetting extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          volSettingObj : {
            volType : 'None',
            volLimit : '',
            preAlert : '',
            commments : ''
          }
        }
    }

    handleInlineEditChange(val){

    }


    render() {

        var options = [
          { "id": 1, "value":"None "},
          { "id": 2, "value":"Daily "},
          { "id": 3, "value":"Monthly "},
          { "id": 4, "value":"Counter "}
        ];

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Volume Type :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="volType" type="select" options={options} value={this.state.volSettingObj.volType} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Volume Limit :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="volLimit"
                      value={this.state.volSettingObj.volLimit} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Prelimit Alert (%) :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="preAlert"
                      value={this.state.volSettingObj.preAlert} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Comments :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="commments"
                      value={this.state.volSettingObj.commments} />
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralVolumeSetting);
