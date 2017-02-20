import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

class DrawerMenu extends React.Component {
  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={200}
          open={this.props.open}
        >
          <MenuItem onTouchTap={this.props.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.props.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
class  NavBar extends React.Component{

   constructor(props) {
      super(props);
      this.state = {
        open: false
      };
      this.handleTouchTap = this.handleTouchTap.bind(this);
      this.showMenuOnTap = this.showMenuOnTap.bind(this);
      this.handleClose = this.handleClose.bind(this);
   };

  handleClose(){
    this.setState({
      open: false
    })
  }

  handleTouchTap(){
    alert('onTouchTap triggered on the title component');        
  };

  showMenuOnTap(){
    // alert('showMenuOnTap called');
      // <DrawerMenu open={this.state.open} />
      this.setState({
        open: true
      })
  };

  render(){
      return(
        <AppBar
          title={<span style={styles.title}>CTOOL</span>}
          onTitleTouchTap={this.handleTouchTap}
          onLeftIconButtonTouchTap={this.showMenuOnTap}
          iconElementRight={<FlatButton label="Logout" />}
        >
          <DrawerMenu open={this.state.open} handleClose={this.handleClose}></DrawerMenu>
        </AppBar>
    );
  }
} 

export default NavBar;


