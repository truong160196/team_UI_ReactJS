/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import axios from 'axios';

// import css
import './server.scss';

class ListServer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
      logs: '',
      lstServer: [],
    };
  }

    componentDidMount = () => {
      //
      this.getListServer();
    }

    getListServer = async () => {
      try {
        const {
          urlServer,
        } = this.props;

        const url = `${urlServer}/api/project/server/list`;

        const header = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        };

        const result = await axios.get(url, header);

        if (result.status === 200 && result.data) {
          this.setState({
            lstServer: result.data,
          });
        }
      } catch (err) {
        console.error(err);
      }
    }

    openLogFile = async (path) => {
      try {
        const {
          urlServer,
        } = this.props;

        const param = {
          pathLog: path,
        };

        const paramString = new URLSearchParams(param);

        const url = `${urlServer}/api/project/server/logs?${paramString.toString()}`;

        const header = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        };

        this.setState({
          logs: '',
          content: null,
        });

        const result = await axios.get(url, header);

        if (result.status === 200 && result.data) {
          const convertJson = result.data.message;

          this.setState({
            logs: convertJson,
            content: null,
          });
        }
      } catch (err) {
        this.setState({
          logs: '',
          content: null,
        });
      }
    }

    getStatusServer = async (host) => {
      try {
        const {
          urlServer,
        } = this.props;

        const param = {
          host,
        };

        const paramString = new URLSearchParams(param);

        const url = `${urlServer}/api/project/server?${paramString.toString()}`;

        const header = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        };
        this.setState({
          content: {},
          logs: null,
        });

        const result = await axios.get(url, header);

        if (result.status === 200 && result.data) {
          const convertJson = JSON.parse(result.data.message);

          if (convertJson) {
            this.setState({
              content: convertJson,
              logs: null,
            });
          } else {
            this.setState({
              content: {
                message: result.data.message,
              },
              logs: null,
            });
          }
        }
      } catch (err) {
        this.setState({
          content: {
            message: err,
            logs: null,
          },
        });
        console.error(err);
      }
    }

    startServer = async (command) => {
      try {
        const {
          urlServer,
        } = this.props;

        const data = {
          command,
        };

        const url = `${urlServer}/api/project/server/command`;

        const header = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        };

        this.setState({
          logs: '',
          content: {},
        });

        const result = await axios.post(url, data, header);

        if (result.status === 200 && result.data) {
          const convertJson = result.data.message;

          this.setState({
            logs: convertJson,
            content: {},
          });
        }
      } catch (err) {
        console.error(err);
      }
    }

    stopServer = async (command) => {
      try {
        const {
          urlServer,
        } = this.props;

        const data = {
          command,
        };

        const url = `${urlServer}/api/project/server/command`;

        const header = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        };

        this.setState({
          logs: '',
          content: {},
        });

        const result = await axios.post(url, data, header);

        if (result.status === 200 && result.data) {
          const convertJson = result.data.message;

          this.setState({
            logs: convertJson,
            content: {},
          });
        }
      } catch (err) {
        console.error(err);
      }
    }

    renderLayoutTable = () => {
      const {
        lstServer,
      } = this.state;

      const layout = lstServer.map((item, index) => (
        <tr key={index.toString()}>
          <th scope="row">
            <a href={`/detail/${index}`} rel="noopener noreferrer">
              {`#/00${index + 1}`}
            </a>
          </th>
          <td>
            {item.nameServer}
          </td>
          <td>
            <a href={item.urlServer} target="_blank" rel="noopener noreferrer">
              {item.urlServer}
            </a>
          </td>
          <td>
            <a
              type="button"
              href="#"
              onClick={() => this.openLogFile(item.pathLog)}
            >
              {item.pathLog}
            </a>
          </td>
          <td>{item.updated_at}</td>
          <td>
            <span
              className={`badge ${item.status === '0' ? 'badge-success' : 'badge-danger'}`}
            >
              {item.status === '0' ? 'Active' : 'Die'}
            </span>
          </td>
          <td>
            <div>
              {/* <button
                type="button"
                onClick={() => this.configureServer(item.host)}
                className="btn btn-dark btn-sm"
              >
                  Configure
              </button> */}
              <button
                type="button"
                onClick={() => this.getStatusServer(item.urlServer)}
                className="btn btn-primary btn-sm"
              >
                  Check
              </button>
              <button
                type="button"
                onClick={() => this.startServer(item.scriptStart)}
                className="btn btn-info btn-sm"
              >
                  Start
              </button>
              <button
                type="button"
                onClick={() => this.stopServer(item.scriptStop)}
                className="btn btn-danger btn-sm"
              >
                  Stop
              </button>
            </div>
          </td>
        </tr>
      ));

      return layout;
    }

    render() {
      const {
        content,
        logs,
      } = this.state;

      let statusLayout = '';

      if (content && logs === null) {
        statusLayout = Object.entries(content).map((item, index) => (
          <li key={index.toString()}>{`${item[0]} : ${item[1]}`}</li>
        ));
      }

      if (logs && content === null) {
        statusLayout = (
          <textarea
            className="form-control"
            rows="100"
            value={logs}
            readOnly
          >
            {logs}
          </textarea>
        );
      }

      return (
        <div className="list-server">
          <div className="table-responsive">
            <table className="table table-hover table-centered table-nowrap mb-0">
              <thead>
                <tr>
                  <th scope="col">(/#) Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Host (URL)</th>
                  <th scope="col">Log</th>
                  <th scope="col">Latest Update</th>
                  <th scope="col" colSpan={2}>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.renderLayoutTable()}
              </tbody>
            </table>
          </div>
          <ul>
            {statusLayout}
          </ul>
        </div>
      );
    }
}

export default ListServer;
