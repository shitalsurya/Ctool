import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button, Modal } from 'react-bootstrap';
import Select from 'react-select';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as table from './../../../common/Functions/customTable';
import InlineEdit from './../../../common/components/InlineEdit';
import DeleteRowLink from './../../../common/components/DeleteRow';
import TPOAs from './../../../../../json/TPOAs.json';
import AddTPOAModal from './HubAccountTPOAAddModal';
require('./../../../../../scss/style.scss');

class HubAccountGeneral extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          data:TPOAs.data,
          showAddTPOA : false,
          TPOAinfo : {
            defaultTPOA : "A365"
          }
        }
    }

    updateValue(name,val,currentRow){
      console.log("name==",name);
      currentRow[name]=val;
      console.log("currentRow==",currentRow);
    }

    render() {

      var fields = [
        {
            name:'SMSC Operator',
            dataField:'SMSCOp',
            type:'select',
            options: [{ "id": 1, "value":"Aircel Delhi"},{ "id": 2, "value":"Vodafone Pune"},
                      { "id": 3, "value":"Airtel Mumbai"},{ "id": 4, "value":"Jio Banglore"}]
        },
        {
            name:'TPOA',
            dataField:'TPOA',
            type:'text',
        },
        {
            name:'Customer Routing',
            dataField:'custRouting',
            type:'toggle',
            options: {
               checked: 'Yes',
               unchecked: 'No',
            }
        },
        {
          dataField:'deleteRow',
          type:'delete',
          rowId:'SMSCOp',
          width:'60px'
        }
      ];

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
           <div className="tabs-container">

             <Grid fluid={true}>

               <Row className="show-grid">
                 <Col componentClass={ ControlLabel } md={ 3 }>
                   Default TPOA :
                 </Col>
                 <Col md={ 8 } >
                   <InlineEdit name="defaultTPOA" type="text" value={this.state.TPOAinfo.defaultTPOA} onSave={this.handleInlineEditChange.bind(this)}  />
                 </Col>
                 <Col mdHidden md={ 2 }/>
               </Row>

               <Row className="show-grid">
                 <Col componentClass={ ControlLabel } md={ 5 }>
                    Existing TPOA setting
                 </Col>
                 <Col mdHidden md={ 2 }/>
               </Row>

               <Row className="show-grid">
                 <Col md={ 12 }>
                   <BootstrapTable data={this.state.data} >
                     <TableHeaderColumn isKey={ true } hidden dataField='id'>ID</TableHeaderColumn>
                      {listCols}
                   </BootstrapTable>
                </Col>
               </Row>

               <Row className="show-grid">
                 <Col componentClass={ ControlLabel } md={ 3 }>
                 <Button bsStyle="primary" onClick = {this.handleAddTPOARequest.bind(this)} >Add TPOA</Button>
                 </Col>
                 <Col mdHidden md={ 2 }/>
               </Row>

             </Grid>

             <AddTPOAModal showAdd={this.state.showAddTPOA} close={this.close.bind(this)}/>

           </div>
        );
    }

    componentWillReceiveProps(nextProps) {

    }

    close() {
      this.setState({ showAddTPOA: false});
    }

    handleAddTPOARequest(){
      this.setState({showAddTPOA : true});
    }

    handleInlineEditChange(val){

    }

}

function mapStateToProps(state) {
    return { data: state.Account.accountCommInfo };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountGeneral);
