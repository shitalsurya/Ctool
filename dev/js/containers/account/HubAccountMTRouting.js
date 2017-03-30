import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav,NavItem } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
const ReactDataGrid = require('react-data-grid');
const {
  ToolsPanel: { AdvancedToolbar: Toolbar, GroupedColumnsPanel },
  Data: { Selectors },
  Draggable: { Container: DraggableContainer },
  Formatters: { ImageFormatter }
} = require('react-data-grid-addons');

require('../../../scss/style.scss');
import Products from '../../../json/Products.json';
class HubAccountMTRouting extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.createRows();
        this._columns = [
          { key: 'id', name: 'ID' },
          { key: 'title', name: 'Title' , draggable: true},
          { key: 'count', name: 'Count', draggable: true } ];
          this.state={
             groupBy: [], expandedRows: {}
          }
    }

      createRows() {
        let rows = [];
        for (let i = 1; i < 1000; i++) {
          rows.push({
            id: i,
            title: 'Title ' + 1,
            count: i * 1000
          });
        }

        this._rows = rows;
      }

      rowGetter(i) {
        return this._rows[i];
      }
      onColumnGroupAdded(colName) {
         let columnGroups = this.state.groupBy.slice(0);
         if (columnGroups.indexOf(colName) === -1) {
           columnGroups.push(colName);
         }
         this.setState({groupBy: columnGroups});
       }

       onColumnGroupDeleted(name) {
         let columnGroups = this.state.groupBy.filter(function(g){return g !== name});
         this.setState({groupBy: columnGroups});
       }

       onRowExpandToggle({ columnGroupName, name, shouldExpand }) {
         let expandedRows = Object.assign({}, this.state.expandedRows);
         expandedRows[columnGroupName] = Object.assign({}, expandedRows[columnGroupName]);
         expandedRows[columnGroupName][name] = {isExpanded: shouldExpand};
         this.setState({expandedRows: expandedRows});
       }

    render() {
 this.data=Products.data;


        return (
                 <div className="controls-container">
                   <div className="rec">
                   <span>MT Routing</span>
                   </div>
                    <DraggableContainer>
                    <ReactDataGrid
                    columns={this._columns}
                    rowGetter={this.rowGetter.bind(this)}
                    rowsCount={this._rows.length}

                    enableCellSelect={true}
            enableDragAndDrop={true}
            onRowExpandToggle={this.onRowExpandToggle}
            toolbar={<CustomToolbar groupBy={this.state.groupBy} onColumnGroupAdded={this.onColumnGroupAdded.bind(this)} onColumnGroupDeleted={this.onColumnGroupDeleted.bind(this)}/>}
                    minHeight={500} />
                     </DraggableContainer>
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
