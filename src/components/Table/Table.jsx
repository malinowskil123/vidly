import React from 'react'
import TableHeader from '../TableHeader/TableHeader'
import TableBody from '../TableBody/TableBody'

export default function Table({ columns, sortColumn, onSort, data }) {
  return (
    <div className='table-responsive'>
      <table className='table table-hover'>
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody columns={columns} data={data} />
      </table>
    </div>
  )
}
