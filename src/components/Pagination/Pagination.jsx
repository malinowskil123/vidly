import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

function Pagination({
  movieCount,
  pageSize,
  currentPage,
  onPageChange,
  pagesCount,
}) {
  pagesCount = Math.ceil(movieCount / pageSize)
  if (pagesCount === 1) return null
  const pages = _.range(1, pagesCount + 1),
    pagesJSX = pages.map((page) => {
      return (
        <li
          className={page === currentPage ? 'page-item active' : 'page-item'}
          key={page}
        >
          <a className='page-link' onClick={() => onPageChange(page)}>
            {page}
          </a>
        </li>
      )
    })
  return (
    <nav>
      <ul className='pagination'>{pagesJSX}</ul>
    </nav>
  )
}

Pagination.PropType = {
  movieCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default Pagination
