import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../../common/components/InlineEdit';
require('./../../../../scss/tabs.scss');
require('./../../../../scss/style.scss');
import BillingLocation from './../../../../json/BillingLocation.json';
import ServiceLevel from './../../../../json/ServiceLevel.json';
import { initializeData } from './../actions/accountActions';

class InfoGeneralCommercial extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
          commInfoObj : {
            acctCommName : '(Live)',
            billing : 'Mobile 365 Inc',
            opened : '12 Jan 2017',
            suspended : '',
            closed : '',
            serviceLevel : 'Standard',
            status : 'UNSIGNED',
            comment : 'N/A'
          }
        };
    }

    handleInlineEditChange(val){

    }

    render() {

      var statusOptions = [
        {"label" : "UNSIGNED" , "value" : "UNSIGNED "},
        {"label" : "SIGNED" , "value" : "SIGNED "}
      ];

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Account Commercial Name:
                </Col>
                <Col md={ 8 }  >
                  <FormControl
                      className="info_label"
                      type="text"
                      name="acctCommName"
                      value={this.state.commInfoObj.acctCommName} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Billing Location :
                </Col>
                <Col md={ 8 } >
                  <InlineEdit name="billing" type="select" options={this.BillingLocation} value={this.state.commInfoObj.billing} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Opened :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="opened"
                      value={this.state.commInfoObj.opened} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Suspended :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="suspended"
                      value={this.state.commInfoObj.suspended} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Closed :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="closed"
                      value={this.state.commInfoObj.closed} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Service Level :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="serviceLevel" type="select" options={this.ServiceLevel} value={this.state.commInfoObj.serviceLevel} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Legal Status :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="status" type="select" options={statusOptions} value={this.state.commInfoObj.status} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Comment :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="comment" type="text" value={this.state.commInfoObj.comment} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

            </Grid>
          </div>
        )
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillMount(){
      this.BillingLocation = initializeData(BillingLocation,'code');
      this.ServiceLevel = initializeData(ServiceLevel,'value');
    }

}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralCommercial);
