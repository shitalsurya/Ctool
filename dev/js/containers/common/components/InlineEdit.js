import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, FormControl, InputGroup,FormGroup, Glyphicon} from 'react-bootstrap';
import Select from 'react-select';

require('./Inline.scss');

export default class InlineEdit extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state={
            options : this.props.options || [],
            value: this.props.value ||'',
              showView:true,
                showEdit : false,
          showButtons : false
        };
        console.log("this.state==",this.state);
    }

    onCancelClick() {
      this.setState({   showView:true,showEdit : false,  showButtons : false,
      value:this.props.value
    });
    }
    onOkClick() {

        var _state = {
              value: this.state.value,
              showView:true,
                showEdit : false,
            showButtons : false
          };
        this.setState(_state,function(){
           console.log("this.state==",this.state);
             this.props.onSave(this.state.value);
        });

    }

 onEditClick()
 {
    this.setState({showView:false,showEdit : false,showButtons : true},function(){
      // var elem = document.getElementById("input");
      // var theCSSprop =parseInt(window.getComputedStyle(elem,null).getPropertyValue("width"))+100+'px';
      // console.log("theCSSprop==",theCSSprop);
      // this.setState({styles: {
      //    width:theCSSprop
      // }});
    });
 }
 componentWillMount() {
   var _options = this.state.options.map(function (field) {
     console.log("field==",field);
         return (
             <option
               value={field.id} >
               {field.value}
             </option>
         );
     });
     this.setState({options:_options});
 }
 handleChange(e){
   console.log("handleChange==",e);
   var _state = {
         value: e.target.value,
         showView:false,
       showButtons : true,
       showEdit : false,
     };
   this.setState(_state,function(){
      console.log("this.state==",this.state);
   });
 }
 onMouseOut(e){
   console.log("e==",e.target.getAttribute("class"));
  if(e.target.getAttribute("class")!="input-group-addon" || e.target.getAttribute("class")!="edit-button-icon"){
    this.setState({showView:true,showEdit : false,showButtons : false},function(){

  });
  }
 }
    render() {
        return (
          <div className="view-edit-control">
            {
              this.state.showView &&
                <InputGroup controlId="formControlsSelectMultiple">
                  <FormControl componentClass="label"
                    onMouseOver={ () => this.setState({showView:false,showEdit : true,showButtons:false}) }>
                    {this.state.value}
                  </FormControl>

                </InputGroup>

            }
            {
              this.state.showEdit &&
                <InputGroup controlId="formControlsSelectMultiple" >
                  <FormControl componentClass="label">
                    {this.state.value}
                  </FormControl>
                  <InputGroup.Addon onClick={this.onEditClick.bind(this)}
                  >
                    <span title="Click to edit"
                      className="edit-button-icon"></span>
                  </InputGroup.Addon>
                </InputGroup>

            }
            {
              this.state.showButtons &&
                <FormGroup>
                  {/*<FormControl componentClass="select" disabled={this.state.showButtons ? false : "disabled"}
                    value={this.state.value}  onChange={this.handleSelectChange.bind(this)}>
                    {this.state.options}
                  </FormControl>*/}
                  <FormControl value={this.state.value} onChange={this.handleChange.bind(this)}
                    type="text" disabled={this.state.showButtons ? false : "disabled"} />
                  <div className="edit-buttons" >
                    <span title="Click to save" className="edit-ok-icon" onClick={this.onOkClick.bind(this)}></span>
                    <span title="Click to cancel" className="edit-cancel-icon" onClick={this.onCancelClick.bind(this)}></span>
                  </div>
                </FormGroup>

            }

          </div>
              );
            }
            }
