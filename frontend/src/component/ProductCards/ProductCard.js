import React, { Component } from "react";
import { listProducts } from "../Redux/actions/productActions";
import { connect } from "react-redux";
import Loader from "../util/Loader";
import Message from "../util/Message";
import { withRouter } from "react-router";
import "./ProductCard.css"
import Categories from "./Categories";




class Product extends Component {
 
  componentDidMount() {
    window.scrollTo(0, 0);

    const { keyword } = this.props.match.params;
    const pageNumber = this.props.match.params.pageNumber || 1;
    this.props.dispatch(listProducts(keyword, pageNumber));
  }

  render() {
    const {
      loading,
      error,
      products,
    } = this.props.getProductListData;
    return (
        <div >
          {loading ? (
            <Loader />
          ) : error ? (
            <Message />
          ) : (
            <Categories products={products}/>
          )}
          <div style={{textAlign:"center",marginTop:"150px"}}>
         <h4> Time to be Different - That's our Motto</h4>
              <h6>A watch says a lot about you and it should help you stand out (no Apple watches here). We only carry watch brands that make a statement.</h6>
            <h5>How are you different?</h5>
          </div>
        </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    getProductListData: state.productList,
  };
};

export default withRouter(connect(mapStateToProps)(Product));
