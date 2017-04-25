import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import Select from 'react-select';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal,Label, OverlayTrigger, Popover, ButtonToolbar } from 'react-bootstrap';
import AddDedicatedMORouting from './HubAccountMODedicated';
import AddParsedMORouting from './HubAccountMOParsed';
import AddMORouting from './HubAccountMORoutingAdd';
import * as table from './../../common/Functions/customTable';
import InlineEdit from './../../common/components/InlineEdit';
import DeleteRowLink from './../../common/components/DeleteRow';
require('./../../../../scss/style.scss');

class NestedTable extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

    updateValue(name,val,currentRow){
      console.log("name==",name);
      currentRow[name]=val;
      console.log("currentRow==",currentRow);
    }

    render() {
      var fields = [
        {
            name:'SMSC',
            dataField:'smsc',
            type:'text'
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
            type:'text'
        },
        {
            name:'Return TPDA',
            dataField:'returnTPDA',
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
        var listCols = fields.map(function (field) {
              return (
                  <TableHeaderColumn dataField={field.dataField}
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

class HubAccountMORouting extends React.Component {
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
                  "returnTPDA" : '1515'
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
                     <Button href="#" className="grp-btn" onClick={() => this.setState({showAddDedicated : true, showAddParsed : false}) }>
                       <span className="add-icon"></span>
                       <span>Add Dedicated Routings</span>
                     </Button>
                     <Button href="#" className="grp-btn" onClick={() => this.setState({showAddDedicated : true, showAddParsed : true}) }>
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

             {/*<AddDedicatedMORouting showAdd={this.state.showAddDedicated} close={this.close.bind(this)}/>
           <AddParsedMORouting showAdd={this.state.showAddParsed} close={this.close.bind(this)}/>*/}

              <AddMORouting showAdd={this.state.showAddDedicated} showParsed={this.state.showAddParsed} close={this.close.bind(this)}/>

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
    return { };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountMORouting);
