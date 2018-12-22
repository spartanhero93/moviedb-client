import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

/** Routes */
import { mapMovieLinksToNavLinks, MovieRoutes } from '../Movies/Routes'
import { mapTVLinksToNavLinks, mapTVRoutesToRouter } from '../TVShows/Routes'
import { HeroRoute } from '../../components/Hero'
import { SearchBarRoute } from './SearchBar/SearchBarRoute'
import { Divider, Button } from '@material-ui/core'
import SearchBar from './SearchBar/index'

const drawerWidth = 220

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  button: {
    width: '100%',
    height: '3rem',
    display: 'flex',
    justifyContent: 'space-around',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    color: 'white',
  },
  titles: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '200',
    textAlign: 'center',
  },
  sidebar: {
    background: '#20232a',
  },
})

class SideBar extends React.Component {
  state = {
    mobileOpen: false,
  }

  handleDrawerToggle = () => {
    this.setState((state) => ({
      mobileOpen: !state.mobileOpen,
    }))
  }

  handleDrawerCloseOnTabClick = () => {
    this.setState((state) => ({ mobileOpen: (state.mobileOpen = false) }))
  }

  render() {
    const { classes, theme } = this.props

    const drawer = (
      <div onClick={this.handleDrawerCloseOnTabClick}>
        <div className={classes.toolbar}>Hello</div>
        <Divider />
        <div className={classes.titles}>Movies</div>
        {mapMovieLinksToNavLinks(classes, this.handleDrawerToggle)}
        <Divider />
        <div className={classes.titles}>TV Shows</div>
        {mapTVLinksToNavLinks(classes)}
        <Divider />
        <div className={classes.titles}>Discover</div>
        <Button className={classes.button}>Movies</Button>
        <Button className={classes.button}>TV Shows</Button>
        <Divider />
        <div className={classes.titles}>People</div>
        <Divider />
      </div>
    )

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              MediaInfo Now
            </Typography>
            <SearchBar />
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <HeroRoute />
          {MovieRoutes()}
          {mapTVRoutesToRouter()}
          <SearchBarRoute />
        </main>
      </div>
    )
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(SideBar)
