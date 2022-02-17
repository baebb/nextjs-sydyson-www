import Head from 'next/head'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Container, Row, Col, ListGroup, Nav, Card } from 'react-bootstrap'

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
      <Row>
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
          <div className="videobox">
            <Row>
              <Col xs={12} md={9} className="video-col">
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    playing={videoPlaying}
                    url={videoUrl}
                    controls={true}
                    width="100%"
                    height="100%"
                  />
                </div>
              </Col>
              <Col xs={12} md={3}>
                <Card>
                  <ListGroup variant="flush" className="video-list">
                    {videos.map(({ title, url }, index) => (
                      <ListGroup.Item
                        active={videoUrl === url}
                        key={index}
                        action
                        onClick={() => handleVideoSelect(url)}
                        className="video-list-item"
                      >
                        {title}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </Row>
    </Container>
  )
}
