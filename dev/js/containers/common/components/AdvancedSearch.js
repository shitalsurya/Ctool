import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Collapse,Well, Checkbox,Form,Grid,Row,Col,ControlLabel,FormControl,Button} from 'react-bootstrap';
import Toggle from 'react-toggle';
import {Typeahead} from 'react-bootstrap-typeahead';
import {getCompanyList} from './../commonActions';
import {initializeTypeAheadData} from './../Functions/commonFunctions';
require('../../../../scss/style.scss');
class AdvancedSearch extends React.Component {
  constructor(props, context) {
      super(props, context);
       if(sessionStorage.getItem("cacheAccListSearch")!=null){
         var cachedObj = JSON.parse(sessionStorage.getItem("cacheAccListSearch"));
         console.log("Use from session storage==",cachedObj);
         this.state={
           isCacheSearch:cachedObj.isCacheSearch,
           isAdvSearch:cachedObj.isAdvSearch,
           selectedCompany:cachedObj.selectedCompany,
           selectedStatus:cachedObj.selectedStatus ,
           selectedAccount:cachedObj.selectedAccount
         };
       }
       else {
         this.state = {
           isCacheSearch:"No",
           isAdvSearch:false,
           selectedCompany:[],
           selectedStatus:1,
           selectedAccount:""
         };
         console.log("Use default==",this.state);
       }
      this.companyList=[];
  }

  cacheData(){
    if(this.state.isCacheSearch==="Yes"){
      console.log("this.state==",this.state);
      sessionStorage.setItem("cacheAccListSearch",JSON.stringify(this.state));
    }
    else{
      sessionStorage.removeItem("cacheAccListSearch");
    }
  }

  cacheSearchChange(e){
    console.log("cacheSearchChange==",e.target.checked);
    this.setState({isCacheSearch:e.target.checked?"Yes":"No"},function(){
      this.cacheData();
    });
  }

  handleAccountChange(e){
    console.log("handleAccountChange==",e.target.value);
    this.setState({selectedAccount:e.target.value,   isCacheSearch:"No"},function(){
        this.checkAdvSearch();
    });
  }

  handleSearch(){
    if(this.state.selectedCompany.length != 0){
      console.log("Search with:",this.state);
      this.props.onSearch(this.state);
    }
    else
      this.setState({mandatoryFlag:true});
  }

  handleClear(){
    this.setState({
      isCacheSearch:"No",
      isAdvSearch:false,
      selectedCompany:[],
      selectedStatus:1,
      selectedAccount:"",
      mandatoryFlag:false
    },function(){
      this.cacheData();
    });
  }

  handleStatusChange(e){
    console.log("handleStatusChange==",e);
    this.setState({  selectedStatus:e.target.value,   isCacheSearch:"No"});
  }

  handleCompanyChange(obj){
    console.log("handleCompanyChange==",obj);
    this.setState({
      selectedCompany:obj,
         isCacheSearch:"No"
    },function(){
        this.checkAdvSearch();
    });
    //  var _selectedCompany={};
    // if(obj.length!=0){
    //   _selectedCompany = {
    //   companyid:obj[0].id,
    //   companyname:obj[0].label
    //   };
    // }
    // else {
    //   _selectedCompany=null;
    // }
  }

  checkAdvSearch(){
    console.log("checkAdvSearch:",this.state);
    if(this.state.selectedCompany.length!=0|| this.state.selectedAccount != ""){
      this.setState({isAdvSearch:true});
    }
    else{
      this.setState({isAdvSearch:false});
    }
  }

  toggleSearchPanel(){
    console.log("this.state.open==");
      this.setState({mandatoryFlag:false});
      this.setState({ open: !this.state.open },function(){
        if(this.state.open){

        }
      });

  }
  componentWillMount(){
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
    console.log(" Advanced Search State : " , this.state);
    console.log("Session Store : ", sessionStorage.getItem("cacheAccListSearch"));
    return (
      <div id="adv-search-panel">
        <Form inline>
          { this.props.fields.searchField }
          {!this.state.isAdvSearch &&
            <Button bsStyle="default" onClick={ this.toggleSearchPanel.bind(this)}>
              <span title="Click to open advanced search"
                className="sap-caret"></span>
            </Button>
          }
          {this.state.isAdvSearch &&
            <Button bsStyle="info" onClick={ this.toggleSearchPanel.bind(this)}>
              <span title="Click to open advanced search"
                className="sap-caret"></span>
            </Button>
          }
          {/* <Button bsStyle="basic">
            <span title="Click to search"
              className="sap-search"></span>
          </Button> */}
        </Form>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Grid fluid={ true }>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 2 }>
                    Company:
                  </Col>
                  <Col md={ 9 }>
                    <Typeahead
                      className={this.state.mandatoryFlag ? "empty" : ""}
                      onChange={this.handleCompanyChange.bind(this)}
                      options={this.companyList}
                      placeholder="Select a company..."
                      defaultSelected={this.state.selectedCompany}>
                    </Typeahead>
                  </Col>
                  <Col md={ 1 } className="dropdown-caret">
                    <span title="Search company"
                      className="sap-caret"></span>
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Hub Account Name:
                  </Col>
                  <Col md={ 9 }>
                    <FormControl onChange={this.handleAccountChange.bind(this)}
                      value={this.state.selectedAccount}
                      type="text" />
                  </Col>
                </Row>
                <Row className="show-grid">
                  <Col componentClass={ ControlLabel } md={ 3 }>
                    Status:
                  </Col>
                  <Col md={ 9 }>
                    <FormControl componentClass="select"
                      name="status"
                      value={this.state.selectedStatus}
                      onChange={this.handleStatusChange.bind(this)} >
                        <option key="ACTIVE" value="1" >Active  </option>
                        <option key="SUSPENDED" value="2" >Suspended  </option>
                        <option key="CLOSED" value="0" >Closed  </option>
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
                      checked={ this.state.isCacheSearch == "Yes" ? true : false }
                      icons={{
                             checked:'Yes',
                             unchecked: 'No',
                      }}
                      onChange={this.cacheSearchChange.bind(this)}  />
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
  Company:state.Common.compList,
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
    getCompanyList:getCompanyList,
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( AdvancedSearch );
