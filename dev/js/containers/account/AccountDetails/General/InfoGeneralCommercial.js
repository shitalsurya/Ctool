import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../../../common/components/InlineEdit';

require('./../../../../../scss/tabs.scss');
require('./../../../../../scss/style.scss');
import {SERVICE_LEVEL,LEGAL_STATUS} from './../../../common/commonActionTypes';
import { initializeSelectOptions } from './../../../common/Functions/commonFunctions';
import { updateHubAccountCommercialInfo } from './../../actions/accountGeneralActions';

class InfoGeneralCommercial extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state={
          commInfoObj : this.props.infoGenComm||{}
        }
    }

    handleInlineEditChange(name,val){
      console.log("name : ",name, "  val : ",val);
      var info = this.state.commInfoObj;

      if(info[name]!==val){
        info[name]=val;
        this.setState({commInfoObj : info},function(){
          console.log("update comm details==",this.state.commInfoObj);
          this.props.updateHubAccountCommercialInfo(this.state.commInfoObj);
        });
      }
    }

    render() {
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
                    value={this.state.commInfoObj.commercialname} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Billing Location :
                </Col>
                <Col md={ 8 } >
                  <InlineEdit name="billinglocationid" type="select" options={this.props.BillingLocation}
                    optionsLabel="billinglocationname"
                    value={this.state.commInfoObj.billinglocationid}
                    onSave={this.handleInlineEditChange.bind(this)}  />
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
                  <InlineEdit name="servicelevelid" type="select" options={SERVICE_LEVEL}
                    optionsLabel="servicelevelname"
                    value={this.state.commInfoObj.servicelevelid}
                    onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Legal Status :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="legalstatusid" type="select" options={LEGAL_STATUS}
                    optionsLabel="legalstatusname"
                    value={this.state.commInfoObj.legalstatusid}
                    onSave={this.handleInlineEditChange.bind(this)}  />
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

}

function mapStateToProps(state) {
    return {
      infoGenComm:state.Account.infoGenComm,
      BillingLocation:state.Common.billingLocationList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      updateHubAccountCommercialInfo:updateHubAccountCommercialInfo
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralCommercial);
