import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineSelect from './../common/components/InlineSelect';
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

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
      //<InlineSelect  options={options} value={this.state.volSettingObj.volType} onSave={this.handleInlineEditChange.bind(this)}  />
    }


    render() {

        var options = [
          { "id": 1, "value":"None"}
        ];

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Volume Type :
                </Col>
                <Col md={ 6 }>
                    <InlineSelect  options={options} value={this.state.volSettingObj.volType} onSave={this.handleInlineEditChange.bind(this)}  />
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
