import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import HubAccountGeneral from './HubAccountGeneral';
import HubAccountTPOA from './HubAccountTPOA';
import HubAccountMORouting from './HubAccountMORouting';
import HubAccountMTRouting from './HubAccountMTRouting';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

import {handleSelectFieldsChange} from '../../containers/account/actions/accountActions'
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

class HubAccountMgmt extends React.Component {
    constructor(props, context) {
        super(props, context);
          this.state={
            accountCaptions:{
                General:"General",
                TPOA:"TPOA",
                MORouting:"MORouting",
                MTRouting:"MTRouting"
            }
        }
    }

    render() {

        return (
          <div>
            <Tabs className="tabs" >
              <div className="links">
                  <TabLink to="General" default className="tab-link">{this.state.accountCaptions.General}</TabLink>
                  <TabLink to="TPOA" className="tab-link">{this.state.accountCaptions.TPOA }</TabLink>
                  <TabLink to="MORouting" className="tab-link">{this.state.accountCaptions.MORouting}</TabLink>
                  <TabLink to="MTRouting" className="tab-link">{this.state.accountCaptions.MTRouting }</TabLink>
              </div>
              <div className="content" >
                <TabContent for="General">
                  <HubAccountGeneral/>
                </TabContent>
                <TabContent for="TPOA">
                  <HubAccountTPOA/>
                </TabContent>
                <TabContent for="MORouting">
                  <HubAccountMORouting/>
                </TabContent>
                <TabContent for="MTRouting">
                  <HubAccountMTRouting/>
                </TabContent>
              </div>
          </Tabs>
        </div>
      );
    }

    componentWillReceiveProps(nextProps) {

      }

}

function mapStateToProps(state) {
    return { data: state.Account.accountCommInfo, showTechnicalDetails: state.Account.showTechnicalDetails,
    showCommDetails:state.Account.showCommDetails };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ handleSelectFieldsChange: handleSelectFieldsChange }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountMgmt);
