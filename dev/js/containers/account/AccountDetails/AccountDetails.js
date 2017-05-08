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
import * as types from './../../common/commonActionTypes';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon,Thumbnail} from 'react-bootstrap';
import {handleSelectFieldsChange,navigateMenus} from './../actions/accountActions';
require('./../../../../scss/tabs.scss');
require('./../../../../scss/style.scss');


export default class AccountDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.currentAcct = this.props.location.state.currentAcct;
        console.log("this.currentAcct==",this.currentAcct);
          this.state={
            accountCaptions:{
                General:"General",
                TPOA:"TPOA",
                MORouting:"MORouting",
                MTRouting:"MTRouting"
            },
            submenus:{
              head: types.ACCOUNT_LIST,
              head_icon : "accounts-icon",
              subVal:[
                types.ACCOUNT_CREATE,
                types.ACCOUNT_SPND,
                types.ACCOUNT_REAC,
                types.ACCOUNT_CLOSE
              ]
            }
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
                  <Tabs className="tabs" >
                    <div className="links">
                      <TabLink to="General" default className="tab-link">{this.state.accountCaptions.General}</TabLink>
                      <TabLink to="TPOA" className="tab-link">{this.state.accountCaptions.TPOA }</TabLink>
                      <TabLink to="MTRouting"  className="tab-link">{this.state.accountCaptions.MTRouting }</TabLink>
                      <TabLink to="MORouting" className="tab-link">{this.state.accountCaptions.MORouting}</TabLink>
                    </div>
                    <div className="content" >
                      <TabContent for="General">
                        <HubAccountGeneral currentAcct={this.currentAcct}/>
                      </TabContent>
                      <TabContent for="TPOA">
                        <HubAccountTPOA/>
                      </TabContent>
                      <TabContent for="MORouting">
                        <HubAccountMORouting/>
                      </TabContent>
                      <TabContent for="MTRouting">
                        <HubAccountMTRouting/>
                      </TabContent>
                    </div>
                  </Tabs>
                </Col>
              </Row>
            </Grid>

          </div>
      );
    }
  }
