import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../../../common/components/InlineEdit';
require('./../../../../../scss/tabs.scss');
require('./../../../../../scss/style.scss');
import { updateHubAccountDelvTimeInfo } from './../../actions/accountGeneralActions';

class InfoGeneralDeliveryTime extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          deliveryTimeObj : this.props.infoGenDelivery
        }
    }

    handleInlineEditChange(name,val){
      console.log("name : ",name, "  val : ",val);
      var info = this.state.deliveryTimeObj;

      if(info[name]!==val){
        info[name]=val;
        this.setState({deliveryTimeObj : info},function(){
          console.log("update delivery time details==",this.state.deliveryTimeObj);
          this.props.updateHubAccountDelvTimeInfo(this.state.deliveryTimeObj);
        });
      }
    }

    render() {
      console.log("deliveryTimeObj : ",this.state.deliveryTimeObj);

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Preferred Start Time(UTC) :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit
                    name="starttimeid"
                    type="select"
                    options={this.props.StartTimeList}
                    optionsLabel="starttimename"
                    value={this.state.deliveryTimeObj.starttimeid}
                    onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 8 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                  Preferred End Time(UTC) :
                </Col>
                <Col md={ 8 }>
                  <InlineEdit
                    name="endtimeid"
                    type="select"
                    options={this.props.EndTimeList}
                    optionsLabel="endtimename"
                    value={this.state.deliveryTimeObj.endtimeid}
                    onSave={this.handleInlineEditChange.bind(this)}  />
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
      infoGenDelivery : state.Account.infoGenDelivery,
      StartTimeList : state.Common.startTimeList,
      EndTimeList : state.Common.endTimeList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      updateHubAccountDelvTimeInfo:updateHubAccountDelvTimeInfo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralDeliveryTime);
