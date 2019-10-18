import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  }
}));

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <MenuIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Soccer Highlights
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
