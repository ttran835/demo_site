import React, { Component } from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default class ResetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      resetPasswordToken: '',
      update: false,
      error: false,
    };

    this.updatePassword = this.updatePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { resetPasswordToken } = this.props.match.params;
    this.setState({
      resetPasswordToken,
    });
  }

  updatePassword(e) {
    const { history } = this.props;
    const { email, password, resetPasswordToken } = this.state;
    e.preventDefault();
    // Statements to handle login info
    Axios.put('/api/update-password', { params: { email, password, resetPasswordToken } })
      .then((res) => {
        const message = res.data;
        console.log(message);
      })
      .catch((err) => console.error(err));
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    const { email, password, resetToken, update } = this.state;

    return (
      <div className="container text-center">
        <div className="row justify-content-sm-center">
          <div className="col-8">
            <h1 className="text-color txt-upper-case">Password Reset Information</h1>
          </div>
        </div>
        <div className="row justify-content-sm-center">
          <div className="col-6">
            <form>
              <TextField
                className="text-color"
                id="email"
                label="Email"
                placeholder="email"
                onChange={this.handleChange}
              />
              <TextField
                className="text-color"
                id="password"
                label="Password"
                placeholder="password"
                onChange={this.handleChange}
              />
              <TextField
                className="text-color"
                id="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm password"
                onChange={this.handleChange}
              />
              <br />
              <Button variant="contained" color="primary" onClick={this.updatePassword}>
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
