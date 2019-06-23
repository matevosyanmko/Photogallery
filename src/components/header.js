import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout, Typography } from 'antd';
import { Routes } from '../constants/routes';
const { Title } = Typography;
const { Header } = Layout;

export const HeaderLayout = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 10, width: '100%', top: 0, background: 'rgba(0,0,0,0.9)' }}>
      <Title level={3} children="Avagyan photography" style={{ textAlign: 'center', color: '#fff', margin: '10px' }} />
      <Menu mode="horizontal" className="header" theme="dark">
        {Routes.map((item, key) => item.key !== 3 && <Menu.Item children={<Link to={item.path} children={item.name} />} key={key} />)}
      </Menu>
    </Header>
  );
};
