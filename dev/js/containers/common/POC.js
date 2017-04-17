import React from 'react';
require( '../../../scss/style.scss' );

export default class POC extends React.Component {
  constructor( props, context ) {
    super( props, context );
      this.iframe = '<iframe seamless className="embed-responsive-item" src="http://10.20.0.130:8182/" ></iframe>';
  }
  get_iframe() {
    	return {
        	__html: this.iframe
        }
    }
  render() {

    return (
      <div>
        <div className="embed-responsive embed-responsive-16by9" dangerouslySetInnerHTML={ this.get_iframe() } />
      </div>


    )
  }

}
