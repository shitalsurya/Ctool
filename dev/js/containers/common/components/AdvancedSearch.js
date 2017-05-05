import React from 'react';
import {Collapse,Well, Checkbox,Form,Grid,Row,Col,ControlLabel,FormControl,Button} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
require('../../../../scss/style.scss');
export default class AdvancedSearch extends React.Component {
  constructor(props, context) {
      super(props, context);
        this.state = {
          showPanel:false,
           currentSearchCriteria:{
             showNameSearch:true,
             showAdvSearch:false
           }
        };
        this.myData = [
  {id: 1, label: 'John'},
  {id: 2, label: 'Miles'},
  {id: 3, label: 'Charles'},
  {id: 4, label: 'Herbie'},
];
          this.searchFilters={};
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
  handleChange(val){
    console.log("handleChange==",val);
  }
  toggleSearchPanel(){

      this.setState({showPanel:  this.state.showPanel ? false:true});
  }



     render() {

        return (
          <div id="adv-search-panel">
            <Form inline>
              <FormControl className="search-box"
                onChange={this.handleChange.bind(this)}
                type="text"
                placeholder="Search by hub account name..."
              />
              <Button bsStyle="basic" onClick={ ()=> this.setState({ open: !this.state.open })}>
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
                          onChange={this.handleChange}
                          options={this.myData}
                        />
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
                      <Col md={ 8 }>
                        <Checkbox>
                          Cache my search criterias.
                        </Checkbox>
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
