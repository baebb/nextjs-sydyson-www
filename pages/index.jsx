import Head from 'next/head'
import ReactPlayer from 'react-player'
import { Container, Row, Col, ListGroup, Button, Nav } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>Sy Dyson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1 className="logo-text">
          Sy Dyson
        </h1>
        <Nav
          className="justify-content-center"
          onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
          activeKey="/home"
        >
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
        </Nav>
        <p className="subhead-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
        <Container className="videobox">
          <Row>
            <Col sm={9}>
              <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </Col>
            <Col sm={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  )
}
