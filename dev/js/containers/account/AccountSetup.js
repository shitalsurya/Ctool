import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import CompaniesList from './CompaniesList';
import OpenAccountsList from './OpenAccountsList';

require('../../../scss/style.scss');

class AccountSetup extends React.Component {
    constructor(props, context) {
        super(props, context);
           this.selectedTab = 1;
          this.state={
            tabs:{
              companies:true,
                openAccounts:false,
                  closeAccounts:false
            }
        }
    }

    handleSelect(eventKey) {
       event.preventDefault();
       console.log( "eventKey ==", eventKey );
       this.selectedTab = eventKey;
       var _tabs={};
       switch (eventKey) {
         case 1:
             _tabs={
               companies:true,
                 openAccounts:false,
                   closeAccounts:false
             }
           break;
           case 2:
               _tabs={
                 companies:false,
                   openAccounts:true,
                     closeAccounts:false
               }
             break;
             case 3:
                 _tabs={
                   companies:false,
                     openAccounts:false,
                       closeAccounts:true
                 }
               break;
         }
           this.setState({tabs:_tabs});
     }
    render() {


        return (
               <div className="content">
                <div className="col-md-1"></div>
                                <div className="col-md-10 section-content">
                                <Nav bsStyle="tabs" activeKey={this.selectedTab} onSelect={this.handleSelect.bind(this)}>
                                       <NavItem eventKey={1} href="/home">Companies</NavItem>
                                       <NavItem eventKey={2} >Open accounts</NavItem>
                                       <NavItem eventKey={3} >Close accounts</NavItem>

                                     </Nav>
                                         {this.state.tabs.companies && <CompaniesList/>}
                                         {this.state.tabs.openAccounts && <OpenAccountsList/>}
                                </div>
                                  <div className="col-md-1"></div>
                </div>
        )
    }

    componentWillReceiveProps(nextProps) {

      }

}

function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSetup);
