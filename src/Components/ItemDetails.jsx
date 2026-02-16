import React, { memo, useEffect, useState, useRef } from 'react'
import { Card, Form, ListGroup, Alert } from 'react-bootstrap'
import { ITEMS_MAP } from '../constants/itemConstants'

const ItemDetails = ({ selectedItem }) => {
  const [quantity, setQuantity] = useState(1)
  const [inputValue, setInputValue] = useState(1)
  const [baseTotals, setBaseTotals] = useState(null)
  const [deductions, setDeductions] = useState({})
  const debounceTimeout = useRef(null)

  useEffect(() => {
    // reset input when selection changes
    setInputValue(1)
    setQuantity(1)
  }, [selectedItem])

  useEffect(() => {
    if (quantity > 0 && selectedItem) {
      calculateTotal()
    } else {
      setBaseTotals(null)
    }
  }, [quantity, selectedItem])

  const calculateCost = (item, valuesHolder, multiplier = 1) => {
    item?.requirements?.forEach((req) => {
      // resolve referenced item by key if present
      const ref = req.key ? ITEMS_MAP[req.key] || req : req
      const requiredQuantity = (req.quantity || 0) * multiplier
      const key = ref.key || req.key || (ref.name || req.name)
      const name = ref.name || req.name || key
      const existingItemInCache = valuesHolder.find((a) => a.key === key)

      if (existingItemInCache) {
        existingItemInCache.quantity += requiredQuantity
      } else {
        valuesHolder.push({ key, name, quantity: requiredQuantity })
      }

      if (ref.requirements && ref.requirements.length) {
        calculateCost(ref, valuesHolder, requiredQuantity)
      }
    })
  }

  const calculateTotal = () => {
    if (!selectedItem) return
    let valuesHolder = []
    const qty = Number(quantity) || 0

    calculateCost(selectedItem, valuesHolder, qty)
    setBaseTotals(valuesHolder)
  }
  const handleDeductChange = (key, val) => {
    const parsed = Number(val)
    const safe = Number.isFinite(parsed) && parsed > 0 ? parsed : 0

    setDeductions((prev) => {
      const baseQty = (baseTotals || []).find((b) => b.key === key)?.quantity || 0
      const clamped = safe > baseQty ? baseQty : safe
      return { ...prev, [key]: clamped }
    })
  }

  const computeDisplayedTotals = (baseArr = [], ded = {}) => {
    // build mutable map of quantities
    const map = {}
    baseArr.forEach((b) => {
      map[b.key] = (map[b.key] || 0) + b.quantity
    })

    const propagate = (itemKey, amount) => {
      const item = ITEMS_MAP[itemKey]
      if (!item || !item.requirements) return
      item.requirements.forEach((req) => {
        const childKey = req.key || (req.name && Object.values(ITEMS_MAP).find((it) => it.name === req.name)?.key)
        if (!childKey) return
        const decrease = amount * (req.quantity || 0)
        map[childKey] = Math.max(0, (map[childKey] || 0) - decrease)
        propagate(childKey, decrease)
      })
    }

    // apply each deduction and propagate
    Object.entries(ded).forEach(([key, amount]) => {
      map[key] = Math.max(0, (map[key] || 0) - amount)
      propagate(key, amount)
    })

    // produce array with baseQuantity, deduct, remaining
    return baseArr.map((b) => ({
      key: b.key,
      name: b.name,
      baseQuantity: b.quantity,
      deduct: ded[b.key] || 0,
      remaining: Math.max(0, map[b.key] || 0),
    }))
  }

  const handleTextBoxChange = (e) => {
    const val = e.target.value

    // update the immediate input for responsive UI
    setInputValue(val)

    // debounce updating the `quantity` state which drives calculations
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current)
    }

    debounceTimeout.current = setTimeout(() => {
      const parsed = Number(val)
      setQuantity(Number.isFinite(parsed) && parsed > 0 ? parsed : 0)
    }, 300)
  }

  // clear any pending timeout on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current)
      }
    }
  }, [])

  if (!selectedItem) {
    return <Alert variant="info">Select an item to view details</Alert>
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{selectedItem.name}</Card.Title>

        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            value={inputValue}
            onChange={handleTextBoxChange}
            min={0}
          />
        </Form.Group>

        <hr />

        <h6>Cost Breakdown</h6>
        {baseTotals && baseTotals.length > 0 ? (
          <ListGroup>
            {computeDisplayedTotals(baseTotals, deductions).map((c) => {
              return (
                <ListGroup.Item key={c.key} className="d-flex justify-content-between align-items-center">
                  <div>
                    <div>{c.name}</div>
                    <small className="text-muted">Remaining: {c.remaining}</small>
                  </div>

                  <Form.Control
                    type="number"
                    value={c.deduct || 0}
                    onChange={(e) => handleDeductChange(c.key, e.target.value)}
                    aria-label={`deduct-${c.key}`}
                    style={{ width: 100 }}
                    min={0}
                    max={c.baseQuantity}
                  />
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        ) : (
          <div>No cost data for the current selection/quantity.</div>
        )}
      </Card.Body>
    </Card>
  )
}

export default memo(ItemDetails)
