import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import Select from 'react-select';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal } from 'react-bootstrap';
const ReactDataGrid = require('react-data-grid');
const {
  ToolsPanel: { AdvancedToolbar: Toolbar, GroupedColumnsPanel },
  Data: { Selectors },
  Draggable: { Container: DraggableContainer },
  Formatters: { ImageFormatter }
} = require('react-data-grid-addons');

require('../../../scss/style.scss');

import Routings from '../../../json/MT_routing.json';
import grpBySMSCData from '../../../json/MT_routing_grp_by_smsc.json';
class BSTable extends React.Component {
  render() {
    const selectRow = {
     mode: 'checkbox'
   };
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data } selectRow={ selectRow }>
          <TableHeaderColumn dataField='destinationOperator' isKey={ true }>Destination Operator</TableHeaderColumn>
          <TableHeaderColumn dataField='SMSC'>SMSC</TableHeaderColumn>
          <TableHeaderColumn dataField='onOff'>On/Off</TableHeaderColumn>
              <TableHeaderColumn dataField='permanent'>Permanent</TableHeaderColumn>
                  <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                      <TableHeaderColumn dataField='comment'>Comment</TableHeaderColumn>

        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}
class HubAccountMTRouting extends React.Component {
    constructor(props, context) {
        super(props, context);

          this.state={
               showModal: false,
               // Default expanding row
                expanding: [ 0 ],
                groupBy:  {"label": "country", "value":"country"},
                data:Routings.data
          }
          this.grpByMaster =
             [
                  {"label": "country", "value":"country"},
                    {"label": "SMSC", "value":"SMSC"}
              ]
    }
        close() {
          this.setState({ showModal: false });
        }

        open() {
          this.setState({ showModal: true });
        }
        isExpandableRow(row) {
  if (typeof (row.expand)!='undefined') return true;
  else return false;
}
priceFormatter(cell, row, enumObject, index) {
  console.log(`The row index: ${index}`);

    console.log(" expanding:priceFormatter==",this.state.expanding);
  if (typeof (row.expand)!='undefined'){
    if(this.state.expanding.includes(index)){
        return `<i class='glyphicon glyphicon-triangle-bottom'></i> ${cell}`;
    }
    return `<i class='glyphicon glyphicon-triangle-right'></i> ${cell}`;
  }
  else return `${cell}`;
}
expandComponent(row) {
  return (
    <BSTable data={ row.expand } />
  );
}
handleGroupByChange(val){
  console.log("handleGroupByChange==",val);
//var _groupBy = {"label": "SMSC", "value":"smsc"}
  this.setState({groupBy:val},function(){
    console.log("groupBy==",this.state.groupBy);
    if(this.state.groupBy.value=='country'){
      this.setState({data:Routings.data},function(){
        console.log("data==",this.state.data);
      });

    }
    else if(this.state.groupBy.value=='SMSC'){
      this.setState({data:grpBySMSCData.data},function(){
        console.log("data==",this.state.data);
      });
    }
  });
}
    render() {

 const options = {
 expandRowBgColor: 'transparent',
   expandBy: 'column',
    expanding: this.state.expanding
 };


        return (

                 <div className="tabs-container">
                 <Grid fluid={true}>
                     <Row className="show-grid">
                         <Col
                             componentClass={ ControlLabel }
                             md={ 3 }> Restricted routing:
                         </Col>
                         <Col md={ 6 }>
                         </Col>
                         <Col
                             mdHidden
                             md={ 3 } />
                     </Row>
                     <Row className="show-grid">
                       <Col
                           componentClass={ ControlLabel }
                           md={ 3 }> Existing MT Routing
                       </Col>
                       <Col
                           mdHidden
                           md={ 3 } >   </Col>
                       <Col
                           componentClass={ ControlLabel }
                           md={ 3 }> Group By:
                       </Col>
                       <Col
                           md={ 3 } >
                           <Select
                                 placeholder="Select Column.."
                                 options={this.grpByMaster}
                                 value={this.state.groupBy}
                                  onChange={this.handleGroupByChange.bind(this)}
                             />
                     </Col>
                     </Row>
                     <Row className="show-grid">
                     <Col md={ 12 }>

                       </Col>
                       </Row>
                     <Row className="show-grid">
                     <Col md={ 4 }>

                     <BootstrapTable data={this.state.data}
                       tableBodyClass='master-body-class'
     options={ options }
     expandableRow={ this.isExpandableRow }
       expandComponent={ this.expandComponent.bind(this) }>
          <TableHeaderColumn isKey={ true } hidden dataField='id'>ID</TableHeaderColumn>
     <TableHeaderColumn dataField={this.state.groupBy.value} >Grouped by {this.state.groupBy.value}

       </TableHeaderColumn>

   </BootstrapTable>
                     </Col>
                     </Row>
                 </Grid>


        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>


            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
                 </div>
        )
    }

    componentWillReceiveProps(nextProps) {

      }

}

function mapStateToProps(state) {
    return { };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountMTRouting);
