import React, { Component } from 'react'
import _ from 'lodash'
import {
  getMovies,
  deleteMovie,
} from '../../starterCode/services/fakeMovieService'
import { Link } from 'react-router-dom'
import ListGroup from '../ListGroup/ListGroup'
import Pagination from '../Pagination/Pagination'
import MovieTable from '../MoviesTable/MoviesTable'
import SearchBox from '../SearchBox/SearchBox'
import { paginate } from '../../utils/paginate'
import { getGenres } from '../../starterCode/services/fakeGenreService'

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: { name: 'All Genres' },
    search: '',
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' },
  }
  componentDidMount() {
    const genres = [{ name: 'All Genres' }, ...getGenres()]
    const movies = getMovies()
    this.setState({ movies, genres })
  }

  handleDelete = ({ _id }) => {
    const movies = deleteMovie(_id)
    this.setState({ movies })
  }
  handleLike = (movie) => {
    const movies = [...this.state.movies],
      index = movies.indexOf(movie)
    movies[index].liked = !movies[index].liked
    this.setState({
      movies,
    })
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page })
  }
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1, search: '' })
  }
  handleSort = (sortColumn) => {
    this.setState({ sortColumn })
  }
  handleSearch = ({ target }) => {
    this.setState({
      selectedGenre: { name: 'All Genres' },
      search: target.value,
      currentPage: 1,
    })
  }

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
      search,
    } = this.state

    // filters based on serach keyword or selected Genre
    let filtered = allMovies
    if (search) {
      filtered = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    } else if (selectedGenre && selectedGenre._id) {
      filtered = allMovies.filter(
        (movie) => movie.genre._id === selectedGenre._id
      )
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

    const movies = paginate(sorted, currentPage, pageSize)

    return { totalCount: filtered.length, data: movies }
  }
  render() {
    const {
      pageSize,
      currentPage,
      genres,
      search,
      selectedGenre,
      sortColumn,
    } = this.state
    const { totalCount, data: movies } = this.getPageData()

    if (totalCount === 0)
      return <p>There are no avialiable movies in the database</p>
    return (
      <div className='row'>
        <div className='col-md-3'>
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className='col'>
          <Link to='/movies/new' className='btn btn-primary my-2'>
            New Movie
          </Link>
          <p>There are {totalCount} in the database</p>
          <SearchBox
            placeholder='search...'
            onChange={this.handleSearch}
            value={search}
          />
          <MovieTable
            movies={movies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            movieCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    )
  }
}

export default Movies
