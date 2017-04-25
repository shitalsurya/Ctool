import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
require('./../../../../scss/style.scss');
import * as types from './../actions/accountActionTypes';

class HubAccountMOParsed extends React.Component {
  constructor(props, context) {
      super(props, context);
        this.state={
             parsedMO : {},
             modalHeading:'Add Parsed TPOA Routing',
        }
  }

  handleModalChange(target, value){
    var info = this.state.parsedMO;
    switch(target) {
      case types.TPOA_PARSED_SMSC:
        info.smsc = value.value;
        break;
      case types.TPOA_PARSED_SERVICE:
        info.serviceNo = value.target.value;
        break;
      case types.TPOA_PARSED_RETURNED_TPDA:
        info.returnTPDA = value.target.value;
        break;
      case types.TPOA_PARSED_CRITERIA:
        info.criteria = value.value;
        break;
      case types.TPOA_PARSED_PFIELD:
        info.parsedField = value.value;
        break;
      case types.TPOA_PARSED_KEYWORD_CRITERIA:
        info.kwCriteria = value.value;
        break;
      case types.TPOA_PARSED_KEYWORD:
        info.keyword = value.target.value;
        break;
    }
    this.setState({TPOAinfo : info});
  }

  addRouting(){
    console.log(this.state.parsedMO);
    this.setState({parsedMO : []});
    this.props.close();
  }

  close() {
    this.setState({parsedMO : []});
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

    const parsedOp = [
      { value: 'field1', label: 'field1' },
      { value: 'field2', label: 'field2' },
      { value: 'field3', label: 'field3' },
      { value: 'field4', label: 'field4' },
      { value: 'field5', label: 'field5' }
    ];

    const kwCriteriaOp = [
      { value: 'keyword1', label: 'keyword1' },
      { value: 'keyword2', label: 'keyword2' },
      { value: 'keyword3', label: 'keyword3' },
      { value: 'keyword4', label: 'keyword4' }
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
                      value={this.state.parsedMO.smsc || ''}
                      onChange={this.handleModalChange.bind(this,types.TPOA_PARSED_SMSC)}
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
                         value={this.state.parsedMO.serviceNo || ''}
                         onChange={this.handleModalChange.bind(this,types.TPOA_PARSED_SERVICE)}
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
                         value={this.state.parsedMO.returnTPDA || ''}
                         onChange={this.handleModalChange.bind(this,types.TPOA_PARSED_RETURNED_TPDA)}
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
                      value={this.state.parsedMO.criteria || ''}
                      onChange={this.handleModalChange.bind(this,types.TPOA_PARSED_CRITERIA)}
                    />
                  </Col>
                  <Col mdHidden md={ 2 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 4 }>
                    Parsed Field:
                  </Col>
                  <Col md={ 6 }>
                    <Select
                      name="parsedField"
                      placeholder="Select Parsed Field.."
                      options={parsedOp}
                      value={this.state.parsedMO.parsedField || ''}
                      onChange={this.handleModalChange.bind(this,types.TPOA_PARSED_PFIELD)}
                    />
                  </Col>
                  <Col mdHidden md={ 2 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 4 }>
                    Keyword Criteria:
                  </Col>
                  <Col md={ 6 }>
                    <Select
                      name="kwCriteria"
                      placeholder="Select Keyword Criteria.."
                      options={kwCriteriaOp}
                      value={this.state.parsedMO.kwCriteria || ''}
                      onChange={this.handleModalChange.bind(this,types.TPOA_PARSED_KEYWORD_CRITERIA)}
                    />
                  </Col>
                  <Col mdHidden md={ 2 } />
                </Row>
                <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 4 }>
                      Keyword :
                    </Col>
                    <Col md={ 6 }>
                      <FormControl
                         type="text"
                         name="keyword"
                         value={this.state.parsedMO.keyword || ''}
                         onChange={this.handleModalChange.bind(this,types.TPOA_PARSED_KEYWORD)}
                         placeholder="Enter Keyword.." />
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

export default HubAccountMOParsed;
