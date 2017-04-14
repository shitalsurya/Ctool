import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../common/components/InlineEdit';
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

class InfoGeneralSybase extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          sybaseInfoObj : {
            cntryMgr : 'Wei Leng',
            accMgr : 'ww@sybase.com'
          }
        }
    }

    handleInlineEditChange(val){
      //<InlineEdit value={this.state.acctCommName} onSave={this.handleInlineEditChange.bind(this)}  />
    }

    render() {

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Country Manager :
                </Col>
                <Col md={ 8 } >
                  <FormControl
                      type="text"
                      name="cntryMgr"
                      value={this.state.sybaseInfoObj.cntryMgr} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Account Manager :
                </Col>
                <Col md={ 8 } >
                  <InlineEdit value={this.state.sybaseInfoObj.accMgr} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
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

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralSybase);
