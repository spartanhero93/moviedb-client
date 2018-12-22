import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../../../redux/actions'
import { Button } from '@material-ui/core'
import ResultsMapper from '../../../helpers/ResultsMapper'

class MovieList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.list !== this.props.match.params.list) {
      this.fetchData()
    }
  }

  fetchData() {
    this.props.fetchMovies(this.props.match.params.list)
  }

  render() {
    const { movieState, fetchMovies } = this.props
    if (!movieState.results[1]) return <div>Loading...</div>
    return (
      <div>
        <ResultsMapper {...movieState} />
        <Button
          onClick={() =>
            fetchMovies(
              this.props.match.params.list,
              movieState.page - 1,
              movieState.total_pages
            )
          }
        >
          Previous Page
        </Button>
        <span>
          Current page {movieState.page} of {movieState.total_pages} pages
        </span>
        <Button
          onClick={() =>
            fetchMovies(
              this.props.match.params.list,
              movieState.page + 1,
              movieState.total_pages
            )
          }
        >
          Next Page
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  movieState: state,
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (type, pageNum) => dispatch(fetchMovies(type, pageNum)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)
