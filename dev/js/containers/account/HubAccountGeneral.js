import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';

require('../../../scss/style.scss');

class HubAccountTPOA extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {


        return (
                 <div className="controls-container">
                   <div className="rec">
                   <span>Commercial Information</span>
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
    return bindActionCreators({ handleSelectFieldsChange: handleSelectFieldsChange }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountTPOA);
