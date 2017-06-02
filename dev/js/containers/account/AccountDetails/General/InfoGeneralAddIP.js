import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
require('./../../../../../scss/style.scss');
require('./../../../../../scss/tabs.scss');
import ModalAddIP from './AddIPAddr';
// import * as types from './../../../common/commonActionTypes';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as table from './../../../common/Functions/customTable';

import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class InfoGeneralAddIP extends React.Component {
    constructor(props, context) {
        super(props, context);
        // console.log("this.props.infoGenContacts==",this.props.infoGenContacts);
        this.state = {
           data :this.props.infoGenIPAddr||[
               {
                 "ipid" : 1,
                 "ipaddress" : "0.0.0.15"
               }
           ]
        }
    }

    close(_newIP) {
      console.log("_newIP==",_newIP);
      this.setState({showAddIP : false});
    }

    addContact(){
       this.setState({showAddIP: true , modalHeading:'IP Address' });
    }

    componentWillMount(){

    }

     buttonFormatter(){
       return <Button bsStyle="primary" onClick={this.addContact.bind(this)}>Add New IP Address</Button>
     }

     updateValue(name,val,currentRow){
       console.log("currentRow updated==",currentRow);
      //  this.currentcnl=currentRow;
       if(currentRow[name]!==val){
         currentRow[name]=val;
       }
     }

     handleDelete(currentRow){
         console.log("onOk Delete row==",currentRow);
     }

      render() {

        const addButtonData=[{
          'name' : 'addButton'
        }];

        var fields = [
          {
              name:'IP Address',
              dataField:'ipaddress',
              type:'text',
            //  width:'80px',
                dataAlign:'left'
          },
          {
              name:'Action',
              dataField:'',
              type:'delete',
            //  width:'80px',
                dataAlign:'left',
          }
        ];

        var listCols = fields.map(function (field,index) {
              return (
                  <TableHeaderColumn dataField={field.dataField}
                    key={index}
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
          <div >
            <Grid fluid={true} className="inner_grid">
              <Row className="show-grid">
                 <Col md= { 12 }>
                   <BootstrapTable data={ this.state.data } >
                     <TableHeaderColumn dataField='ipid' isKey={ true } >IP Address Id</TableHeaderColumn>
                     {listCols}
                   </BootstrapTable>
                   <BootstrapTable data={addButtonData}
                     tableBodyClass='master-body-class'
                     tableHeaderClass='hide-header'>
                     <TableHeaderColumn isKey={ true } hidden dataField='id'>ID</TableHeaderColumn>
                     <TableHeaderColumn dataFormat={ this.buttonFormatter.bind(this) }></TableHeaderColumn>
                   </BootstrapTable>
                 </Col>
               </Row>
            </Grid>

            <ToastContainer
              toastMessageFactory={ ToastMessageFactory }
              ref="container"
              className="toast-top-right" />

            {
              this.state.showAddIP &&
              <ModalAddIP showIP={this.state.showAddIP} modalHeading={this.state.modalHeading}
                currentAcct={this.props.currentAcct} close={this.close.bind(this)}/>
            }

          </div>
        )
    }

    componentWillReceiveProps(nextProps) {

    }

}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralAddIP);
