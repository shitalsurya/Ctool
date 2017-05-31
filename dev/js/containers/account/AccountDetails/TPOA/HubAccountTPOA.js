import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button, Modal } from 'react-bootstrap';
import Select from 'react-select';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as types from './../../../common/commonActionTypes';
import * as table from './../../../common/Functions/customTable';
import InlineEdit from './../../../common/components/InlineEdit';
import DeleteRowLink from './../../../common/components/DeleteRow';
//import {getSMSCList} from './../../../common/commonActions';
import { UpdateHubAccountTPOA,DeleteHubAccountForcedTPOA } from './../../actions/accountTPOAActions';
import AddTPOAModal from './HubAccountTPOAAddModal';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);
require('./../../../../../scss/style.scss');
import TPOAs from './../../../../../json/TPOAs.json';
class HubAccountGeneral extends React.Component {
    constructor(props, context) {
        super(props, context);
          console.log("this.props.currentAcct==",this.props.currentAcct);
          this.currentAcct=this.props.currentAcct;
        this.state = {
          TPOAinfo : this.props.TPOAinfo||[],
          defaulttpoa:this.props.defaulttpoa||"test",
          showAddTPOA : false,
        }
    }
    handleInlineEditChange(val){
      var info = {};
      if( this.state.defaulttpoa !== val){
        info.defaulttpoa= val;
        info.customerid = this.currentAcct;
        this.props.UpdateHubAccountTPOA("updateDefaultTPOA",info);
      }
    }
    updateValue(name,val,currentRow){
      console.log("currentRow==",currentRow);
      this.currentcnl=currentRow;
      if(currentRow[name]!==val){
        currentRow[name]=val;
        currentRow.customerid=this.props.currentAcct;
      ////  this.props.updateHubAccountCNL(currentRow);
      }
    }

    handleDelete(currentRow){
        currentRow.customerid=this.props.currentAcct;
      console.log("onOk==",currentRow);
     this.props.DeleteHubAccountForcedTPOA(currentRow);
    }
componentWillMount(){
  //this.props.getSMSCList();
}
    render() {
        console.log("this.state.TPOAinfo==",this.state.TPOAinfo);

      var fields = [
        {
            name:'SMSC Operator',
            dataField:'smscid',
            optionsLabel:'smscname',
            type:'select',
            options: this.props.smscList
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
                  dataAlign='left'
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
                   <InlineEdit name="defaulttpoa" type="text" value={this.state.defaulttpoa} onSave={this.handleInlineEditChange.bind(this)}  />
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
                   {
                     typeof(this.props.smscList)!='undefined' &&
                     <BootstrapTable data={this.state.TPOAinfo} >
                       <TableHeaderColumn isKey={ true } hidden dataField='id'>ID</TableHeaderColumn>
                       {listCols}
                     </BootstrapTable>
                   }
                 </Col>
               </Row>

               <Row className="show-grid">
                 <Col componentClass={ ControlLabel } md={ 3 }>
                   <Button bsStyle="primary" onClick = {this.handleAddTPOARequest.bind(this)} >Add TPOA</Button>
                 </Col>
                 <Col mdHidden md={ 2 }/>
               </Row>

             </Grid>
             <ToastContainer
               toastMessageFactory={ ToastMessageFactory }
               ref="container"
               className="toast-top-right" />
             <AddTPOAModal currentAcct={this.currentAcct} showAdd={this.state.showAddTPOA} close={this.close.bind(this)}/>

           </div>
        );
    }
    componentWillReceiveProps(nextProps) {
      console.log("componentWillReceiveProps==",nextProps);
      switch (nextProps.target) {
        case types.ADD_ACCT_FORCED_TPOA_LIST_RESPONSE:
            if(nextProps.addStatus==true){
              this.refs.container.success(`TPOA added successfully.`, ``, {
                  closeButton: true,
              });
                var _data=this.state.data;
                _data.push(this.newCnl);
                this.setState({showContact : false,data:_data});
            }
            else if(nextProps.addStatus==false){
              this.refs.container.error(`Failed to add TPOA.`, ``, {
                  closeButton: true,
            });
            }
            break;
            case types.UPDATE_ACCT_FORCED_TPOA_LIST_RESPONSE:
                if(nextProps.updateStatus==true){
                  this.refs.container.success(`TPOA updated successfully.`, ``, {
                      closeButton: true,
                  });
                }
                else if(nextProps.updateStatus==false){
                  this.refs.container.error(`Failed to update TPOA.`, ``, {
                      closeButton: true,
                });
                }
                break;
                case types.DELETE_ACCT_FORCED_TPOA_LIST_RESPONSE:
                    if(nextProps.deleteStatus==true){
                      this.refs.container.success(`TPOA deleted successfully.`, ``, {
                          closeButton: true,
                      });

                        for(var i=0;i<this.state.data.length;i++){
                          if(this.state.data[i].countryid==this.currentCountryId){
                            this.state.data.splice(i, 1);
                          }
                        }
                    }
                    else if(nextProps.deleteStatus==false){
                      this.refs.container.error(`Failed to delete TPOA.`, ``, {
                          closeButton: true,
                    });
                    }
                    break;
          }
    }
    close() {
      this.setState({ showAddTPOA: false});
    }

    handleAddTPOARequest(){
      this.setState({showAddTPOA : true});
    }



}

function mapStateToProps(state) {
    return {
      TPOAinfo:state.Account.TPOAinfo,
  smscList:state.Common.smscList,
  addStatus:state.Account.addStatus,
  updateStatus:state.Account.updateStatus,
  deleteStatus:state.Account.deleteStatus,
    target:state.Account.target
     };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    UpdateHubAccountTPOA:UpdateHubAccountTPOA,
    DeleteHubAccountForcedTPOA:DeleteHubAccountForcedTPOA
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountGeneral);
