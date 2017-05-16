import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../../../common/components/InlineEdit';
require('./../../../../../scss/tabs.scss');
require('./../../../../../scss/style.scss');
import { updateHubAccountVolumeInfo } from './../../actions/accountGeneralActions';

class InfoGeneralVolumeSetting extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          volSettingObj : this.props.infoGenVol||{}
        }
    }

    handleInlineEditChange(name,val){
      console.log("name : ",name, "  val : ",val);
      var info = this.state.volSettingObj;

      if(info[name]!==val){
        info[name]=val;
        this.setState({volSettingObj : info},function(){
          console.log("update vol details==",this.state.volSettingObj);
          this.props.updateHubAccountVolumeInfo(this.state.volSettingObj);
        });
      }
    }


    render() {
      console.log("volSettingObj : ",this.state.volSettingObj);

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Volume Type :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit
                    name="volTypeid"
                    type="select"
                    options={this.props.VolTypeList}
                    optionsLabel="volTypename"
                    value={this.state.volSettingObj.volTypeid}
                    onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Volume Limit :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="volLimit"
                      value={this.state.volSettingObj.volLimit} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Prelimit Alert (%) :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="preAlert"
                      value={this.state.volSettingObj.preAlert} />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Comments :
                </Col>
                <Col md={ 8 }>
                  <FormControl
                      className="info_label"
                      type="text"
                      name="commments"
                      value={this.state.volSettingObj.commments} />
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
      infoGenVol:state.Account.infoGenVol,
      VolTypeList:state.Common.volTypeList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      updateHubAccountVolumeInfo:updateHubAccountVolumeInfo,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralVolumeSetting);
