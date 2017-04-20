import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
import Toggle from 'react-toggle';
require('../../../scss/style.scss');
require('../../../scss/react-toggle.scss');
import * as types from '../../containers/account/actions/accountActionTypes';

class HubAccountTPOAAddModal extends React.Component {
  constructor(props, context) {
      super(props, context);

        this.state={
             TPOAinfo : this.props.TPOAinfo || [],
             modalHeading:'Add TPOA Setting',
        }
  }

  handleModalChange(target, value){
    var info = this.state.TPOAinfo;
    switch(target) {
      case types.TPOA_ADD_SMSC:
        info.smsc = value.value;
        break;
      case types.TPOA_ADD_TPOA:
        info.tpoa = value.target.value
        break;
    }
    this.setState({TPOAinfo : info});
  }


  addRouting(){
    console.log(this.state.TPOAinfo);
    this.setState({TPOAinfo : []});
    this.props.close();
  }

  close() {
    this.setState({TPOAinfo : []});
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
                    <Select
                      name="smsc"
                      placeholder="Select SMSC.."
                      options={options}
                      value={this.state.TPOAinfo.smsc || ''}
                      onChange={this.handleModalChange.bind(this,types.TPOA_ADD_SMSC)}
                    />
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
                         value={this.state.TPOAinfo.tpoa || ''}
                         onChange={this.handleModalChange.bind(this,types.TPOA_ADD_TPOA)}
                         placeholder="Enter TPOA" />
                    </Col>
                    <Col mdHidden md={ 3 } />
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

export default HubAccountTPOAAddModal;
