import React, { Component } from 'react';


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    componentDidMount = () => {
      //
    }

    render() {
      return (
        <div className="vertical-menu">
          <div data-simplebar className="h-100">
            <div id="sidebar-menu">
              <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title">Main</li>
                <li>
                  <a href="/" className="waves-effect">
                    <i className="ti-home" />
                    <span>Home</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
}

export default Menu;
