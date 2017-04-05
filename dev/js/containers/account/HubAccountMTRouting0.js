import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button,Modal } from 'react-bootstrap';
import {RadioGroup, Radio} from 'react-radio-group';
const ReactDataGrid = require('react-data-grid');
const {
  ToolsPanel: { AdvancedToolbar: Toolbar, GroupedColumnsPanel },
  Data: { Selectors },
  Draggable: { Container: DraggableContainer },
  Formatters: { ImageFormatter }
} = require('react-data-grid-addons');
import * as types from '../../containers/account/actions/accountActionTypes';
require('../../../scss/style.scss');
import Select from 'react-select';
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
                MTInfo : this.props.MTInfo || [],
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

    handleModalChange(target, value){
      var info = this.state.MTInfo;
      switch(target) {
        case types.ACCOUNT_MT_ROUTING_OPERATOR:
          info.operator=value.value;
          break;
        case types.ACCOUNT_MT_ROUTING_SMSC:
          info.smsc=value.value;
          break;
        case types.ACCOUNT_MT_ROUTING_ONOFF:
          info.onoff=value;
          break;
        case types.ACCOUNT_MT_ROUTING_PERMANENT:
          info.permanent=value;
          break;
        case types.ACCOUNT_MT_ROUTING_TPOA:
          info.tpoa=value.target.value;
          break;
      }
      this.setState({MTInfo : info});
    }

    addRouting(){
      console.log("Added Routing : " , this.state.MTInfo);
      this.setState({ showModal: false });
    }

    render() {

  const modalOptions = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
  ];

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
            <Modal.Title>Add Standard MT Routing</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Grid fluid={true}>
                <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 3 }>
                      Operator:
                    </Col>
                    <Col md={ 6 }>
                      <Select
                            name="operator"
                            placeholder="Select Operator.."
                            options={modalOptions}
                            value={this.state.MTInfo.operator}
                            onChange={this.handleModalChange.bind(this,types.ACCOUNT_MT_ROUTING_OPERATOR)}
                             />
                    </Col>
                    <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 3 }>
                      SMSC:
                    </Col>
                    <Col md={ 6 }>
                      <Select
                            name="smsc"
                            placeholder="Select SMSC.."
                            options={modalOptions}
                            value={this.state.MTInfo.smsc}
                            onChange={this.handleModalChange.bind(this,types.ACCOUNT_MT_ROUTING_SMSC)}
                             />
                    </Col>
                    <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 3 }>
                      On/Off :
                    </Col>
                    <Col md={ 6 }>
                        <RadioGroup name="onoff" onChange={this.handleModalChange.bind(this,types.ACCOUNT_MT_ROUTING_ONOFF)}>
                          <Radio value="on" />On
                          <Radio value="off" />Off
                        </RadioGroup>
                    </Col>
                    <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 3 }>
                      Permanent :
                    </Col>
                    <Col md={ 6 }>
                        <RadioGroup name="permanent" onChange={this.handleModalChange.bind(this,types.ACCOUNT_MT_ROUTING_PERMANENT)}>
                          <Radio value="on" />Yes
                          <Radio value="off" />No
                        </RadioGroup>
                    </Col>
                    <Col mdHidden md={ 3 } />
                </Row>
                <Row className="show-grid">
                    <Col componentClass={ ControlLabel } md={ 3 }>
                      TPOA :
                    </Col>
                    <Col md={ 6 }>
                      <FormControl
                         type="text"
                         name="tpoa"
                         value={this.state.MTInfo.tpoa || ' '}
                         onChange={this.handleModalChange.bind(this,types.ACCOUNT_MT_ROUTING_TPOA)}
                         placeholder="Enter TPOA" />
                    </Col>
                    <Col mdHidden md={ 3 } />
                </Row>
              </Grid>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.addRouting.bind(this)}>Add Routing</Button>
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
