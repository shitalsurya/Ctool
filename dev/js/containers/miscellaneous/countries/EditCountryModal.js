import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import InlineEdit from './../../common/components/InlineEdit';
import Toggle from 'react-toggle';
require('./../../../../scss/style.scss');
require('./../../../../scss/react-toggle.scss');
import BrandingHeader from './../../common/components/BrandingHeader';
import Navigation from './../../common/components/Navigation';
import * as types from './../../common/commonActionTypes';
import { getCountryList, updateCountryDetails } from './miscCntryActions';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class EditCountryModal extends React.Component {
  constructor(props, context) {
      super(props, context);
        this.state={
             modalHeading:'CTool Country Management Details',
             currentCntry: this.props.location.state.currentCntry,
             submenus:{
               head: types.MISCELLENEOUS,
               head_icon : "misc-icon",
               subVal:[
                 types.USER_MANAGEMENT,
                 types.COUNTRY_MANAGEMENT
               ]
             }
        }
  }

  handleInlineEditChange(name,val){
    this.currentCntry = this.state.currentCntry;
    console.log( "handleInlineEditChange this.currentCntry==", this.currentCntry );
    console.log("handleInlineEditChange name==",name);
    console.log("handleInlineEditChange val==",val);
    this.currentCntry[name]=val;
    console.log( "after this.currentCntry==", this.currentCntry );
    this.props.updateCountryDetails(this.currentCntry);
  }

  render(){
    const info = this.state.currentCntry;
    console.log("render currentCntry==",info);

    const lookupOptions = [
      { value: 'Local-Numbering-Plan', label: 'Local-Numbering-Plan' },
      { value: 'Local-Ported-Plan', label: 'Local-Ported-Plan' },
      { value: 'NRS', label: 'NRS'}
    ];

    return (
      <div>
        <BrandingHeader/>
        <Grid fluid={true}>
          <Row>
            <Col md={2}>
              <Navigation submenus={this.state.submenus}></Navigation>
            </Col>
            <Col md={10}>
              <div className="controls-container">
                <div className="rec">
                  <div className="page-heading">
                    {this.state.modalHeading}
                  </div>
                </div>
                <div>
                  <Grid fluid={true}>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Country ID:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="countryId"
                          value={info.id} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Name:
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="countryName" type="text" value={info.countryName} onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Continent:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="continent"
                          value={info.continent} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Country Code:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="countryNoCode"
                          value={info.countryNoCode} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Mnemonic Country Code:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="countryCode"
                          value={info.countryCode} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        MSISDN Length:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="msisdnLen"
                          value={info.msisdnLen} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Min. MSISDN Length:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="minLen"
                          value={info.minLen} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Max. MSISDN Length:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="maxLen"
                          value={info.maxLen} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Number Lookup Option(s):
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="LookupOptions" type="multiSelect" options={lookupOptions} value={info.LookupOptions} onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Default Number Lookup:
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="defLookup" type="select" options={lookupOptions} value={info.defLookup} onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
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
                          value={info.enableCNL}
                          onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        CNL Option(s):
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="CNLOptions" type="multiSelect" options={lookupOptions} value={info.CNLOptions} onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
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
                          value={info.msgBodyRemoval}
                          onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Last Updated:
                      </Col>
                      <Col md={ 6 }>
                        <FormControl
                          className="info_label"
                          type="text"
                          name="lastUpdated"
                          value={info.lastUpdated} />
                      </Col>
                    </Row>
                  </Grid>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
        <ToastContainer
          toastMessageFactory={ ToastMessageFactory }
          ref="container"
          className="toast-top-right" />
      </div>
    );
  }

  componentWillMount(){

  }

  componentWillReceiveProps(nextProps){
    switch (nextProps.target) {
      case types.MISC_UPDATE_COUNTRYDETAILS_RESPONSE:
        console.log("nextProps.countryDetails==",nextProps.countryDetails);
        if( nextProps.countryDetails != {}){
          this.refs.container.success(`Account created successfully.`, ``, {
              closeButton: true,
          });
            // this.state.showEditModal =false;
           this.currentCntry =  nextProps.countryDetails.details;
        }
        else{
            // this.state.showEditModal =true;
            this.refs.container.error(`Failed to update country.`, ``, {
                closeButton: true,
          });
        }
    }
  }
}

function mapStateToProps( state ) {
  return {
    target: state.MiscCntry.target,
    countryDetails: state.MiscCntry.countryDetails
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
      updateCountryDetails : updateCountryDetails
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( EditCountryModal );
