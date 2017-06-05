import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Col, Row, Grid, Collapse, Button, Well } from 'react-bootstrap';
import InfoGeneralCommercial from './InfoGeneralCommercial';
import InfoGeneralSybase from './InfoGeneralSybase';
import InfoGeneralAddContacts from './InfoGeneralAddContacts';
import InfoGeneralTechnical from './InfoGeneralTechnical';
import InfoGeneralVolumeSetting from './InfoGeneralVolumeSetting';
import InfoGeneralMTSetting from './InfoGeneralMTSetting';
import InfoGeneralMOSetting from './InfoGeneralMOSetting';
import InfoGeneralDeliveryTime from './InfoGeneralDeliveryTime';
import InfoGeneralAddCNL from './InfoGeneralAddCNL';
import InfoGeneralAddIP from './InfoGeneralAddIP';
import InfoGeneralEmail from './InfoGeneralEmail';
// import {getList} from './../../../common/commonActions';
require('./../../../../../scss/style.scss');
require('./../../../../../scss/tabs.scss');
import * as types from './../../../common/commonActionTypes';

class HubAccountGeneral extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          openStatus : {
            CommercialInfo : false,
            SyBase : false,
            AccContacts : false,
            AccCNL:false,
            TechnicalInfo : false,
            volCntrl : false,
            mtSetting : false,
            IPAddress : false,
            moSetting : false,
            deliveryTime : false,
            email : false
          }
        };

    }

    render() {

        return (
          <div className="tabs-container">

            <Grid fluid={true} >

              <Row className="show-grid">
                <Col md={ 12 }>
                  <div className="rec_tab" onClick={this.handleButtonClick.bind(this , types.INFO_GENERAL_COMMERCIAL)}>
                    <span className={this.state.openStatus.CommercialInfo ? "nav-up-icon" : "nav-down-icon"} >
                      Commercial Information
                    </span>
                  </div>
                  <Collapse in={this.state.openStatus.CommercialInfo}>
                    <div>
                      <Well>
                      {this.state.openStatus.CommercialInfo &&  <InfoGeneralCommercial currentAcct={this.props.currentAcct}/> }
                      </Well>
                    </div>
                  </Collapse>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col md={ 12 }>
                  <div className="rec_tab" onClick={this.handleButtonClick.bind(this,types.INFO_GENERAL_SYBASE)}>
                    <span className={this.state.openStatus.SyBase ? "nav-up-icon" : "nav-down-icon"} >
                      SyBase 365 Contacts
                    </span>
                  </div>
                  <Collapse in={this.state.openStatus.SyBase}>
                    <div>
                      <Well>
                        {this.state.openStatus.SyBase &&  <InfoGeneralSybase currentAcct={this.props.currentAcct}/> }
                      </Well>
                    </div>
                  </Collapse>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col md={ 12 }>
                  <div className="rec_tab" onClick={this.handleButtonClick.bind(this,types.INFO_GENERAL_ACC_CONTACTS)}>
                    <span className={this.state.openStatus.AccContacts ? "nav-up-icon" : "nav-down-icon"} >
                      Account Contacts
                    </span>
                  </div>
                  <Collapse in={this.state.openStatus.AccContacts}>
                    <div>
                      <Well>
                      {this.state.openStatus.AccContacts &&  <InfoGeneralAddContacts currentAcct={this.props.currentAcct}/> }
                      </Well>
                    </div>
                  </Collapse>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col md={ 12 }>
                  <div className="rec_tab" onClick={this.handleButtonClick.bind(this,types.INFO_GENERAL_ACC_CNL)}>
                    <span className={this.state.openStatus.AccCNL ? "nav-up-icon" : "nav-down-icon"} >
                      Custom Number Lookup Mode Settings
                    </span>
                  </div>
                  <Collapse in={this.state.openStatus.AccCNL}>
                    <div>
                      <Well>
                        {this.state.openStatus.AccCNL &&  <InfoGeneralAddCNL currentAcct={this.props.currentAcct}/> }
                      </Well>
                    </div>
                  </Collapse>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col md={ 12 }>
                  <div className="rec_tab" onClick={this.handleButtonClick.bind(this,types.INFO_GENERAL_TECHNICAL)}>
                    <span className={this.state.openStatus.TechnicalInfo ? "nav-up-icon" : "nav-down-icon"} >
                      Technical Information
                    </span>
                  </div>
                  <Collapse in={this.state.openStatus.TechnicalInfo}>
                    <div>
                      <Well>
                      {this.state.openStatus.TechnicalInfo &&  <InfoGeneralTechnical currentAcct={this.props.currentAcct}/> }
                      </Well>
                    </div>
                  </Collapse>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col md={ 12 }>
                  <div className="rec_tab" onClick={this.handleButtonClick.bind(this, types.INFO_GENERAL_VOLUME)}>
                    <span className={this.state.openStatus.volCntrl ? "nav-up-icon" : "nav-down-icon"} >
                      Volume Control Setting
                    </span>
                  </div>
                  <Collapse in={this.state.openStatus.volCntrl}>
                    <div>
                      <Well>
                      {this.state.openStatus.volCntrl &&  <InfoGeneralVolumeSetting currentAcct={this.props.currentAcct}/> }
                      </Well>
                    </div>
                  </Collapse>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col md={ 12 }>
                  <div className="rec_tab" onClick={this.handleButtonClick.bind(this, types.INFO_GENERAL_MTSETTING)}>
                    <span className={this.state.openStatus.mtSetting ? "nav-up-icon" : "nav-down-icon"} >
                      MT Setting
                    </span>
                  </div>
                  <Collapse in={this.state.openStatus.mtSetting}>
                    <div>
                      <Well>
                      {this.state.openStatus.mtSetting &&  <InfoGeneralMTSetting currentAcct={this.props.currentAcct}/> }
                      </Well>
                    </div>
                  </Collapse>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col md={ 12 }>
                  <div className="rec_tab" onClick={this.handleButtonClick.bind(this,types.INFO_GENERAL_IP_ADDRESS)}>
                    <span className={this.state.openStatus.IPAddress ? "nav-up-icon" : "nav-down-icon"} >
                      IP Address
                    </span>
                  </div>
                  <Collapse in={this.state.openStatus.IPAddress}>
                    <div>
                      <Well>
                      {this.state.openStatus.IPAddress &&  <InfoGeneralAddIP currentAcct={this.props.currentAcct}/> }
                      </Well>
                    </div>
                  </Collapse>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col md={ 12 }>
                  <div className="rec_tab" onClick={this.handleButtonClick.bind(this, types.INFO_GENERAL_MOSETTING)}>
                    <span className={this.state.openStatus.moSetting ? "nav-up-icon" : "nav-down-icon"} >
                      MO Setting
                    </span>
                  </div>
                  <Collapse in={this.state.openStatus.moSetting}>
                    <div>
                      <Well>
                      {this.state.openStatus.moSetting &&  <InfoGeneralMOSetting currentAcct={this.props.currentAcct}/> }
                      </Well>
                    </div>
                  </Collapse>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col md={ 12 }>
                  <div className="rec_tab" onClick={this.handleButtonClick.bind(this, types.INFO_GENERAL_DELIVERY)} >
                    <span className={this.state.openStatus.deliveryTime ? "nav-up-icon" : "nav-down-icon"}>
                      Prefered Delivery Time Window
                    </span>
                  </div>
                  <Collapse in={this.state.openStatus.deliveryTime}>
                    <div>
                      <Well>
                      {this.state.openStatus.deliveryTime &&  <InfoGeneralDeliveryTime currentAcct={this.props.currentAcct}/> }
                      </Well>
                    </div>
                  </Collapse>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col md={ 12 }>
                  <div className="rec_tab" onClick={this.handleButtonClick.bind(this, types.INFO_EMAIL)} >
                    <span className={this.state.openStatus.email ? "nav-up-icon" : "nav-down-icon"}>
                      Email
                    </span>
                  </div>
                  <Collapse in={this.state.openStatus.email}>
                    <div>
                      <Well>
                          {this.state.openStatus.email &&  <InfoGeneralEmail currentAcct={this.props.currentAcct}/> }
                      </Well>
                    </div>
                  </Collapse>
                </Col>
              </Row>
            </Grid>

          </div>
        )
    }

    handleButtonClick(target){
      let updatedOpenStatus = this.state.openStatus;
      switch (target) {
        case types.INFO_GENERAL_COMMERCIAL:
          updatedOpenStatus.CommercialInfo = !this.state.openStatus.CommercialInfo;
          break;
        case types.INFO_GENERAL_SYBASE:
          updatedOpenStatus.SyBase = !this.state.openStatus.SyBase;
          break;
        case types.INFO_GENERAL_ACC_CONTACTS:
          updatedOpenStatus.AccContacts = !this.state.openStatus.AccContacts;
          break;
        case types.INFO_GENERAL_ACC_CNL:
          updatedOpenStatus.AccCNL = !this.state.openStatus.AccCNL;
          break;
        case types.INFO_GENERAL_TECHNICAL:
          updatedOpenStatus.TechnicalInfo = !this.state.openStatus.TechnicalInfo;
          break;
        case types.INFO_GENERAL_VOLUME:
          updatedOpenStatus.volCntrl = !this.state.openStatus.volCntrl;
          break;
        case types.INFO_GENERAL_MTSETTING:
          updatedOpenStatus.mtSetting = !this.state.openStatus.mtSetting;
          break;
        case types.INFO_GENERAL_IP_ADDRESS:
          updatedOpenStatus.IPAddress = !this.state.openStatus.IPAddress;
          break;
        case types.INFO_GENERAL_MOSETTING:
          updatedOpenStatus.moSetting = !this.state.openStatus.moSetting;
          break;
        case types.INFO_GENERAL_DELIVERY:
          updatedOpenStatus.deliveryTime = !this.state.openStatus.deliveryTime;
          break;
        case types.INFO_EMAIL:
          updatedOpenStatus.email = !this.state.openStatus.email;
          break;
      }
      this.setState({openStatus : updatedOpenStatus});
    }


}

function mapStateToProps(state) {
    return {
     };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      // getList:getList
     }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountGeneral);
