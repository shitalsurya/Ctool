import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
// import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';

class DrawerMenu extends React.Component {
  render() {
    return (
      <div>
        <Drawer
          className="drawerMenu"
          docked={false}
          width={200}
          open={this.props.open}
          onRequestChange={this.props.onRequestChange}
        >
          <MenuItem className="menuHeader" onTouchTap={this.props.handleClose}>CTOOL Menu</MenuItem>
            <ListItem
              primaryText="Accounts"
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <MenuItem onTouchTap={this.props.handleClose}>Create</MenuItem>,
                <MenuItem onTouchTap={this.props.handleClose}>Update</MenuItem>,
                <MenuItem onTouchTap={this.props.handleClose}>Delete</MenuItem>
              ]}
            ></ListItem>

            <ListItem
              primaryText="Connections"
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <MenuItem onTouchTap={this.props.handleClose}>Create</MenuItem>,
                <MenuItem onTouchTap={this.props.handleClose}>Update</MenuItem>,
                <MenuItem onTouchTap={this.props.handleClose}>Delete</MenuItem>
              ]}
            ></ListItem>

            <ListItem
              primaryText="Operations"
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <MenuItem onTouchTap={this.props.handleClose}>Create</MenuItem>,
                <MenuItem onTouchTap={this.props.handleClose}>Update</MenuItem>,
                <MenuItem onTouchTap={this.props.handleClose}>Delete</MenuItem>
              ]}
            ></ListItem>

            <ListItem
              primaryText="Miscelleneous"
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <MenuItem onTouchTap={this.props.handleClose}>Create</MenuItem>,
                <MenuItem onTouchTap={this.props.handleClose}>Update</MenuItem>,
                <MenuItem onTouchTap={this.props.handleClose}>Delete</MenuItem>
              ]}
            ></ListItem>

            <ListItem
              primaryText="Toolbox"
              initiallyOpen={false}
              primaryTogglesNestedList={true}
              nestedItems={[
                <MenuItem onTouchTap={this.props.handleClose}>Create</MenuItem>,
                <MenuItem onTouchTap={this.props.handleClose}>Update</MenuItem>,
                <MenuItem onTouchTap={this.props.handleClose}>Delete</MenuItem>
              ]}
            ></ListItem>
        
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
 *           <List>
            <Subheader>Nested List Items</Subheader>
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
            <ListItem
              primaryText="Inbox"
              leftIcon={<ContentInbox />}
              initiallyOpen={true}
              primaryTogglesNestedList={true}
              nestedItems={[
                <ListItem
                  key={1}
                  primaryText="Starred"
                  leftIcon={<ActionGrade />}
                />,
                <ListItem
                  key={2}
                  primaryText="Sent Mail"
                  leftIcon={<ContentSend />}
                  disabled={true}
                  nestedItems={[
                    <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                  ]}
                />,
              ]}
            />
          </List>

 * 
 * 
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
          <DrawerMenu 
              open={this.state.open} 
              handleClose={this.handleClose}
              onRequestChange={(open) => this.setState({open})}
           ></DrawerMenu>
        </AppBar>
    );
  }
} 

export default NavBar;


