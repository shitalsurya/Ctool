import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, FormControl, InputGroup,FormGroup, Glyphicon} from 'react-bootstrap';
import Select from 'react-select';
require('../../../../scss/style.scss');

export default class InlineEdit extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            type : this.props.type || 'text',
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
              type : this.state.type,
              value: this.state.value,
            showButtons : false,
            showEdit : true,
          };
        this.setState(_state,function(){
           console.log("this.state==",this.state);
             this.props.onSave(this.state.value);
        });

    }

 componentDidMount(){
  //  var elem = document.getElementById("caption");
  //  var theCSSprop =parseInt(window.getComputedStyle(elem,null).getPropertyValue("width"))+70+'px';
  //  console.log("theCSSprop==",theCSSprop);
  //  this.setState({styles: {
  //     width:theCSSprop
  //  }});
 }
 handleInputChange(e){
   console.log("handleInputChange==",e.target.value);
   var _state = {
         type : this.state.type,
         value: e.target.value,
       showButtons : true,
       showEdit : false,
     };
   this.setState(_state,function(){
      console.log("this.state==",this.state);
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
    render() {
        return (
          <div className="view-edit-control">
            {
              this.state.showEdit &&
                <FormGroup>
                  <InputGroup id="input" >
                    <FormControl value={this.state.value} onChange={this.handleInputChange.bind(this)} type="text" disabled={this.state.showButtons ? false : "disabled"} />
                    <InputGroup.Addon onClick={this.onEditClick.bind(this)}>
                      <span className="edit-button-icon"></span>
                    </InputGroup.Addon>
                  </InputGroup>
                </FormGroup>

            }
            {
              this.state.showButtons &&
                <FormGroup>
                  <FormControl value={this.state.value} onChange={this.handleInputChange.bind(this)} type="text" disabled={this.state.showButtons ? false : "disabled"} />
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
