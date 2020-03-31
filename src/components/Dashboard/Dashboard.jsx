/* eslint-disable no-alert */
import React, { Component } from 'react';
import axios from 'axios';

// import css
import './dashboard.scss';

// import component
import ListServer from '../Server/ListServer';
import CreateServer from '../Server/CreateServer';

// define
const KEY_URL_SERVER = 'host-server';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlServer: {
        value: '',
      },
      hostApi: '',
      btnChange: {
        value: true,
      },
    };
  }

    componentWillMount = () => {
      //
      const dataState = [];
      const urlServer = window.location.origin;

      const urlLocal = window.localStorage.getItem(KEY_URL_SERVER);

      if (urlLocal) {
        dataState.urlServer = {
          value: urlLocal,
        };

        dataState.hostApi = urlLocal;
      } else {
        dataState.urlServer = {
          value: urlServer,
        };

        dataState.hostApi = urlServer;
      }

      this.setState(dataState);
    }

    handleInputChange = (event) => {
      const {
        hostApi,
      } = this.state;

      const stringValue = event.target.value;
      const { name } = event.target;

      const data = [];

      data[name] = {
        value: stringValue,
      };

      if (stringValue === hostApi || stringValue === '') {
        data.btnChange = {
          value: true,
        };
      } else {
        data.btnChange = {
          value: false,
        };
      }

      this.setState(data);
    }

    handleSaveChangeServer = (event) => {
      const {
        urlServer,
      } = this.state;

      const dataState = [];

      window.$('#form-server-url').parsley().on('form:validate', (formInstance) => {
        const isCheck = formInstance.isValid();

        if (isCheck === true) {
          //
        }
      })
        .on('form:submit', () => {
          // submit form
          dataState.btnChange = {
            value: true,
          };

          const checkHttp = urlServer.value.includes('http://');
          const checkHttps = urlServer.value.includes('https://');

          if (checkHttp === true || checkHttps === true) {
            dataState.hostApi = urlServer.value.replace(/\/$/, '');
          } else {
            dataState.hostApi = `http://${urlServer.value.replace(/\/$/, '')}`;
          }

          window.localStorage.setItem(KEY_URL_SERVER, dataState.hostApi);

          this.setState(dataState);
          return false; // Don't submit form for this demo
        });
      event.preventDefault();
      event.stopPropagation();
    }

    render() {
      const {
        urlServer,
        hostApi,
        openModal,
        btnChange,
      } = this.state;

      const lstServer = [
        {
          name: 'Forex Dev',
          host: 'http://192.168.1.215:7002',
          date: '15/3/2020 15:30:36',
          status: 'Active',
          command: {
            start: '/usr/local/forex/bin/forex.sh start',
            stop: '/usr/local/forex/bin/forex.sh stop',
          },
        },
        {
          name: 'Forex SB',
          host: 'http://192.168.1.215:6002',
          date: '15/3/2020 15:30:36',
          status: 'Active',
          command: {
            start: '/usr/local/forex_jp/bin/forex.sh start',
            stop: '/usr/local/forex_jp/bin/forex.sh stop',
          },
        },
        {
          name: 'Settlement Reference Dev',
          host: 'http://192.168.1.215:7003',
          date: '15/3/2020 15:30:36',
          status: 'Active',
          command: {
            start: '/usr/local/settlement_reference/bin/settlement.sh start',
            stop: '/usr/local/settlement_reference/bin/settlement.sh stop',
          },
        },
        {
          name: 'Settlement Reference SB',
          host: 'http://192.168.1.215:6003',
          date: '15/3/2020 15:30:36',
          status: 'Active',
          command: {
            start: '/usr/local/settlement_reference_jp/bin/settlement.sh start',
            stop: '/usr/local/settlement_reference_jp/bin/settlement.sh stop',
          },
        },
        {
          name: 'Settlement Production Dev',
          host: 'http://192.168.1.215:7001',
          date: '15/3/2020 15:30:36',
          status: 'Active',
          command: {
            start: '/usr/local/settlement/bin/settlement.sh start',
            stop: '/usr/local/settlement/bin/settlement.sh stop',
          },
        },
        {
          name: 'Settlement Production SB',
          host: 'http://192.168.1.215:6001',
          date: '15/3/2020 15:30:36',
          status: 'Active',
          command: {
            start: '/usr/local/settlement_jp/bin/settlement.sh start',
            stop: '/usr/local/settlement_jp/bin/settlement.sh stop',
          },
        },
      ];

      return (
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="float-right d-none d-md-block">
                        <form
                          className="custom-validation"
                          noValidate=""
                          id="form-server-url"
                          onSubmit={this.handleSaveChangeServer}
                        >
                          <div className="input-group">
                            <input
                              type="url"
                              className="form-control server-input"
                              placeholder="Enter url server"
                              name="urlServer"
                              parsley-type="url"
                              required
                              data-parsley-errors-container="#serverURLServer"
                              value={urlServer.value}
                              onChange={this.handleInputChange}
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-primary waves-effect waves-light"
                                type="submit"
                                disabled={btnChange.value}
                              >
                                Change
                              </button>
                            </div>
                          </div>
                          <div className="">
                            <p id="serverURLServer" />
                          </div>
                        </form>
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-success dropdown-toggle waves-effect waves-light"
                          type="button"
                          data-toggle="modal"
                          data-target=".bs-example-modal-lg"
                        >
                          <i className="ion ion-md-add mr-2" />
                          Add Server
                        </button>
                      </div>
                      <h4 className="card-title mb-4">Server</h4>
                      <ListServer
                        lstServer={lstServer}
                        urlServer={hostApi}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CreateServer
            openModal={openModal}
            hostApi={hostApi}
          />
        </div>
      );
    }
}

export default Dashboard;
