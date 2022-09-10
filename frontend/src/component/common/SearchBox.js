import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
    };
  }
  submitHandler = (e) => {
    const { keyword } = this.state;
    e.preventDefault();
    if (keyword.trim()) {
      this.props.history.push(`/search/${keyword}`);
    } else {
      this.props.history.push("/");
    }
  };
  state={
    show:true,
  }
  operation (){
    this.setState({show:!this.state.show})
  }
  render() {
    return (
      <Form onSubmit={this.submitHandler} inline >
        <Form.Group controllId='keyword'>
         { this.state.show ? (<Form.Control
            type='text'
            name='q'
            width="500px"
            height="30px"
            placeholder='Search products...'
            value={this.state.keyword}
            onChange={(e) =>
              this.setState({ keyword: e.target.value })
            }></Form.Control>):
         (null )}
            <SearchIcon style={{marginLeft:"10px"}} onClick={()=>this.operation()}></SearchIcon>
        </Form.Group>
      </Form>
    );
  }
}

export default withRouter(SearchBox);
