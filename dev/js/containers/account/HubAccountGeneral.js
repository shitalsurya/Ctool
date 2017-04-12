import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Col, Row, Grid } from 'react-bootstrap';
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
    }


    render() {


        return (
          <div className="tabs-container">
            <Tabs className="tabs" >
              <Row >
                <Col sm={4}>
                  <div className="links_stacked">
                      <TabLink to="CommercialInfo" default className="tab-link">Commercial Information</TabLink>
                      <TabLink to="SyBase" className="tab-link">SyBase 365 Contacts</TabLink>
                      <TabLink to="AccContacts" className="tab-link">Account Contacts</TabLink>
                      <TabLink to="TechnicalInfo" className="tab-link">Technical Information</TabLink>
                      <TabLink to="volCntrl" className="tab-link">Volume Control Setting</TabLink>
                      <TabLink to="mtSetting" className="tab-link">MT Setting</TabLink>
                      <TabLink to="moSetting" className="tab-link">MO Setting</TabLink>
                      <TabLink to="deliveryTime" className="tab-link">Preffered Delivery Time Window</TabLink>

                  </div>
                </Col>
                <Col sm={8}>
                  <div className="content" >
                    <TabContent for="CommercialInfo">
                      <InfoGeneralCommercial/>
                    </TabContent>
                    <TabContent for="SyBase">
                      <InfoGeneralSybase/>
                    </TabContent>
                    <TabContent for="AccContacts">
                      <InfoGeneralAddContacts/>
                    </TabContent>
                    <TabContent for="TechnicalInfo">
                      <InfoGeneralTechnical/>
                    </TabContent>
                    <TabContent for="volCntrl">
                      <InfoGeneralVolumeSetting/>
                    </TabContent>
                    <TabContent for="mtSetting">
                      <InfoGeneralMTSetting/>
                    </TabContent>
                    <TabContent for="moSetting">
                      <InfoGeneralMOSetting/>
                    </TabContent>
                    <TabContent for="deliveryTime">
                      <InfoGeneralDeliveryTime/>
                    </TabContent>

                  </div>
                </Col>
              </Row>
            </Tabs>
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
