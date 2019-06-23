import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export const FooterLayout = () => {
  return (
    <Footer style={{ textAlign: 'center', background: 'rgba(16, 142, 233, 1)', color: '#fff' }}>
      ©&nbsp;{new Date().getFullYear()} &nbsp;
      <a href="https://matevosyan.netlify.com" target="_blank" rel="noopener noreferrer" children="Created By Mkrtich Matevosyan" style={{ textDecoration: 'underline', color: '#fff' }} />
    </Footer>
  );
};
