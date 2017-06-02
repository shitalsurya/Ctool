import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
import Toggle from 'react-toggle';
require('./../../../../../scss/style.scss');
require('./../../../../../scss/time.scss');
require('./../../../../../scss/react-toggle.scss');
import * as types from './../../../common/commonActionTypes';
import HubAccountAddMTRouting from './HubAccountAddMTRouting';
import DateTimeField from 'react-bootstrap-datetimepicker';
import { connect } from 'react-redux';
import {initializeSelectOptions} from './../../../common/Functions/commonFunctions';
class HubAccountModifyMTRouting extends React.Component {
  constructor(props, context) {
      super(props, context);

        this.state={
              ModifyFlag : '',
              MTModifyInfo : this.props.MTModifyInfo || [],
             modalHeading:'Modify standard MT routing',

             checked : false,
             commentchecked : false,
              smscmodify : true,


        }
  }
  handleChange(e) {
      console.log("name==",e.target.name);
      console.log("value==",e.target.value);
    var info = this.state.MTModifyInfo;
    info[e.target.name] = e.target.value;
    this.setState({MTModifyInfo : info});
  }
  handleModalChange(target, value){

    var modify = this.state.MTModifyInfo;
    switch(target) {
      case types.ACCOUNT_MODFIY_MT_ROUTING_ONOFF:
        modify.onoff=value;
        break;
      case types.ACCOUNT_MODIFY_MT_ROUTING_PERMANENT:
        modify.permanent=value;
        break;
      case types.ACCOUNT_MODIFY_MT_ROUTING_TPOA :
        modify.tpoa=value.target.value;
        break;
      case types.ACCOUNT_MODIFY_MT_ROUTING_STARTTIME :
        modify.starttime=value.value;
        break;
      case types.ACCOUNT_MODIFY_MT_ROUTING_COMMENT :
        modify.comment=value.target.value;
    }
    this.setState({MTModifyInfo : modify});
  }

  saveMTRouting(){


      console.log("Modified Routing : " , this.state.MTModifyInfo);
        this.props.close();
  }

  toggleOnChange(event){
    console.log( event.target.checked );
    var _resRouting=event.target.checked==true?"Yes":"No";
    var modify = this.state.MTModifyInfo;
     switch(event.target.name) {

       case "onOffToggle":
        modify.onOffValue = event.target.checked==true?"On":"Off";
         break;
        case "permanentToggle":
        modify.permanentValue = event.target.checked==true?"Yes":"No";
          break;
     }
     this.setState({
        resRouting: _resRouting,
        MTModifyInfo: modify
      });

  }

  close() {

    this.props.close();
  }


  render(){

    const starttime = [
      { value : '1' , label : '1'},
      { value : '2' , label : '2'}
    ];

    const changed = function (e) {
        switch (e.target.name) {
          case "smscCheck":
            this.setState({checked : !this.state.checked});
            break;
          case "commentCheck":
            this.setState({commentchecked : !this.state.commentchecked});
            break;

        }

    };

    return (
      <Modal show={this.props.ModifyModalFlag} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
              <Modal.Title>{this.state.modalHeading}</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <div>
                <Grid fluid={true}>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Operator:
                      </Col>
                      <Col md={ 6 }>
                      <FormControl
                         type="label"
                         name="operator"
                  //       value={this.props.MTInfo.operator || ''}

                        />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        SMSC:
                      </Col>
                      <Col md={ 6 }>
                      <FormControl
                         type="label"
                         name="prevsmsc"
                //        value={this.props.MTInfo.smsc || ''}

                        />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Preferences:
                      </Col>
                      <Col md={ 2 }>
                      <FormControl
                         type="text"

                        />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        SMSC:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl componentClass="select"
                              name="smscid"
                              value={this.state.MTModifyInfo.smscid}
                              onChange={this.handleChange.bind(this)}>
                              <option value="select" disabled selected>Please select...</option>
                              {this.smscList}
                        </FormControl>
                               <label><input type="checkbox"
                                  name="smscCheck"
                                  checked={this.state.checked}
                                  onChange={changed.bind(this) }
                               />Update SMSC
                              </label>
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
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
                         value={this.state.MTModifyInfo.onOffValue}
                        onChange={this.toggleOnChange.bind(this)} />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
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
                       value={this.state.MTModifyInfo.permanentValue}
                        onChange={this.toggleOnChange.bind(this)} />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        TPOA :
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                           type="text"
                           name="tpoa"
                           value={this.state.MTModifyInfo.tpoa || ' '}
                           onChange={this.handleModalChange.bind(this,types.ACCOUNT_MODIFY_MT_ROUTING_TPOA)}
                           placeholder="Enter TPOA" />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Comment :
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                           type="text"
                           name="comment"
                           value={this.state.MTModifyInfo.comment || ' '}
                          onChange={this.handleModalChange.bind(this,types.ACCOUNT_MODIFY_MT_ROUTING_COMMENT)}
                           placeholder="Enter Comment" />
                           <label><input type="checkbox"
                              name="commentCheck"
                              checked={this.state.commentchecked}
                              onChange={changed.bind(this) }
                           />Update comment
                          </label>
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                      Start Time(UTC) :
                      </Col>
                      <Col md={ 4 }>
                           <DateTimeField mode="time" />
                      </Col>

                      <Col mdHidden md={ 3 } />
                  </Row>
                  <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        End Time(UTC) :
                      </Col>
                      <Col md={ 4 }>
                         <DateTimeField mode="time" />
                      </Col>
                      <Col mdHidden md={ 3 } />
                  </Row>
                </Grid>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.saveMTRouting.bind(this)}>Save</Button>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
      </Modal>
    );
  }

  componentWillMount( ) {
    // console.log("tppoa model componentWillReceiveProps==",nextProps);
    this.smscList = initializeSelectOptions(this.props.smscList,'smscname','smscid');
      console.log("this.smscList==",this.smscList);
    }
}
function mapStateToProps(state) {
    return {
      smscList:state.Common.smscList
     };
}
export default connect(mapStateToProps)(HubAccountModifyMTRouting);
