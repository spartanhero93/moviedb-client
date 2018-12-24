import React from 'react'
import { Link, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'

/** Routes */
import { mapMovieLinksToNavLinks, MovieRoutes } from '../Movies/Routes'
import { mapTVLinksToNavLinks, mapTVRoutesToRouter } from '../TVShows/Routes'
import { HeroRoute } from '../../components/Hero'
import { SearchBarRoute } from './SearchBar/SearchBarRoute'
import { Divider, Button, Typography } from '@material-ui/core'
import SearchBar from './SearchBar/index'
import DiscoverMovies from '../Discover'

const drawerWidth = 220

const styles = (theme) => ({
  root: {
    display: 'flex'
  },
  button: {
    width: '100%',
    height: '3rem',
    display: 'flex',
    justifyContent: 'space-around',
    color: 'white'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  drawerStyles: {
    background: '#20232a'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#20232a',
    paddingTop: '4rem'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  titles: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '200',
    textAlign: 'center'
  },
  sidebar: {
    background: '#20232a'
  }
})

class SideBar extends React.Component {
  state = {
    mobileOpen: false
  }

  handleDrawerToggle = () => {
    this.setState((state) => ({
      mobileOpen: !state.mobileOpen
    }))
  }

  handleDrawerCloseOnTabClick = () => {
    this.setState((state) => ({ mobileOpen: (state.mobileOpen = false) }))
  }

  render() {
    const { classes, theme } = this.props

    const drawer = (
      <div onClick={this.handleDrawerCloseOnTabClick}>
        <Divider />
        <div className={classes.titles}>Movies</div>
        {mapMovieLinksToNavLinks(classes, this.handleDrawerToggle)}
        <Divider />
        <div className={classes.titles}>TV Shows</div>
        {mapTVLinksToNavLinks(classes)}
        <Divider />
        <div className={classes.titles}>Discover</div>
        <Link to='/discover/movies' exact='true'>
          <Button className={classes.button}>Discover</Button>
        </Link>
        <Button className={classes.button}>TV Shows</Button>
        <Divider />
        <div className={classes.titles}>People</div>
        <Divider />
      </div>
    )

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' color='primary' className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              My App
            </Typography>
            <SearchBar />
            <Button>Account</Button>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation='css'>
            <Drawer
              container={this.props.container}
              variant='temporary'
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css'>
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant='permanent'
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
          <Route path='/discover/movies' component={DiscoverMovies} />
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
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(SideBar)
