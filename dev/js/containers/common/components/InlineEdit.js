import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Form, FormControl, InputGroup,FormGroup, ControlLabel} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
import Toggle from 'react-toggle';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
import { initializeSelectOptions,initializeTypeAheadData } from './../Functions/commonFunctions';
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
            optionsLabel:this.props.optionsLabel|| '',
            showView:true,
            showEdit : false,
            showButtons : false,
        };
        console.log("InlineEdit initial this.state==",this.state);
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

      if(!this.state.mselect){
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
      else {
        var _selected = _value.map(function (field) {
             return (
               <option key={field} value={field}>
                 {field}
               </option>
             );
         });
        this.setState(
          {
           name: this.state.name,
           mSelectView:true,
           selected : _selected,
           mSelectEdit : false,
           showButtons : false,
           value:_value
          },function(){
              this.props.onSave(this.state.name,this.state.value,this.state.row);
          });
      }
    }
    getNamebyIdForSelect(_options){
        var _defaultOptionName="";
      _options.forEach( function (bl)
      {
        if(bl.hasOwnProperty(this.state.name)){
          if(bl[this.state.name]==this.state.value){
             _defaultOptionName = bl[this.state.optionsLabel];
          }
        }
      }.bind(this));
        console.log("_defaultOptionName==",_defaultOptionName);
        return _defaultOptionName;
    }
    onOkClick() {
      console.log("onOkClick==",this.state.type);
        var _state={};
      switch (this.state.type) {
        case "select":
          _state = {
             name: this.state.name,
             value: this.state.value,
             showView:true,
             showEdit : false,
             showButtons : false,
             defaultOptionName:this.getNamebyIdForSelect(this.props.options)
           };
          break;
          case "multiSelect":
          var labels=[];
            this.state.selected.forEach( function (option)
              {
                    labels.push(option.label);
            });
            _state = {
               name: this.state.name,
               value: this.state.value,

               mSelectView : true,
               mSelectEdit : false,
               showButtons : false,
               defaultOptionName:labels.join(',')
             };
            break;
        default:
        var _state = {
            name: this.state.name,
            value: this.state.value,
            showView:true,
            showEdit : false,
            showButtons : false
          };
            break;
      }

        // if(!this.state.mselect){
        //
        // }
        // else if(this.state.select){
        //
        // }
        // else {
        //
        // }
        this.setState(_state,function(){
          console.log("onOkClick this.state==",this.state);
          this.props.onSave(this.state.name,this.state.value,this.state.row);
        });
    }

     onEditClick(){
        this.setState({showView:false, showEdit : false, showButtons : true, mSelectView : false, mSelectEdit : false});
     }

     handleChange(e){
       console.log("handleChange==",e);
       switch(this.state.type){
        case "text":
        case "select":
          var _state = {
              value: e.target.value,
              showView:false,
              showButtons : true,
              showEdit : false
          };
          break;
        case "multiSelect":
          var _value = [];
          for (var i in e) {
            _value.push(e[i].id)
          }
          var _state = {
            selected: e,
            value : _value,
            mSelectView : false,
            showButtons : true,
            mSelectEdit : false,
          }
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
       if(this.state.showView){
         this.setState({styles: {
            width:labelWidth
         },showView:false,showEdit : true,showButtons:false});
       }
       else if(this.state.mSelectView){
         this.setState({styles: {
            width:labelWidth
         },mSelectView:false,mSelectEdit : true,showButtons:false});
       }
     }

     render() {

        return (
          <div className="view-edit-control">
            {
              <div>
                {
                  this.state.showView &&
                    <ControlLabel className="inline-view-ctrl"
                      onMouseOver={this.handleMouseOver.bind(this) }>
                      {!this.state.select && this.state.value}
                      {this.state.select && this.state.defaultOptionName}
                    </ControlLabel>
                }
                {
                  this.state.mSelectView &&
                    <ControlLabel className="inline-view-ctrl"
                      onMouseOver={this.handleMouseOver.bind(this) }>
                      {this.state.defaultOptionName}
                    </ControlLabel>
                }
              </div>
            }
            {
              <div>
                {
                  this.state.showEdit &&
                    <div style={this.state.styles}  onMouseLeave={()=>this.setState({showView:true,showEdit : false,showButtons : false})}>
                      <InputGroup>
                        <FormControl title={this.state.value} className="inline-edit-ctrl" componentClass="label">
                          {!this.state.select && this.state.value}
                          {this.state.select && this.state.defaultOptionName}
                        </FormControl>
                        <InputGroup.Addon onClick={this.onEditClick.bind(this)}>
                          <span title="Click to edit"
                            className="edit-button-icon"></span>
                        </InputGroup.Addon>
                      </InputGroup>
                    </div>
                }
                {
                  this.state.mSelectEdit &&
                    <div style={this.state.styles}  onMouseLeave={()=>this.setState({mSelectView:true,mSelectEdit : false,showButtons : false})}>
                      <InputGroup>
                        <FormControl title={this.state.value} className="inline-edit-ctrl" componentClass="label">
                          {this.state.defaultOptionName}
                        </FormControl>
                        <InputGroup.Addon onClick={this.onEditClick.bind(this)}>
                          <span title="Click to edit"
                            className="edit-button-icon"></span>
                        </InputGroup.Addon>
                      </InputGroup>
                    </div>
                }
              </div>
            }
            {
              this.state.showButtons &&
                <FormGroup>
                  {
                    this.state.mselect &&
                      // <Typeahead
                      //   clearButton
                      //   defaultSelected={options.slice(0, 5)}
                      //   labelKey="name"
                      //   multiple
                      //   options={this.state.options}
                      // />
                        <Typeahead
                          defaultSelected = {this.state.selected}
                          multiple
                          options={this.state.options}
                          onChange={this.handleChange.bind(this)}
                        />
                  }
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
      console.log("componentWillMount this.state.type==",this.state.type);
      switch (this.state.type) {
        case "text":
          this.setState({text : true});
          break;
        case "select":
           var _options = initializeSelectOptions(this.state.options,this.state.optionsLabel,this.state.name);
           this.setState({select : true,options:_options,defaultOptionName:this.getNamebyIdForSelect(this.state.options)});
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
        case "multiSelect":

          var _options = initializeTypeAheadData(this.state.options,this.state.optionsLabel,this.state.name);
            console.log("_options==",_options);
            console.log("this.state.value==",this.state.value);
             var _selected = [],labels=[];
            for (var i in this.state.value) {
              _options.forEach( function (option)
              {
                  if(option.id == this.state.value[i]){
                      _selected.push(option);
                      labels.push(option.label);
                  }
              }.bind(this));
            }
          this.setState({mselect:true,selected:_selected,defaultOptionName:labels.join(','),options:_options,mSelectView:true,showView:false});
          break;
      }
    }

}
