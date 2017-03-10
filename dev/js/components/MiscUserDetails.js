import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import * as types from '../actions/actionTypes';
require( '../../scss/style.scss' );

class MiscUserDetails extends React.Component {
  constructor( props, context ) {
    super( props, context );
  }

  render() {

    return (
      <Row className="user-details-row">

        <Col
             className="list-col"
             md={ 12 }>User Details
             </Col>
           </Row>
    )
  }

}
function mapStateToProps( state ) {
  return {
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( MiscUserDetails );
