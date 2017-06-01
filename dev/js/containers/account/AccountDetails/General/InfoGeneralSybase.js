import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../../../common/components/InlineEdit';
require('./../../../../../scss/tabs.scss');
require('./../../../../../scss/style.scss');
import { updateAccountManager } from './../../actions/accountGeneralActions';

class InfoGeneralSybase extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          sybaseInfoObj : this.props.infoGenSybase||{}
        }
    }

    handleChange(name,val){
      console.log("name : ",name, "  val : ",val);
      var info = this.state.sybaseInfoObj;

      if(info[name]!==val){
        info[name]=val;
        info.customerid = this.props.currentAcct;
        this.setState({sybaseInfoObj : info},function(){
          console.log("updateAccountManager==",this.state.sybaseInfoObj);
          this.props.updateAccountManager(this.state.sybaseInfoObj);
        });
      }
    }

    render() {
      console.log("sybaseInfoObj : ",this.state.sybaseInfoObj);
        console.log("this.props.managerList : ",this.props.managerList);
        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Country Manager :
                </Col>
                <Col md={ 8 } >
                  <FormControl
                      className="info_label"
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
                <InlineEdit
                    name="contactid"
                    type="select"
                    options={this.props.managerList}
                    optionsLabel="name"
                    value={this.state.sybaseInfoObj.contactid}
                    onSave={this.handleChange.bind(this)}  />

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
      infoGenSybase:state.Account.infoGenSybase,
      managerList:state.Common.managerList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    updateAccountManager:updateAccountManager
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralSybase);
