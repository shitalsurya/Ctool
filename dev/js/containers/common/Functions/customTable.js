import React from 'react';
import Toggle from 'react-toggle';
import InlineEdit from './../../common/components/InlineEdit';
import DeleteRow from './../../common/components/DeleteRow';
import moment from 'moment';
require('./../components/Inline.scss');
export function columnFormatter(cell, row, field, index) {
  //  this.currentRow = row;
    switch (field.type) {
        case "text":
            return <InlineEdit name = {
                field.dataField
            }
              row={row}
              type = 'text'
              value = {
                cell
              }
              onSave = {
                this.updateValue.bind(this)
              }
                   />
            break;
        case "select":
            return <InlineEdit name = {
                field.dataField
            }
              row={row}
              type = 'select'
              options = {
                field.options
              }
              optionsLabel={
                field.optionsLabel
              }
              value = {
                cell
              }
              onSave = {
                this.updateValue.bind(this)
              }
                   />
            break;
        case "toggle":
            return   <Toggle
              icons={field.options}
              defaultChecked={cell}
              value={cell}
              onChange={this.updateValue.bind(this)}
                     />
            break;
        case "time":
        var ms=parseInt(cell);
        var _time = moment(ms).format("HH:mm A");
        return <span title={field.name}>{_time}</span>
        //  this.setState({time : true,value:_time});
            // return <InlineEdit name = {
            //     field.dataField
            // }
            //   row={row}
            //   type = 'time'
            //   value = {
            //     cell
            //   }
            //   onSave = {
            //     this.updateValue.bind(this)
            //   }
            //        />
            break;
        case "image":
            const imgSrc = require("./../../../../images/circle-" + cell + ".png");
            return <img src = {
                imgSrc
            }
                   />
            break;
        case "delete":
            return <DeleteRow currentRow={row[field.rowId]}/>
            break;
            case "comment":
               return   <div id="box" title={cell}></div>
              //  return    <span className="comments-icon" title={cell} ></span>
              break;
    }
}
