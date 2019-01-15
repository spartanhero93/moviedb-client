import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { Button } from '@material-ui/core'
import { mapMovieLinks, mapTVLinks } from '../../routes'

const drawerWidth = 220

const styles = theme => ({
  root: {},
  active: {
    color: 'red',
  },
  button: {
    width: '100%',
    height: '3rem',
    display: 'flex',
    justifyContent: 'space-around',
    color: 'white',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerStyles: {
    background: theme.primary,
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient(135deg, #606c88 0%,#3f4c6b 100%)',
    padding: '3rem 0rem',
  },
  titles: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '200',
    textAlign: 'center',
  },
})

class MyDrawer extends Component {
  render() {
    const {
      classes,
      theme,
      mobileOpen,
      handleDrawerCloseOnTabClick,
      handleDrawerToggle,
      container,
    } = this.props

    const drawer = (
      <div onClick={handleDrawerCloseOnTabClick} className={classes.root}>
        <div className={classes.toolbar} />
        <NavLink activeClassName={classes.active} to='/user/account' exact>
          <Button className={classes.button}>Account</Button>
        </NavLink>
        <br />

        <div
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: '1.6rem',
            fontWeight: '800',
          }}
        >
          Movies
        </div>
        {mapMovieLinks(classes, handleDrawerToggle)}
        <br />
        <div
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: '1.6rem',
            fontWeight: '800',
          }}
        >
          TV Shows
        </div>
        {mapTVLinks(classes)}
        <NavLink to='/discover/movies' exact>
          <Button className={classes.button}>Discover</Button>
        </NavLink>
        <Button className={classes.button}>TV Shows</Button>
      </div>
    )

    return (
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    )
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(MyDrawer))
