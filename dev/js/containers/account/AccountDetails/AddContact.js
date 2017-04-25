import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Select from 'react-select';
import Toggle from 'react-toggle';
require('./../../../../scss/style.scss');
require('./../../../../scss/react-toggle.scss');
import Countries from './../../../../json/Countries.json';
import * as types from './../actions/accountActionTypes';
import { initializeData } from './../actions/accountActions';
class AddContact extends React.Component {
  constructor(props, context) {
      super(props, context);

        this.state={
          modalHeading : 'Account Contacts',
          showContact : true,
          AddContactInfo : this.props.AddContactInfo || [],
        }
      }
      handleModalChange(target, value){
        var addcontactinfo = this.state.AddContactInfo;
        switch(target) {
            case types.ADDCONTACT_COMPANYNAME :
              addcontactinfo.name=value.target.value;
            break;
            case types.ADDCONTACT_COMPANYEMAIL :
              addcontactinfo.email=value.target.value;
            break;
            case types.ADDCONTACT_COUNTRY:
              addcontactinfo.country = value.value;
            break;
            case types.ADDCONTACT_MOBILENUMBER :
              addcontactinfo.mobilenumber = value.target.value;
            break;
            case types.ADDCONTACT_DIRECTNUMBER :
            addcontactinfo.directnumber = value.target.value;
          break;


        }
        this.setState({ AddContactInfo: addcontactinfo});
      }
      saveAddContact(){
        console.log("new contactinfo : " , this.state.AddContactInfo);
          this.props.close();
      }
      componentWillMount(){
            this.countryList = initializeData(Countries,'code');
      }
      close() {

        this.props.close();
      }
      render(){

            return(
              <Modal show={this.props.showContact} onHide={this.close.bind(this)}>
                  <Modal.Header closeButton>
                      <Modal.Title>{this.state.modalHeading}</Modal.Title>
                  </Modal.Header>
                    <Modal.Body>
                      <div>
                        <Grid fluid={true}>
                          <Row className="show-grid">
                              <Col componentClass={ ControlLabel } md={ 4 }>
                                Contact:
                              </Col>
                              <Col md={ 8 }>
                              <FormControl
                                 type="text"
                                 name="name"
                                 value={this.state.AddContactInfo.name || ''}
                                 onChange={this.handleModalChange.bind(this,types.ADDCONTACT_COMPANYNAME)}
                                 placeholder="Enter Company name" />
                              </Col>
                          </Row>
                          <Row className="show-grid">
                              <Col componentClass={ ControlLabel } md={ 4 }>
                                Email:
                              </Col>
                              <Col md={ 8 }>
                              <FormControl
                                 type="text"
                                 name="email"
                                 value={this.state.AddContactInfo.email || ''}
                                 onChange={this.handleModalChange.bind(this,types.ADDCONTACT_COMPANYEMAIL)}
                                 placeholder="Enter Email" />
                              </Col>
                          </Row>
                          <Row className="show-grid">
                              <Col componentClass={ ControlLabel } md={ 4 }>
                                Existing Company Contact:
                              </Col>
                              <Col md={ 8 }>
                              <Select
                                    name="country"
                                    placeholder="Select country.."
                                    options={this.countryList}
                                    value={this.state.AddContactInfo.country || ''}
                                    onChange={this.handleModalChange.bind(this,types.ADDCONTACT_COUNTRY)}
                                     />
                              </Col>
                          </Row>
                          <Row className="show-grid">
                              <Col componentClass={ ControlLabel } md={ 4 }>
                                Mobile Phone Number:
                              </Col>
                              <Col md={ 8 }>
                              <FormControl
                                 type="text"
                                 name="mobilenumber"
                                 value={this.state.AddContactInfo.mobilenumber || ''}
                                 onChange={this.handleModalChange.bind(this,types.ADDCONTACT_MOBILENUMBER)}
                                 placeholder ="Enter mobilenumber" />
                              </Col>
                          </Row>
                          <Row className="show-grid">
                              <Col componentClass={ ControlLabel } md={ 4 }>
                                Direct Phone Number:
                              </Col>
                              <Col md={ 8 }>
                              <FormControl
                                 type="text"
                                 name="directnumber"
                                 value={this.state.AddContactInfo.directnumber || ''}
                                 onChange={this.handleModalChange.bind(this,types.ADDCONTACT_DIRECTNUMBER)}
                                 placeholder ="Enter directnumber" />
                              </Col>
                          </Row>
                        </Grid>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.saveAddContact.bind(this)}>Save Contact</Button>
                      <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            );
          }

}
export default AddContact;
