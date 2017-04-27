import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
import Toggle from 'react-toggle';
require('./../../../../../scss/style.scss');
require('./../../../../../scss/react-toggle.scss');
import * as types from './../../actions/accountActionTypes';

class HubAccountAddMTRouting extends React.Component {
  constructor(props, context) {
      super(props, context);

        this.state={
             ModifyFlag : '',
             MTInfo : this.props.MTInfo || [],
             modalHeading:'Add standard MT routing',
             checked : false,
        }
  }

  handleModalChange(target, value){
    var info = this.state.MTInfo;
    switch(target) {
      case types.ACCOUNT_MT_ROUTING_OPERATOR:
        info.operator = value.value;
        break;
      case types.ACCOUNT_MT_ROUTING_SMSC:
        info.smsc = value.value;
        break;
      case types.ACCOUNT_MT_ROUTING_TPOA:
        info.tpoa = value.target.value;
        break;
    }
    this.setState({MTInfo : info});
  }


  addRouting(){

    console.log("Added Routing : " , this.state.MTInfo);
      this.props.close();
  }

  toggleOnChange(event){
    console.log( event.target.checked );


          var info = this.state.MTInfo;
           switch(event.target.name) {
             case "onOffToggle":
              info.onOffValue = event.target.checked==true?"On":"Off";
               break;
              case "permanentToggle":
              info.permanentValue = event.target.checked==true?"Yes":"No";
                break;
           }
           this.setState({

              MTInfo:info
            });
  }

  close() {

    this.props.close();
  }


  render(){

    const modalOptions = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
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
                              Operator:
                            </Col>
                            <Col md={ 6 }>
                              <Select
                                name="operator"
                                placeholder="Select Operator.."
                                options={modalOptions}
                                value={this.state.MTInfo.operator || ''}
                                onChange={this.handleModalChange.bind(this,types.ACCOUNT_MT_ROUTING_OPERATOR)}
                              />
                            </Col>
                            <Col mdHidden md={ 3 } />
                          </Row>
                          <Row className="show-grid">
                            <Col componentClass={ ControlLabel } md={ 3 }>
                              SMSC:
                            </Col>
                            <Col md={ 6 }>
                            <Select
                                  name="smsc"
                                  placeholder="Select SMSC.."
                                  options={modalOptions}
                                  value={this.state.MTInfo.smsc || ''}
                                onChange={this.handleModalChange.bind(this,types.ACCOUNT_MT_ROUTING_SMSC)}
                                   />

                            </Col>
                            <Col mdHidden md={ 3 } />
                          </Row>
                        <Row className="show-grid">
                            <Col componentClass={ ControlLabel } md={ 3 }>
                              On/Off :
                            </Col>
                            <Col md={ 6 }>
                            <Toggle
                            name="onOffToggle"
                            icons={{
                                 checked: 'On',
                                 unchecked: 'Off',
                               }}
                                defaultChecked={true}
                                value={this.state.MTInfo.onOffValue}
                              onChange={this.toggleOnChange.bind(this)} />
                            </Col>
                            <Col mdHidden md={ 3 } />
                        </Row>
                        <Row className="show-grid">
                            <Col componentClass={ ControlLabel } md={ 3 }>
                              Permanent :
                            </Col>
                            <Col md={ 6 }>
                            <Toggle
                            name="permanentToggle"
                            icons={{
                                 checked: 'Yes',
                                 unchecked: 'No',
                               }}
                                  defaultChecked={false}
                               value={this.state.MTInfo.permanentValue}
                              onChange={this.toggleOnChange.bind(this)} />
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
                                 value={this.state.MTInfo.tpoa || ' '}
                                 onChange={this.handleModalChange.bind(this,types.ACCOUNT_MT_ROUTING_TPOA)}
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

export default HubAccountAddMTRouting;
