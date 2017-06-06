import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import Select from 'react-select';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label, OverlayTrigger, Popover, ButtonToolbar } from 'react-bootstrap';
import AddDedicatedMORouting from './HubAccountMODedicated';
import AddParsedMORouting from './HubAccountMOParsed';
import * as table from './../../../common/Functions/customTable';
import InlineEdit from './../../../common/components/InlineEdit';
import DeleteRowLink from './../../../common/components/DeleteRow';
import {TPDACRITERIA} from './../../../common/commonActionTypes';
import * as types from './../../../common/commonActionTypes';
import { UpdateHubAccountMORouting,DeleteHubAccountMORouting } from './../../actions/accountMORoutingActions';
import HubaccountMORoutingtable from './HubaccountMORoutingtable';
require('./../../../../../scss/style.scss');

class NestedTable extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

    updateValue(name,val,currentRow){
      console.log("currentRow==",currentRow);
      if(currentRow[name]!==val){
        currentRow[name]=val;
        currentRow.customerid=this.props.currentAcct;
      this.props.UpdateHubAccountMORouting(currentRow);
      }
    }
    handleDelete(currentRow){
        currentRow.customerid=this.currentAcct;
      console.log("onOk==",currentRow);
     this.props.DeleteHubAccountMORouting(currentRow);
    }
    render() {
      var fields = [
        {
            name:'SMSC',
            dataField:'smscname',
            optionsLabel:'smscname',
            type:'select',
            options: this.props.smscList
        },
        {
            name:'Service Number',
            dataField:'servicenumber',
            type:'text',
            width: '150px'
        },
        {
            name:'Criteria',
            dataField:'comparisoncriteria',
            optionsLabel:'comparisoncriterianame',
            type:'select',
            options: TPDACRITERIA
        },
        {
            name:'Return TPDA',
            dataField:'returnedtpda',
            type:'text',
            width: '150px'
        },
        {
          dataField:'deleteRow',
          type:'delete',
          rowId:'smsc',
          width:'60px'
        }
      ];

      if (this.props.data) {
        var listCols = fields.map(function (field,index) {
              return (
                  <TableHeaderColumn dataField={field.dataField}
                    key={index}
                    width={field.width}
                    headerAlign='left'
                    dataAlign='left'
                    dataFormat={ table.columnFormatter.bind(this) }
                    formatExtraData={ field} >
                    {field.name}
                  </TableHeaderColumn>
              );
          }.bind(this));

        return (

          <BootstrapTable data={this.props.data} >
            <TableHeaderColumn isKey={ true } hidden dataField='id'>ID</TableHeaderColumn>
             {listCols}
          </BootstrapTable>
        );
      }
      else {
        return (<p>?</p>);
      }
    }

}

