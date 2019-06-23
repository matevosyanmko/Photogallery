import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; //

export const Gallery = (props) => {
  const [photoIndex, setphotoIndex] = useState(0);
  const [isOpen, toggle] = useState(false);
  const { data } = props;
  console.log(photoIndex);
  const OpenLightBox = (state, index) => {
    toggle(state);
    setphotoIndex(index);
  };
  return (
    <Layout>
      <Row type="flex" justify="center">
        {data.map((item, key) => (
          <Col lg={4} md={8} sm={10} xs={24} key={key} style={{ margin: '16px' }} onClick={() => OpenLightBox(true, key)}>
            <ScrollAnimation animateIn={key < 12 ? null : 'zoomIn'} duration={0.2} delay={150} initiallyVisible={key < 12} animateOnce={true}>
              <img src={item} alt="" style={{ width: '100%', cursor: 'zoom-in' }} />
            </ScrollAnimation>
          </Col>
        ))}
      </Row>
      {isOpen && (
        <Lightbox
          mainSrc={data[photoIndex]}
          nextSrc={data[photoIndex + 1]}
          prevSrc={data[photoIndex - 1]}
          onCloseRequest={() => toggle(false)}
          onMovePrevRequest={() => photoIndex > 0 && setphotoIndex(photoIndex - 1)}
          onMoveNextRequest={() => photoIndex < data.length - 1 && setphotoIndex(photoIndex + 1)}
        />
      )}
    </Layout>
  );
};
