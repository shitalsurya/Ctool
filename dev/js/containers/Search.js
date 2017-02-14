import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { bindActionCreators } from 'redux';
import { requestSearch } from '../actions/actions';
import SearchResults from '../components/SearchResults';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
require('../../scss/style.scss');


class Search extends React.Component {

	render() {
		 const style = {
				  margin: 12
				};
		this.searchObj = {};
		return (
			<MuiThemeProvider>
				<div>
					<div className="col-lg-1 col-md-1 col-sm-0 col-xs-0"></div>
					<div className="data-container col-lg-10 col-md-10 col-sm-12 col-xs-12">
						<div className="input-group">
							<div className="input-group-btn search-panel">
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
							<div>
								<table className="SearchGrid col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<tbody>
										<tr>
											<td>
												<TextField
													ref='name'
													hintText="Name"
													floatingLabelText="Name"
													/>
											</td>
											<td>
												<TextField
													ref='status'
													hintText="Status"
													floatingLabelText="Status"
													/>
											</td>
										</tr>
										<tr>
											<td>
												<TextField
													ref='companyName'
													hintText="Company Name"
													floatingLabelText="Company Name"
													/>
											</td>
											<td>
												<TextField
													ref='revenueSharing'
													hintText="Revenue Sharing"
													floatingLabelText="Revenue Sharing"
													/>
											</td>
										</tr>
										<tr>
											<td>
												<TextField
													ref='TPDA'
													hintText="Default TPDA"
													floatingLabelText="Default TPDA"
													/>
											</td>
											<td>
												<TextField
													ref='billingLocation'
													hintText="Billing Location"
													floatingLabelText="Billing Location"
													/>
											</td>
										</tr>
										<tr>
											<td>
												<TextField
													ref='customerId'
													hintText="Customer ID"
													floatingLabelText="Customer ID"
													/>
											</td>
											<td>
												<TextField
													ref='custLogin'
													hintText="MT Customer Login"
													floatingLabelText="MT Customer Login"
													/>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className="login-button-container">
		    				<RaisedButton label="Search" onClick={this.requestSearch.bind(this)} style={style}  />
						</div>						<div className="clearfix"></div>
						<div className="search-results clearfix">
							<SearchResults Products={this.props.data} />
						</div>
					</div>

				</div>
			</MuiThemeProvider>
		);

	}
	requestSearch() {
		var searchElement = [];
		searchElement.name = this.refs.name.value;
		searchElement.status = this.refs.status.value;
		searchElement.companyName = this.refs.companyName.value;
		searchElement.revenueSharing = this.refs.revenueSharing.value;
		searchElement.TPDA = this.refs.TPDA.value;
		searchElement.billingLocation = this.refs.billingLocation.value;
		searchElement.custId = this.refs.customerId.value;
		searchElement.custLogin = this.refs.custLogin.value;
		console.log("searchElement==", searchElement);
		this.props.requestSearch(searchElement);
	}
}
function mapStateToProps(state) {
	return { data: state.Auth.data };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ requestSearch: requestSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);