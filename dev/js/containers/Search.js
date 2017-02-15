import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestSearch } from '../actions/authActions';
import TextField from 'material-ui/TextField';
import SearchResults from '../components/SearchResults';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
require('../../scss/style.scss');


class Search extends React.Component {

	render() {
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
						<div className="Advance-search top-margin-large">
							<h4>Search for Account</h4>
							<div className="hr-extended"></div>

							<div className="section-content">
								<h4 className="breadcrumbs">Commercial Information</h4>
								<div className="Account-details-container">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
											<TextField
												ref='name'
												hintText="Name"
												floatingLabelText="Name"
											/>
										</div>
										<div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
											<TextField
												ref='status'
												hintText="Status"
												floatingLabelText="Status"
											/>
										</div>

									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
											<TextField
												ref='companyName'
												hintText="Company Name"
												floatingLabelText="Company Name"
											/>
										</div>
										<div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
											<TextField
												ref='revenueSharing'
												hintText="Revenue Sharing"
												floatingLabelText="Revenue Sharing"
											/>
										</div>

									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
											<TextField
												ref='TPDA'
												hintText="Default TPDA"
												floatingLabelText="Default TPDA"
											/>
										</div>
										<div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
											<TextField
												ref='billingLocation'
												hintText="Billing Location"
												floatingLabelText="Billing Location"
											/>
										</div>

									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
											<TextField
												ref='customerId'
												hintText="Customer ID"
												floatingLabelText="Customer ID"
											/>
										</div>
										<div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
											<TextField
												ref='custLogin'
												hintText="MT Customer Login"
												floatingLabelText="MT Customer Login"
											/>
										</div>

									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom-margin-large">
									<div className="detail-content col-lg-6 col-md-6 col-sm-12 col-xs-12">

									</div>
									<div className="detail-content acc-nav-buttons col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<RaisedButton label="Search" onClick={this.requestSearch.bind(this)} className="RaisedButton sap-btn pull-right" />
									</div>
								</div>
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
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

		// console.log("name==", this.refs.name.value);
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

