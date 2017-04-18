import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button, Modal } from 'react-bootstrap';
import Select from 'react-select';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import InlineEdit from './../common/components/InlineEdit';
import DeleteRowLink from './../common/components/DeleteRow';
import TPOAs from '../../../json/TPOAs.json';
import AddTPOAModal from './HubAccountTPOAAddModal';
require('../../../scss/style.scss');

class HubAccountGeneral extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          data:TPOAs.data,
          groupById:'countryId',
          showAddTPOA : false,
        }
    }


    render() {


        return (
           <div className="tabs-container">

             <Grid fluid={true}>

               <Row className="show-grid">
                 <Col componentClass={ ControlLabel } md={ 3 }>
                   Default TPOA :
                 </Col>
                 <Col md={ 8 } >
                   <InlineEdit type="text" value="A365" onSave={this.handleInlineEditChange.bind(this)}  />
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
                 <BootstrapTable data={this.state.data} >
                   <TableHeaderColumn isKey={ true } hidden dataField={this.state.groupById}>ID</TableHeaderColumn>
                   <TableHeaderColumn dataField='SMSCOp'>SMSC Operator</TableHeaderColumn>
                   <TableHeaderColumn dataField='TPOA'>TPOA</TableHeaderColumn>
                   <TableHeaderColumn dataField='custRouting'>Customer Routing</TableHeaderColumn>
                   <TableHeaderColumn dataField='delete' dataFormat={ this.deleteDataFormatter.bind(this) } formatExtraData={ 'delete' } ></TableHeaderColumn>
                 </BootstrapTable>
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

    deleteDataFormatter(cell, row,field,index) {
        this.currentRow = row;
        this.currentField = field;

      return (
          <DeleteRowLink currentRow={this.currentRow.SMSCOp}/>
      )
    }

    close() {
      this.setState({ showAddTPOA: false});
    }

    handleAddTPOARequest(){
      this.setState({showAddTPOA : true});
    }

    handleInlineEditChange(val) {

    }

}

function mapStateToProps(state) {
    return { data: state.Account.accountCommInfo };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountGeneral);
