import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button, Modal } from 'react-bootstrap';
import {initializeSelectOptions} from '../../../common/Functions/commonFunctions';
require('./../../../../../scss/style.scss');

class HubAccountAddKeyword extends React.Component{
  constructor(props, context){
    super(props,context);
    this.state = {
      addKeyword : {}
    }
  }

  handleKeywordChange(e){
    console.log("name, val :", e.target.name, e.target.value);
    var info = this.state.addKeyword;
    info[e.target.name] = e.target.value;
    this.setState({addKeyword:info});
  }

  handleAddKeyword(){
    console.log("keyword added : ",this.state.addKeyword);
  }

  render(){
    console.log("keyword : ",this.state.addKeyword);

    return(
      <div className="tabs-container">

        <Grid fluid={true}>

          <Row className="show-grid">
            <Col componentClass={ ControlLabel } md={ 3 }>
              Keyword
            </Col>
            <Col md={ 6 } >
              <FormControl
                name="keyword"
                type="text"
                value={this.state.addKeyword.keyword}
                onChange={this.handleKeywordChange.bind(this)} />
            </Col>
            <Col mdHidden md={ 3 }/>
          </Row>

          <Row className="show-grid">
            <Col componentClass={ ControlLabel } md={ 3 }>
              Keyword Criteria
            </Col>
            <Col md={ 6 } >
              <FormControl componentClass="select"
                name="keywordCriteria"
                value={this.state.addKeyword.keywordCriteria}
                onChange={this.handleKeywordChange.bind(this)}>
                <option value="select" disabled selected>Please select...</option>
                {this.criteria}
              </FormControl>
            </Col>
            <Col mdHidden md={ 3 }/>
          </Row>

          <Row className="show-grid">
            <Col componentClass={ ControlLabel } md={ 3 }>
              Target Field
            </Col>
            <Col md={ 6 } >
              <FormControl componentClass="select"
                name="targetField"
                value={this.state.addKeyword.targetField}
                onChange={this.handleKeywordChange.bind(this)}>
                <option value="select" disabled selected>Please select...</option>
                {this.target}
              </FormControl>
            </Col>
            <Col mdHidden md={ 3 }/>
          </Row>

          <Row className="show-grid">
            <Col componentClass={ ControlLabel } md={ 3 }>
              <Button bsStyle="primary" onClick = {this.handleAddKeyword.bind(this)} >Add Keyword</Button>
            </Col>
            <Col mdHidden md={ 2 }/>
          </Row>

        </Grid>

      </div>
    )

  }

  componentWillMount(){
    const keywordCriteriaOp = [
      { value: 'keyword1', label: 'keyword1' },
      { value: 'keyword2', label: 'keyword2' },
      { value: 'keyword3', label: 'keyword3' },
      { value: 'keyword4', label: 'keyword4' }
    ];
    this.criteria = initializeSelectOptions(keywordCriteriaOp,'label','value');

    const targetFieldOp = [
      { value: 'target1', label: 'target1' },
      { value: 'target2', label: 'target2' },
      { value: 'target3', label: 'target3' },
      { value: 'target4', label: 'target4' }
    ];
    this.target = initializeSelectOptions(targetFieldOp,'label','value');
  }
}

function mapStateToProps(state) {
    return {
     };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HubAccountAddKeyword);
