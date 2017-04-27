import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
require('./../../../../../scss/style.scss');
import * as types from './../../actions/accountActionTypes';

class HubAccountMODedicated extends React.Component {
  constructor(props, context) {
      super(props, context);
        this.state={
             dedicatedMO : {},
             modalHeading:'Add Dedicated TPOA Routing',
        }
  }

  handleModalChange(target, value){
    var info = this.state.dedicatedMO;
    switch(target) {
      case types.TPOA_DEDICATED_SMSC:
        info.smsc = value.value;
        break;
      case types.TPOA_DEDICATED_SERVICE:
        info.serviceNo = value.target.value;
        break;
      case types.TPOA_DEDICATED_RETURNED_TPDA:
        info.returnTPDA = value.target.value;
        break;
      case types.TPOA_DEDICATED_CRITERIA:
        info.criteria = value.value;
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

    const options = [
      { value: 'SMSC1', label: 'SMSC1' },
      { value: 'SMSC2', label: 'SMSC2' },
      { value: 'SMSC3', label: 'SMSC3' },
      { value: 'SMSC4', label: 'SMSC4' },
      { value: 'SMSC5', label: 'SMSC5' },
      { value: 'SMSC6', label: 'SMSC6' }
    ];

    const criteriaOp = [
      { value: 'criteria1', label: 'criteria1' },
      { value: 'criteria2', label: 'criteria2' },
      { value: 'criteria3', label: 'criteria3' },
      { value: 'criteria4', label: 'criteria4' }
    ];

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
                    <Select
                      name="smsc"
                      placeholder="Select SMSC.."
                      options={options}
                      value={this.state.dedicatedMO.smsc || ''}
                      onChange={this.handleModalChange.bind(this,types.TPOA_DEDICATED_SMSC)}
                    />
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
                    <Select
                      name="criteria"
                      placeholder="Select Criteria.."
                      options={criteriaOp}
                      value={this.state.dedicatedMO.criteria || ''}
                      onChange={this.handleModalChange.bind(this,types.TPOA_DEDICATED_CRITERIA)}
                    />
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

}

export default HubAccountMODedicated;
