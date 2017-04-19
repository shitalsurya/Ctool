import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, FormControl, InputGroup,FormGroup, Glyphicon} from 'react-bootstrap';
import Select from 'react-select';
import Toggle from 'react-toggle';

require('./Inline.scss');

export default class InlineEdit extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state={
            options : this.props.options || [],
            value: this.props.value ||'',
            showView:true,
            showEdit : false,
            showButtons : false,
            type : this.props.type || 'text',
            defaultVal : this.props.value
        };
        console.log("this.state==",this.state);
    }

    onCancelClick() {
      let _value = this.state.value;
      this.setState({   showView:true,showEdit : false,  showButtons : false,
      value:_value
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

     handleChange(e){
       console.log("handleChange==",e);
       switch(this.state.type){
         case "text":
           var _state = {
               value: e.target.value,
               showView:false,
               showButtons : true,
               showEdit : false,
           };
           break;
        case "select":
          var _state = {
              value: e.target.value,
              showView:false,
              showButtons : true,
              showEdit : false,
          };
          break;
        case "toggle":
          var _value, _defaultVal;
          if(this.props.field === "onOff"){
            _value = e.target.value == "On" ? "Off" : "On";
            _defaultVal = _value == "On" ? true : false;
          }
          else{
            _value = e.target.value == "Yes" ? "No" : "Yes";
            _defaultVal = _value == "Yes" ? true : false;
          }
          var _state = {
            value: _value,
            showView:false,
            showButtons : true,
            showEdit : false,
            defaultVal : _defaultVal
          }
          break;
       }

       this.setState(_state,function(){
          console.log("this.state==",this.state);
       });
     }

     render() {
        return (
          <div className="view-edit-control">
            {
              this.state.showView &&
                <InputGroup controlId="formControlsSelectMultiple">
                  <FormControl id="input" componentClass="label"
                    onMouseOver={ () => this.setState({},function(){
                      var elem = document.getElementById("input");
                      var theCSSprop =parseInt(document.defaultView.getComputedStyle(elem,null).getPropertyValue("width"))+100+'px';
                      console.log("theCSSprop==",theCSSprop);
                      this.setState({styles: {
                         width:theCSSprop
                      },showView:false,showEdit : true,showButtons:false});
                    }) }>
                    {this.state.value}
                  </FormControl>

                </InputGroup>

            }
            {
              this.state.showEdit &&
                <div style={this.state.styles}  onMouseLeave={()=>this.setState({showView:true,showEdit : false,showButtons : false})}>
                  <InputGroup controlId="formControlsSelectMultiple">
                    <FormControl componentClass="label">
                      {this.state.value}
                    </FormControl>
                    <InputGroup.Addon onClick={this.onEditClick.bind(this)}>
                      <span title="Click to edit"
                        className="edit-button-icon"></span>
                    </InputGroup.Addon>
                  </InputGroup>
                  </div>
            }
            {
              this.state.showButtons &&
                <FormGroup>
                  {
                    this.state.select &&
                    <FormControl componentClass="select" disabled={this.state.showButtons ? false : "disabled"}
                    value={this.state.value}  onChange={this.handleChange.bind(this)}>
                    {this.state.options}
                    </FormControl>
                  }
                  {
                    this.state.text &&
                    <FormControl value={this.state.value} onChange={this.handleChange.bind(this)}
                      type="text" disabled={this.state.showButtons ? false : "disabled"} />
                  }
                  {
                    this.state.toggle &&
                    <Toggle
                      icons={this.props.icons}
                      defaultChecked={this.state.defaultVal}
                      value={this.state.value}
                      onChange={this.handleChange.bind(this)}
                    />

                  }
                  <div className="edit-buttons" >
                    <span title="Click to save" className="edit-ok-icon" onClick={this.onOkClick.bind(this)}></span>
                    <span title="Click to cancel" className="edit-cancel-icon" onClick={this.onCancelClick.bind(this)}></span>
                  </div>
                </FormGroup>

            }

          </div>
        );
    }

    componentWillMount() {
      var _options = this.state.options.map(function (field) {
        console.log("field==",field);
            return (
                <option key={field.id}
                  value={field.value} >
                  {field.value}
                </option>
            );
        });
        this.setState({options:_options});

      switch (this.state.type) {
        case "text":
          this.setState({text : true});
          break;
        case "select":
          this.setState({select : true});
          break;
        case "toggle":
          var _value;
          if(this.props.field === "onOff")
            _value = this.state.value ? "On" : "Off";
          else
            _value =  this.state.value ? "Yes" : "No";
          this.setState({toggle : true , value : _value });
          break;
        case "text":
          this.setState({text : true});
          break;
      }
    }

}
