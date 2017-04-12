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
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

class HubAccountGeneral extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          openStatus : {
            CommercialInfo : true,
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

    handleButtonClick(e){
      debugger;
    }

    render() {


        return (
          <div className="tabs-container">
            <Button name="CommercialInfo" onClick={this.handleButtonClick.bind(this)}>
              Commercial Information
            </Button>
            <Collapse in={this.state.openStatus.CommercialInfo}>
              <div>
                <Well>
                  <InfoGeneralCommercial/>
                </Well>
              </div>
            </Collapse>

            <Button name="SyBase" onClick={this.handleButtonClick.bind(this)}>
              SyBase 365 Contacts
            </Button>
            <Collapse in={this.state.openStatus.SyBase}>
              <div>
                <Well>
                  <InfoGeneralSybase/>
                </Well>
              </div>
            </Collapse>

            <Button name="AccContacts" onClick={this.handleButtonClick.bind(this)}>
              Account Contacts
            </Button>
            <Collapse in={this.state.openStatus.AccContacts}>
              <div>
                <Well>
                  <InfoGeneralAddContacts/>
                </Well>
              </div>
            </Collapse>

            <Button name="TechnicalInfo" onClick={this.handleButtonClick.bind(this)}>
              Technical Information
            </Button>
            <Collapse in={this.state.openStatus.TechnicalInfo}>
              <div>
                <Well>
                  <InfoGeneralTechnical/>
                </Well>
              </div>
            </Collapse>

            <Button name="volCntrl" onClick={this.handleButtonClick.bind(this)}>
              Volume Control Setting
            </Button>
            <Collapse in={this.state.openStatus.volCntrl}>
              <div>
                <Well>
                  <InfoGeneralVolumeSetting/>
                </Well>
              </div>
            </Collapse>

            <Button name="mtSetting" onClick={this.handleButtonClick.bind(this)}>
              MT Setting
            </Button>
            <Collapse in={this.state.openStatus.mtSetting}>
              <div>
                <Well>
                  <InfoGeneralMTSetting/>
                </Well>
              </div>
            </Collapse>

            <Button name="moSetting" onClick={this.handleButtonClick.bind(this)}>
              MO Setting
            </Button>
            <Collapse in={this.state.openStatus.moSetting}>
              <div>
                <Well>
                  <InfoGeneralMOSetting/>
                </Well>
              </div>
            </Collapse>

            <Button name="deliveryTime" onClick={this.handleButtonClick.bind(this)}>
              Preffered Delivery Time Window
            </Button>
            <Collapse in={this.state.openStatus.deliveryTime}>
              <div>
                <Well>
                  <InfoGeneralDeliveryTime/>
                </Well>
              </div>
            </Collapse>
          </div>
        )
    }

    componentWillReceiveProps(nextProps) {

      }

}

function mapStateToProps(state) {
    return { data: state.Account.accountCommInfo };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountGeneral);
