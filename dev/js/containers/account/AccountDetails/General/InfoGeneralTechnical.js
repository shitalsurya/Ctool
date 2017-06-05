import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
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
                      value={this.state.techInfoObj.accID} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Technical Name :
                </Col>
                <Col md={ 8 } >
                    <InlineEdit name="techName" type="text" value={this.state.techInfoObj.techName} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Revenue Sharing Status :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="revStatus"
                      value={this.state.techInfoObj.revStatus} />
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
                      value={this.state.techInfoObj.exAdd} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Disable Extranet Login :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="disExtranet"
                      value={this.state.techInfoObj.disExtranet} />
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
                      value={this.state.techInfoObj.extLogin} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Extranet Password :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit name="extPassword" type="text" value={this.state.techInfoObj.extPassword} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Message Encryption :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="msgEncrp"
                      value={this.state.techInfoObj.msgEncrp} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Message Body Removal :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="msgBodyRem"
                      value={this.state.techInfoObj.msgBodyRem} />
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
