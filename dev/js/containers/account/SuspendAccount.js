import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import Company from '../../../json/Company.json';
import Company from '../../../json/Account.json';
import { initializeData } from './actions/accountActions';
import * as types from './actions/accountActionTypes';
require( '../../../scss/style.scss' );

class SuspendAccount extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state = {
      susAccInfo : this.props.susAccInfo || [],
    };
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
                        options={this.companyList}
                        value={this.state.susAccInfo.company}
                        onChange={this.handleSelectFieldsChange.bind(this,types.SUSPEND_ACC_COMPANY)}  />
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

  handleSelectFieldsChange(target,value) {
    debugger;
    var info = this.state.susAccInfo;
    switch (target) {
      case types.SUSPEND_ACC_COMPANY:
        info.company = value.value;
        
        break;
      default:

    }
    this.setState({susAccInfo:info});
  }

  componentWillMount() {
    debugger;
    this.companyList = initializeData(Company,'code');
  }

}

export default SuspendAccount;
