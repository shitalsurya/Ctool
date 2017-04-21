import React from 'react';
import InlineEdit from './../../common/components/InlineEdit';
export function columnFormatter(cell, row, field, index) {
    this.currentRow = row;
    switch (field.type) {
        case "text":
            return <InlineEdit name = {
                field.name
            }
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
                field.name
            }
              type = 'select'
              options = {
                field.options
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
            var icons;
            return <InlineEdit name = {
                field.name
            }
              type = "toggle"
              value = {
                cell
              }
              icons = {
                field.options
              }
              onSave = {
                this.updateValue.bind(this)
              }
                   />
            break;
        case "time":
            return <InlineEdit name = {
                field.name
            }
              type = 'time'
              value = {
                cell
              }
              onSave = {
                this.updateValue.bind(this)
              }
                   />
            break;
        case "image":
            const imgSrc = require("./../../../../images/circle-" + cell + ".png");
            return <img src = {
                imgSrc
            }
                   />
            break;
    }
}
