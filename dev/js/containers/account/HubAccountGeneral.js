import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Col, Row, Grid } from 'react-bootstrap';
import InfoGeneralCommercial from './InfoGeneralCommercial';
import InfoGeneralSybase from './InfoGeneralSybase';
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
