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
import { UpdateHubAccountMORouting,DeleteHubAccountMORouting } from './../../actions/accountMORoutingActions';
require('./../../../../../scss/style.scss');

class NestedTable extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

    updateValue(name,val,currentRow){
      console.log("name==",name);
      currentRow[name]=val;
      console.log("currentRow==",currentRow);
    }
    handleDelete(name,val,currentRow){
      console.log("onOk==",this.currentcnl);
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
          <NestedTable data={ row.expand } smscList={this.props.smscList}  />
      );
    }

    render() {
console.log("MO this.state.data==",this.state.data);
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



           </div>
        )
    }

    componentWillReceiveProps(nextProps) {

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
