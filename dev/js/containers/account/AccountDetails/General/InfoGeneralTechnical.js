import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Toggle from 'react-toggle';
import InlineEdit from './../../../common/components/InlineEdit';
require('./../../../../../scss/tabs.scss');
require('./../../../../../scss/style.scss');
import { updateHubAccountTechnicalInfo } from './../../actions/accountGeneralActions';

class InfoGeneralTechnical extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          techInfoObj : this.props.infoGenTech||{}
        }
    }

    handleInlineEditChange(name,val){
      console.log("name : ",name, "  val : ",val);
      var info = this.state.techInfoObj;
      if(info[name]!==val){
        info[name]=val;
      this.setState({techInfoObj:info},function(){
        console.log("update tech details==",this.state.techInfoObj);
        this.props.updateHubAccountTechnicalInfo(this.state.techInfoObj);
      });
      }
    }

    handleToggleChange(e){
      console.log("name : ",e.target.name, "  val : ",e.target.checked);
      var info = this.state.techInfoObj;
      info[e.target.name]=e.target.checked?1:0;
      this.setState({techInfoObj:info},function(){
        this.props.updateHubAccountTechnicalInfo(this.state.techInfoObj);
      });
      console.log("this.state.techInfoObj==",info);
    }

    render() {
      console.log("techInfoObj : ", this.state.techInfoObj);
        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Account ID :
                </Col>
                <Col md={ 8 } >
                  <FormControl
                      className="info_label"
                      type="text"
                      name="accID"
                      value={this.state.techInfoObj.accID||''} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Technical Name :
                </Col>
                <Col md={ 8 } >
                    <InlineEdit name="techName" type="text" value={this.state.techInfoObj.techName||''} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Revenue Sharing Status :
                </Col>
                <Col md={ 8 }>
                  <div className="view-edit-control">
                    <Toggle
                      name="revStatus"
                      checked={ this.state.techInfoObj.revStatus === 1 ? true : false }
                      icons={{
                             checked:'Yes',
                             unchecked: 'No',
                      }}
                      onChange={this.handleToggleChange.bind(this)}  />
                  </div>
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Extranet Address :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="exAdd"
                      value={this.state.techInfoObj.exAdd||''} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Disable Extranet Login :
                </Col>
                <Col md={ 8 }>
                  <div className="view-edit-control">
                    <Toggle
                      name="disExtranet"
                      checked={ this.state.techInfoObj.disExtranet === 1 ? true : false }
                      icons={{
                             checked:'Yes',
                             unchecked: 'No',
                      }}
                      onChange={this.handleToggleChange.bind(this)}  />
                  </div>
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Extranet Login :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="extLogin"
                      value={this.state.techInfoObj.extLogin||""} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Extranet Password :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="extPassword" type="text" value={this.state.techInfoObj.extPassword||""} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Message Encryption :
                </Col>
                <Col md={ 8 }>
                  <div className="view-edit-control">
                    <Toggle
                      name="msgEncrp"
                      checked={ this.state.techInfoObj.msgEncrp === 1 ? true : false }
                      icons={{
                             checked:'Yes',
                             unchecked: 'No',
                      }}
                      onChange={this.handleToggleChange.bind(this)}  />
                  </div>
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Message Body Removal :
                </Col>
                <Col md={ 8 }>
                  <div className="view-edit-control">
                    <Toggle
                      name="msgBodyRem"
                      checked={ this.state.techInfoObj.msgBodyRem === 1 ? true : false }
                      icons={{
                             checked:'Yes',
                             unchecked: 'No',
                      }}
                      onChange={this.handleToggleChange.bind(this)}  />
                  </div>
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
      infoGenTech:state.Account.infoGenTech
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      updateHubAccountTechnicalInfo:updateHubAccountTechnicalInfo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralTechnical);
