import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SelectField from 'material-ui/SelectField';
import { Nav,NavItem } from 'react-bootstrap';
import HubAccountGeneral from './HubAccountGeneral';
import HubAccountTPOA from './HubAccountTPOA';
import {handleSelectFieldsChange} from '../../containers/account/actions/accountActions'

require('../../../scss/style.scss');

class HubAccountMgmt extends React.Component {
    constructor(props, context) {
        super(props, context);
          this.state={
            accountTabs:{
              showGeneral:true,
                showTPOA:false
            },
            accountCaptions:{
              General:"General",
                TPOA:"TPOA"
            }
        }
    }

    handleSelect(eventKey) {
       event.preventDefault();
       console.log( "eventKey ==", eventKey );
       var accountTabs={};
       switch (eventKey) {
         case "1":
           accountTabs={
             showGeneral:true,
               showTPOA:false
           }
           break;
           case "2":
             accountTabs={
               showGeneral:false,
                 showTPOA:true
             }
             break;
         }
           this.setState({accountTabs:accountTabs});
     }
    render() {


        return (
               <div className="content">
                <div className="col-md-1"></div>
                                <div className="col-md-10 section-content">
                                <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect.bind(this)}>
                                       <NavItem eventKey="1" href="/home">{this.state.accountCaptions.General}</NavItem>
                                       <NavItem eventKey="2" title="Item">{this.state.accountCaptions.TPOA }</NavItem>

                                     </Nav>
                                         {this.state.accountTabs.showGeneral && <HubAccountGeneral/>}
                                         {this.state.accountTabs.showTPOA && <HubAccountTPOA/>}
                                </div>
                                  <div className="col-md-1"></div>
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
