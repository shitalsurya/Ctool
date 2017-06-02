import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
require('./../../../../../scss/style.scss');
import { bindActionCreators } from 'redux';
import * as types from './../../../common/commonActionTypes';
import {initializeSelectOptions} from './../../../common/Functions/commonFunctions';
import {TPDACRITERIA} from './../../../common/commonActionTypes';
import {AddHubAccountMORouting} from './../../actions/accountTPOAActions';
class HubAccountMODedicated extends React.Component {
  constructor(props, context) {
      super(props, context);
        this.state={
            dedicatedMO : {customerid:this.props.currentAcct},
             modalHeading:'Add Dedicated TPOA Routing',
        }
  }


  handleChange(e) {
      console.log("name==",e.target.name);
      console.log("value==",e.target.value);
    var info = this.state.dedicatedMO;

    if(e.target.type=="select-one"){
      info[e.target.name]= e.target.selectedOptions[0].text;
    }
    else{
      info[e.target.name] = e.target.value;
    }
    info.customerid=this.props.currentAcct;
    this.setState({dedicatedMO : info});
  }

  addRouting(){
    console.log(this.state.dedicatedMO);
    this.props.close(this.state.dedicatedMO);
    this.setState({dedicatedMO : []});
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
                      name="smscname"
                      value={this.state.dedicatedMO.smscname}
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
                         name="returnTPDA"
                         value={this.state.dedicatedMO.returnTPDA || ''}
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      AddHubAccountMORouting:AddHubAccountMORouting
    }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(HubAccountMODedicated);
