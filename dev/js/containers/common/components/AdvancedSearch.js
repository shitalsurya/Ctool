import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Collapse,Well, Checkbox,Form,Grid,Row,Col,ControlLabel,FormControl,Button} from 'react-bootstrap';
import Toggle from 'react-toggle';
import {Typeahead} from 'react-bootstrap-typeahead';
import {getCompanyList} from './../../account/actions/accountActions';
import {initializeTypeAheadData} from './../Functions/commonFunctions';
require('../../../../scss/style.scss');
class AdvancedSearch extends React.Component {
  constructor(props, context) {
      super(props, context);
        this.state = {
          cacheSearch:'No',
           currentSearchCriteria:{
             showNameSearch:true,
             showAdvSearch:false
           }
        };
      this.companyList=[];
      this.searchFilters={};
  }
  cacheSearchChange(e){
    console.log("cacheSearchChange==",e);
  }
  nameSearchTermChanged(e){
      if(e.target.value!="")
      this.searchFilters[e.target.name]=e.target.value;
  }
  advSearchTermChanged(e){

    if(e.target.value!=""){
      var _searchCriteria={
        showNameSearch:false,
        showAdvSearch:true
      };
      if(!this.searchFilters.hasOwnProperty("searchByName")){
         if(e.target.value!="")
           this.searchFilters[e.target.name]=e.target.value;
      }

    }
    else{
      var _searchCriteria={
        showNameSearch:true,
        showAdvSearch:false
      };
    }
    this.setState({currentSearchCriteria:_searchCriteria})
  }
  handleSearch(){
    console.log("Search with:",this.searchFilters);
  }
  handleClear(){

  }
  handleCompanyChange(val){
    console.log("handleCompanyChange==",val);
  }
  toggleSearchPanel(){
    this.setState({ open: !this.state.open });
    this.props.getCompanyList();
  }
  componentWillReceiveProps( nextProps ) {
    console.log("componentWillReceiveProps==",nextProps);
    if(typeof(nextProps.Company)!='undefined'){
      this.companyList = initializeTypeAheadData(nextProps.Company,'companyname','companyid');
        console.log("this.companyList==",this.companyList);
    }

      }
     render() {
       console.log("adv props==",this.props.fields);
        return (
          <div id="adv-search-panel">
            <Form inline>
              { this.props.fields.searchField }
              {/* <FormControl className="search-box"
                onChange={this.handleChange.bind(this)}
                type="text"
                placeholder="Search by hub account name..."
              /> */}
              <Button bsStyle="basic" onClick={ this.toggleSearchPanel.bind(this)}>
                <span title="Click to open advanced search"
                  className="sap-caret"></span>
              </Button>
              <Button bsStyle="basic">
                <span title="Click to search"
                  className="sap-search"></span>
              </Button>
            </Form>
            <Collapse in={this.state.open}>
              <div>
                <Well>
                  <Grid fluid={ true }>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Company:
                      </Col>
                      <Col md={ 9 }>
                        <Typeahead
                          onChange={this.handleCompanyChange}
                          options={this.companyList}
                        >
                          <span title="Click to open advanced search"
                            className="sap-caret"></span>
                        </Typeahead>

                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Hub Account Name:
                      </Col>
                      <Col md={ 9 }>
                        <FormControl onChange={this.advSearchTermChanged.bind(this)}
                          type="text"
                        />
                      </Col>
                    </Row>

                    <Row className="show-grid">
                      <Col componentClass={ ControlLabel } md={ 3 }>
                        Status:
                      </Col>
                      <Col md={ 9 }>
                        <FormControl componentClass="select"
                          name="acctManager"
                          value="Active"
                        >
                          <option key="Active" value="Active" >Active  </option>
                          <option key="Suspended" value="Suspended" >Suspended  </option>
                          <option key="Closed" value="Closed" >Closed  </option>
                        </FormControl>
                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col mdHidden md={ 3 }>
                      </Col>
                      <Col md={ 2 }>
                        <Button onClick={this.handleSearch.bind(this)}>
                          <span className="sap-search"></span>
                          <span>Search</span>
                        </Button>
                      </Col>
                      <Col md={ 2 }>
                        <Button onClick={this.handleClear.bind(this)}>
                          <span className="sap-clear"></span>
                          <span>Clear</span>
                        </Button>

                      </Col>
                    </Row>
                    <Row className="show-grid">
                      <Col mdHidden md={ 3 }>
                      </Col>
                      <Col md={ 1 }>
                        <Toggle
                          icons={{
                                 checked:'Yes',
                                 unchecked: 'No',
                          }}
                          value={this.state.cacheSearch}
                          onChange={this.cacheSearchChange.bind(this)}
                        />
                      </Col>
                      <Col md={ 8 }>
                        <FormControl.Static>
                          Cache my search criterias.
                        </FormControl.Static>
                      </Col>
                    </Row>
                  </Grid>
                </Well>
              </div>
            </Collapse>
          </div>
        );
    }
}
function mapStateToProps( state ) {
  return {
  Company:state.Common.compList
  };
}
function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    getCompanyList:getCompanyList,
  }, dispatch );
}
export default connect( mapStateToProps, mapDispatchToProps )( AdvancedSearch );
