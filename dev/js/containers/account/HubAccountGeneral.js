import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';

require('../../../scss/style.scss');

class HubAccountGeneral extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {


        return (
          <div className="tabs-container">
            <div className="rec">

            </div>
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
