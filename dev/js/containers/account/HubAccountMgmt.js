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
           this.selectedTab = 4;
          this.state={
            accountTabs:{
              showGeneral:false,
                showTPOA:false,
                showMORouting:false,
                  showMTRouting:true
            },
            accountCaptions:{
              General:"General",
                TPOA:"TPOA",
                MORouting:"MORouting",
                MTRouting:"MTRouting"
            }
        }
    }

    handleSelect(eventKey) {
       event.preventDefault();
          this.selectedTab = eventKey;
       var accountTabs={};
       switch (eventKey) {
         case 1:
           accountTabs={
             showGeneral:true,
               showTPOA:false,
               showMORouting:false,
                 showMTRouting:false
           }
           break;
           case 2:
             accountTabs={
               showGeneral:false,
                 showTPOA:true,
                 showMORouting:false,
                   showMTRouting:false
             }
             break;
             case 3:
               accountTabs={
                 showGeneral:false,
                   showTPOA:false,
                   showMORouting:true,
                     showMTRouting:false
               }
               break;
               case 4:
                 accountTabs={
                   showGeneral:false,
                     showTPOA:false,
                     showMORouting:false,
                       showMTRouting:true
                 }
                 break;
         }
         this.setState({accountTabs:accountTabs});
          //  this.setState({accountTabs:accountTabs},function(){
          //       console.log("this.state.accountTabs==",this.state.accountTabs);
          //  });

     }
    render() {

      const styles = {
        tabs: {
            // width: '1100px',
            display: 'inline-block',
            marginRight: '30px',
            verticalAlign: 'top'
        },
        links: {
            margin: 0,
            padding: '0 20px'
        },
        tabLink: {
            // height: '30px',
            lineHeight: '30px',
            padding: '10px 20px',
            cursor: 'pointer',
            borderBottom: '2px solid transparent',
            display: 'inline-block'
        },
        activeLinkStyle: {
            borderBottom: '2px solid #333'
        },
        visibleTabStyle: {
            display: 'inline-block'
        },
        content: {
            padding: '0 15px'
        },
        tabContent: {
          width: '1000px'
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
              <div style={styles.content}>
                <TabContent for="General" style={styles.tabContent}>
                  <HubAccountGeneral/>
                </TabContent>
                <TabContent for="TPOA" style={styles.tabContent}>
                  <HubAccountTPOA/>
                </TabContent>
                <TabContent for="MORouting" style={styles.tabContent}>
                  <HubAccountMORouting/>
                </TabContent>
                <TabContent for="MTRouting" style={styles.tabContent}>
                  <HubAccountMTRouting/>
                </TabContent>
              </div>
          </Tabs>
        </div>
        )
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
