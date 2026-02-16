import React, { memo, useState } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import { ITEM_LIST } from '../constants/itemConstants';

const ItemList = ({ handleSelectItem }) => {
  const [query, setQuery] = useState('')
  const [activeId, setActiveId] = useState(null)

  const filtered = ITEM_LIST.filter((i) =>
    i.name.toLowerCase().includes(query.toLowerCase()),
  )

  const onSelect = (item) => {
    setActiveId(item.key)
    handleSelectItem(item)
  }

  return (
    <>
      <Form.Control
        placeholder="Search items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-2"
      />

      <ListGroup>
        {filtered.map((item) => (
          <ListGroup.Item
            key={item.key}
            action
            active={activeId === item.key}
            onClick={() => onSelect(item)}
          >
            {item.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default memo(ItemList);
