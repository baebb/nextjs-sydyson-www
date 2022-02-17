import Head from 'next/head'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Container, Row, Col, ListGroup, Nav } from 'react-bootstrap'

import { videos } from '../utils/vars'

export default function Home() {
  const [videoUrl, setVideoUrl] = useState(videos[0].url);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleVideoSelect = (url) => {
    setVideoUrl(url)
    setVideoPlaying(true)
  }

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
              <ReactPlayer
                playing={videoPlaying}
                url={videoUrl}
                controls={true}
              />
            </Col>
            <Col sm={3}>
              <ListGroup variant="flush">
                {videos.map(({ title, url }, index) => (
                  <ListGroup.Item key={index} action onClick={() => handleVideoSelect(url)}>
                    {title}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  )
}
