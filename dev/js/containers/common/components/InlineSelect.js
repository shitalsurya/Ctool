import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, FormControl, InputGroup,FormGroup, Glyphicon} from 'react-bootstrap';
import Select from 'react-select';

require('./Inline.scss');

export default class InlineSelect extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state={
            options :  [],
            value: this.props.value ||'',
          showButtons : false,
          showEdit : true,
        };
        console.log("this.state==",this.state);
    }

    onCancelClick() {
      console.log("this.state.prevName==",this.state.prevName);
      this.setState({ showEdit : true,  showButtons : false,
      name:this.state.prevName
    });
    }
    onOkClick() {

        var _state = {
              value: this.state.value,
            showButtons : false,
            showEdit : true,
          };
        this.setState(_state,function(){
           console.log("this.state==",this.state);
             this.props.onSave(this.state.value);
        });

    }

 onEditClick()
 {
    this.setState({showEdit : false,showButtons : true},function(){
      // var elem = document.getElementById("input");
      // var theCSSprop =parseInt(window.getComputedStyle(elem,null).getPropertyValue("width"))+100+'px';
      // console.log("theCSSprop==",theCSSprop);
      // this.setState({styles: {
      //    width:theCSSprop
      // }});
    });
 }
 componentWillMount() {
   this.state.options = this.props.options.map(function (field) {
     console.log("field==",field);
         return (
             <option
               value={field.id} >
               {field.value}
             </option>
         );
     });
 }
 handleSelectChange(e){
   console.log("handleSelectChange==",e);
   var _state = {
         value: e.target.value,
       showButtons : true,
       showEdit : false,
     };
   this.setState(_state,function(){
      console.log("this.state==",this.state);
   });
 }
    render() {
        return (
          <div className="view-edit-control">
            {
              this.state.showEdit &&
                <InputGroup controlId="formControlsSelectMultiple">
                  <FormControl componentClass="select" disabled={this.state.showButtons ? false : "disabled"}
                    value={this.state.value}  onChange={this.handleSelectChange.bind(this)}>
                    {this.state.options}
                  </FormControl>
                  <InputGroup.Addon onClick={this.onEditClick.bind(this)}>
                    <span className="edit-button-icon"></span>
                  </InputGroup.Addon>
                </InputGroup>

            }
            {
              this.state.showButtons &&
                <FormGroup>
                  <FormControl componentClass="select" disabled={this.state.showButtons ? false : "disabled"}
                    value={this.state.value}  onChange={this.handleSelectChange.bind(this)}>
                    {this.state.options}
                  </FormControl>
                  <div className="edit-buttons" >
                    <span className="edit-ok-icon" onClick={this.onOkClick.bind(this)}></span>
                    <span className="edit-cancel-icon" onClick={this.onCancelClick.bind(this)}></span>
                  </div>
                </FormGroup>

            }

          </div>
              );
            }
            }
