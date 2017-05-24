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
               head_icon : "misc_icon",
               subVal:[
                 types.USER_MANAGEMENT,
                 types.COUNTRY_MANAGEMENT
               ]
             }
        }
  }
handleNLChange(name,val){
    this.currentCntry = this.state.currentCntry;
    if(this.currentCntry["countrynumberlookupoptionsids"]!==val){
        this.currentCntry["numberlookupids"]=val.toString();
      console.log( "handleNLChange==", this.currentCntry );
      this.props.updateCountryDetails("nl",this.currentCntry);
    }
}
handleCNLChange(name,val){
    this.currentCntry = this.state.currentCntry;
    if(this.currentCntry["customernumberlookupoptionsids"]!==val){
      this.currentCntry["numberlookupids"]=val.toString();
      console.log( "handleCNLChange==", this.currentCntry );
      this.props.updateCountryDetails("cnl",this.currentCntry);
    }
}

  handleInlineEditChange(name,val){
    this.currentCntry = this.state.currentCntry;
    if(this.currentCntry[name]!==val){
      this.currentCntry[name]=val;
      console.log( "handleInlineEditChange==", this.currentCntry );
      this.props.updateCountryDetails(name,this.currentCntry);
    }
  }

  handleToggleChange(e){
    console.log("handleToggleChange==",e.target.name);
    this.currentCntry = this.state.currentCntry;
    console.log( "handleInlineEditChange this.currentCntry==", this.currentCntry );
    this.currentCntry[e.target.name] = e.target.checked;//? "Yes" : "No";
    this.props.updateCountryDetails(e.target.name,this.currentCntry);
  }

  render(){
    const info = this.state.currentCntry;
    console.log("render currentCntry==",info);

    const lookupOptions = [
      { numberlookupid: 1, numberlookupname: 'Local-Numbering-Plan' },
      { numberlookupid: 2, numberlookupname: 'Local-Ported-Plan' },
      { numberlookupid: 3, numberlookupname: 'NRS'}
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
                          name="countryid"
                          value={info.countryid} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Name:
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="countryname" type="text" value={info.countryname} onSave={this.handleInlineEditChange.bind(this)}  />
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
                          value={info.continent.continentname} />
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
                          name="countrycode"
                          value={info.countrycode} />
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
                          name="mnemoniccountrycode"
                          value={info.mnemoniccountrycode} />
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
                          name="msisdnlength"
                          value={info.msisdnlength} />
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
                          value={info.minmsisdnlength} />
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
                          value={info.maxmsisdnlength} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Number Lookup Option(s):
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="numberlookupid" type="multiSelect"
                          options={lookupOptions}
                          optionsLabel="numberlookupname"
                          value={info.countrynumberlookupoptionsids}
                          onSave={this.handleNLChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Default Number Lookup:
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="numberlookupid" type="select" options={lookupOptions}
                          optionsLabel="numberlookupname"
                          value={info.numberlookupid}
                          onSave={this.handleInlineEditChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Enable CNL:
                      </Col>
                      <Col md={ 6 }>
                        <Toggle
                          name="enableCNL"
                          icons={{
                             checked: 'Yes',
                             unchecked: 'No',
                          }}
                          defaultChecked={info.enableCNL == "Yes" ? true : false}
                          value={info.enableCNL}
                          onChange={this.handleToggleChange.bind(this)} />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        CNL Option(s):
                      </Col>
                      <Col md={ 6 }>
                        <InlineEdit name="numberlookupid" type="multiSelect"
                          options={lookupOptions}
                          optionsLabel="numberlookupname"
                          value={info.customernumberlookupoptionsids}
                          onSave={this.handleCNLChange.bind(this)}  />
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 4 }>
                        Meassage Body Removal:
                      </Col>
                      <Col md={ 6 }>
                        <Toggle
                          name="msgBodyRemoval"
                          icons={{
                             checked: 'Yes',
                             unchecked: 'No',
                          }}
                          defaultChecked={info.msgBodyRemoval == "Yes" ? true : false}
                          value={info.msgBodyRemoval}
                          onChange={this.handleToggleChange.bind(this)} />
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
        if( nextProps.countryDetails ==0){
          this.refs.container.success(`Country updated successfully.`, ``, {
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
