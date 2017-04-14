import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Tabs,  TabLink, TabContent } from 'react-tabs-redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import InlineEdit from './../common/components/InlineEdit';
require('../../../scss/tabs.scss');
require('../../../scss/style.scss');

class InfoGeneralAddContacts extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          addContactObj : {
            contact : '123456'
          }
        }
    }

    handleInlineEditChange(val){
      //<InlineEdit type="text" value={this.state.acctCommName} onSave={this.handleInlineEditChange.bind(this)}  />
    }

    render() {

        return (
          <div >
            <Grid fluid={true} className="inner_grid">

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                  Contact :
                </Col>
                <Col md={ 6 } >
                  <InlineEdit type="text" value={this.state.addContactObj.contact} onSave={this.handleInlineEditChange.bind(this)}  />
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

              <Row className="show-grid">
                <Col componentClass={ ControlLabel } md={ 5 }>
                <Button bsStyle="primary">Add Contact</Button>
                </Col>
                <Col mdHidden md={ 3 }/>
              </Row>

            </Grid>
          </div>
        )
    }

    componentWillReceiveProps(nextProps) {

      }

}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoGeneralAddContacts);
