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
import { handleActiveNav} from './../actions/accountActions';
require('./../../../../scss/tabs.scss');
require('./../../../../scss/style.scss');


class AccountList extends React.Component {
    constructor(props, context) {
        super(props, context);
          this.state={
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
      this.props.handleActiveNav("Accounts");
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
                      <OpenAccountsList/>
                    </div>
                  </div>


                  </Col>
                </Row>
              </Grid>

          </div>
      );
    }
}

function mapStateToProps( state ) {
  return {
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    handleActiveNav : handleActiveNav
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )(AccountList);
