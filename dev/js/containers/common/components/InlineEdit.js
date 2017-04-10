import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setInlineEditValue} from './InlineEditActions'
import { Nav, NavItem, FormGroup, FormControl, InputGroup, Glyphicon,ControlLabel,Grid ,Row,Col} from 'react-bootstrap';
import Select from 'react-select';
require('../../../../scss/style.scss');

class InlineEdit extends React.Component {
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

      //  this.props.setInlineEditValue(this.state);
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
       showEdit : true,
     };
   this.setState(_state,function(){
      console.log("this.state==",this.state);
   });

 }
 onEditClick()
 {
    this.setState({showEdit : true,showLabel:false,showButtons : true},function(){
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
            {this.state.showEdit &&
              <InputGroup id="input" >
                <FormControl value={this.state.value} onChange={this.handleInputChange.bind(this)} type="text" disabled={this.state.showButtons ? false : "disabled"} />
                <InputGroup.Addon onClick={this.onEditClick.bind(this)}>
                  <Glyphicon glyph="pencil" />
                </InputGroup.Addon>
              </InputGroup>}
            {this.state.showButtons &&       <InputGroup >
              <InputGroup.Addon className="ok" onClick={this.onOkClick.bind(this)}>
                <Glyphicon glyph="ok"/>
              </InputGroup.Addon>
              <InputGroup.Addon className="remove" onClick={this.onCancelClick.bind(this)}>
                <Glyphicon glyph="remove" />
              </InputGroup.Addon>
            </InputGroup>}
          </div>
              );
            }
            }

            function mapStateToProps(state) {
              return {  };
            }

            function mapDispatchToProps(dispatch) {
              return bindActionCreators({setInlineEditValue:setInlineEditValue }, dispatch);
            }

            export default connect(mapStateToProps, mapDispatchToProps)(InlineEdit);
