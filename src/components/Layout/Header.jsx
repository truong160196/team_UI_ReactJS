import React, { Component } from 'react';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    componentDidMount = () => {
      //
    }

    render() {
      return (
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <a href="/#" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src="assets/images/logo.svg" alt="" height={22} />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-dark.png" alt="" height={17} />
                  </span>
                </a>
                <a href="/#" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="assets/images/logo-sm.png" alt="" height={22} />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-light.png" alt="" height={18} />
                  </span>
                </a>
              </div>
            </div>
            <div className="d-flex">
              <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="mdi mdi-bell-outline" />
                  <span className="badge badge-danger badge-pill">3</span>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-notifications-dropdown">
                  <div className="p-3">
                    <div className="row align-items-center">
                      <div className="col">
                        <h5 className="m-0 font-size-16"> Notifications (258) </h5>
                      </div>
                    </div>
                  </div>
                  <div data-simplebar style={{ maxHeight: '230px' }}>
                    <a href="/#" className="text-reset notification-item">
                      <div className="media">
                        <div className="avatar-xs mr-3">
                          <span className="avatar-title bg-success rounded-circle font-size-16">
                            <i className="mdi mdi-cart-outline" />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">Your order is placed</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">Dummy text of the printing and typesetting industry.</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="/#" className="text-reset notification-item">
                      <div className="media">
                        <div className="avatar-xs mr-3">
                          <span className="avatar-title bg-warning rounded-circle font-size-16">
                            <i className="mdi mdi-message-text-outline" />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">New Message received</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">You have 87 unread messages</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="/#" className="text-reset notification-item">
                      <div className="media">
                        <div className="avatar-xs mr-3">
                          <span className="avatar-title bg-info rounded-circle font-size-16">
                            <i className="mdi mdi-glass-cocktail" />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">Your item is shipped</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">It is a long established fact that a reader will</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="/#" className="text-reset notification-item">
                      <div className="media">
                        <div className="avatar-xs mr-3">
                          <span className="avatar-title bg-primary rounded-circle font-size-16">
                            <i className="mdi mdi-cart-outline" />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">Your order is placed</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">Dummy text of the printing and typesetting industry.</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="/#" className="text-reset notification-item">
                      <div className="media">
                        <div className="avatar-xs mr-3">
                          <span className="avatar-title bg-danger rounded-circle font-size-16">
                            <i className="mdi mdi-message-text-outline" />
                          </span>
                        </div>
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">New Message received</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">You have 87 unread messages</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 border-top">
                    <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="/#">
                    View all
                    </a>
                  </div>
                </div>
              </div>
              <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                  <i className="mdi mdi-settings-outline" />
                </button>
              </div>
            </div>
          </div>
        </header>
      );
    }
}

export default Header;
