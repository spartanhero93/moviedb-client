import React from 'react'
import { NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { Divider, Button } from '@material-ui/core'
import { mapMovieLinksToNavLinks } from '../Movies/Routes'
import { mapTVLinksToNavLinks } from '../TVShows/Routes'

const drawerWidth = 220

const styles = theme => ({
  root: {},
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
    background: '#262f44',
    padding: '3rem 0rem',
  },
  titles: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '200',
    textAlign: 'center',
  },
})

const MyDrawer = ({
  classes,
  theme,
  mobileOpen,
  handleDrawerCloseOnTabClick,
  handleDrawerToggle,
  container,
}) => {
  const drawer = (
    <div onClick={handleDrawerCloseOnTabClick} className={classes.root}>
      <div className={classes.toolbar} />
      <Divider />

      <div className={classes.titles}>My Account</div>
      <NavLink to='/user/account' exact>
        <Button className={classes.button}>Account</Button>
      </NavLink>
      <div className={classes.titles}>Movies</div>
      {mapMovieLinksToNavLinks(classes, handleDrawerToggle)}
      <Divider />
      <div className={classes.titles}>TV Shows</div>
      {mapTVLinksToNavLinks(classes)}
      <Divider />
      <div className={classes.titles}>Discover</div>
      <NavLink to='/discover/movies' exact>
        <Button className={classes.button}>Discover</Button>
      </NavLink>
      <Button className={classes.button}>TV Shows</Button>
      <Divider />
      <div className={classes.titles}>People</div>
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

export default withStyles(styles, { withTheme: true })(MyDrawer)
