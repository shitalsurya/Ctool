import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import Select from 'react-select';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Toggle from 'react-toggle';

require('../../../scss/style.scss');
require('../../../scss/react-toggle.scss');
import * as types from '../../containers/account/actions/accountActionTypes';
import InlineEdit from './../common/components/InlineEdit';
import Routings from '../../../json/MT_routing.json';
import grpBySMSCData from '../../../json/MT_routing_grp_by_smsc.json';
class BSTable extends React.Component {
  constructor(props, context) {
      super(props, context);
  this.currentRow = {};
  this.currentField = "";
}
  dataFormatter(cell, row,field,index) {
    console.log("field==",field);
      console.log("state==",this.props.data);
      this.currentRow = row;
      this.currentField = field;
    //  this.props.data[index][field]=cell;
// return `<input type='text' value='${cell}'>     <span className="glyphicon glyphicon-th-list"></span> </input>`;
    return <InlineEdit  type='text' value={cell} onSave={this.updateValue.bind(this)}  />

}
updateValue(val){

  this.currentRow[this.currentField]=val;
  console.log("this.currentRow==",this.currentRow);
}
  render() {
    const selectRow = {
     mode: 'checkbox',
       bgColor: '#427cac'
   };
   const cellEditProp = {
  mode: 'hover'
};
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data } selectRow={ selectRow }  cellEdit={ cellEditProp }>
          <TableHeaderColumn dataField='id' hidden isKey={ true }></TableHeaderColumn>
          <TableHeaderColumn dataField='destinationOperator' dataFormat={ this.dataFormatter.bind(this) } formatExtraData={ 'destinationOperator' } >Destination Operator</TableHeaderColumn>
          <TableHeaderColumn dataField='SMSC'>SMSC</TableHeaderColumn>
          <TableHeaderColumn dataField='onOff'>On/Off</TableHeaderColumn>
          <TableHeaderColumn dataField='permanent'>Permanent</TableHeaderColumn>
          <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
          <TableHeaderColumn dataField='comment'>Comment</TableHeaderColumn>

        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}
class HubAccountMTRouting extends React.Component {
    constructor(props, context) {
        super(props, context);
          this.state={
                MTInfo : this.props.MTInfo || [],
               showModal: false,
               modalHeading:'',
               // Default expanding row
                expanding: [ 0 ],
                groupBy:  {"label": "country", "value":"country"},
                groupById:'countryId',
                data:Routings.data,
                resRouting:"Yes"
          }
          this.grpByMaster =
             [
                  {"label": "country", "value":"country"},
                    {"label": "SMSC", "value":"SMSC"}
              ]
    }
        close() {
          this.setState({ showModal: false });
        }

