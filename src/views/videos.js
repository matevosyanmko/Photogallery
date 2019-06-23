import React from 'react';
import { Layout, Row, Col } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import YouTube from 'react-youtube';

export const Videos = (props) => {
  const { data } = props;
  const opts = {
    playerVars: {
      autoplay: 0,
      rel: 0
    }
  };
  return (
    <Layout>
      <Row type="flex" justify="center">
        {data.map((item, key) => (
          <Col lg={10} md={24} sm={24} xs={24} key={key} style={{ margin: '16px', display: 'flex', justifyContent: 'center' }}>
            <ScrollAnimation animateIn={key < 3 ? null : 'flipInY'} duration={0.2} delay={150} initiallyVisible={key < 3} animateOnce={true}>
              <YouTube videoId={item.youtubeID} opts={opts} className="videoItem" containerClassName="videoItemContainer" />
            </ScrollAnimation>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};
