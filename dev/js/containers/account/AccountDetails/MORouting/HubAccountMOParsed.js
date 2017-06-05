import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
require('./../../../../../scss/style.scss');
import * as types from './../../../common/commonActionTypes';
import { bindActionCreators } from 'redux';
import {initializeSelectOptions} from './../../../common/Functions/commonFunctions';
import {TPDACRITERIA,KEYWORDCRITERIA,PARSEFIELDS} from './../../../common/commonActionTypes';
import {AddHubAccountMORouting} from './../../actions/accountMORoutingActions';
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
    info.customerid=this.props.currentAcct;
    info.sharedshortcodeflag=0;
    this.setState({parsedMO : info});
  }

  addRouting(){
    console.log("addRouting==",this.state.parsedMO);
    this.props.AddHubAccountMORouting(this.state.parsedMO);
    this.props.close(this.state.parsedMO);
    this.setState({parsedMO : []});
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
                      name="smscname"
                      value={this.state.parsedMO.smscname}
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
                         name="servicenumber"
                         value={this.state.parsedMO.servicenumber || ''}
                         onChange={this.handleChange.bind(this)}
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
                         name="returnedtpda"
                         value={this.state.parsedMO.returnedtpda || ''}
                         onChange={this.handleChange.bind(this)}
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
                    name="comparisoncriteria"
                    value={this.state.parsedMO.comparisoncriterianame}
                    onChange={this.handleChange.bind(this)}>
                    <option value="select" disabled selected>Please select...</option>
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
                      name="targetfield"
                      value={this.state.parsedMO.targetfield}
                      onChange={this.handleChange.bind(this)}>
                      <option value="select" disabled selected>Please select...</option>
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
                      name="keywordcomparisoncriteria"
                      value={this.state.parsedMO.keywordcomparisoncriterianame}
                      onChange={this.handleChange.bind(this)}>
                      <option value="select" disabled selected>Please select...</option>
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
                         onChange={this.handleChange.bind(this)}
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
    // console.log("tppoa model componentWillReceiveProps==",nextProps);
    this.smscList = initializeSelectOptions(this.props.smscList,'smscname','smscname');
      console.log("this.smscList==",this.smscList);
    this.TpdaCriteria = initializeSelectOptions(TPDACRITERIA,'comparisoncriteria','comparisoncriteria');
      console.log("this.TpdaCriteria==",this.TpdaCriteria);
      this.ParseField = initializeSelectOptions(PARSEFIELDS,'targetfield','targetfield');
        console.log("this.ParseField==",this.ParseField);
      this.KeywordCriteria = initializeSelectOptions(KEYWORDCRITERIA,'keywordcomparisoncriteria','keywordcomparisoncriterianame');
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
  function mapDispatchToProps(dispatch) {
      return bindActionCreators({
        AddHubAccountMORouting:AddHubAccountMORouting
      }, dispatch);
  }


export default connect(mapStateToProps,mapDispatchToProps)(HubAccountMOParsed);
