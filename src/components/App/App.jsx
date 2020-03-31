import React, { Component } from 'react';

// import css
import './app.scss';

// import layout
import Header from '../Layout/Header';
import Menu from '../Layout/Menu';

import Dashboard from '../Dashboard/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    componentDidMount = () => {
      //
    }

    render() {
      return (
        <div id="layout-wrapper">
          <Header />
          <Menu />
          <Dashboard />
        </div>
      );
    }
}

export default App;