class HubAccountMORouting extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.currentAcct = this.props.currentAcct;
        this.state = {
          data : this.props.MO_List||[],
          groupByVal: 'countryname',
          groupById:'countryid',
          showAddDedicated : false,
          showAddParsed : false,
        }
    }
    isExpandableRow(row) {
      //  if (typeof (row.expand)!='undefined') return true;
        //else return false;
        return true;
    }

    expandComponent(row) {
      console.log("expandComponent==",this.props.smscList);
      return (
          <NestedTable data={ row.expand }
          UpdateHubAccountMORouting={this.props.UpdateHubAccountMORouting.bind(this)}
          DeleteHubAccountMORouting={this.props.DeleteHubAccountMORouting.bind(this)}
          smscList={this.props.smscList}  />
      );
    }

    render() {
        return (
           <div className="tabs-container">
             <Grid fluid={true}>

               <Row className="show-grid">
                 <Col componentClass={ ControlLabel } md = { 12 } >
                   Standard MO Routing
                 </Col>
               </Row>

               <Row className="show-grid">
                 <Col mdHidden md={ 6 } >
                   <ButtonGroup justified>
                     <Button href="#" className="grp-btn" onClick={() => this.setState({showAddDedicated : true}) }>
                       <span className="add-icon"></span>
                       <span>Add Dedicated Routings</span>
                     </Button>
                     <Button href="#" className="grp-btn" onClick={() => this.setState({showAddParsed : true}) }>
                       <span className="add-icon"></span>
                       <span>Add Parsed Routings</span>
                     </Button>
                   </ButtonGroup>
                 </Col>
               </Row>

               <Row className="show-grid">

               </Row>

               <Row className="show-grid">
                 <Col md={ 12 }>
                 {
                   typeof(this.props.smscList)!='undefined' &&  typeof(this.state.data)!='undefined' &&
                   <BootstrapTable data={this.state.data}
                     tableBodyClass='master-body-class'
                     tableHeaderClass='hide-header'
                     expandableRow={ this.isExpandableRow }
                     expandComponent={ this.expandComponent.bind(this) }>
                     <TableHeaderColumn isKey={ true } hidden dataField={this.state.groupById}>ID</TableHeaderColumn>
                     <TableHeaderColumn dataField={this.state.groupByVal} ></TableHeaderColumn>
                   </BootstrapTable>
                 }
                 </Col>
               </Row>

             </Grid>
             {
               this.state.showAddDedicated &&
               <AddDedicatedMORouting currentAcct={this.currentAcct} showAdd={this.state.showAddDedicated} close={this.close.bind(this)}/>
             }
             {
               this.state.showAddParsed &&
               <AddParsedMORouting currentAcct={this.currentAcct} showAdd={this.state.showAddParsed} close={this.close.bind(this)}/>
             }

            <HubaccountMORoutingtable/>

           </div>
        )
    }

    componentWillReceiveProps(nextProps) {
      console.log("componentWillReceiveProps==",nextProps);
      switch (nextProps.target) {
        case types.ADD_ACCT_MO_ROUTING_LIST_RESPONSE:
            if(nextProps.addStatus==true){
              this.refs.container.success(`MO Routing added successfully.`, ``, {
                  closeButton: true,
              });
                var _data=this.state.data;
                _data.push(this.MTInfo);
                this.setState({showContact : false,data:_data});
            }
            else if(nextProps.addStatus==false){
              this.refs.container.error(`Failed to add MO routing.`, ``, {
                  closeButton: true,
            });
            }
            break;
            case types.UPDATE_ACCT_MO_ROUTING_LIST_RESPONSE:
                if(nextProps.updateStatus==true){
                  this.refs.container.success(`MO routing updated successfully.`, ``, {
                      closeButton: true,
                  });
                }
                else if(nextProps.updateStatus==false){
                  this.refs.container.error(`Failed to update MO routing.`, ``, {
                      closeButton: true,
                });
                }
                break;
                case types.DELETE_ACCT_MO_ROUTING_LIST_RESPONSE:
                    if(nextProps.deleteStatus==true){
                      this.refs.container.success(`MO routing deleted successfully.`, ``, {
                          closeButton: true,
                      });

                        // for(var i=0;i<this.state.data.length;i++){
                        //   if(this.state.data[i].countryid==this.currentCountryId){
                        //     this.state.data.splice(i, 1);
                        //   }
                        // }
                    }
                    else if(nextProps.deleteStatus==false){
                      this.refs.container.error(`Failed to delete MO routing.`, ``, {
                          closeButton: true,
                    });
                    }
                    break;
          }
        }

    close() {
      this.setState({ showAddDedicated: false, showAddParsed: false});
    }

}

function mapStateToProps(state) {
    return {
      MO_List:state.Account.MO_List,
      smscList:state.Common.smscList,
      addStatus:state.Account.addStatus,
      updateStatus:state.Account.updateStatus,
      deleteStatus:state.Account.deleteStatus,
        target:state.Account.target
      };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      UpdateHubAccountMORouting:UpdateHubAccountMORouting,
      DeleteHubAccountMORouting:DeleteHubAccountMORouting
     }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountMORouting);
