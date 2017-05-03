import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import BrandingHeader from './../common/components/BrandingHeader';
import Navigation from './../common/components/Navigation';
// import Company from './../../../../json/Company.json';
import Account from './../../../json/Account.json';
import { initializeData, handleCloseAccCompany, setCloseAccountInfo, getCompanyList } from './actions/accountActions';
import * as types from './actions/accountActionTypes';
import * as type from '../common/commonActionTypes';
require( './../../../scss/style.scss' );
require( './../../../scss/datePick.scss' );

class CloseAccount extends React.Component {
  constructor( props, context ) {
    super( props, context );

    this.state = {
      emptyFlag : false,
      warnFlag : false,
      closeAccInfo : {},
      submenus:{
        head: type.ACCOUNT_LIST,
        head_icon : "accounts-icon",
        subVal:[
          type.ACCOUNT_CREATE,
          type.ACCOUNT_SPND,
          type.ACCOUNT_REAC,
          type.ACCOUNT_CLOSE
        ]
      }
    };

  }

  checkEmpty(){
    if(!this.state.closeAccInfo.company) {
      this.setState({emptyFlag:true});
    }
  }

  render() {

    return (
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
                    Close Account
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
                          value={this.state.closeAccInfo.company}
                          onChange={this.handleSelectFieldsChange.bind(this,types.CLOSE_ACC_COMPANY)}  />
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
                          value={this.state.closeAccInfo.account}
                          onChange={this.handleSelectFieldsChange.bind(this,types.CLOSE_ACC_ACCOUNT)}
                          onOpen={this.checkEmpty.bind(this)}  />
                      </Col>
                      <Col mdHidden md={ 3 }/>
                    </Row>

                    <Row className="show-grid" hidden={this.state.closeAccInfo.manager ? false : "hidden"}>
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Account Manager :
                      </Col>
                      <Col md={ 6 }>
                        <FormControl.Static>
                          {this.state.closeAccInfo.manager}
                        </FormControl.Static>
                      </Col>
                      <Col mdHidden md={ 3 }/>
                    </Row>

                    <Row className="show-grid" hidden={this.state.warnFlag ? false : "hidden"}>
                      <Col md={ 12 } className="error-msg">
                        WARNING : All Routing will be removed when the account is closed !
                        Please review the account details before proceeding.
                      </Col>
                    </Row>

                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 5 } >
                        <Button bsStyle="primary" onClick={this.handleSubmitClose.bind(this)}>
                          Close Account
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

  handleSubmitClose(){
    this.props.setCloseAccountInfo(this.state.closeAccInfo);
    console.log(this.state.closeAccInfo);
    this.setState({warnFlag:false,closeAccInfo : {}});
    this.accountList = [];
  }

  handleSelectFieldsChange(target,value) {

    var info = this.state.closeAccInfo;
    switch (target) {
      case types.CLOSE_ACC_COMPANY:
        info = {};
        info.company = value.value;
        const closeAccObj = {
          "company" :value.value,
          "accounts" : Account
        }
        var updatedAccountList = this.props.handleCloseAccCompany(closeAccObj);
        this.accountList = initializeData(updatedAccountList,'account');
        break;
      case types.CLOSE_ACC_ACCOUNT:
        info.account = value.value;
        this.setState({warnFlag:true});
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
    this.setState({closeAccInfo:info,emptyFlag:false});
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
      handleCloseAccCompany : handleCloseAccCompany,
      setCloseAccountInfo : setCloseAccountInfo,
      getCompanyList : getCompanyList
        }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CloseAccount);
