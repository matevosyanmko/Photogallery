import React from 'react';
import { Card, Layout, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { Gallery } from './gallery';
const { Title } = Typography;
const { Meta } = Card;

export const Albums = (props) => {
  const albumNum = props.params.match.params.id;
  const { data } = props;
  const viewData = albumNum ? data.find((item) => item.id === Number(albumNum)) : data;
  return albumNum ? (
    <>
      <Title children={viewData.name} underline={true} style={{ textAlign: 'center', color: '#fff' }} />
      <Gallery data={viewData.gallery} />
    </>
  ) : (
    <Layout>
      <Row type="flex" justify="center">
        {viewData.map((item, key) => (
          <Col lg={4} md={8} sm={10} xs={24} key={key} style={{ margin: '16px', display: 'flex', justifyContent: 'center' }}>
            <Link to={`/albums/${key + 1}`}>
              <ScrollAnimation animateIn={key < 8 ? null : 'flipInY'} duration={0.2} delay={150} initiallyVisible={key < 12} animateOnce={true}>
                <Card
                  hoverable
                  style={{ maxWidth: 300, background: '#fff' }}
                  cover={item.gallery.length ? <img alt="example" src={item.gallery[0]} style={{ height: '140px', objectFit: 'cover' }} /> : null}>
                  <Meta title={item.name} />
                </Card>
              </ScrollAnimation>
            </Link>
          </Col>
        ))}
      </Row>
    </Layout>
  );
};
