import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import Select from 'react-select';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label } from 'react-bootstrap';
import Toggle from 'react-toggle';
import ModalModify from './HubAccountModifyMTRouting';
import ModalAdd from './HubAccountAddMTRouting';
require('../../../scss/style.scss');
require('../../../scss/react-toggle.scss');

import InlineEdit from './../common/components/InlineEdit';
import Routings from '../../../json/MT_routing.json';
import grpBySMSCData from '../../../json/MT_routing_grp_by_smsc.json';

class NestedTable extends React.Component {
  constructor(props, context) {
      super(props, context);
}
isExpandableRow(row) {
if (typeof (row.expand)!='undefined') return true;
else return false;
}

expandComponent(row) {
return (
<SubNestedTable data={ row.expand } />
);
}
  render() {
    if (this.props.data) {
      return (
        <BootstrapTable data={this.props.data}
          tableBodyClass='nested-body-class'
          tableHeaderClass='hide-header'
          expandableRow={ this.isExpandableRow }
          expandComponent={ this.expandComponent.bind(this) }>
          <TableHeaderColumn isKey={ true } hidden dataField='id'>ID</TableHeaderColumn>
          <TableHeaderColumn dataField='destinationOperator' >Grouped by destinationOperator
          </TableHeaderColumn>
        </BootstrapTable>
      );
    } else {
      return (<p>?</p>);
    }
  }
}
class SubNestedTable extends React.Component {
  constructor(props, context) {
      super(props, context);
  this.currentRow = {};
  this.currentField = "";
}
  dataFormatter(cell, row,field,index) {
      this.currentRow = row;
      this.currentField = field;
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

    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data } selectRow={ selectRow } >
          <TableHeaderColumn dataField='id' hidden isKey={ true }></TableHeaderColumn>
          <TableHeaderColumn dataField='preference'  dataFormat={ this.dataFormatter.bind(this) } formatExtraData={ 'preference' } >Preference</TableHeaderColumn>

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

               showAdd: false,
              ModifyModalFlag:false,
               modalHeading:'',
               checked : false,

              // Default expanding row
                expanding: [ 0 ],
                groupBy:  {"label": "country", "value":"country"},
                groupById:'countryId',
                data:Routings.data,
                resRouting: true ,
          }
          this.grpByMaster =
             [
                  {"label": "country", "value":"country"},
                    {"label": "SMSC", "value":"SMSC"}
              ]
    }
        close() {
          this.setState({ showAdd: false , ModifyModalFlag :false});
        }

        deleteSelectedMTRouting() {
        //  this.setState({ showModal: true });
        }
        modifySelectedMTRouting() {
           this.setState({ ModifyModalFlag: true,modalHeading:'Modify standard MT routing' });
      }
        addNewMTRouting() {
            this.setState({ showAdd : true,modalHeading:'Add standard MT routing' });
        }
        isExpandableRow(row) {
  if (typeof (row.expand)!='undefined') return true;
  else return false;
}

expandComponent(row) {
  return (
    <NestedTable data={ row.expand } />
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
  switch(event)
  {
    case "resRouting":
    resRouting = event.target.checked==true?"Yes":"No";
     break;
  }
   this.setState({
      resRouting: resRouting    });
}

    render() {

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
                          name="resRouting"
                           icons={{
                              checked: 'Yes',
                              unchecked: 'No',
                           }}
                           defaultChecked={true}
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
                           tableHeaderClass='hide-header'
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

                    <ModalAdd showAdd={this.state.showAdd} close={this.close.bind(this)}/>
                   <ModalModify  ModifyModalFlag={this.state.ModifyModalFlag} close={this.close.bind(this)}/>


                 </div>
        )
    }

                   componentWillReceiveProps(nextProps) {
                   }

                   }

                   function mapStateToProps(state) {
                     return {};
                   }

                   function mapDispatchToProps(dispatch) {
                     return bindActionCreators({  }, dispatch);
                   }

                   export default connect(mapStateToProps, mapDispatchToProps)(HubAccountMTRouting);
