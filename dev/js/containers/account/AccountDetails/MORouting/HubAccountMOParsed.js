import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
require('./../../../../../scss/style.scss');
import * as types from './../../../common/commonActionTypes';
import {initializeSelectOptions} from './../../../common/Functions/commonFunctions';
import {TPDACRITERIA,PARSEFIELDS} from './../../../common/commonActionTypes';
class HubAccountMOParsed extends React.Component {
  constructor(props, context) {
      super(props, context);
        this.state={
             parsedMO : {},
             modalHeading:'Add Parsed TPOA Routing',
        }
  }

  handleChange(e) {
      console.log("name==",e.target.name);
      console.log("value==",e.target.value);
    var info = this.state.parsedMO;
    info[e.target.name] = e.target.value;
    this.setState({parsedMO : info});
  }
  handleModalChange(target, value){
    var info = this.state.parsedMO;
    switch(target) {
      case types.TPOA_PARSED_SERVICE:
        info.serviceNo = value.target.value;
        break;
      case types.TPOA_PARSED_RETURNED_TPDA:
        info.returnTPDA = value.target.value;
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
                      value={this.state.parsedMO.smscid}
                      onChange={this.handleChange.bind(this)}>
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
                  <FormControl componentClass="select"
                    name="criteria"
                    value={this.state.parsedMO.criteria}
                    onChange={this.handleChange.bind(this)}>
                    {this.TpdaCriteria}
                  </FormControl>
                  </Col>
                  <Col mdHidden md={ 2 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 4 }>
                    Parsed Field:
                  </Col>
                  <Col md={ 6 }>
                    <FormControl componentClass="select"
                      name="parsedField"
                      value={this.state.parsedMO.parsedField}
                      onChange={this.handleChange.bind(this)}>
                      {this.ParseField}
                    </FormControl>
                  </Col>
                  <Col mdHidden md={ 2 } />
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 4 }>
                    Keyword Criteria:
                  </Col>
                  <Col md={ 6 }>
                    <FormControl componentClass="select"
                      name="kwCriteria"
                      value={this.state.parsedMO.kwCriteria}
                      onChange={this.handleChange.bind(this)}>
                      {this.KeywordCriteria}
                    </FormControl>
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
  componentWillMount( ) {
    debugger;
    // console.log("tppoa model componentWillReceiveProps==",nextProps);
    this.smscList = initializeSelectOptions(this.props.smscList,'smscname','smscid');
      console.log("this.smscList==",this.smscList);
    this.TpdaCriteria = initializeSelectOptions(TPDACRITERIA,'tpdacriterianame','tpdacriteriaid');
      console.log("this.TpdaCriteria==",this.TpdaCriteria);
      this.ParseField = initializeSelectOptions(PARSEFIELDS,'parsefieldname','parsefieldid');
        console.log("this.ParseField==",this.ParseField);
      this.KeywordCriteria = initializeSelectOptions(TPDACRITERIA,'tpdacriterianame','tpdacriteriaid');
        console.log("this.KeywordCriteria==",this.KeywordCriteria);
  }
  }
  function mapStateToProps(state) {
    return {
      smscList:state.Common.smscList,
      TpdaCriteria:state.Common.TpdaCriteria,
      ParseField: state.Common.ParseField,
      KeywordCriteria: state.Common.KeywordCriteria
     };
  }


export default connect(mapStateToProps)(HubAccountMOParsed);
