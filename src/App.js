import React, { Component } from 'react';
// layouts
import { HeaderLayout } from './components/header';
import { Main } from './components/main';
import { FooterLayout } from './components/footer';
// router
import ScrollToTop from './components/scrollRestoration';
import { BrowserRouter } from 'react-router-dom';
// assets
import './App.scss';

class App extends Component {
  componentDidMount() {
    document.body.classList.add('fadeIn');
  }
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <HeaderLayout />
          <div style={{ paddingTop: '155px' }} children={<Main />} />
          <FooterLayout />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}
export default App;
