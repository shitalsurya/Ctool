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
                        <InputGroup className={this.state.hiddenFlag ? "hide-icon" : false} onMouseOver={this.onMouseEdit.bind(this)} onMouseOut={this.onMouseEdit.bind(this)}>
                            <FormControl name="frm1" type="text" disabled={this.state.editFlag ? false : "disabled"} />
                            <InputGroup.Addon>
                              <Glyphicon glyph="pencil" onClick={ () => this.setState({editFlag : true})}/>
                            </InputGroup.Addon>
                        </InputGroup>
                      </FormGroup>
                   </div>
                   <div className="rec"></div>
                 </div>
        )
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
