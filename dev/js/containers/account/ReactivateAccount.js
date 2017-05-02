import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
require( '././../../../scss/style.scss' );
require( './../../../scss/datePick.scss' );
import Account from './../../../json/Account.json';
import BrandingHeader from './../common/components/BrandingHeader';
import Navigation from './../common/components/Navigation';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import * as types from './actions/accountActionTypes';
import * as type from '../common/commonActionTypes';
import { initializeData, handleReactivateAccCompany, setReactivateAccountInfo, getCompanyList } from './actions/accountActions';

class ReactivateAccount extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.state = {
        emptyFlag : false,
        reactivateAccInfo : {},
        submenus:[type.ACCOUNT_LIST,
                  type.ACCOUNT_CREATE,
                  type.ACCOUNT_SPND,
                  type.ACCOUNT_REAC,
                  type.ACCOUNT_CLOSE]
    };
  }

  checkEmpty(){
    if(!this.state.reactivateAccInfo.company) {
      this.setState({emptyFlag:true});
    }
  }


  render() {

    return(
      <div>
        <BrandingHeader/>
        <Grid fluid={true}>
          <Row>
            <Col md={2}>
              <Navigation submenus={this.state.submenus}></Navigation>
            </Col>
            <Col md={10}>
              <div className="controls-container">

                <div className="rec">
                  <div className="page-heading">
                    Reactivate Account
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
                          value={this.state.reactivateAccInfo.company}
                          onChange={this.handleSelectFieldsChange.bind(this,types.REACTIVATE_ACC_COMPANY)}  />
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
                          value={this.state.reactivateAccInfo.account}
                          onChange={this.handleSelectFieldsChange.bind(this,types.REACTIVATE_ACC_ACCOUNT)}
                          onOpen={this.checkEmpty.bind(this)}  />
                      </Col>
                      <Col mdHidden md={ 3 }/>
                    </Row>

                    <Row className="show-grid" hidden={this.state.reactivateAccInfo.date ? false : "hidden"}>
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Suspended On :
                      </Col>
                      <Col md={ 6 }>
                        <FormControl.Static>
                          {this.state.reactivateAccInfo.date}
                        </FormControl.Static>
                      </Col>
                      <Col mdHidden md={ 3 }/>
                    </Row>

                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 5 }>
                        <Button bsStyle="primary" onClick={this.handleSubmitReactivateAcc.bind(this)}>
                          Reactivate Account
                        </Button>
                      </Col>
                      <Col mdHidden md={ 3 }/>
                    </Row>
                  </Grid>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
      );
  }


handleSubmitReactivateAcc(){
  this.props.setReactivateAccountInfo(this.state.reactivateAccInfo);
  console.log(this.state.reactivateAccInfo);
  this.setState({reactivateAccInfo : {} });
  this.accountList = [];
}

handleSelectFieldsChange(target,value) {

    var info = this.state.reactivateAccInfo;
    switch (target) {
      case types.REACTIVATE_ACC_COMPANY:
        info = {};
        info.company = value.value;
        const reactivateAccObj = {
          "company" :value.value,
          "accounts" : Account
        }
        var updatedAccountList = this.props.handleReactivateAccCompany(reactivateAccObj);
        this.accountList = initializeData(updatedAccountList,'account');
        break;
      case types.REACTIVATE_ACC_ACCOUNT:
        info.account = value.value;
        var date = Account.data.filter(function (header, item) {
          if(header.account === value.value)
            return header.date;
        }.bind(this));
        if(date.length)
          info.date = date[0].date;
        else
          info.date = null;
        break;
      }
    this.setState({reactivateAccInfo:info,emptyFlag:false});
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
      handleReactivateAccCompany : handleReactivateAccCompany,
      setReactivateAccountInfo : setReactivateAccountInfo,
      getCompanyList : getCompanyList
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactivateAccount);;
