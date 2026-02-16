// node_modules
import React, { useState } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'

// Components
import ItemList from './Components/ItemList'
import ItemDetails from './Components/ItemDetails'

function App() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand>Idle Planet Miner</Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid className="px-4">
        <Row style={{ height: 'calc(100vh - 56px)' }}>
          <Col md={4} style={{ overflowY: 'auto', height: '100%', paddingRight: '1rem' }}>
            <ItemList handleSelectItem={setSelectedItem} />
          </Col>
          <Col md={8} style={{ overflowY: 'auto', height: '100%' }}>
            <ItemDetails selectedItem={selectedItem} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
