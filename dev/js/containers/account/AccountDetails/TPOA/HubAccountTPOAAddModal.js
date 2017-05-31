import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
import Toggle from 'react-toggle';
require('./../../../../../scss/style.scss');
require('./../../../../../scss/react-toggle.scss');
import * as types from './../../../common/commonActionTypes';

import {initializeSelectOptions} from './../../../common/Functions/commonFunctions';
import {AddHubAccountForcedTPOA} from './../../actions/accountTPOAActions';
class HubAccountTPOAAddModal extends React.Component {
  constructor(props, context) {
      super(props, context);
      console.log("this.props.currentAcct==",this.props.currentAcct);
      this.currentAcct=this.props.currentAcct;
        this.state={
             newTPOAinfo : {customerid:this.props.currentAcct},
             modalHeading:'Add TPOA Setting',
        }
  }

  handleChange(e) {
      console.log("name==",e.target.name);
      console.log("value==",e.target.value);
    var info = this.state.newTPOAinfo;
    info[e.target.name] = e.target.value;
    if(e.target.name=="smscid"){
       info.smscname = e.target.selectedOptions[0].text;
    }
info.customerid=this.props.currentAcct;
    this.setState({newTPOAinfo : info});
  }


  addNewTPOA(){
    console.log("addNewTPOA==",this.state.newTPOAinfo);
    this.props.AddHubAccountForcedTPOA(this.state.newTPOAinfo);
      this.setState({newTPOAinfo : {}});
    this.props.close();
  }

  close() {
    this.setState({newTPOAinfo : []});
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
                <Col componentClass={ ControlLabel } md={ 3 }>
                  SMSC:
                </Col>
                <Col md={ 6 }>
                  <FormControl componentClass="select"
                    name="smscid"
                    value={this.state.newTPOAinfo.smscid}
                    onChange={this.handleChange.bind(this)}>
                    {this.smscList}
                  </FormControl>
                </Col>
                <Col mdHidden md={ 3 } />
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  TPOA :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                    type="text"
                    name="tpoa"
                    value={this.state.newTPOAinfo.tpoa || ''}
                    onChange={this.handleChange.bind(this)}
                    placeholder="Enter TPOA" />
                </Col>
                <Col mdHidden md={ 3 } />
              </Row>
            </Grid>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.addNewTPOA.bind(this)}>Save</Button>
          <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
      </Modal>

    );
  }
  componentWillReceiveProps( nextProps ) {
    console.log("tppoa model componentWillReceiveProps==",nextProps);
    this.smscList = initializeSelectOptions(nextProps.smscList,'smscname','smscid');
      console.log("this.smscList==",this.smscList);
  }
}
function mapStateToProps(state) {
    return {
      smscList:state.Common.smscList
     };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      AddHubAccountForcedTPOA:AddHubAccountForcedTPOA
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountTPOAAddModal);
