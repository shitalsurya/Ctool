import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
// import Company from '../../../json/Company.json';
import Account from '../../../json/Account.json';
import { initializeData, handleSuspendAccCompany, setSuspendAccountInfo, getCompanyList } from './actions/accountActions';
import { DateField, Calendar } from 'react-date-picker';
import * as types from './actions/accountActionTypes';
require( '../../../scss/style.scss' );
require( '../../../scss/datePick.scss' );

class SuspendAccount extends React.Component {
  constructor( props, context ) {
    super( props, context );

    this.state = {
      emptyFlag : false,
      susAccInfo : {},
    };

  }

  checkEmpty(){
    if(!this.state.susAccInfo.company) {
      this.setState({emptyFlag:true});
    }
  }

  render() {

    const onChange = (dateString, { dateMoment, timestamp }) => {
      var info = this.state.susAccInfo;
      info.date = dateString;
      this.setState({susAccInfo:info});
    }

    return (
      <div>
        <div className="controls-container">

          <div className="rec">
            <div className="page-heading">
              Suspend Account
            </div>
          </div>

          <div>
            <Grid fluid={true}>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Company :
                </Col>
                <Col md={ 6 } className={this.state.emptyFlag ? "empty" : false}>
                  <Select
                        placeholder="Select Company.."
                        options={this.companyList}
                        value={this.state.susAccInfo.company}
                        onChange={this.handleSelectFieldsChange.bind(this,types.SUSPEND_ACC_COMPANY)}  />
                      <div hidden={this.state.emptyFlag ? false : "hidden"} className="error-msg">Enter Company</div>

                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Account :
                </Col>
                <Col md={ 6 } >
                  <Select
                        placeholder="Select Account.."
                        options={this.accountList}
                        value={this.state.susAccInfo.account}
                        onChange={this.handleSelectFieldsChange.bind(this,types.SUSPEND_ACC_ACCOUNT)}
                        onOpen={this.checkEmpty.bind(this)}  />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid" hidden={this.state.susAccInfo.manager ? false : "hidden"}>
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Account Manager :
                </Col>
                <Col md={ 6 }>
                    <FormControl.Static>
                      {this.state.susAccInfo.manager}
                    </FormControl.Static>
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Date :
                </Col>
                <Col md={ 6 }>
                  <DateField
                    dateFormat="DD-MM-YYYY"
                    value={this.state.susAccInfo.date}
                    onChange={onChange}
                    placeholder="Select Date.."
                  />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  <Button bsStyle="primary" onClick={this.handleSubmitSuspend.bind(this)}>
                    Suspend Account
                  </Button>
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

            </Grid>
          </div>
        </div>
      </div>
    );
  }

  handleSubmitSuspend(){
    this.props.setSuspendAccountInfo(this.state.susAccInfo);
    console.log(this.state.susAccInfo);
    this.setState({susAccInfo : {}});
    this.accountList = [];
  }

  handleSelectFieldsChange(target,value) {

    var info = this.state.susAccInfo;
    switch (target) {
      case types.SUSPEND_ACC_COMPANY:
        info = {};
        info.company = value.value;
        const spndAccObj = {
          "company" :value.value,
          "accounts" : Account
        }
        var updatedAccountList = this.props.handleSuspendAccCompany(spndAccObj);
        this.accountList = initializeData(updatedAccountList,'account');
        break;
      case types.SUSPEND_ACC_ACCOUNT:
        info.account = value.value;
        var manager = Account.data.filter(function (header, item) {
          if(header.account === value.value)
            return header.manager;
        }.bind(this));
        if(manager.length)
          info.manager = manager[0].manager;
        else
          info.manager = null;
        break;
    }
    this.setState({susAccInfo:info,emptyFlag:false});
  }

  componentWillMount() {
    let Company = this.props.getCompanyList();
    this.companyList = initializeData(Company,'code');
  }

}

function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
      handleSuspendAccCompany : handleSuspendAccCompany,
      setSuspendAccountInfo : setSuspendAccountInfo,
      getCompanyList : getCompanyList
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SuspendAccount);
