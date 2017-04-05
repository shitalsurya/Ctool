import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import HubAccountGeneral from './HubAccountGeneral';
import HubAccountTPOA from './HubAccountTPOA';
import HubAccountMORouting from './HubAccountMORouting';
import HubAccountMTRouting from './HubAccountMTRouting';


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


        return (
                                <div>
                                <Nav bsStyle="tabs" activeKey={this.selectedTab} onSelect={this.handleSelect.bind(this)}>
                                       <NavItem eventKey={1} >{this.state.accountCaptions.General}</NavItem>
                                       <NavItem eventKey={2} >{this.state.accountCaptions.TPOA }</NavItem>
                                       <NavItem eventKey={3} >{this.state.accountCaptions.MORouting}</NavItem>
                                       <NavItem eventKey={4} >{this.state.accountCaptions.MTRouting }</NavItem>
                                     </Nav>
                                         {this.state.accountTabs.showGeneral && <HubAccountGeneral/>}
                                         {this.state.accountTabs.showTPOA && <HubAccountTPOA/>}
                                         {this.state.accountTabs.showMORouting && <HubAccountMORouting/>}
                                         {this.state.accountTabs.showMTRouting && <HubAccountMTRouting/>}
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
