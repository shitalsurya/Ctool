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
            dataField:'smsc',
            type:'text',
            width:'300px'
        },
        {
            name:'Return TPDA',
            dataField:'returnTPDA',
            type:'text',
            width: '150px'
        },
        {
            name:'Service Number',
            dataField:'serviceNo',
            type:'text',
            width: '150px'
        },
        {
            name:'Criteria',
            dataField:'criteria',
            type:'text',
            width:'150px'
        },
        {
            name:'Default Account',
            dataField:'defaultAcc',
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
          dataField:'parsedCriteria',
          type:'fixedtext',
          width: '150px'
        },
        {
          name:'Parsed Field',
          dataField:'parsedField',
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
        super(props, context);
        this.state = {
          data : [
            {
              "countryId":"1",
              "country":"Australia",
              "expand": [
                {
                  "smsc" : 'A1-MOBILKOM 436644967491',
                  "serviceNo" : '1515',
                  "criteria" : 'BEGIN_BY',
                  "returnTPDA" : '1515',
                  "defaultAcc" : 'UNKNOWN_RS',
                  "keyword" : '789',
                  "parsedCriteria" : 'BEGIN_BY',
                  "parsedField" : 'TEXT7B'

                }
              ]
            }
          ],
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

    }

}

function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubaccountMORoutingtable);
