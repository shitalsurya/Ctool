import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Nav, NavItem, FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

require('../../../scss/style.scss');

class HubAccountTPOA extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          editFlag : false,
          hiddenFlag : true,
        }
    }

    onMouseEdit() {
      this.setState({hiddenFlag : !this.state.hiddenFlag});
      // console.log(this.state.hiddenFlag);
    }

    render() {


        return (
                 <div className="controls-container">
                   <div className="rec">
                     <span>Commercial Information</span>
                     <FormGroup>
                     <div className = "makers_container">
                        <InputGroup className={this.state.hiddenFlag ? "hide-icon" : false} onMouseOver={this.onMouseEdit.bind(this)} onMouseOut={this.onMouseEdit.bind(this)}>
                            <FormControl name="frm1" type="text" disabled={this.state.editFlag ? false : "disabled"} />
                            <InputGroup.Addon onClick={ () => this.setState({editFlag : true})}>
                              <Glyphicon glyph="pencil" />
                            </InputGroup.Addon>
                        </InputGroup>
                        <InputGroup className ={this.state.editFlag ? "new_gly_style" :  "gly_style"}  >
                            <InputGroup.Addon className="ok" onClick={ () => this.setState({editFlag : false})}>
                              <Glyphicon glyph="ok"/>
                            </InputGroup.Addon>
                            <InputGroup.Addon className="remove" onClick={ () => this.setState({editFlag : false})}>
                              <Glyphicon glyph="remove" />
                            </InputGroup.Addon>
                        </InputGroup>
                      </div>
                      </FormGroup>
                   </div>
                   <div className="rec"></div>
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
