import React from 'react';
var Halogen = require('halogen');

class Loading extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  render(){

    var color = 'gray';

    var style = {
        display: '-webkit-flex',
        display: 'flex',
        WebkitFlex: '0 1 auto',
        flex: '0 1 auto',
        WebkitFlexDirection: 'column',
        flexDirection: 'column',
        WebkitFlexGrow: 1,
        flexGrow: 1,
        WebkitFlexShrink: 0,
        flexShrink: 0,
        WebkitFlexBasis: '25%',
        flexBasis: '25%',
        // maxWidth: '25%',
        height: '100px',
        WebkitAlignItems: 'center',
        alignItems: 'center',
        WebkitJustifyContent: 'center',
        justifyContent: 'center',
        paddingBottom: '20px'
    };

    return(
      <div>
        <div style={style}><Halogen.FadeLoader color={color}/></div>
      </div>
    )
  }
}

export default (Loading);
