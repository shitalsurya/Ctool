import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
require( '../../../scss/style.scss' );

class SuspendAccount extends React.Component {
  constructor( props, context ) {
    super( props, context );
  }

  render() {

    const options = [];

    return (
      <div>
        <div className="controls-container">

          <div className="rec">
            <div className="line page-heading">
              Suspend Account
            </div>
          </div>

          <div>
            <Grid fluid={true}>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Company :
                </Col>
                <Col md={ 6 }>
                  <Select
                        placeholder="Select Company.."
                        options={options}  />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Account :
                </Col>
                <Col md={ 6 }>

                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Account Manager :
                </Col>
                <Col md={ 6 }>

                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Date :
                </Col>
                <Col md={ 6 }>

                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

            </Grid>
          </div>
        </div>
      </div>
    );
  }

}

export default SuspendAccount;
