import React, { Component } from 'react';


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    componentDidMount = () => {
      //
    }

    render() {
      return (
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
              ©  Veltrix
                <span className="d-none d-sm-inline-block">
                  {' '}
  - Crafted with
                  {' '}
                  <i className="mdi mdi-heart text-danger" />
                  {' '}
  by Themesbrand.
                </span>
              </div>
            </div>
          </div>
        </footer>
      );
    }
}

export default Footer;
