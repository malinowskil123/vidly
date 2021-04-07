import React from 'react'

export default function Like({ liked, onClick }) {
  const classes = `fa fa-heart${liked ? '' : '-o'}`
  // raise event to parent component
  return <i className={classes} aria-hidden='true' onClick={onClick} />
}
