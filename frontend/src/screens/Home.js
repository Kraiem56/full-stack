import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { listProducts } from "../component/Redux/actions/productActions";
import { connect } from "react-redux";
import Paginate from "../component/util/Paginate";
import { withRouter } from "react-router";
import Shipped from "../assets/shipped.png";
import Time from "../assets/back-in-time.png";
import Pay from "../assets/credit-card.png";
import ProductCards from "../component/ProductCards/ProductCard"; 
// import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    img: Shipped,
    title: "FREE SHIPPING",
    description: "For all order over 99$",
  },
  {
    id: 2,
    img: Time,
    title: "DELIVERY ON TIME",
    description: "If good have prolems",
  },
  {
    id: 3,
    img: Pay,
    title: "SECURE PAYMENT",
    description: "100% secure payment",
  },
];

class Product extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pageNumber: 1,
      page: undefined,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);

    const { keyword } = this.props.match.params;
    const pageNumber = this.props.match.params.pageNumber || 1;
    this.props.dispatch(listProducts(keyword, pageNumber));
  }

  render() {

    return (
        <div>
        <div >
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "625px" , width:"815px" }}
          src='https://cdn.wallpapersafari.com/50/55/WAQEBx.png'
           width="100%" 
          alt="Telefunken"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "625px" , width:"815px" }}
          src='https://y-store-media-rivoli-store.s3.amazonaws.com/sys-yrivolib2c/images/h45/h4e/8811381293086'
          width="100%" 
          alt="womeb's watches"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "625px" }}
          src="https://www.goldsmiths.co.uk/medias/luxury-watches-hero-desktop-1600-150621.jpg?context=bWFzdGVyfHJvb3R8MjAxMDI4fGltYWdlL2pwZWd8aDc4L2hmZS85MDk2NzM5NzE3MTUwLmpwZ3xmYWFiZmFkMDJhZjg0M2E0Y2ZkNzU5M2VmYTVkOGE5YTk1Yzk4MjQ2YjNiOTQ1NjBkMzMwMzc0OTkxOTE1OTlj&imwidth=1920"
          width="100%" 
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>      
    <br/> 
    <div style={{marginLeft:"45%",marginTop:"50px"}}>
                <h2>Products</h2><br/> 
                </div>
              <ProductCards/>

              {/* something new */}

              <div className='shipmentContainer' style={{marginRight:"120px",marginLeft:"120px"}}>
                {data.map((item, index) => (
                  <div key={index} className='innerShipmentContainer'>
                    <img src={item.img} alt='Logo' />
                    <div style={{ marginLeft: 30 }}>
                      <h1 style={{ fontSize: 18, fontWeight: "bold" }}>
                        {item.title}
                      </h1>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
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
