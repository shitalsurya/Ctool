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
import * as table from './../../../common/Functions/customTable';
import {lookupOptions} from './../../../common/commonActionTypes';
import { getCountryList } from './../../../miscellaneous/countries/miscCntryActions';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { updateHubAccountCNL,deleteHubAccountCNL } from './../../actions/accountGeneralActions';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);
class InfoGeneralAddCNL extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
           data :this.props.infoGenCnl||[]
        }
    }

    close(_newCnl) {
      this.newCnl=_newCnl;
      console.log("_newCnl==",_newCnl);
      this.setState({showContact : false});
    }

    addContact(){
       this.setState({showContact: true , modalHeading:'Custom Number Lookup' });
    }

    componentWillMount(){
        this.props.getCountryList();
    }

     buttonFormatter(){
       return <Button bsStyle="primary" onClick={this.addContact.bind(this)}>Add New Contact</Button>
     }

      updateValue(name,val,currentRow){
        console.log("currentRow==",currentRow);
        this.currentcnl=currentRow;
        if(currentRow[name]!==val){
          currentRow[name]=val;
          currentRow.customerid=this.props.currentAcct;
          this.props.updateHubAccountCNL(currentRow);
        }
      }

      handleDelete(currentRow){
          currentRow.customerid=this.props.currentAcct;
          this.currentCountryId=currentRow.countryid;
        console.log("onOk==",currentRow);
        this.props.deleteHubAccountCNL(currentRow);
      }
      render() {

        const addButtonData=[{
          'name' : 'addButton'
        }]
        var fields = [
          {
              name:'Lookup Mode',
              dataField:'numberlookupid',
              optionsLabel:'numberlookup',
              type:'select',
            //  width:'80px',
                dataAlign:'left',
              options: lookupOptions
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
                   <TableHeaderColumn dataField='countryname' isKey={ true }>Country Name</TableHeaderColumn>
                   {listCols}
                 </BootstrapTable>
                   <BootstrapTable data={addButtonData}
                     tableBodyClass='master-body-class'
                     tableHeaderClass='hide-header'>
                     <TableHeaderColumn isKey={ true } hidden dataField='id'></TableHeaderColumn>
                     <TableHeaderColumn columnClassName="center" dataFormat={ this.buttonFormatter.bind(this) }></TableHeaderColumn>
                   </BootstrapTable>
                 </Col>
               </Row>

            </Grid>
            <ToastContainer
              toastMessageFactory={ ToastMessageFactory }
              ref="container"
              className="toast-top-right" />
            <ModalAddCnl  showContact={this.state.showContact}   currentAcct={this.props.currentAcct} close={this.close.bind(this)}/>
          </div>
        )
    }

    componentWillReceiveProps(nextProps) {
      console.log("componentWillReceiveProps==",nextProps);
      switch (nextProps.target) {
        case types.ADD_ACC_CNL_RESPONSE:
            if(nextProps.addStatus==true){
              this.refs.container.success(`CNL added successfully.`, ``, {
                  closeButton: true,
              });
                var _data=this.state.data;
                _data.push(this.newCnl);
                this.setState({showContact : false,data:_data});
            }
            else if(nextProps.addStatus==false){
              this.refs.container.error(`Failed to add CNL.`, ``, {
                  closeButton: true,
            });
            }
            break;
            case types.UPDATE_ACC_CNL_RESPONSE:
                if(nextProps.updateStatus==true){
                  this.refs.container.success(`CNL updated successfully.`, ``, {
                      closeButton: true,
                  });
                }
                else if(nextProps.updateStatus==false){
                  this.refs.container.error(`Failed to update CNL.`, ``, {
                      closeButton: true,
                });
                }
                break;
                case types.DELETE_ACC_CNL_RESPONSE:
                    if(nextProps.deleteStatus==true){
                      this.refs.container.success(`CNL deleted successfully.`, ``, {
                          closeButton: true,
                      });

                        for(var i=0;i<this.state.data.length;i++){
                          if(this.state.data[i].countryid==this.currentCountryId){
                            this.state.data.splice(i, 1);
                          }
                        }
                    }
                    else if(nextProps.deleteStatus==false){
                      this.refs.container.error(`Failed to delete CNL.`, ``, {
                          closeButton: true,
                    });
                    }
                    break;
          }
    }

}

function mapStateToProps(state) {
    return {
        infoGenCnl:state.Account.infoGenCnl,
        addStatus:state.Account.addStatus,
        updateStatus:state.Account.updateStatus,
        deleteStatus:state.Account.deleteStatus,
          target:state.Account.target
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    getCountryList:getCountryList,
    updateHubAccountCNL:updateHubAccountCNL,
    deleteHubAccountCNL:deleteHubAccountCNL
   }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralAddCNL);
