import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import InlineEdit from './../../common/components/InlineEdit';
import Toggle from 'react-toggle';
require('./../../../../scss/style.scss');
require('./../../../../scss/react-toggle.scss');

export default class EditUserModal extends React.Component {
  constructor(props, context) {
      super(props, context);
        this.state={
             modalHeading:'CTool user properties'
        }
  }
  close() {
    this.props.close();
  }
  updateUser(){
    console.log( "updateUser this.currentUser==", this.currentUser );
    this.props.updateUser(this.currentUser);
  }
  handleInlineEditChange(name,val){
    this.currentUser = this.props.currentUser;
    console.log( "handleInlineEditChange this.currentUser==", this.currentUser );
    console.log("handleInlineEditChange name==",name);
    console.log("handleInlineEditChange val==",val);
    this.currentUser[name]=val;
      console.log( "after this.currentUser==", this.currentUser );
        this.props.updateUser(this.currentUser);
  }
  render(){
    const homepageOptions= [
        { value: 'Account', label: 'Account' },
        { value: 'Connections', label: 'Connections' }
    ];
    const roleOptions= [
        { value: 'Support', label: 'Support' },
        { value: 'ServiceDesk', label: 'ServiceDesk' }
    ];
      console.log("render currentUser==",this.props.currentUser);
    return (
      <Modal show={this.props.showEditUser} onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Grid fluid={true}>
              <Row className="show-grid">
                <Col
                  componentClass={ ControlLabel }
                  md={ 4 }> Name:
                </Col>
                <Col md={ 8 }>
                  {}
                  <InlineEdit name="name" type="text" value={this.props.currentUser.name} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col
                  componentClass={ ControlLabel }
                  md={ 4 }> User homepage:
                </Col>
                <Col md={ 8 }>
                  {}
                  <InlineEdit name="homepage" type="select" options={homepageOptions} value={this.props.currentUser.homepage} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>

              </Row>
            </Grid>
          </div>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={this.updateUser.bind(this)}>Save</Button>
          <Button onClick={this.close.bind(this)}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
}
