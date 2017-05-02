import React from 'react';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import InlineEdit from './../../common/components/InlineEdit';
import Toggle from 'react-toggle';
require('./../../../../scss/style.scss');
require('./../../../../scss/react-toggle.scss');
import Countries from '../../../../json/Countries.json';
import { initializeData } from '../../account/actions/accountActions';

export default class EditCountryModal extends React.Component {
  constructor(props, context) {
      super(props, context);
        this.state={
             modalHeading:'CTool country properties'
        }
  }

  close() {
    this.props.close();
  }

  updateCountry(){
    console.log( "updateCountry this.currentCntry==", this.currentCntry );
    this.props.updateCountry(this.currentCntry);
  }

  handleInlineEditChange(name,val){
    this.currentCntry = this.props.currentCntry;
    console.log( "handleInlineEditChange this.currentCntry==", this.currentCntry );
    console.log("handleInlineEditChange name==",name);
    console.log("handleInlineEditChange val==",val);
    this.currentCntry[name]=val;
    console.log( "after this.currentCntry==", this.currentCntry );
    this.props.updateCountry(this.currentCntry);
  }

  render(){

    console.log("render currentCntry==",this.props.currentCntry);

    const lookupOptions = [
      { value: 'Local-Numbering-Plan', label: 'Local-Numbering-Plan' },
      { value: 'Local-Ported-Plan', label: 'Local-Ported-Plan' },
      { value: 'NRS', label: 'NRS'}
    ];

    return (
      <Modal show={this.props.showEditUser} onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Grid fluid={true}>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  Country ID:
                </Col>
                <Col md={ 6 }>
                  <FormControl
                    className="info_label"
                    type="text"
                    name="countryId"
                    value={this.props.currentCntry.id} />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  Name:
                </Col>
                <Col md={ 6 }>
                  <InlineEdit name="countryName" type="select" options={this.countryList} value={this.props.currentCntry.countryName} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  Continent:
                </Col>
                <Col md={ 6 }>
                  <FormControl
                    className="info_label"
                    type="text"
                    name="continent"
                    value={this.props.currentCntry.continent} />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  Country Code:
                </Col>
                <Col md={ 6 }>
                  <FormControl
                    className="info_label"
                    type="text"
                    name="countryNoCode"
                    value={this.props.currentCntry.countryNoCode} />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  Mnemonic Country Code:
                </Col>
                <Col md={ 6 }>
                  <FormControl
                    className="info_label"
                    type="text"
                    name="countryCode"
                    value={this.props.currentCntry.countryCode} />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  MSISDN Length:
                </Col>
                <Col md={ 6 }>
                  <FormControl
                    className="info_label"
                    type="text"
                    name="msisdnLen"
                    value={this.props.currentCntry.msisdnLen} />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  Min. MSISDN Length:
                </Col>
                <Col md={ 6 }>
                  <FormControl
                    className="info_label"
                    type="text"
                    name="minLen"
                    value={this.props.currentCntry.minLen} />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  Max. MSISDN Length:
                </Col>
                <Col md={ 6 }>
                  <FormControl
                    className="info_label"
                    type="text"
                    name="maxLen"
                    value={this.props.currentCntry.maxLen} />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  Default Number Lookup:
                </Col>
                <Col md={ 6 }>
                  <InlineEdit name="defLookup" type="select" options={lookupOptions} value={this.props.currentCntry.defLookup} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  Enable CNL:
                </Col>
                <Col md={ 6 }>
                  <InlineEdit
                    name="enableCNL"
                    type="toggle"
                    icons={{
                       checked: 'Yes',
                       unchecked: 'No',
                    }}
                    value={this.props.currentCntry.enableCNL}
                    onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  CNL Option(s):
                </Col>
                <Col md={ 6 }>
                  <InlineEdit name="CNLOptions" type="select" options={lookupOptions} value={this.props.currentCntry.CNLOptions} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  Meassage Body Removal:
                </Col>
                <Col md={ 6 }>
                  <InlineEdit
                    name="msgBodyRemoval"
                    type="toggle"
                    icons={{
                       checked: 'Yes',
                       unchecked: 'No',
                    }}
                    value={this.props.currentCntry.msgBodyRemoval}
                    onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
              </Row>
              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 6 }>
                  Last Updated:
                </Col>
                <Col md={ 6 }>
                  <FormControl
                    className="info_label"
                    type="text"
                    name="lastUpdated"
                    value={this.props.currentCntry.lastUpdated} />
                </Col>
              </Row>
            </Grid>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  componentWillMount(){
    this.countryList = initializeData(Countries,'countryName');
  }
}
