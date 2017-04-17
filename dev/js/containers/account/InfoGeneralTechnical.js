import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../common/components/InlineEdit';
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

class InfoGeneralTechnical extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          techInfoObj : {
            accID : '31353',
            techName : 'ACCNAME12345_HTTP',
            revStatus : 'No',
            exAdd : 'http://172.24.229.51:8883/',
            disExtranet : 'No',
            extLogin : 'ACCNAME12345_HTTP',
            extPassword : 'PWD',
            msgEncrp : 'No',
            msgBodyRem : 'No'
          }
        }
    }

    handleInlineEditChange(val){
      //<InlineEdit type="text" value={this.state.acctCommName} onSave={this.handleInlineEditChange.bind(this)}  />
    }

    render() {

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Account ID :
                </Col>
                <Col md={ 6 } >
                  <FormControl
                      type="text"
                      name="accID"
                      value={this.state.techInfoObj.accID} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Technical Name :
                </Col>
                <Col md={ 6 } >
                    <InlineEdit type="text" value={this.state.techInfoObj.techName} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Revenue Sharing Status :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="revStatus"
                      value={this.state.techInfoObj.revStatus} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Extranet Address :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="exAdd"
                      value={this.state.techInfoObj.exAdd} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Disable Extranet Login :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="disExtranet"
                      value={this.state.techInfoObj.disExtranet} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Extranet Login :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="extLogin"
                      value={this.state.techInfoObj.extLogin} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Extranet Password :
                </Col>
                <Col md={ 6 }>
                  <InlineEdit type="text" value={this.state.techInfoObj.extPassword} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Message Encryption :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="msgEncrp"
                      value={this.state.techInfoObj.msgEncrp} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Message Body Removal :
                </Col>
                <Col md={ 6 }>
                  <FormControl
                      type="text"
                      name="msgBodyRem"
                      value={this.state.techInfoObj.msgBodyRem} />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

            </Grid>
          </div>
        )
    }

    componentWillReceiveProps(nextProps) {

      }

}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralTechnical);
