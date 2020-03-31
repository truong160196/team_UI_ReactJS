/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import axios from 'axios';

// import css
import './server.scss';

class CreateServer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameServer: {
        value: '',
      },
      urlServer: {
        value: '',
      },
      pathSource: {
        value: '',
      },
      pathLogFile: {
        value: '',
      },
      scriptStart: {
        value: '',
      },
      scriptStop: {
        value: '',
      },
      scriptTask: {
        value: '',
      },
    };
  }

    componentDidMount = () => {
      //
    }

    handleInputChange = (event) => {
      const stringValue = event.target.value;
      const { name } = event.target;

      const data = [];

      data[name] = {
        value: stringValue,
      };

      this.setState(data);
    }

    submitFormCreate = (event) => {
      const {
        hostApi,
      } = this.props;

      const {
        nameServer,
        urlServer,
        pathSource,
        pathLogFile,
        scriptStart,
        scriptStop,
        scriptTask,
      } = this.state;

      window.$('#form-create-server').parsley().on('form:validate', (formInstance) => {
        const isCheck = formInstance.isValid();
        console.log(formInstance);

        if (isCheck === true) {
          // submit form
          console.log('submit form');
        }
      }).on('form:submit', () => {
        // submit form
        const url = `${hostApi}/api/project/server/add-server`;
        const header = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        };

        const data = {
          nameServer: nameServer.value,
          urlServer: urlServer.value,
          pathSource: pathSource.value,
          pathLogFile: pathLogFile.value,
          scriptStart: scriptStart.value,
          scriptStop: scriptStop.value,
          scriptTask: scriptTask.value,
        };

        axios.post(url, data, header).then((res) => {
          console.log(res);
          if (res.status === 200 && res.data) {
            alert(res.data.message);
          }
        });

        return false;
      });
      event.preventDefault();
      event.stopPropagation();
    }

    render() {
      const {
        nameServer,
        urlServer,
        pathSource,
        pathLogFile,
        scriptStart,
        scriptStop,
        scriptTask,
      } = this.state;

      return (
        <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title mt-0" id="myLargeModalLabel">Add New Server</h5>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
              </div>
              <div className="modal-body">
                <form
                  id="form-create-server"
                  className="custom-validation"
                  noValidate=""
                  onSubmit={this.submitFormCreate}
                >
                  <div className="form-group">
                    <label htmlFor="nameServer">
                      Name server
                      <span className="require-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="nameServer"
                      name="nameServer"
                      className="form-control"
                      required
                      placeholder="Enter name server"
                      value={nameServer.value}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nameServer">
                      Url server
                      <span className="require-error">*</span>
                    </label>
                    <input
                      type="url"
                      id="urlServer"
                      name="urlServer"
                      className="form-control"
                      parsley-type="url"
                      required
                      placeholder="Enter url server"
                      value={urlServer.value}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="row">
                    <div className="col-sm-6 form-group">
                      <label htmlFor="nameServer">
                        Path source
                      </label>
                      <input
                        type="text"
                        id="pathSource"
                        name="pathSource"
                        className="form-control"
                        placeholder="Enter path source"
                        value={pathSource.value}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="col-sm-6 form-group">
                      <label htmlFor="nameServer">
                        Path log file
                      </label>
                      <input
                        type="text"
                        id="pathLogFile"
                        name="pathLogFile"
                        className="form-control"
                        placeholder="Enter path log file"
                        value={pathLogFile.value}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="nameServer">
                      Script start server
                      <span className="require-error">*</span>
                    </label>
                    <div>
                      <textarea
                        name="scriptStart"
                        id="scriptStart"
                        required
                        className="form-control"
                        rows="2"
                        value={scriptStart.value}
                        onChange={this.handleInputChange}
                      >
                        {scriptStart.value}
                      </textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="nameServer">
                      Script stop server
                      <span className="require-error">*</span>
                    </label>
                    <div>
                      <textarea
                        name="scriptStop"
                        id="scriptStop"
                        required
                        className="form-control"
                        rows="2"
                        value={scriptStop.value}
                        onChange={this.handleInputChange}
                      >
                        {scriptStop.value}
                      </textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="nameServer">
                      Script task
                    </label>
                    <div>
                      <textarea
                        className="form-control"
                        name="scriptTask"
                        id="scriptTask"
                        rows="5"
                        value={scriptTask.value}
                        onChange={this.handleInputChange}
                      >
                        {scriptTask.value}
                      </textarea>
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary waves-effect waves-light mr-1"
                      >
                              Submit
                      </button>
                      <button type="reset" className="btn btn-secondary waves-effect">
                              Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default CreateServer;