        deleteSelectedMTRouting() {
        //  this.setState({ showModal: true });
        }
        modifySelectedMTRouting() {
            console.log("this.state==",this.state);
          this.setState({ showModal: true,modalHeading:'Modify standard MT routing' });
        }
        addNewMTRouting() {
            this.setState({ showModal: true,modalHeading:'Add standard MT routing' });
        }
        isExpandableRow(row) {
  if (typeof (row.expand)!='undefined') return true;
  else return false;
}

expandComponent(row) {
  return (
    <BSTable data={ row.expand } />
  );
}
handleGroupByChange(val){
  console.log("handleGroupByChange==",val);
//var _groupBy = {"label": "SMSC", "value":"smsc"}

  this.setState({groupBy:val},function(){
    console.log("groupBy==",this.state.groupBy);
    if(this.state.groupBy.value=='country'){
      this.setState({data:Routings.data,groupById:'countryId'},function(){
        console.log("data==",this.state.data);
      });

    }
    else if(this.state.groupBy.value=='SMSC'){
      this.setState({data:grpBySMSCData.data,groupById:'SMSC_id'},function(){
        console.log("data==",this.state.data);
      });
    }
  });
}
toggleOnChange(event){
  console.log( event.target.checked );
  var _resRouting=event.target.checked==true?"Yes":"No";
  this.setState({
     resRouting: _resRouting
   });
}
handleModalChange(target, value){
  var info = this.state.MTInfo;
  switch(target) {
    case types.ACCOUNT_MT_ROUTING_OPERATOR:
      info.operator=value.value;
      break;
    case types.ACCOUNT_MT_ROUTING_SMSC:
      info.smsc=value.value;
      break;
    case types.ACCOUNT_MT_ROUTING_ONOFF:
      info.onoff=value;
      break;
    case types.ACCOUNT_MT_ROUTING_PERMANENT:
      info.permanent=value;
      break;
    case types.ACCOUNT_MT_ROUTING_TPOA:
      info.tpoa=value.target.value;
      break;
  }
  this.setState({MTInfo : info});
}

addRouting(){
  console.log("Added Routing : " , this.state.MTInfo);
  this.setState({ showModal: false });
}
    render() {
      const modalOptions = [
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
      ];
 const options = {
 expandRowBgColor: 'transparent',
   expandBy: 'column',
    expanding: this.state.expanding
 };


        return (

                 <div className="tabs-container">
                   <Grid fluid={true}>
                     <Row className="show-grid">
                       <Col
                         componentClass={ ControlLabel }
                         md={ 2 }> Restricted routing:
                       </Col>
                       <Col md={ 1 }>
                         <Toggle
                           icons={{
                              checked: 'Yes',
                              unchecked: 'No',
                           }}
                           defaultChecked={this.state.resRouting}
                           value={this.state.resRouting}
                           onChange={this.toggleOnChange.bind(this)} />


                       </Col>

                     </Row>
                     <Row className="show-grid">
                       <Col
                         componentClass={ ControlLabel }
                         md={ 3 }> Existing MT Routing
                       </Col>
                       <Col
                         mdHidden
                         md={ 9 } >
                         <ButtonGroup justified>
                           <Button href="#" className="grp-btn" onClick={this.modifySelectedMTRouting.bind(this)}>
                             <span className="edit-button-icon"></span>
                             <span>Modify Selected MT Routings</span>
                           </Button>
                           <Button href="#" className="grp-btn" onClick={this.deleteSelectedMTRouting.bind(this)}>
                             <span className="delete-icon"></span>
                             <span>Delete Selected MT Routings</span>
                           </Button>
                           <Button href="#" className="grp-btn" onClick={this.addNewMTRouting.bind(this)}>
                             <span className="add-icon"></span>
                             <span>Add Standard MT Routings</span>
                           </Button>
                         </ButtonGroup>
                       </Col>
                     </Row>
                     <Row className="show-grid">
                       <Col
                         mdHidden
                         md={ 8 } >
                       </Col>
                       <Col
                         md={ 1 } >     <h4><Label>Group By:</Label></h4>  </Col>
                       <Col
                         md={ 3 } >
                         <Select
                           placeholder="Select Column.."
                           options={this.grpByMaster}
                           value={this.state.groupBy}
                           onChange={this.handleGroupByChange.bind(this)}
                         />
                       </Col>
                     </Row>

                     <Row className="show-grid">
                       <Col md={ 12 }>

                         <BootstrapTable data={this.state.data}
                           tableBodyClass='master-body-class'
                           options={ options }
                           expandableRow={ this.isExpandableRow }
                           expandComponent={ this.expandComponent.bind(this) }>
                           <TableHeaderColumn isKey={ true } hidden dataField={this.state.groupById}>ID</TableHeaderColumn>
                           <TableHeaderColumn dataField={this.state.groupBy.value} >Grouped by {this.state.groupBy.value}

                           </TableHeaderColumn>

                         </BootstrapTable>
                       </Col>
                     </Row>
                   </Grid>

                   <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                     <Modal.Header closeButton>
                       <Modal.Title>{this.state.modalHeading}</Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                       <div>
                         <Grid fluid={true}>
                           <Row className="show-grid">
                             <Col componentClass={ ControlLabel } md={ 3 }>
                               Operator:
                             </Col>
                             <Col md={ 6 }>
                               <Select
                                 name="operator"
                                 placeholder="Select Operator.."
                                 options={modalOptions}
                                 value={this.state.MTInfo.operator}
                                 onChange={this.handleModalChange.bind(this,types.ACCOUNT_MT_ROUTING_OPERATOR)}
                               />
                             </Col>
                             <Col mdHidden md={ 3 } />
                           </Row>
                           <Row className="show-grid">
                             <Col componentClass={ ControlLabel } md={ 3 }>
                               SMSC:
                             </Col>
                             <Col md={ 6 }>
                               <Select
                                 name="smsc"
                                 placeholder="Select SMSC.."
                                 options={modalOptions}
                                 value={this.state.MTInfo.smsc}
                                 onChange={this.handleModalChange.bind(this,types.ACCOUNT_MT_ROUTING_SMSC)}
                               />
                             </Col>
                             <Col mdHidden md={ 3 } />
                         </Row>
                         <Row className="show-grid">
                             <Col componentClass={ ControlLabel } md={ 3 }>
                               On/Off :
                             </Col>
                             <Col md={ 6 }>
                             <Toggle
                             icons={{
                                  checked: 'On',
                                  unchecked: 'Off',
                                }}
                                 defaultChecked='On'
                                 value={this.state.resRouting}
                               onChange={this.toggleOnChange.bind(this)} />
                             </Col>
                             <Col mdHidden md={ 3 } />
                         </Row>
                         <Row className="show-grid">
                             <Col componentClass={ ControlLabel } md={ 3 }>
                               Permanent :
                             </Col>
                             <Col md={ 6 }>
                             <Toggle
                             icons={{
                                  checked: 'Yes',
                                  unchecked: 'No',
                                }}
                                   defaultChecked='No'
                                 value={this.state.resRouting}
                               onChange={this.toggleOnChange.bind(this)} />
                             </Col>
                             <Col mdHidden md={ 3 } />
                         </Row>
                         <Row className="show-grid">
                             <Col componentClass={ ControlLabel } md={ 3 }>
                               TPOA :
                             </Col>
                             <Col md={ 6 }>
                               <FormControl
                                  type="text"
                                  name="tpoa"
                                  value={this.state.MTInfo.tpoa || ' '}
                                  onChange={this.handleModalChange.bind(this,types.ACCOUNT_MT_ROUTING_TPOA)}
                                  placeholder="Enter TPOA" />
                             </Col>
                             <Col mdHidden md={ 3 } />
                         </Row>
                       </Grid>
                     </div>
                   </Modal.Body>
                   <Modal.Footer>
                     <Button onClick={this.addRouting.bind(this)}>Add Routing</Button>
                     <Button onClick={this.close.bind(this)}>Close</Button>
                   </Modal.Footer>
                 </Modal>
                 </div>
        )
    }

    componentWillReceiveProps(nextProps) {
console.log("nextProps==",nextProps.InlineObject);
      }

}

function mapStateToProps(state) {
    return { InlineObject:state.InlineEdit.InlineObject};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountMTRouting);
