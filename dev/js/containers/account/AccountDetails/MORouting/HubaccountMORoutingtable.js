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
            type:'text',
            width:'300px'
        },
        {
            name:'Return TPDA',
            dataField:'returnedtpda',
            type:'text',
            width: '150px'
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
            type:'text',
            width:'150px'
        },
        {
            name:'Default Account',
            dataField:'customerid',
            type:'fixedtext',
            width: '150px'
        },
        {
          name:'Keyword',
          dataField:'keyword',
          type:'fixedtext',
          width: '150px'
        },
        {
          name:'Parsed Criteria',
          dataField:'keywordcomparisoncriteria',
          type:'fixedtext',
          width: '150px'
        },
        {
          name:'Parsed Field',
          dataField:'targetfield',
          type:'fixedtext',
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
                    dataAlign='center'
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

class HubaccountMORoutingtable extends React.Component {
    constructor(props, context) {
      debugger;
        super(props, context);
        this.currentAcct = this.props.currentAcct;
        this.state = {
          data : this.props.MO_TABLE_List||[],
          groupBy:  {"label": "country", "value":"country"},
          groupById:'countryId',
          showAddDedicated : false,
          showAddParsed : false,
        }
    }

    isExpandableRow(row) {
        if (typeof (row.expand)!='undefined') return true;
        else return false;
    }

    expandComponent(row) {
      return (
          <NestedTable data={ row.expand }  />
      );
    }

    render() {
      debugger;
        return (
           <div>
             <Grid fluid={true}>

               <Row className="show-grid">
                 <Col md={ 12 }>
                   <BootstrapTable data={this.state.data}
                     tableBodyClass='master-body-class'
                     tableHeaderClass='hide-header'
                     expandableRow={ this.isExpandableRow }
                     expandComponent={ this.expandComponent.bind(this) }>
                     <TableHeaderColumn isKey={ true } hidden dataField={this.state.groupById}>ID</TableHeaderColumn>
                     <TableHeaderColumn dataField={this.state.groupBy.value} ></TableHeaderColumn>
                   </BootstrapTable>
                 </Col>
               </Row>

             </Grid>
          </div>
        )
    }

    componentWillReceiveProps(nextProps) {
      console.log("componentWillReceiveProps==",nextProps);

    }

}

function mapStateToProps(state) {
debugger;
    return {

      MO_TABLE_List:state.Account.MO_TABLE_List,
      smscList:state.Common.smscList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubaccountMORoutingtable);
