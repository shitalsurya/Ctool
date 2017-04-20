import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import CompaniesList from './CompaniesList';
import OpenAccountsList from './OpenAccountsList';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
require('../../../scss/style.scss');

class AccountSetup extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {

        return (
          <div>
            <Tabs className="tabs" >
              <div className="links">
                <TabLink to="Companies" default className="tab-link">Companies</TabLink>
                <TabLink to="OpenAccounts" className="tab-link">Open accounts</TabLink>
                <TabLink to="CloseAccounts" className="tab-link">Close accounts</TabLink>
              </div>
              <div className="content" >
                <TabContent for="Companies">
                  <CompaniesList/>
                </TabContent>
                <TabContent for="OpenAccounts">
                  <OpenAccountsList/>
                </TabContent>
                <TabContent for="CloseAccounts">

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
    return { };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSetup);
