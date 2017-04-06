import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav, NavItem, FormGroup, FormControl, InputGroup, Glyphicon,ControlLabel,Grid ,Row,Col} from 'react-bootstrap';
import Select from 'react-select';
require('../../../scss/style.scss');

class HubAccountTPOA extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          showButtons : false,
          showEdit : false,
          showLabel:true,
          name:"test field",
          prevName:"test field",
          styles : {
            width:'auto'
          }
        }
    }

    onCancelClick() {
      console.log("this.state.prevName==",this.state.prevName);
      this.setState({showLabel : true,  showButtons : false,
        showEdit : false,
      name:this.state.prevName,
      styles: {
         width:'0px'
      }});
    }
    onOkClick() {
      console.log("this.state.name==",this.state.name);
      this.setState({showLabel : true,  showButtons : false,
        showEdit : false,name:this.state.name,
        styles: {
           width:'0px'
        }});

        this.setState();
    }
 //    function getTheStyle(){
 //   var elem = document.getElementById("caption");
 //   var theCSSprop = window.getComputedStyle(elem,null).getPropertyValue("width");
 //   document.getElementById("output").innerHTML = theCSSprop;
 //  }
 // getTheStyle();
 componentDidMount(){
   var elem = document.getElementById("caption");
   var theCSSprop =parseInt(window.getComputedStyle(elem,null).getPropertyValue("width"))+70+'px';
   console.log("theCSSprop==",theCSSprop);
   this.setState({styles: {
      width:theCSSprop
   }});
 }
 handleInputChange(e){
   console.log("handleInputChange==",this.state.name);
   this.setState({prevName:this.state.prevName,showEdit : true,showLabel:false,showButtons:true,name:e.target.value},function(){
      console.log("this.state.name==",this.state.name);
   });

 }
 onEditClick()
 {
    this.setState({showEdit : true,showLabel:false,showButtons : true},function(){
      var elem = document.getElementById("input");
      var theCSSprop =parseInt(window.getComputedStyle(elem,null).getPropertyValue("width"))+100+'px';
      console.log("theCSSprop==",theCSSprop);
      this.setState({styles: {
         width:theCSSprop
      }});
    });
 }
    render() {


        return (
                 <div className="tabs-container">
                   <div className="rec">
                     <span>Commercial Information</span>
                   </div>
                   <Grid fluid={true}>
                       <Row className="show-grid">
                           <Col
                               componentClass={ ControlLabel }
                               md={ 3 }> Default TPOA:
                           </Col>
                           <Col md={ 6 }>
                           <div className="view-edit-control">
                           {this.state.showLabel && <ControlLabel id="caption"
                           onMouseOver={ () => this.setState({showEdit : true,showLabel:false,showButtons:false})}
                             >
                           {this.state.name}</ControlLabel>}
                           {this.state.showEdit &&       <InputGroup id="input"  style={this.state.styles} >
                                     <FormControl value={this.state.name} onChange={this.handleInputChange.bind(this)} type="text" disabled={this.state.showEdit ? false : "disabled"} />
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
                           </Col>
                           <Col
                               mdHidden
                               md={ 3 } />
                       </Row>

                   </Grid>

                 </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountTPOA);
