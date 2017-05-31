import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label,Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
require('./../../../../../scss/style.scss');
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AddIPAddr extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state={
        modalHeading : this.props.modalHeading,
        modalError:'',
        AddIPInfo : {
            customerid:this.props.currentAcct,
        }
      }
  }

  handleModalChange(e){
    console.log("handleModalChange==",e.target.value);
    var _AddIPInfo = this.state.AddIPInfo;
    _AddIPInfo[e.target.name]=e.target.value;
    this.setState({ AddIPInfo: _AddIPInfo});
  }

  saveIPAddr(){
    console.log("new ip address : " , this.state.AddIPInfo);
    this.props.close(this.state.AddIPInfo);
  }

  close() {
    console.log("closing");
    this.props.close(this.state.AddIPInfo);
  }

  render(){

        return(
          <Modal show={this.props.showIP} onHide={this.close.bind(this)}>
            {
              this.state.modalError!=''&&
              <Alert bsStyle="danger">
                <strong>{this.state.modalError}</strong>
              </Alert>
            }
            <Modal.Header closeButton>
              <Modal.Title>{this.state.modalHeading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <Grid fluid={true}>
                  <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 4 }>
                      IP Address:
                    </Col>
                    <Col md={ 8 }>
                      <FormControl
                        type="text"
                        name="ipaddress"
                        value={this.state.AddIPInfo.ipaddress || ''}
                        onChange={this.handleModalChange.bind(this)}
                        placeholder="Enter IP Address" />
                    </Col>
                  </Row>
                </Grid>
              </div>
              <ToastContainer
                toastMessageFactory={ ToastMessageFactory }
                ref="container"
                className="toast-top-right" />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.saveIPAddr.bind(this)}>Save Contact</Button>
              <Button onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

      componentWillReceiveProps( nextProps ) {

      }

}

function mapStateToProps( state ) {
  return {

  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {

  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( AddIPAddr );
