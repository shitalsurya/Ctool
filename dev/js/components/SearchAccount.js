import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestSearch } from '../actions/authActions';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, ButtonGroup, Button } from 'react-bootstrap';
import Select from 'react-select';
import {Radio} from 'react-bootstrap';
import SearchResults from '../components/SearchResults';
require( '../../scss/style.scss' );


class Search extends React.Component {

  render() {
    this.searchObj = {};
    return (
        <Grid fluid={ true }>
        <Row className="show-grid">
          <Col
               componentClass={ ControlLabel }
               md={ 12 }> Search for Account
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
          <div className="line"></div>
          </Col>
        </Row>
        <Row>
          <Col
               componentClass={ ControlLabel }
               md={ 12 }> Account Name:
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
          <FormControl
                       type="text"
                       ref="userEmail"
                       placeholder="Enter commercial name" />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col
               componentClass={ ControlLabel }
               md={ 12 }> Company Name:
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
          <FormControl
                       type="text"
                       ref="userEmail"
                       placeholder="Enter commercial name" />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col
               componentClass={ ControlLabel }
               md={ 12 }> Default TPOA:
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
          <FormControl
                       type="text"
                       ref="userEmail"
                       placeholder="Enter commercial name" />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col
               componentClass={ ControlLabel }
               md={ 12 }> Customer ID:
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
          <FormControl
                       type="text"
                       ref="userEmail"
                       placeholder="Enter commercial name" />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col
               componentClass={ ControlLabel }
               md={ 12 }> Status:
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
          <Radio inline checked>
               Any
             </Radio>
             <Radio inline >
                 Live
               </Radio>
               <Radio inline >
                   Not live
                 </Radio>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col
               componentClass={ ControlLabel }
               md={ 12 }> Revenue Sharing:
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
          <Radio inline checked>
               Any
             </Radio>
             <Radio inline >
                 Standard
               </Radio>
               <Radio inline >
                 RS
                 </Radio>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col
               componentClass={ ControlLabel }
               md={ 12 }> Billing Location:
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
          <Select.Async
                name="form-field-name"
                placeholder="Select interface.."
            />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col
               componentClass={ ControlLabel }
               md={ 12 }> MT Customer Login:
          </Col>
        </Row>
        <Row>
          <Col md={ 12 }>
          <FormControl
                       type="text"
                       ref="userEmail"
                       placeholder="Enter commercial name" />
          </Col>
        </Row>
        </Grid>

    );
  }
  requestSearch() {
    console.log( "name==", this.refs.name.value );
    this.props.requestSearch( this.refs.name.value );
  }
}
function mapStateToProps( state ) {
  return {
    data: state.Auth.data
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    requestSearch: requestSearch
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Search );
