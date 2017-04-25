import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, FormControl, InputGroup,FormGroup, Glyphicon} from 'react-bootstrap';
import Select from 'react-select';
import Toggle from 'react-toggle';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
require('./Inline.scss');

export default class InlineEdit extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            name:this.props.name||[],
            row:this.props.row||{},
            value: this.props.value ||'',
            type : this.props.type || 'text',
            defaultVal : this.props.value,
            options : this.props.options || [],
            showView:true,
            showEdit : false,
            showButtons : false,
        };
    }

    onCancelClick() {
        console.log("this.state.type==",this.props.value);
      if(this.state.type=="time")
      {
        var ms=parseInt(this.props.value);
        var _value = moment(ms).format("HH:mm A");
      }
      else{
        var _value = this.props.value;
      }
      if(this.state.type == "toggle") {
        var _value = this.state.value;
      }
      this.setState(
        {
         name: this.state.name,
         showView:true,
         showEdit : false,
         showButtons : false,
         value:_value
        },function(){
            this.props.onSave(this.state.name,this.state.value,this.state.row);
        });
    }

    onOkClick() {

        var _state = {
            name: this.state.name,
            value: this.state.value,
            showView:true,
            showEdit : false,
            showButtons : false
          };
        this.setState(_state,function(){
          this.props.onSave(this.state.name,this.state.value,this.state.row);
        });

    }

     onEditClick(){
        this.setState({showView:false,showEdit : false,showButtons : true});
     }

     handleChange(e){
       switch(this.state.type){
        case "text":
        case "select":
          var _state = {
              value: e.target.value,
              showView:false,
              showButtons : true,
              showEdit : false,
          };
          break;

        case "time":
          var _state = {
              value:e,
              showView:false,
              showButtons : true,
              showEdit : false,
          };
          break;
        case "toggle":
          var _value, _defaultVal;
          if(e.target.value === "On" || e.target.value === "Off"){
            _value = e.target.value == "On" ? "Off" : "On";
          }
          else if(e.target.value === "Yes" || e.target.value === "No"){
            _value = e.target.value == "Yes" ? "No" : "Yes";
          }
          _defaultVal = (_value === "On" || _value === "Yes") ? true : false ;
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
handleMouseOver(e){
   var labelWidth =parseInt(document.defaultView.getComputedStyle(e.target,null).getPropertyValue("width"))+'px';
   this.setState({styles: {
      width:labelWidth
   },showView:false,showEdit : true,showButtons:false});
}
     render() {
        return (
          <div className="view-edit-control">
            {
              this.state.showView &&
                <InputGroup >
                  <FormControl componentClass="label" className="inline-view-ctrl"
                    onMouseOver={this.handleMouseOver.bind(this) }>
                    {this.state.value}
                  </FormControl>
                </InputGroup>
            }
            {
              this.state.showEdit &&
                <div style={this.state.styles}  onMouseLeave={()=>this.setState({showView:true,showEdit : false,showButtons : false})}>
                  <InputGroup>
                    <FormControl title={this.state.value} className="inline-view-ctrl" componentClass="label">
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
                <FormGroup id="inline-edit-ctrl">
                  {
                    this.state.select &&
                      <FormControl componentClass="select" disabled={this.state.showButtons ? false : "disabled"}
                        value={this.state.value}  onChange={this.handleChange.bind(this)}>
                        {this.state.options}
                      </FormControl>
                  }
                  {
                    this.state.text &&
                      <FormControl title={this.state.value} value={this.state.value} onChange={this.handleChange.bind(this)}
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
                  {
                    this.state.time &&
                      <DateTimeField mode="time" inputFormat="HH:mm A"
                        dateTime={this.state.value}
                        format="HH:mm A"
                        use24hours={true}
                        onChange={this.handleChange.bind(this)} />

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
          var _defaultVal;
          _defaultVal = (this.state.value === "On" || this.state.value === "Yes") ? true : false ;
          this.setState({toggle : true , defaultVal : _defaultVal});
          break;
        case "time":
        var ms=parseInt(this.state.value);
        var _time = moment(ms).format("HH:mm A");
          this.setState({time : true,value:_time});
          break;

      }
    }

}
