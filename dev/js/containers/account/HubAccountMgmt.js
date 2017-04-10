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

      const styles = {
        tabs: {
            display: 'inline-block',
            marginRight: '30px',
            verticalAlign: 'top'
        },
        links: {
            margin: 0,
            padding: '0 20px'
        },
        tabLink: {
            lineHeight: '30px',
            padding: '10px 20px',
            cursor: 'pointer',
            borderBottom: '2px solid transparent',
            display: 'inline-block',
            marginTop: '30px'
        },
        activeLinkStyle: {
            borderBottom: '2px solid #333',
            background: 'white',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.2)'
        },
        visibleTabStyle: {
            display: 'inline-block'
        },
        content: {
            padding: '0 20px'
        }
      };

        return (
          <div>
            <Tabs activeLinkStyle={styles.activeLinkStyle} visibleTabStyle={styles.visibleTabStyle} style={styles.tabs} >
              <div style={styles.links}>
                  <TabLink to="General" default style={styles.tabLink}>{this.state.accountCaptions.General}</TabLink>
                  <TabLink to="TPOA" style={styles.tabLink}>{this.state.accountCaptions.TPOA }</TabLink>
                  <TabLink to="MORouting" style={styles.tabLink}>{this.state.accountCaptions.MORouting}</TabLink>
                  <TabLink to="MTRouting" style={styles.tabLink}>{this.state.accountCaptions.MTRouting }</TabLink>
              </div>
              <div style={styles.content} >
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
