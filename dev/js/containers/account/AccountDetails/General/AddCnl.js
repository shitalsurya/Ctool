import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
require('./../../../../../scss/style.scss');
import * as types from './../../../common/commonActionTypes';
import { initializeSelectOptions } from './../../../common/Functions/commonFunctions';
import {lookupOptions} from './../../../common/commonActionTypes';
import { addHubAccountCNL } from './../../actions/accountGeneralActions';
class AddCnl extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.state={
        modalHeading : 'Add Contact',
        AddCnlInfo : {
            customerid:this.props.currentAcct,
        }
      }
  }
  handleModalChange(e){
    console.log("handleModalChange==",e);
    var AddCnlinfo = this.state.AddCnlInfo;
    AddCnlinfo[e.target.name]=e.target.value;
    if(e.target.name=='countryid'){
        AddCnlinfo.countryname =  e.target.selectedOptions[0].text;
    }

    this.setState({ AddCnlInfo: AddCnlinfo});
  }

  saveAddCnl(){
    console.log("new contactinfo : " , this.state.AddCnlInfo);
    this.props.addHubAccountCNL(this.state.AddCnlInfo);
    this.props.close(this.state.AddCnlInfo);
  }

  

  close() {
    this.props.close(this.state.AddCnlInfo);
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
                      Country:
                    </Col>
                    <Col md={ 8 }>
                      <FormControl componentClass="select"
                        name="countryid"
                        value={this.state.AddCnlInfo.countryid || ''}
                        onChange={this.handleModalChange.bind(this)}>
                          <option value="select" disabled selected>Please select...</option>
                        {this.countryList}
                      </FormControl>
                    </Col>
                  </Row>

                  <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 4 }>
                      Default Number Lookup:
                    </Col>
                    <Col md={ 6 }>
                        <FormControl componentClass="select"
                          name="numberlookupid"
                          value={this.state.AddCnlInfo.numberlookupid || ''}
                          onChange={this.handleModalChange.bind(this)}>
                            <option value="select" disabled selected>Please select...</option>
                          {this.lookupOptions}
                        </FormControl>
                    </Col>
                  </Row>
                </Grid>
              </div>
            </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.saveAddCnl.bind(this)}>Save Contact</Button>
                  <Button onClick={this.close.bind(this)}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
      }
      componentWillReceiveProps( nextProps ) {
        console.log("componentWillReceiveProps==",nextProps);

          this.countryList = initializeSelectOptions(nextProps.countryList,'countryname','countryid');
        console.log("this.userList==",this.userList);
          this.lookupOptions = initializeSelectOptions(lookupOptions,'numberlookup','numberlookupid');
        console.log("this.companyList==",this.companyList);
      }
}

function mapStateToProps( state ) {
  return {
    countryList: state.MiscCntry.countryList,
    target: state.MiscCntry.target
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    addHubAccountCNL:addHubAccountCNL
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( AddCnl );
