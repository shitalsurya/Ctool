import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
require('./../../../../../scss/style.scss');
require('./../../../../../scss/tabs.scss');
import DeleteRowLink from './../../../common/components/DeleteRow';
import ModalAddContact from './AddContact';
import Contact from './../../../../../json/ExistingContact.json';
import * as types from './../../../common/commonActionTypes';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as table from './../../../common/Functions/customTable';
import InlineEdit from './../../../common/components/InlineEdit';
import { getCountryList } from './../../../miscellaneous/countries/miscCntryActions';
import {getExContactList} from './../../actions/accountActions';
import { updateHubAccountContact,deleteHubAccountContact } from './../../actions/accountGeneralActions';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);
class InfoGeneralAddContacts extends React.Component {
    constructor(props, context) {
        super(props, context);
        console.log("this.props.infoGenContacts==",this.props.infoGenContacts);
        this.state = {
           data :this.props.infoGenContacts||[]
        }
    }

    close(_newContact) {
      this.newContact=_newContact;
      console.log("_newContact==",_newContact);
      this.setState({showContact : false});
    }

    addContact(){
       this.setState({showContact: true , modalHeading:'Account Contacts' });
    }

    componentWillMount(){
      this.props.getCountryList();
    this.props.getExContactList()
    }

     buttonFormatter(){
       return <Button bsStyle="primary" onClick={this.addContact.bind(this)}>Add New Contact</Button>
     }

     updateValue(name,val,currentRow){
       console.log("currentRow==",currentRow);
    //   this.currentcnl=currentRow;
       if(currentRow[name]!==val){
         currentRow[name]=val;
         currentRow.customerid=this.props.currentAcct;
         this.props.updateHubAccountContact(currentRow);
       }
     }

     handleDelete(currentRow){
         currentRow.customerid=this.props.currentAcct;
         this.contactidTobeDeleted=currentRow.contactid;
       console.log("onOk==",currentRow);
       this.props.deleteHubAccountContact(currentRow);
     }

      render() {

        const addButtonData=[{
          'name' : 'addButton'
        }];
        var fields = [
          {
              name:'Name',
              dataField:'name',
              type:'text',
            //  width:'80px',
                dataAlign:'left'
          },
          {
              name:'Email',
              dataField:'email',
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
                     <TableHeaderColumn dataField='contactid' isKey={ true }>Contact Id</TableHeaderColumn>
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
            <ModalAddContact  showContact={this.state.showContact}   currentAcct={this.props.currentAcct}  close={this.close.bind(this)}/>
          </div>
        )
    }

    componentWillReceiveProps(nextProps) {
      console.log("componentWillReceiveProps==",nextProps);
      switch (nextProps.target) {
        case types.ADD_ACC_CONTACT_RESPONSE:
            if(nextProps.addStatus==true){
              this.refs.container.success(`Contact added successfully.`, ``, {
                  closeButton: true,
              });
                console.log("this.state.data==",this.state.data);
                var _data=this.state.data;
                console.log("this.newContact.contactid==",this.newContact.contactid);

              if(this.newContact.contactid==0){
                  this.newContact.contactid=nextProps.contactid;
              }
                _data.push(this.newContact);
                this.setState({showContact : false,data:_data});
            }
            else if(nextProps.addStatus==false){
              this.refs.container.error(`Failed to add contact.`, ``, {
                  closeButton: true,
            });
            }
            break;
            case types.UPDATE_ACC_CONTACT_RESPONSE:
                if(nextProps.updateStatus==true){
                  this.refs.container.success(`Contact updated successfully.`, ``, {
                      closeButton: true,
                  });
                }
                else if(nextProps.updateStatus==false){
                  this.refs.container.error(`Failed to update contact.`, ``, {
                      closeButton: true,
                });
                }
                break;
                case types.DELETE_ACC_CONTACT_RESPONSE:
                    if(nextProps.deleteStatus==true){
                      this.refs.container.success(`Contact deleted successfully.`, ``, {
                          closeButton: true,
                      });

                        for(var i=0;i<this.state.data.length;i++){
                          if(this.state.data[i].contactid==this.contactidTobeDeleted){
                            this.state.data.splice(i, 1);
                          }
                        }
                    }
                    else if(nextProps.deleteStatus==false){
                      this.refs.container.error(`Failed to delete contact.`, ``, {
                          closeButton: true,
                    });
                    }
                    break;

          }
    }

}

function mapStateToProps(state) {
    return {
          infoGenContacts:state.Account.infoGenContacts,
          addStatus:state.Account.addStatus,
          contactid:state.Account.contactid,
          updateStatus:state.Account.updateStatus,
          deleteStatus:state.Account.deleteStatus,
            target:state.Account.target
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    getExContactList:getExContactList,
    getCountryList:getCountryList,
    updateHubAccountContact:updateHubAccountContact,
    deleteHubAccountContact:deleteHubAccountContact
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralAddContacts);
