import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../common/components/InlineEdit';
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');
import ModalAddContact from './AddContact';
import Contact from '../../../json/ExistingContact.json';
import * as types from '../../containers/account/actions/accountActionTypes';
import { initializeData } from '../../containers/account/actions/accountActions';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class InfoGeneralAddContacts extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
           data : [

          ],
           groupById:'countryId',
          ContactInfo : this.props.ContactInfo || [],
        }
    }
  close() {

      this.setState({showContact : false});
    }
    addContact(){
       this.setState({showContact: true , modalHeading:'Account Contacts' });

    }
    componentWillMount(){
        this.companyList = initializeData(Contact,'name');

    }
    deleteDataFormatter(cell, row,field,index) {
     this.currentRow = row;
     this.currentField = field;

   return (
       <DeleteRowLink currentRow={this.currentRow.name}/>
   )
 }

handleModalChange(target, value){
      var contactinfo = this.state.ContactInfo;
      debugger;
      switch(target) {
        case types.ADDCONTACT_EXISTINGCOMPANY :
          var _data = Contact.data.filter(function (header, item) {
          if(header.name === value.value)
            return header;
          }.bind(this));

          contactinfo = _data[0];
            console.log(contactinfo);
          break;
        }
        this.setState({ ContactInfo: contactinfo});

      }
    render() {

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                   Existing Company Contact:
                </Col>
                <Col md={ 8 } >
                  <Select
                        name="existingcompany"
                        placeholder="Select company.."
                        options={this.companyList}
                        value={this.state.ContactInfo.name || ''}
                        onChange={this.handleModalChange.bind(this,types.ADDCONTACT_EXISTINGCOMPANY)}
                         />
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 3 }>
                <Button bsStyle="primary" onClick={this.addContact.bind(this)}>Add New Contact</Button>
                </Col>
                <Col mdHidden md={ 2 }/>
              </Row>

              <Row className="show-grid">
                 <BootstrapTable data={this.state.data} >
                   <TableHeaderColumn isKey={ true } hidden dataField={this.state.groupById}>ID</TableHeaderColumn>
                   <TableHeaderColumn dataField='Name'>Name</TableHeaderColumn>
                   <TableHeaderColumn dataField='Email'>Email</TableHeaderColumn>
                   <TableHeaderColumn dataField='delete' dataFormat={ this.deleteDataFormatter.bind(this) } formatExtraData={ 'delete' } ></TableHeaderColumn>
                 </BootstrapTable>
               </Row>
            </Grid>

            <ModalAddContact  showContact={this.state.showContact} close={this.close.bind(this)}/>
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
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralAddContacts);
