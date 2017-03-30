import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';

require('../../../scss/style.scss');

class HubAccountMORouting extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {


        return (
                 <div className="controls-container">
                   <div className="rec">
                   <span>MO Routing</span>
                   </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountMORouting);
