import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
require('./../../../../../scss/style.scss');
require('./../../../../../scss/tabs.scss');
import DeleteRowLink from './../../../common/components/DeleteRow';
import ModalAddCnl from './AddCnl';
import Contact from './../../../../../json/ExistingContact.json';
import * as types from './../../../common/commonActionTypes';

import { getCountryList } from './../../../miscellaneous/countries/miscCntryActions';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class InfoGeneralAddCNL extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
           data :[]
        }
    }

    close() {
      this.setState({showContact : false});
    }

    addContact(){
       this.setState({showContact: true , modalHeading:'Custom Number Lookup' });
    }

    componentWillMount(){
        this.props.getCountryList();
    }

    deleteDataFormatter(cell, row,field,index) {
       this.currentRow = row;
       this.currentField = field;

       return (
           <DeleteRowLink currentRow={this.currentRow.name}/>
       )
     }

     buttonFormatter(){
       return <Button bsStyle="primary" onClick={this.addContact.bind(this)}>Add New Contact</Button>
     }

     handleModalChange(target, value){
        // var contactinfo = this.state.ContactInfo;
        // switch(target) {
        //   case types.ADDCONTACT_EXISTINGCOMPANY :
        //     var _data = Contact.data.filter(function (header, item) {
        //     if(header.name === value.value)
        //       return header;
        //     }.bind(this));
        //
        //     contactinfo = _data[0];
        //       console.log(contactinfo);
        //     break;
        //   }
        //   this.setState({ ContactInfo: contactinfo,data : [contactinfo]});
      }

      render() {

        const addButtonData=[{
          'name' : 'addButton'
        }]

        return (
          <div >
            <Grid fluid={true} className="inner_grid">
              <Row className="show-grid">
                 <Col md= { 12 }>
                   <BootstrapTable data={this.state.data} >
                     <TableHeaderColumn isKey={ true } dataField='name'>Country Name</TableHeaderColumn>
                     <TableHeaderColumn dataField='lookup'>Lookup Mode</TableHeaderColumn>
                     <TableHeaderColumn dataField='delete' dataFormat={ this.deleteDataFormatter.bind(this) } formatExtraData={ 'delete' } ></TableHeaderColumn>
                   </BootstrapTable>
                   <BootstrapTable data={addButtonData}
                     tableBodyClass='master-body-class'
                     tableHeaderClass='hide-header'>
                     <TableHeaderColumn isKey={ true } hidden dataField='id'>ID</TableHeaderColumn>
                     <TableHeaderColumn columnClassName="center" dataFormat={ this.buttonFormatter.bind(this) }></TableHeaderColumn>
                   </BootstrapTable>
                 </Col>
               </Row>

            </Grid>

            <ModalAddCnl  showContact={this.state.showContact}   currentAcct={this.props.currentAcct} close={this.close.bind(this)}/>
          </div>
        )
    }

    componentWillReceiveProps(nextProps) {
      // switch (nextProps.target) {
      //   case types.MISC_COUNTRYLIST_RESPONSE:
      //       this.countryList = nextProps.countryList;
      //       console.log( "this.countryList==", this.countryList );
      //       break;
      //     }
    }

}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    getCountryList:getCountryList
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralAddCNL);
