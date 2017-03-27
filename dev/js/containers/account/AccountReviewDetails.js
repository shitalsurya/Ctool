import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, FormGroup, Col, Row, FormControl, ControlLabel, Grid,ButtonGroup,Button } from 'react-bootstrap';
import Select from 'react-select';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";

import { createNewAccount,handleReviewDetailsBack } from '../../containers/account/actions/accountActions';
import * as types from '../../containers/account/actions/accountActionTypes';


require('../../../scss/style.scss');

const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class AccountReviewDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.Countries=[];
        this.state={
          accountInfo:this.props.accountObj || []
        };
        console.log("AccountReviewDetails accountInfo==",this.state.accountInfo);
    }
    handleReviewDetailsBack(){
        this.props.handleReviewDetailsBack(this.accountInfo);
    }

    createNewAccount() {
      this.props.createNewAccount( this.state.accountInfo );
    }
    render() {
        return (
          <div>
          <div className="stepwizard breadcrumb-container">
            <div className="stepwizard-row">
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-default btn-circle">1</button>
                    <p>Commercial Information</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-default btn-circle" >2</button>
                    <p>Technical Details</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-default btn-circle" >3</button>
                    <p>Account Name and Interfaces</p>
                </div>
                <div className="stepwizard-step">
                    <button type="button" className="btn btn-primary btn-circle" disabled="disabled">4</button>
                    <p>Create Account</p>
                </div>
            </div>
            </div>
        <div className="controls-container">
        <div className="rec">
        <span>Commercial Information</span>
        </div>
            <Grid fluid={true}>
                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Account Manager:
                    </Col>
                    <Col md={ 6 }>
                    {this.state.accountInfo.acctManager   }
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>

                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Company:
                    </Col>
                    <Col md={ 6 }>
                    {this.state.accountInfo.company   }
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>

                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Billing location:
                    </Col>
                    <Col md={ 6 }>
                    {this.state.accountInfo.billingLocation   }
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>

                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Service Level:
                    </Col>
                    <Col md={ 6 }>
                    {this.state.accountInfo.serviceLevel   }
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>
                
                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Traffic Type:
                    </Col>
                    <Col md={ 6 }>
                    {this.state.accountInfo.trafficType  }
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>
                                    

            </Grid>
        </div>      
         
      
       < div className="controls-container">
        <div className="rec">
        <span>Technical Information</span>
        </div>
            <Grid fluid={true}>
                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Existing Company Contacts:
                    </Col>
                    <Col md={ 6 }>
                    
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>

                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Name:
                    </Col>
                    <Col md={ 6 }>
                    {this.state.accountInfo.name   }
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>

                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Email:
                    </Col>
                    <Col md={ 6 }>
                        {this.state.accountInfo.email   }
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>

                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Country:
                    </Col>
                    <Col md={ 6 }>
                    {this.state.accountInfo.serviceLevel   }
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>
                
                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Mobile Phone Number:
                    </Col>
                    <Col md={ 6 }>
                    {this.state.accountInfo.MobNo  }
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>
                
                <Row className="show-grid">    
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Direct Phone Number:
                    </Col>
                    <Col md={ 6 }>
                    {this.state.accountInfo.DirectNo  }
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>           

            </Grid>
        </div>
        
        <div className="controls-container">
        <div className="rec">
        <span>Account Name and Interfaces</span>
        </div>
            <Grid fluid={true}>
                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Technical name:
                    </Col>
                    <Col md={ 6 }>
                   {this.state.accountInfo.techName   }
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>

                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Commercial name:
                    </Col>
                    <Col md={ 6 }>
                    {this.state.accountInfo.commName   }
                   
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>

                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Existing accounts:
                    </Col>
                    <Col md={ 6 }>
                  
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>

                <Row className="show-grid">
                    <Col
                        componentClass={ ControlLabel }
                        md={ 3 }> Interface:
                    </Col>
                    <Col md={ 6 }>
                   
                   
                    </Col>
                    <Col
                        mdHidden
                        md={ 3 } />
                </Row>
                
                
                                    

            </Grid>
        </div>

        <div className="controls-container">
        <div className="rec">
        <span>MT Interfces</span>
         </div>
                    <Grid fluid={true}>
                        <Row className="show-grid">
                            <Col
                                componentClass={ ControlLabel }
                                md={ 3 }> Default TPOA:
                            </Col>
                            <Col md={ 6 }>
                               <textarea rows="1" cols="10"></textarea>
                            </Col>
                            <Col
                                mdHidden
                                md={ 3 } />
                        </Row>
                    
                    </Grid>
         </div>

        <div className="controls-container">
        <div className="rec">
        <span>MO Interfces</span>
         </div>
                    <Grid fluid={true}>
                        <Row className="show-grid">
                            <Col
                                componentClass={ ControlLabel }
                                md={ 3 }> HTTP URL:
                            </Col>
                            <Col md={ 6 }>
                                <textarea rows="1" cols="50"></textarea>
                            </Col>
                            <Col
                                mdHidden
                                md={ 3 } />
                        </Row>
                    
                    </Grid>
         </div>
    
    
      <Row className="show-grid">
        <Col
            mdHidden
            md={ 3 } />

        <Col md={ 6 }>
        <Button className="sap-btn btn-wizard pull-right"   onClick={ this.createNewAccount.bind( this ) }>Create Account</Button>
        <Button className="sap-btn btn-wizard pull-right"   onClick={ this.handleReviewDetailsBack.bind( this ) }>Back</Button>
        </Col>
        <Col
            mdHidden
            md={ 3 } />

     </Row>

       <ToastContainer
                      toastMessageFactory={ ToastMessageFactory }
                      ref="container"
                      className="toast-top" />
      
      </div>
      
        )
    }
componentWillReceiveProps(nextProps){
      switch(nextProps.target){
  case types.ACCOUNT_CREATE_NEW_SUCCESS:
     
      this.refs.container.success(`Account created successfully.`, ``, {
          closeButton: true,
      });
      break;
  case types.ACCOUNT_CREATE_NEW_FAILURE:
      this.refs.container.error(`Failed to create new account.`, ``, {
          closeButton: true,
      });
      break;
    }
}
}
function mapStateToProps(state) {
    return { data: state.Account.data , target: state.Account.target};
}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({
            createNewAccount: createNewAccount,
            handleReviewDetailsBack:handleReviewDetailsBack,
          }, dispatch);
	}

export default connect(mapStateToProps, mapDispatchToProps)(AccountReviewDetails);
