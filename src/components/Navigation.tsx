import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classes from '*.module.css';
import { Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function Navigation() {

    const [isMenuOpen,setIsMenuOpen] = React.useState(false);

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    }


    const renderMenu = (
        <Menu
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        id="simple-menu"
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Drawing Board</MenuItem>
        </Menu>
    );

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <React.Fragment>
                            {/* <Button variant="contained" className='menuButton' {...bindTrigger(popupState)}>
                                Open Menu
                            </Button> */}
                            <IconButton edge="start" className='menuButton' color="inherit" aria-label="menu" {...bindTrigger(popupState)}>
                                <MenuIcon />
                            </IconButton>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Drawing Board</MenuItem>
                            </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>
                    <Typography className="title" variant="h6" noWrap>
                        EPOS Drawing Application
                    </Typography>
                    
                </Toolbar>
            </AppBar>
            {isMenuOpen === true ? renderMenu : null}
            
        </React.Fragment>
    )

}