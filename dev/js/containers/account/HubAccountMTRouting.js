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
const products = [];
function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    if (i < 3) {
      products.push({
        id: id,
        name: 'Item name ' + id,
    //    price: 2100 + i,
        expand: [ {
          fieldA: 'test1',
          fieldB: (i + 1) * 99,
          fieldC: (i + 1) * Math.random() * 100,
          fieldD: '123eedd' + i
        }, {
          fieldA: 'test2',
          fieldB: i * 99,
          fieldC: i * Math.random() * 100,
          fieldD: '123eedd' + i
        } ]
      });
    } else {
      products.push({
        id: id,
        name: 'Item name ' + id,
    //    price: 2100 + i
      });
    }
  }
}
addProducts(5);
import Products from '../../../json/Products.json';
class BSTable extends React.Component {
  render() {
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data }>
          <TableHeaderColumn dataField='fieldA' isKey={ true }>Field A</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldB'>Field B</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldC'>Field C</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldD'>Field D</TableHeaderColumn>
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
               showModal: false
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

expandComponent(row) {
  return (
    <BSTable data={ row.expand } />
  );
}
expandColumnComponent({ isExpandableRow, isExpanded }) {
  console.log("expandColumnComponent");
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
    render() {
 this.data=Products.data;

 const options = {
 expandRowBgColor: 'transparent',
   expandBy: 'column'
 };
 const selectRow = {
// mode: 'checkbox',
 clickToSelect: true,  // click to select, default is false
 clickToExpand: true  // click to expand row, default is false
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
                           <Button href="#" onClick={this.open.bind(this)}>Modify Selected MT Routings
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
                     <BootstrapTable data={products
                      }
     options={ options }
     expandableRow={ this.isExpandableRow }
       expandComponent={ this.expandComponent }
     expandColumnOptions={ {
         expandColumnVisible: false,
         expandColumnComponent: this.expandColumnComponent,
         columnWidth: 50
       } }>
     <TableHeaderColumn dataField='id' tdStyle={ { 'border-right': 'none'}} isKey={ true }>Product ID</TableHeaderColumn>
      <TableHeaderColumn tdStyle={ { 'border-right': 'none','border-left': 'none' } }>price Name</TableHeaderColumn>
        <TableHeaderColumn tdStyle={ { 'border-left': 'none' } }>price Name</TableHeaderColumn>
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

const CustomToolbar = React.createClass({
  propTypes: {
    groupBy: React.PropTypes.array.isRequired,
    onColumnGroupAdded: React.PropTypes.func.isRequired,
    onColumnGroupDeleted: React.PropTypes.func.isRequired
  },

  render() {
    return (<Toolbar>
      <GroupedColumnsPanel groupBy={this.props.groupBy} onColumnGroupAdded={this.props.onColumnGroupAdded} onColumnGroupDeleted={this.props.onColumnGroupDeleted}/>
      </Toolbar>);
  }
});
