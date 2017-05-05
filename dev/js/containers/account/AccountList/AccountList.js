import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import BrandingHeader from './../../common/components/BrandingHeader';
import Navigation from './../../common/components/Navigation';
import CompaniesList from './CompaniesList';
import OpenAccountsList from './OpenAccountsList';
import * as types from './../../common/commonActionTypes';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon,Thumbnail} from 'react-bootstrap';
import {handleSelectFieldsChange,navigateMenus} from './../actions/accountActions';
require('./../../../../scss/tabs.scss');
require('./../../../../scss/style.scss');


export default class AccountList extends React.Component {
    constructor(props, context) {
        super(props, context);
          this.state={
            submenus:[types.ACCOUNT_LIST,
                      types.ACCOUNT_CREATE,
                      types.ACCOUNT_SPND,
                      types.ACCOUNT_REAC,
                      types.ACCOUNT_CLOSE]
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
                        Account Management
                      </div>
                    </div>

                    <div>
                      <CompaniesList/>
                    </div>
                  </div>


                  </Col>
                </Row>
              </Grid>

          </div>
      );
    }
}
