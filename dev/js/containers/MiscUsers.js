import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, ButtonGroup, Button } from 'react-bootstrap';
import { getUserList } from '../actions/miscUsersActions';
require( '../../scss/style.scss' );
//import Products from '../../json/Users.json';
var userImg = require( "../../images/user.png" );

class MiscUsers extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.users=[];
    // this.state={
    //     data:Products.data
    //   }
  }
  componentWillMount(){
          this.props.getUserList();
  }
    componentWillReceiveProps (nextProps) {
      console.log("nextProps==",nextProps);
      this.users=nextProps.data;
    }
  showUserDetails(_index){
    console.log("_index==",_index);

    this.users.forEach(function(item,index){
      if(_index==index){
        item.showDetails=true;
      }
      else{
          item.showDetails=false;
      }
    });
    this.setState({data:this.users});
  }
  render() {
    //  this.setState({data:Products.data});
  //  this.data = Products.data; //this.props.Products || [];
if(this.users!=""){
    var listUsers = this.users.map( function ( field,index) {
      return (
        <div>
      <Row className="list-row">
        <Col
             className="list-col"
             md={ 4 }>
        <div>
          User Id:
          { field.id }
        </div>
        <div>
          Login Name:
          { field.login }
        </div>
        </Col>
        <Col
             md={ 3 }>
        <img className="user-image" src={ userImg } /><span>{ field.name }</span>
        </Col>
        <Col
             md={ 3 }>
        <span>{ field.status }</span>
        </Col>
        <Col
             md={ 2 }>
        {!field.showDetails &&  <Button
                className="sap-btn"
                onClick={this.showUserDetails.bind(this,index)}
                type="submit">
          Display
        </Button>}
        {field.showDetails &&  <Button
                className="sap-btn"
                onClick={this.showUserDetails.bind(this,index)}
                type="submit">
          Edit
        </Button>}
        </Col>
      </Row>
    {field.showDetails
      &&
      <Row className="user-details-row">
      <Col
           className="list-col"
           md={ 6 }>
        <div>
          User Id:
          { field.id }
        </div>
        <div>
          Login Name:
          { field.login }
        </div>
      </Col>
      <Col
           className="list-col"
           md={ 6 }>
      <div>
        User Id:
        { field.id }
      </div>
      <div>
        Login Name:
        { field.login }
      </div>
      </Col>

           </Row>}
           </div>
      );
    }.bind(this));
  }
    return (
    <div className="content">
      <div className="col-md-1"></div>
      <div className="col-md-10 section-content">
        <span className="page-heading">CTool User Management</span>
        <div className="list-container">
          <Grid fluid={ true }>
            { listUsers }
          </Grid>
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>

    );
  }
}
function mapStateToProps(state) {
    return { data: state.MiscUsers.data };
}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({getUserList:getUserList,
            }, dispatch);
	}

export default connect(mapStateToProps, mapDispatchToProps)(MiscUsers);
