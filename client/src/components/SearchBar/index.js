import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchAPI } from '../../redux/actions'

import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { withStyles } from '@material-ui/core/styles'
import { fade } from '@material-ui/core/styles/colorManipulator'

const styles = theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
})

// const Wrapper = styled.div`
//   input {
//     width: 15rem;
//     font-size: 1rem;

//     @media (max-width: 900px) {
//       width: 100%;
//       font-size: 0.5rem;
//     }
//   }
// `

const SearchBar = withRouter(({ history, search, classes }) => {
  return (
    <div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='Search…'
          onChange={event => {
            search(event.target.value)
            history.push('/search')
          }}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </div>
    </div>
    // <Wrapper>
    //   <input
    //     type='text'
    //     name='input'
    //     placeholder='Search...'
    //     onChange={event => {
    //       search(event.target.value)
    //       history.push('/search')
    //     }}
    //   />
    // </Wrapper>
  )
})

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(searchAPI(query)),
})

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(SearchBar))
