import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

/** Components */
import MyDrawer from '../../components/MyDrawer'
import { HeroRoute } from '../../components/Hero'
import SearchBar from '../../components/SearchBar'

/** Routes */
import { MovieRoutes } from '../Movies/Routes'
import { mapTVRoutesToRouter } from '../TVShows/Routes'
import { SearchBarRoute } from './SearchBar/SearchBarRoute'
import DiscoverMovies from '../Discover'
import { UserAccountRoute } from '../UserAccount'
import { DetailedResultsRoute } from '../../components/ResultsMapper/DetailedResults'

const drawerWidth = 220

const styles = (theme) => ({
  root: {
    display: 'flex',
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

  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },

  sidebar: {
    background: '#20232a',
  },
})

class Main extends React.Component {
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
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              My App
            </Typography>
            <SearchBar />
          </Toolbar>
        </AppBar>
        <MyDrawer
          mobileOpen={this.state.mobileOpen}
          handleDrawerToggle={this.handleDrawerToggle}
          handleDrawerCloseOnTabClick={this.handleDrawerCloseOnTabClick}
        />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <HeroRoute />
          {MovieRoutes()}
          {mapTVRoutesToRouter()}
          <SearchBarRoute />
          <Route path="/discover/movies" component={DiscoverMovies} />
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
