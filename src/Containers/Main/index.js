import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'
import { Divider, Button, Typography } from '@material-ui/core'

/** Routes */
import { mapMovieLinksToNavLinks, MovieRoutes } from '../Movies/Routes'
import { mapTVLinksToNavLinks, mapTVRoutesToRouter } from '../TVShows/Routes'
import { HeroRoute } from '../../components/Hero'
import { SearchBarRoute } from './SearchBar/SearchBarRoute'
import SearchBar from './SearchBar/index'
import DiscoverMovies from '../Discover'
import { UserAccountRoute } from '../UserAccount'
import { DetailedResultsRoute } from '../../components/ResultsMapper/DetailedResults'

const drawerWidth = 220

const styles = theme => ({
  root: {
    display: 'flex',
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
    background: '#20232a',
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
    background: '#282c34',
    padding: '3rem 0rem',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  titles: {
    color: '#61dafb',
    fontSize: '1.5rem',
    fontWeight: '200',
    textAlign: 'center',
  },
  sidebar: {
    background: '#20232a',
  },
  test: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
})

class Main extends React.Component {
  state = {
    mobileOpen: false,
  }

  handleDrawerToggle = () => {
    this.setState(state => ({
      mobileOpen: !state.mobileOpen,
    }))
  }

  handleDrawerCloseOnTabClick = () => {
    this.setState(state => ({ mobileOpen: (state.mobileOpen = false) }))
  }

  render() {
    const { classes, theme } = this.props

    const drawer = (
      <div onClick={this.handleDrawerCloseOnTabClick}>
        <div className={classes.toolbar} />
        <Divider />

        <div className={classes.titles}>My Account</div>
        <NavLink to='/user/account' exact>
          <Button className={classes.button}>Account</Button>
        </NavLink>
        <div className={classes.titles}>Movies</div>
        {mapMovieLinksToNavLinks(classes, this.handleDrawerToggle)}
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

        {/* <Divider />
        
        
        <Divider />
        
        <Divider />
       
        <Divider /> */}
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
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <HeroRoute />
          {MovieRoutes()}
          {mapTVRoutesToRouter()}
          <SearchBarRoute />
          <Route path='/discover/movies' component={DiscoverMovies} />
          <UserAccountRoute />
          <DetailedResultsRoute />
        </main>
      </div>
    )
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(Main)
