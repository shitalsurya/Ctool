import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import BrandingHeader from './../../common/components/BrandingHeader';
import Navigation from './../../common/components/Navigation';
import HubAccountGeneral from './General/HubAccountGeneral';
import HubAccountTPOA from './TPOA/HubAccountTPOA';
import HubAccountMORouting from './MORouting/HubAccountMORouting';
import HubAccountMTRouting from './MTRouting/HubAccountMTRouting';
import HubAccountAddKeyword from './AddKeyword/HubAccountAddKeyword';
import * as types from './../../common/commonActionTypes';
//import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import {  Tabs,Tab,Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon,Thumbnail} from 'react-bootstrap';
import {handleSelectFieldsChange,navigateMenus} from './../actions/accountActions';
import {getList} from './../../common/commonActions';
require('./../../../../scss/tabs.scss');
require('./../../../../scss/style.scss');


class AccountDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.currentAcct = {};//this.props.location.state.currentAcct;
        console.log("this.currentAcct==",this.currentAcct);
          this.state={
            key:1,
                accountCaptions:{
                    General:"General",
                TPOA:"TPOA",
                MORouting:"MORouting",
                MTRouting:"MTRouting",
                AddKeyword:"AddKeyword"
            },
            submenus:{
              head: types.ACCOUNT_LIST,
              head_icon : "accounts_icon",
              subVal:[
                types.ACCOUNT_CREATE
              ]
            }
        }
    }

    componentWillMount(){
      console.log("TPOA componentWillMount this.currentAcct ==",this.currentAcct );
       this.props.getList("AccountDetails",this.currentAcct);
    }
    handleSelect(key) {
      //  alert('selected ' + key);
        this.setState({key});
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
                  <Tabs className="tabs" activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} id="controlled-tab-example">
                    <Tab eventKey={1} title={this.state.accountCaptions.General }>
                      {this.state.key==1 && <HubAccountGeneral currentAcct={this.currentAcct}/>}
                    </Tab>
                    <Tab eventKey={2} title={this.state.accountCaptions.TPOA }>
                      {this.state.key==2 && <HubAccountTPOA currentAcct={this.currentAcct}/>}
                    </Tab>
                    <Tab eventKey={3} title={this.state.accountCaptions.MTRouting }>
                      {this.state.key==3 && <HubAccountMTRouting currentAcct={this.currentAcct}/>}
                    </Tab>
                    <Tab eventKey={4} title={this.state.accountCaptions.MORouting }>
                      {this.state.key==4 && <HubAccountMORouting currentAcct={this.currentAcct}/>}
                    </Tab>
                    <Tab eventKey={5} title={this.state.accountCaptions.AddKeyword }>
                      {this.state.key==5 && <HubAccountAddKeyword currentAcct={this.currentAcct}/>}
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
            </Grid>

          </div>
      );
    }
  }

  function mapStateToProps(state) {
      return {

       };
  }

  function mapDispatchToProps(dispatch) {
      return bindActionCreators({
          getList:getList
      }, dispatch);
  }

  export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
