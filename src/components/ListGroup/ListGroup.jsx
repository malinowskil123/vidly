import React from 'react'

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className='list-group'>
      {items.map((item, index) => {
        return (
          <li
            key={item[valueProperty] || index}
            onClick={() => onItemSelect(item)}
            className={
              item[textProperty] === selectedItem[textProperty]
                ? 'list-group-item active'
                : 'list-group-item'
            }
          >
            {item[textProperty]}
          </li>
        )
      })}
    </ul>
  )
}

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
}

export default ListGroup
