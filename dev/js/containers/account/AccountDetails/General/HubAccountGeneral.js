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
            TechnicalInfo : false,
            volCntrl : false,
            mtSetting : false,
            moSetting : false,
            deliveryTime : false
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
        case types.INFO_GENERAL_TECHNICAL:
          updatedOpenStatus.TechnicalInfo = !this.state.openStatus.TechnicalInfo;
          break;
        case types.INFO_GENERAL_VOLUME:
          updatedOpenStatus.volCntrl = !this.state.openStatus.volCntrl;
          break;
        case types.INFO_GENERAL_MTSETTING:
          updatedOpenStatus.mtSetting = !this.state.openStatus.mtSetting;
          break;
        case types.INFO_GENERAL_MOSETTING:
          updatedOpenStatus.moSetting = !this.state.openStatus.moSetting;
          break;
        case types.INFO_GENERAL_DELIVERY:
          updatedOpenStatus.deliveryTime = !this.state.openStatus.deliveryTime;
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
