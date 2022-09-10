import React, { Component } from "react";
import { Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignScreen.css";
import { connect } from "react-redux";
import Loader from "../component/util/Loader";
import Error from "../component/util/Error";
import axios from "axios";

class SignScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: false,
      loader: false,
    };
  }

  submitHandler = async (e) => {
    this.setState({
      loader: true,
    });
    e.preventDefault();
    const { email, password } = this.state;
    if (!email && !password) {
      this.setState({
        error: true,
        loader: false,
      });
      return;
    }
    // this.props.dispatch(login(email, password));

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post("/api/users/login", { email, password }, config)
      .then((data) => {
        this.setState({
          error: false,
          loader: false,
        });

        localStorage.setItem("userInfo", JSON.stringify(data.data));

        setTimeout(() => {
          window.location.reload();
        }, 1);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loader: false,
          error: true,
        });
      });
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    if (this.props.getLoginInfoData.userInfo) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div className="login-page">
     
        <h2 style={{textAlign:"center"}}>Login</h2>
        {this.state.error && (
          <Error variant='danger' message='Email or password wrong!' />
          )}
          {this.state.loader ? (
            <Loader />
            ) : 
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </Form.Group>
              <div className="rows">
              <Button
              disabled={!this.state.password || !this.state.email}
              className="Button"
              type='submit'
              onClick={this.submitHandler}>
              SIGN UP
            </Button>
          </div>
          
            <div style={{textAlign:"center"}}>
          <Link to="/register">
              Create account
            </Link>
              </div>
         
        </Form>

        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getLoginInfoData: state.userLogin,
  };
};

export default connect(mapStateToProps)(SignScreen);
