import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid, Button, Image,Glyphicon } from 'react-bootstrap';
import Select from 'react-select';
import BrandingHeader from './../../common/components/BrandingHeader';
import Navigation from './../../common/components/Navigation';
import * as types from './../../common/commonActionTypes';
import { getCountryList, getCntryDetails } from './miscCntryActions';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);
import tableOptions from './../../common/Functions/commonFunctions';
require( './../../../../scss/style.scss' );

class MiscCntry extends React.Component {
  constructor( props, context ) {
    super( props, context );
    this.country = [];
    this.currentCntry= {};
    this.state = {
      submenus:{
        head: types.MISCELLENEOUS,
        head_icon : "misc_icon",
        subVal:[
          types.USER_MANAGEMENT,
          types.COUNTRY_MANAGEMENT,
          types.RESET_PASSWORD
        ]
      }
    }
  }
  componentWillMount() {
    this.props.getCountryList();
    console.log( "this.props.countryList==", this.props.countryList );
  }

  componentWillReceiveProps( nextProps ) {
    switch (nextProps.target) {
      case types.MISC_COUNTRYLIST_RESPONSE:
          this.country = nextProps.countryList;
          console.log( "this.country==", this.country );
          break;
      case types.MISC_COUNTRYDETAILS_RESPONSE:
          console.log( "nextProps.countryDetails==", nextProps.countryDetails);
          if( nextProps.countryDetails != null){
              // this.state.showEditModal =true;
              this.currentCntry =  nextProps.countryDetails;
              var _currentCntry=this.currentCntry;
              this.context.router.push( {pathname:'editCountry',state:{currentCntry:_currentCntry}} );
          }
          else{
              // this.state.showEditModal =false;
              this.refs.container.error(`Failed to get country details.`, ``, {
                  closeButton: true,
              });
          }
          break;
      // case types.MISC_UPDATE_COUNTRYDETAILS_RESPONSE:
      //   console.log("nextProps.countryDetails==",nextProps.countryDetails);
      //   if( nextProps.countryDetails.showEditModal==false){
      //     this.refs.container.success(`Country updated successfully.`, ``, {
      //         closeButton: true,
      //     });
      //       this.state.showEditModal =false;
      //     //  this.currentCntry =  nextProps.countryDetails.details;
      //   }
      //   else{
      //       this.state.showEditModal =true;
      //       this.refs.container.error(`Failed to update country.`, ``, {
      //           closeButton: true,
      //     });
      //   }
    }
  }

  showDetails(row){
    this.props.getCntryDetails(row.countryid);
  }

  actionFormatter(cell, row,field,index) {
    switch (field) {
      case 'id':
      // return (
      //     <span className="display-icon" title="Display" onClick={this.showDetails.bind(this,row)} ></span>
      // )
        break;
      default:
        return(
          <Button bsStyle="link" onClick={this.showDetails.bind(this,row)} >{cell}</Button>
        )
          // return `${cell}`;
        break;
    }
  }

  // updateCountryDetails(){
  //   console.log( "updateCountryDetails this.currentCntry==", this.currentCntry );
  //   this.props.updateCountryDetails(this.currentCntry);
  // }

  render() {

    var fields = [
      {
          name:'Country Name',
          dataField:'countryname',
      }
      // {
      //     name:'Action',
      //     dataField:'id',
      //     width:'80px',
      //       dataAlign:'center'
      // }
    ];

    var listCols = fields.map(function (field) {
          return (
              <TableHeaderColumn
                isKey={ field.dataField == 'countryname'?true :false }
                width={field.width}
                dataAlign={field.dataAlign}
                dataFormat={ this.actionFormatter.bind(this) }
                formatExtraData={ field.dataField}
                dataField={field.dataField}
              >
                {field.name}
              </TableHeaderColumn>
          );
    }.bind(this));

    return (
        <div>
          <BrandingHeader/>
          <Grid fluid={true}>
            <Row>
              <Col md={2}>
                <Navigation submenus={this.state.submenus}></Navigation>
              </Col>
              <Col md={10}>
                <Grid fluid={ true }>
                  <Row>
                    <Col className="line page-heading" md={ 12 }>
                      CTool Country Management
                    </Col>
                  </Row>
                </Grid>
                <div className="list-container">
                  <div className="controls-container">
                    <BootstrapTable data ={ this.country } pagination={ true }
                      tableHeaderClass='nested-body-class'
                      search={ true }
                      options={ tableOptions }>
                      {listCols}
                    </BootstrapTable>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>

          <ToastContainer
            toastMessageFactory={ ToastMessageFactory }
            ref="container"
            className="toast-top-right" />
        </div>
    );
  }
}

MiscCntry.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps( state ) {
  return {
    countryList: state.MiscCntry.countryList,
    countryDetails: state.MiscCntry.countryDetails,
    target: state.MiscCntry.target
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( {
      getCountryList : getCountryList,
      getCntryDetails : getCntryDetails,
      // updateCountryDetails : updateCountryDetails
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( MiscCntry );
