import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
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
          <TableHeaderColumn dataField='destinationOperator' isKey={ true }>Field A</TableHeaderColumn>
          <TableHeaderColumn dataField='SMSC'>Field B</TableHeaderColumn>
          <TableHeaderColumn dataField='onOff'>Field C</TableHeaderColumn>
              <TableHeaderColumn dataField='permanent'>Field C</TableHeaderColumn>
                  <TableHeaderColumn dataField='status'>Field C</TableHeaderColumn>
                      <TableHeaderColumn dataField='comment'>Field C</TableHeaderColumn>
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
                groupBy:'country',
                data:Routings.data
          }
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
handleClickCell(e){
  console.log("handleClickCell==",e);

  this.setState({groupBy:'SMSC'},function(){
    console.log("groupBy==",this.state.groupBy);
  });
  this.setState({data:grpBySMSCData.data},function(){
    console.log("groupBy==",this.state.data);
  });

}
expandColumnComponent({ isExpandableRow, isExpanded }) {
console.log("isExpanded==",isExpanded);
  let content = '';

  if (isExpandableRow) {
    console.log("isExpandableRow");
    content = (isExpanded ? '(-)' : '(+)' );
  } else {
    console.log("else isExpandableRow");
    content = ' ';
  }
  return (
    <div> { content } </div>
  );
}
//  columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
//   // fieldValue is column value
//   // row is whole row object
//   // rowIdx is index of row
//   // colIdx is index of column
//   return rowIdx % 2 === 0 ? 'td-column-function-even-example' : 'td-column-function-odd-example';
// }

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
                           md={ 3 }> Existing MT Routing:
                       </Col>
                       <Col
                           mdHidden
                           md={ 9 } >
                           <ButtonGroup justified>
                           <Button href="#" onClick={this.handleClickCell.bind(this)}>Modify Selected MT Routings
                           </Button>
                           <Button href="#" onClick={this.open.bind(this)}>Delete Selected MT Routings
                           </Button>
                           <Button href="#" onClick={this.open.bind(this)}>Add Standard MT Routings
                           </Button>
                           </ButtonGroup>
                     </Col>
                     </Row>
                     <Row className="show-grid">
                     <Col md={ 12 }>
                     <BootstrapTable data={this.state.data}
                       tableBodyClass='master-body-class'
     options={ options }
     expandableRow={ this.isExpandableRow }
       expandComponent={ this.expandComponent.bind(this) }>
     <TableHeaderColumn dataField={this.state.groupBy} tdStyle={ {'border-right': 'none','border-left': 'none' }} isKey={ true }
     >Destination Operator</TableHeaderColumn>
      <TableHeaderColumn tdStyle={ { 'border-right': 'none','border-left': 'none' } }>SMSC</TableHeaderColumn>
        <TableHeaderColumn tdStyle={ { 'border-right': 'none','border-left': 'none'} }>On/Off</TableHeaderColumn>
          <TableHeaderColumn tdStyle={ {  'border-right': 'none','border-left': 'none' } }>Permanent</TableHeaderColumn>
            <TableHeaderColumn tdStyle={ {  'border-right': 'none','border-left': 'none'} }>Status</TableHeaderColumn>
              <TableHeaderColumn tdStyle={ { 'border-left': 'none' } }>Comment</TableHeaderColumn>
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
