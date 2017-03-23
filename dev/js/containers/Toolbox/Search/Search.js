import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, ButtonGroup, Button } from 'react-bootstrap';
import Select from 'react-select';
import {Radio} from 'react-bootstrap';
import SearchAccount from './SearchAccount';
import SearchResults from './SearchResults';
require( '../../../../scss/style.scss' );


class Search extends React.Component {

  render() {
    this.searchObj = {};
    return (
    <div className="content">
      {/*<div className="col-md-3">
        <Grid fluid={ true }>
          <Row className="show-grid">
            <Col
                 componentClass={ ControlLabel }
                 md={ 12 }> Refine Search
            </Col>
          </Row>
          <Row>
            <Col md={ 12 }>
            <div className="line"></div>
            </Col>
          </Row>
          <Row>
            <Col md={ 12 }>
            <div className="input-group">
              <div className="input-group-btn search-panel">
                <button
                        type="button"
                        className="btn btn-default dropdown-toggle"
                        data-toggle="dropdown">
                  <span id="search_concept">Search</span> <span className="caret"></span>
                </button>
                <ul
                    className="dropdown-menu"
                    role="menu">
                  <li>
                    <a href="#Account">Account</a>
                  </li>
                  <li>
                    <a href="#Connection">Connection</a>
                  </li>
                  <li>
                    <a href="#Operator">Operator</a>
                  </li>
                  <li>
                    <a href="#Keyword">Keyword</a>
                  </li>
                </ul>
              </div>
              <input
                     type="hidden"
                     name="search_param"
                     value="all"
                     id="search_param" />
              <input
                     type="text"
                     className="form-control"
                     name="x"
                     placeholder="Search term..." />
              <span className="input-group-btn"><button
                                                        className="btn btn-default"
                                                        type="button"
                                                        onClick={ this.requestSearch.bind( this ) }> <span className="glyphicon glyphicon-search"></span>          </button>
              </span>
            </div>
            </Col>
          </Row>
					<Row>
					<SearchAccount/>
	</Row>
					<Row className="show-grid">
					<Col md={ 12 }>
					 <Button className="sap-btn btn-wizard pull-right" >Search</Button>
					</Col>
					</Row>
        </Grid>
      </div>*/}
      <div className="col-md-12">
				<Grid fluid={ true }>
					<Row className="show-grid">
						<Col
								 componentClass={ ControlLabel }
								 md={ 12 }> Search Results
						</Col>
					</Row>
					<Row>
						<Col md={ 12 }>
						<div className="line"></div>
						</Col>
					</Row>
					<Row>
						<Col md={ 12 }>
							<SearchResults />
						</Col>
					</Row>
					</Grid>

      </div>
    </div>

    );
  }
  requestSearch() {
    console.log( "name==", this.refs.name.value );
    this.props.requestSearch( this.refs.name.value );
  }
}
function mapStateToProps( state ) {
  return {
    data: state.Auth.data
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Search );
