import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import Select from 'react-select';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label, OverlayTrigger, Popover, ButtonToolbar } from 'react-bootstrap';
import Toggle from 'react-toggle';
import ModalModify from './HubAccountModifyMTRouting';
import ModalAdd from './HubAccountAddMTRouting';
import InlineEdit from './../../../common/components/InlineEdit';
require('./../../../../../scss/time.scss');
require('./../../../../../scss/style.scss');
require('./../../../../../scss/react-toggle.scss');

import Routings from './../../../../../json/MT_routing.json';
import grpBySMSCData from './../../../../../json/MT_routing_grp_by_smsc.json';
import Users from './../../../../../json/Users.json';
import * as table from './../../../common/Functions/customTable';
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
          <TableHeaderColumn isKey={ true } hidden dataField={this.props.groupById}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField={this.props.groupBy.value}> </TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }

}
class SubNestedTable extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.currentRow = {};
}

updateValue(name,val,currentRow){
  console.log("name==",name);
  currentRow[name]=val;
  console.log("currentRow==",currentRow);
}
    render() {
    const selectRow = {
     mode: 'checkbox',
       bgColor: '#427cac'
   };

var fields = [
  {
      name:'Pref.',
      dataField:'preference',
      type:'select',
      width:'80px',
      options: [{ "id": 1, "value":"1"},{ "id": 2, "value":"2"}]
  },
  {
      name:'SMSC',
    dataField:'SMSC',
    type:'text',
    dataAlign:'left'
  },
{
      name:'On/Off',
    dataField:'onOff',
    type:'toggle',
      width:'85px',
        options: {
           checked: 'On',
           unchecked: 'Off',
        }
  },
  {
        name:'Permanent',
    dataField:'permanent',
    type:'toggle',
      width:'85px',
      options: {
         checked: 'Yes',
         unchecked: 'No',
      }
  },
  {
        name:'Status',
    dataField:'status',
    type:'image',
      width:'80px'
  },
  {
        name:'',
    dataField:'comment',
    type:'comment',
    width:'50px'
  }];

    if (this.props.data) {
      var listCols = fields.map(function (field) {
            return (
                <TableHeaderColumn dataField={field.dataField}
                  width={field.width}
                  headerAlign='left'
                  dataAlign={field.dataAlign || 'center'}
                  dataFormat={ table.columnFormatter.bind(this) }
                  formatExtraData={ field} >
                  {field.name}
                </TableHeaderColumn>
            );
        }.bind(this));
      return (
        <BootstrapTable data={ this.props.data } selectRow={ selectRow } >
          <TableHeaderColumn dataField='id' hidden isKey={ true }></TableHeaderColumn>
          {listCols}
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
                subGroupBy:{"label": "operator", "value":"operator"},
                subGroupById:'countryId',
                data:Routings.data,
                resRouting: "Yes" ,
          }
          this.grpByMaster =
             [
                  {"label": "country", "value":"country"},
                    {"label": "SMSC", "value":"SMSC"}
              ];
              this.subGrpByMaster =
                 [
                      {"label": "operator", "value":"operator"},
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
    <NestedTable data={ row.expand } groupBy={this.state.subGroupBy} groupById={this.state.subGroupById}  />
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
handleSubGroupByChange(val){
  console.log("handleSubGroupByChange==",val);
//var _groupBy = {"label": "SMSC", "value":"smsc"}

  this.setState({subGroupBy:val},function(){
    console.log("subGroupBy==",this.state.subGroupBy);
    if(this.state.subGroupBy.value=='operator'){
      this.setState({data:Routings.data,subGroupById:'id'},function(){
        console.log("data==",this.state.data);
      });

    }
    else if(this.state.subGroupBy.value=='SMSC'){
      this.setState({data:grpBySMSCData.data,subGroupById:'SMSC_id'},function(){
        console.log("data==",this.state.data);
      });
    }
  });
}
toggleOnChange(name,value){
  console.log("value==",value);
    var _resRouting = value=="Yes"?"Yes":"No";
   this.setState({resRouting: _resRouting    });
   this.name=value;
   console.log("this.name==",this.name);
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
                         md={ 3 }> Restricted routing:
                       </Col>
                       <Col md={ 1 }>
                         <InlineEdit  name="resRouting"
                           type = "toggle"
                           value={this.state.resRouting}
                           icons={{
                              checked: 'Yes',
                              unchecked: 'No',
                           }}
                           onSave = {
                             this.toggleOnChange.bind(this)
                           }
                         />

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

                     {/*<Row className="show-grid">
                       <Col mdHidden md={ 4 } />
                       <Col mdHidden md={ 5 } />
                       <Col md={ 3 } >
                         <ButtonToolbar>
                           <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                             <Button>Options</Button>
                           </OverlayTrigger>
                         </ButtonToolbar>
                       </Col>
                     </Row>*/}

                     <Row className="show-grid">
                       <Col md={ 12 }>

                         <BootstrapTable data={this.state.data}
                           tableBodyClass='master-body-class'
                           tableHeaderClass='hide-header'
                           options={ options }
                           expandableRow={ this.isExpandableRow }
                           expandComponent={ this.expandComponent.bind(this) }>
                           <TableHeaderColumn isKey={ true } hidden dataField={this.state.groupById}>ID</TableHeaderColumn>
                           <TableHeaderColumn dataField={this.state.groupBy.value} ></TableHeaderColumn>

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
