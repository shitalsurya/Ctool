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
import * as types from './../../../common/commonActionTypes';
import { UpdateHubAccountMTRouting,DeleteHubAccountMTRouting } from './../../actions/accountMTRoutingActions';
require('./../../../../../scss/time.scss');
require('./../../../../../scss/style.scss');
require('./../../../../../scss/react-toggle.scss');
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);
import Routings from './../../../../../json/MT_routing.json';
import grpBySMSCData from './../../../../../json/MT_routing_grp_by_smsc.json';
import Users from './../../../../../json/Users.json';
import * as table from './../../../common/Functions/customTable';
class NestedTable extends React.Component {
  constructor(props, context) {
      super(props, context);
}
isExpandableRow(row) {
  return true;
}

expandComponent(row) {
  return (
    <SubNestedTable data={ row.expand } smscList={this.props.smscList} />
  );
}
updateValue(name,val,currentRow){
  console.log("name==",name);
  currentRow[name]=val;
  console.log("currentRow==",currentRow);
  this.props.UpdateHubAccountMTRouting(currentRow);
}
handleDelete(currentRow){
    currentRow.customerid=this.currentAcct;
  console.log("onOk==",currentRow);
 this.props.DeleteHubAccountMTRouting(currentRow);
}  render() {
    var fields=[
      {
      name:'Preferred Start Time',
    dataField:'prefStartTime',
    type:'time',
      width:'150px'
  },
  {
    name:'Preferred End Time',
    dataField:'prefEndTime',
    type:'time',
      width:'150px'
  }
];
var listCols = fields.map(function (field,index) {
      return (
          <TableHeaderColumn dataField={field.dataField}
            key={index}
            width={field.width}
            headerAlign='left'
            dataAlign={field.dataAlign || 'left'}
            dataFormat={ table.columnFormatter.bind(this) }
            formatExtraData={ field} >
            {field.name}
          </TableHeaderColumn>
      );
  }.bind(this));
    if (this.props.data) {
      return (
        <BootstrapTable data={this.props.data}
          tableBodyClass='nested-body-class'
          tableHeaderClass='hide-header'
          expandableRow={ this.isExpandableRow }
          expandComponent={ this.expandComponent.bind(this) }>
          <TableHeaderColumn isKey={ true } hidden dataField={this.props.groupById}>ID</TableHeaderColumn>
          <TableHeaderColumn dataField={this.props.groupByVal}> </TableHeaderColumn>
          {listCols}
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
var prefList=[  {"preference": 0},
      {"preference":1}];

var fields = [
  {
      name:'Pref.',
      dataField:'preference',
      optionsLabel:'preference',
      type:'select',
      width:'80px',
        dataAlign:'left',
      options: prefList
  },
  {
      name:'SMSC',
      dataField:'smscname',
      optionsLabel:'smscname',
      type:'select',
      options: this.props.smscList
  },
  {
      name:'TPOA',
    dataField:'tpda',
      width:'150px',
    type:'text',
    dataAlign:'left'
  },
{
      name:'On/Off',
    dataField:'onoff',
    type:'toggle',
      width:'85px',
        options: {
           checked: 'On',
           unchecked: 'Off',
        }
  },
  {
        name:'Permanent',
    dataField:'rc',
    type:'toggle',
      width:'85px',
      options: {
         checked: 'Yes',
         unchecked: 'No',
      }
  },
  {
        name:'Status',
    dataField:'livesmsc',
    type:'image',
      width:'80px'
  },
  {
        name:'',
    dataField:'comments',
    type:'comment',
    width:'50px'
  }];

    if (this.props.data) {
      var listCols = fields.map(function (field,index) {
            return (
                <TableHeaderColumn dataField={field.dataField}
                  key={index}
                  width={field.width}
                  headerAlign='left'
                  dataAlign={field.dataAlign || 'left'}
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
          this.currentAcct=this.props.currentAcct;
          this.state={
               showAdd: false,
              ModifyModalFlag:false,
               modalHeading:'',
               checked : false,
              // Default expanding row
                expanding: [ 0 ],
                groupByVal:'countryname',
                groupById:'countryid',
                subGroupByVal:'operatorname',
                subGroupById:'operatorid',
                data:this.props.MT_List||[],
                resRouting: "Yes" ,
          }
          console.log("shital==",this.state.data);
    }
        close(_MTInfo) {
          this.MTInfo=_MTInfo;
          console.log("_MTInfo==",_MTInfo);
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
  return true;
}
expandComponent(row) {

  return (
    <NestedTable data={ row.expand } smscList={this.props.smscList} groupByVal={this.state.subGroupByVal} groupById={this.state.subGroupById}  />
  );
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
                         <Toggle
                           name="locked"
                           icons={{
                              checked: 'Yes',
                              unchecked: 'No',
                           }}
                           defaultChecked={this.state.resRouting == "Yes" ? true : false}
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
                       {
                         typeof(this.props.smscList)!='undefined' &&
                         typeof(this.state.data)!='undefined' &&
                         <BootstrapTable data={this.state.data}
                           tableBodyClass='master-body-class'
                           tableHeaderClass='hide-header'
                           options={ options }
                           expandableRow={ this.isExpandableRow }
                           expandComponent={ this.expandComponent.bind(this) }>
                           <TableHeaderColumn isKey={ true } hidden dataField={this.state.groupById}>ID</TableHeaderColumn>
                           <TableHeaderColumn dataField={this.state.groupByVal} ></TableHeaderColumn>
                         </BootstrapTable>
                       }
                       </Col>
                     </Row>
                   </Grid>
                   <ToastContainer
                     toastMessageFactory={ ToastMessageFactory }
                     ref="container"
                     className="toast-top-right" />
                   <ModalAdd currentAcct={this.props.currentAcct} showAdd={this.state.showAdd} close={this.close.bind(this)}/>
                   <ModalModify  ModifyModalFlag={this.state.ModifyModalFlag} close={this.close.bind(this)}/>


                 </div>
        )
    }

    componentWillReceiveProps(nextProps) {
      console.log("componentWillReceiveProps==",nextProps);
      switch (nextProps.target) {
        case types.ADD_ACCT_MT_ROUTING_LIST_RESPONSE:
            if(nextProps.addStatus==true){
              this.refs.container.success(`MT Routing added successfully.`, ``, {
                  closeButton: true,
              });
                var _data=this.state.data;
                _data.push(this.MTInfo);
                this.setState({showContact : false,data:_data});
            }
            else if(nextProps.addStatus==false){
              this.refs.container.error(`Failed to add MT routing.`, ``, {
                  closeButton: true,
            });
            }
            break;
            case types.UPDATE_ACCT_MT_ROUTING_LIST_RESPONSE:
                if(nextProps.updateStatus==true){
                  this.refs.container.success(`TPOA updated successfully.`, ``, {
                      closeButton: true,
                  });
                }
                else if(nextProps.updateStatus==false){
                  this.refs.container.error(`Failed to update TPOA.`, ``, {
                      closeButton: true,
                });
                }
                break;
                case types.DELETE_ACCT_MT_ROUTING_LIST_RESPONSE:
                    if(nextProps.deleteStatus==true){
                      this.refs.container.success(`TPOA deleted successfully.`, ``, {
                          closeButton: true,
                      });

                        // for(var i=0;i<this.state.data.length;i++){
                        //   if(this.state.data[i].countryid==this.currentCountryId){
                        //     this.state.data.splice(i, 1);
                        //   }
                        // }
                    }
                    else if(nextProps.deleteStatus==false){
                      this.refs.container.error(`Failed to delete TPOA.`, ``, {
                          closeButton: true,
                    });
                    }
                    break;
          }
        }

}

function mapStateToProps(state) {
return {
  MT_List:state.Account.MT_List,
  smscList:state.Common.smscList,
  addStatus:state.Account.addStatus,
  updateStatus:state.Account.updateStatus,
  deleteStatus:state.Account.deleteStatus,
    target:state.Account.target
};
}

function mapDispatchToProps(dispatch) {
return bindActionCreators({
UpdateHubAccountMTRouting:UpdateHubAccountMTRouting,
DeleteHubAccountMTRouting:DeleteHubAccountMTRouting
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountMTRouting);
