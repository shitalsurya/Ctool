import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
require('./../../../../../scss/style.scss');
import * as types from './../../../common/commonActionTypes';
import {initializeSelectOptions} from './../../../common/Functions/commonFunctions';
import {TPDACRITERIA} from './../../../common/commonActionTypes';
class HubAccountMODedicated extends React.Component {
  constructor(props, context) {
      super(props, context);
        this.state={
             dedicatedMO : {},
             modalHeading:'Add Dedicated TPOA Routing',
        }
  }
  handleChange(e) {
      console.log("name==",e.target.name);
      console.log("value==",e.target.value);
    var info = this.state.dedicatedMO;
    info[e.target.name] = e.target.value;
    this.setState({dedicatedMO : info});
  }

  handleModalChange(target, value){
    var info = this.state.dedicatedMO;
    switch(target) {
      case types.TPOA_DEDICATED_SERVICE:
        info.serviceNo = value.target.value;
        break;
      case types.TPOA_DEDICATED_RETURNED_TPDA:
        info.returnTPDA = value.target.value;
        break;
        }
    this.setState({TPOAinfo : info});
  }

  addRouting(){
    console.log(this.state.dedicatedMO);
    this.setState({dedicatedMO : []});
    this.props.close();
  }

  close() {
    this.setState({dedicatedMO : []});
    this.props.close();
  }

  render(){
    return (
      <Modal show={this.props.showAdd} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
              <Modal.Title>{this.state.modalHeading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Grid fluid={true}>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 4 }>
                    SMSC:
                  </Col>
                  <Col md={ 6 }>
                    <FormControl componentClass="select"
                      name="smscid"
                      value={this.state.dedicatedMO.smscid}
                      onChange={this.handleChange.bind(this)}>
                      <option value="select" disabled selected>Please select...</option>
                      {this.smscList}
                    </FormControl>
                  </Col>
                  <Col mdHidden md={ 2 } />
                </Row>
                <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 4 }>
                      Service Number :
                    </Col>
                    <Col md={ 6 }>
                      <FormControl
                         type="text"
                         name="serviceNo"
                         value={this.state.dedicatedMO.serviceNo || ''}
                         onChange={this.handleModalChange.bind(this,types.TPOA_DEDICATED_SERVICE)}
                         placeholder="Enter Service Number.." />
                    </Col>
                    <Col mdHidden md={ 2 } />
                </Row>
                <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 4 }>
                      Returned TPDA :
                    </Col>
                    <Col md={ 6 }>
                      <FormControl
                         type="text"
                         name="returnTPDA"
                         value={this.state.dedicatedMO.returnTPDA || ''}
                         onChange={this.handleModalChange.bind(this,types.TPOA_DEDICATED_RETURNED_TPDA)}
                         placeholder="Enter Returned TPDA.." />
                    </Col>
                    <Col mdHidden md={ 2 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 4 }>
                    TPDA Criteria:
                  </Col>
                  <Col md={ 6 }>
                    <FormControl componentClass="select"
                      name="criteria"
                      value={this.state.dedicatedMO.criteria}
                      onChange={this.handleChange.bind(this)}>
                      <option value="select" disabled selected>Please select...</option>
                      {this.TpdaCriteria}
                    </FormControl>
                  </Col>
                  <Col mdHidden md={ 2 } />
                </Row>
              </Grid>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.addRouting.bind(this)}>Save</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
      </Modal>

    );
  }
  componentWillMount( ) {
    debugger;
    // console.log("tppoa model componentWillReceiveProps==",nextProps);
    this.smscList = initializeSelectOptions(this.props.smscList,'smscname','smscid');
      console.log("this.smscList==",this.smscList);
    this.TpdaCriteria = initializeSelectOptions(TPDACRITERIA,'tpdacriterianame','tpdacriteriaid');
    console.log("this.TpdaCriteria==",this.TpdaCriteria);
  }
}
function mapStateToProps(state) {
    return {
      smscList:state.Common.smscList,
      TpdaCriteria:state.Common.TpdaCriteria
     };
}

export default connect(mapStateToProps)(HubAccountMODedicated);
