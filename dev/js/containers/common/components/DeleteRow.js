import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, FormControl, InputGroup,FormGroup, Glyphicon, Modal, Button} from 'react-bootstrap';
import Select from 'react-select';
import Toggle from 'react-toggle';

require('./delete.scss');

export default class DeleteRow extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state={
          showView:true,
          showEdit:false,
          modalHeading : this.props.currentRow || '',
        };
    }

    close() {
      this.setState({showEdit : false});
    }

    onOkClick() {

    }

     handleModalData(){
       this.setState({showEdit : false});
     }

     render() {
        return (
          <div className="view-edit-control">
            {
              this.state.showView &&
                <InputGroup controlId="formControlsSelectMultiple">
                  <FormControl componentClass="button" className="delete-icon"
                    onClick={ () => this.setState({showEdit : true}) }>
                  </FormControl>
                </InputGroup>

            }
            {
              this.state.showEdit &&
              <Modal show={true} onHide={this.close.bind(this)}>
                  <Modal.Header closeButton>
                      <Modal.Title> Delete {this.state.modalHeading}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      <label>Are you sure you want to delete this record ?</label>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.handleModalData.bind(this)}>Ok</Button>
                    <Button onClick={this.close.bind(this)}>Cancel</Button>
                  </Modal.Footer>
              </Modal>
            }
          </div>
        );
    }

    componentWillMount() {

    }

}
