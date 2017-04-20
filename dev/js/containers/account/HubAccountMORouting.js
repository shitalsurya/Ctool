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
import InlineEdit from './../common/components/InlineEdit';
import DeleteRowLink from './../common/components/DeleteRow';
require('../../../scss/style.scss');

class HubAccountMORouting extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          groupById : 'id',
          data : [

          ],
          showAddDedicated : false,
          showAddParsed : false,
        }
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
                 <Col md={ 12 }>
                   <BootstrapTable data={this.state.data} >
                     <TableHeaderColumn isKey={ true } hidden dataField={this.state.groupById}>ID</TableHeaderColumn>
                     <TableHeaderColumn dataField='SMSC'>SMSC</TableHeaderColumn>
                     <TableHeaderColumn dataField='serviceNo' dataFormat={ this.dataFormatter.bind(this) } formatExtraData={ 'serviceNo' } >Service Number</TableHeaderColumn>
                     <TableHeaderColumn dataField='criteria' dataFormat={ this.dataFormatter.bind(this) } formatExtraData={ 'criteria' } >Criteria</TableHeaderColumn>
                     <TableHeaderColumn dataField='returnTPDA' dataFormat={ this.dataFormatter.bind(this) } formatExtraData={ 'returnTPDA' } >Return TPDA</TableHeaderColumn>
                     <TableHeaderColumn dataField='delete' dataFormat={ this.deleteDataFormatter.bind(this) } formatExtraData={ 'delete' } ></TableHeaderColumn>
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

    deleteDataFormatter(cell, row,field,index) {
      return (
          <DeleteRowLink currentRow={this.currentRow.SMSCOp}/>
      )
    }

    dataFormatter(cell, row,field,index) {
      return <InlineEdit type='text' value={cell} onSave={this.handleInlineEditChange.bind(this)}  />
    }

}

function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountMORouting);
