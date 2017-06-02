import React from 'react';
import {
    ToastContainer,
    ToastMessage,
} from "react-toastr";
const ToastMessageFactory = React.createFactory(ToastMessage.animation);

class MsgToastContainer extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){

    return(
      <div>
        <ToastContainer
          toastMessageFactory={ ToastMessageFactory }
          ref="container"
          className="toast-top-right" />
      </div>
    )

  }

  componentDidMount()
  {
    if(this.props.result==="success"){
      this.refs.container.success(this.props.msg, ``, {
          closeButton: true,
      });
    }
    else if(this.props.result==="error"){
      this.refs.container.error(this.props.msg, ``, {
          closeButton: true,
      });
    }
  }

}

export default (MsgToastContainer);
