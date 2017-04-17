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
import DateTimeField from 'react-bootstrap-datetimepicker';
require('../../../scss/style.scss');
require('../../../scss/react-toggle.scss');
require('../../../scss/time.scss');

import InlineEdit from './../common/components/InlineEdit';
import Routings from '../../../json/MT_routing.json';
import grpBySMSCData from '../../../json/MT_routing_grp_by_smsc.json';
import Users from '../../../json/Users.json';
import { initializeData } from '../../containers/account/actions/accountActions';
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




  render() {
    const selectRow = {
     mode: 'checkbox',
       bgColor: '#427cac'
   };

    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data } selectRow={ selectRow } >
          <TableHeaderColumn dataField='id' hidden isKey={ true }></TableHeaderColumn>
          {/*
            <TableHeaderColumn dataField='preference'  dataFormat={ this.dataFormatter.bind(this) } formatExtraData={ 'preference' } >Preference</TableHeaderColumn>

            <TableHeaderColumn dataField='SMSC'>SMSC</TableHeaderColumn>
            <TableHeaderColumn dataField='onOff'>On/Off</TableHeaderColumn>
            <TableHeaderColumn dataField='permanent'>Permanent</TableHeaderColumn>
            <TableHeaderColumn dataField='status' dataAlign='center' width="80px" dataFormat={ this.statusDataFormatter.bind(this) }>Status</TableHeaderColumn>
            <TableHeaderColumn dataField='comment'>Comment</TableHeaderColumn>
            <TableHeaderColumn dataField='prefStartTime'>Preferred Start Time</TableHeaderColumn>
            <TableHeaderColumn dataField='prefEndTime'>Preferred End Time</TableHeaderColumn>
          */}
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
                resRouting: true ,
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
dataFormatter(cell, row,field,index) {
    this.currentRow = row;
    this.currentField = field;
  //   this.userList = initializeData(Users,'login');
   var PreferenceList= [{ "id": 1, "value":"1"},{ "id": 2, "value":"2"}];
    //  return <InlineEdit  type='text' value={cell} onSave={this.updateValue.bind(this)}  />
  return <InlineEdit type='select' options={PreferenceList} value={cell} onSave={this.updateValue.bind(this)}  />
}
toggleFormatter(cell, row,field,index) {
  var icons;
  if(field == "onOff") {
    icons={
       checked: 'On',
       unchecked: 'Off',
    };
  }
  else if (field == "permanent") {
    icons={
       checked: 'Yes',
       unchecked: 'No',
    };
  }
    this.currentRow = row;
    this.currentField = field;
  //   this.userList = initializeData(Users,'login');
  //  var PreferenceList= [{ "id": 1, "value":"1"},{ "id": 2, "value":"2"}];
    //  return <InlineEdit  type='text' value={cell} onSave={this.updateValue.bind(this)}  />
  // return <InlineEdit type='select'  options={PreferenceList} value={cell} onSave={this.updateValue.bind(this)}  />
  return <InlineEdit type="toggle" value={this.state.resRouting} icons={icons} field={ field } onSave={this.updateValue.bind(this)}  />
}
timeFormatter(cell, row,field,index) {

    this.currentRow = row;
    this.currentField = field;
  //   this.userList = initializeData(Users,'login');
  //  var PreferenceList= [{ "id": 1, "value":"1"},{ "id": 2, "value":"2"}];
    //  return <InlineEdit  type='text' value={cell} onSave={this.updateValue.bind(this)}  />
  // return <InlineEdit type='select'  options={PreferenceList} value={cell} onSave={this.updateValue.bind(this)}  />
  return <DateTimeField mode="time" />
}
statusDataFormatter(cell, row) {
  const greenStatus = require( "../../../images/circle-green.png" );
  const orangeStatus = require( "../../../images/circle-orange.png" );
  const redStatus = require( "../../../images/circle-red.png" );
  switch (cell) {
    case 'green':
        return <img src={ greenStatus }/>;
      break;
      case 'orange':
          return <img src={ orangeStatus }/>;
        break;
        case 'red':
            return <img src={ redStatus }/>;
          break;
    default:

  }

}
updateValue(val){
  this.currentRow[this.currentField]=val;
  console.log("this.currentRow==",this.currentRow);
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
toggleOnChange(event){
  console.log( event.target.checked );
  switch(event)
  {
    case "resRouting":
    var resRouting = event.target.checked==true?"Yes":"No";
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

 const popoverBottom = (
   <Popover id="popover-positioned-bottom" >
     <Row className="show-grid">
       <Col md={ 5 } >
         <h4><Label>Group By:</Label></h4>
       </Col>
       <Col md={ 9 } >
         <Select
           placeholder="Select Column.."
           options={this.grpByMaster}
           value={this.state.groupBy}
           onChange={this.handleGroupByChange.bind(this)}  />
       </Col>
     </Row>
     <Row className="show-grid">
       <Col md={ 5 } >
         <h4><Label>Sub Group By:</Label></h4>
       </Col>
       <Col md={ 9 } >
         <Select
           placeholder="Select Column.."
           options={this.subGrpByMaster}
           value={this.state.subGroupBy}
           onChange={this.handleSubGroupByChange.bind(this)} />
       </Col>
     </Row>
   </Popover>
 );

        return (

                 <div className="tabs-container">
                   <Grid fluid={true}>
                     <Row className="show-grid">
                       <Col
                         componentClass={ ControlLabel }
                         md={ 3 }> Restricted routing:
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
                       <Col mdHidden md={ 4 } />
                       <Col mdHidden md={ 5 } />
                       <Col md={ 3 } >
                         <ButtonToolbar>
                           <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
                             <Button>Options</Button>
                           </OverlayTrigger>
                         </ButtonToolbar>
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
                           <TableHeaderColumn dataField={this.state.groupBy.value} ></TableHeaderColumn>
                           <TableHeaderColumn dataField='preference'  dataFormat={ this.dataFormatter.bind(this) } formatExtraData={ 'preference' } >Preference</TableHeaderColumn>
                           <TableHeaderColumn dataField='SMSC'>SMSC</TableHeaderColumn>
                           <TableHeaderColumn dataField='onOff' dataFormat = { this.toggleFormatter.bind(this) } formatExtraData={ 'onOff' } >On/Off</TableHeaderColumn>
                           <TableHeaderColumn dataField='permanent' dataFormat = { this.toggleFormatter.bind(this) } formatExtraData={ 'permanent' } >Permanent</TableHeaderColumn>
                           <TableHeaderColumn dataField='status' dataAlign='center' width="80px" dataFormat={ this.statusDataFormatter.bind(this) }>Status</TableHeaderColumn>
                           <TableHeaderColumn dataField='comment'>Comment</TableHeaderColumn>
                           <TableHeaderColumn dataField='prefStartTime' dataFormat = { this.timeFormatter.bind(this) } >Preferred Start Time</TableHeaderColumn>
                           <TableHeaderColumn dataField='prefEndTime' dataFormat = { this.timeFormatter.bind(this) } >Preferred End Time</TableHeaderColumn>
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
