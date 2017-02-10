import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {requestSearch} from '../actions/actions';
import SearchResults from '../components/SearchResults';
require('../../scss/style.scss');


class Search extends React.Component {
	
  render() {
	  this.searchObj={};
    return (
    		<div>
    		 <div className="col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
             <div className="data-container col-lg-10 col-md-10 col-sm-12 col-xs-12">
                 <div className="input-group">
                     <div className="input-group-btn search-panel open">
                         <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                             <span id="search_concept">Search</span> <span className="caret"></span>
                         </button>
                         <ul className="dropdown-menu" role="menu">
                         <li><a href="#Account">Account</a></li>
                         <li><a href="#Connection">Connection</a></li>
                         <li><a href="#Operator">Operator</a></li>
                         <li><a href="#Keyword">Keyword </a></li>
                         </ul>
                     </div>
                     <input type="hidden" name="search_param" value="all" id="search_param" />         
                     <input type="text" className="form-control" name="x" placeholder="Search term..." />
                     <span className="input-group-btn">
                         <button className="btn btn-default" type="button" onClick={this.requestSearch.bind(this)}><span className="glyphicon glyphicon-search"></span></button>
                     </span>
                 </div>
<div className="Advance-search top-margin">
                     <h3>Search for Account</h3>

                     <table className="SearchGrid table table-hover table-stripped hr-extended col-lg-12 col-md-12 col-sm-12 col-xs-12">
                         <tbody>
                             <tr>
                                 <td>Name</td>
                                 <td>
                                     <input type="text" className="form-control" ref="name"/>
                                 </td>

                                 <td>Status</td>
                                 <td>
                                     <input type="text" className="form-control" ref="status"/>                                
                                 </td>
                             </tr>
                             <tr>
                                 <td>Company Name</td>
                                 <td>
                                 <input type="text" className="form-control" ref="company"/>                                
                                 </td>

                                 <td>Revenue Sharing</td>
                                 <td>
                                     <input type="text" className="form-control" ref="revenue"/>                                
                                 </td>
                             </tr>
                             <tr>
                                 <td>Default TPDA</td>
                                 <td>
                                     <input type="text" className="form-control" ref="TPDA"/>
                                 </td>

                                 <td>Billing Location</td>
                                 <td>
                                     <input type="text" className="form-control" ref="location"/>                                
                                 </td>
                             </tr>
                             <tr>
                                 <td>Customer ID</td>
                                 <td>
                                     <input type="text" className="form-control" ref="custId"/>                                
                                 </td>

                                 <td>MT Customer Login</td>
                                 <td>
                                     <input type="text" className="form-control" ref="custLogin"/>                                
                                 </td>
                             </tr>
                         </tbody>        
                     </table>
                 </div>
                 <div className="top-margin col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 <SearchResults Products={this.props.data}/>
                 </div>
             </div>
           
          </div>
         
    );
   
  }
  requestSearch(){
	console.log("name==",this.refs.name.value);
  	this.props.requestSearch(this.refs.name.value);
  }
  componentWillReceiveProps (nextProps) {
      this.handleSearchResults(nextProps.data);
  }

  handleSearchResults(data) {
	  console.log("data==",data);
  }
}
  function mapStateToProps(state) {
	  return { data: state.Auth.data };
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({requestSearch: requestSearch}, dispatch);
	}

	export default connect(mapStateToProps, mapDispatchToProps)(Search);

