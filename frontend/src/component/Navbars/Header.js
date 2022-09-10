import React, { Component } from "react";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { connect} from "react-redux";
import { Link, Route } from "react-router-dom";
import SearchBox from "../common/SearchBox"
import { logout } from "../Redux/actions/userActions"; 
import "./headers.css"



class Header extends Component {
  
  logout = () => {
    this.props.dispatch(logout());
    this.props.history.push("/login");
  };
 state={
  show:false
 }
  render() {
    const { userInfo } = this.props.getLoginInfoData;
    return (
      <header >
        <nav>
            <Link to="/">
         <div >
         <img className="logo" src="https://thumbs.dreamstime.com/b/clock-logo-design-vector-graphics-modern-gold-color-scheme-suitable-business-watches-wall-clocks-accessories-227392110.jpg" alt="Logo"/>
          </div>
         </Link>
          <div className="iconss">
          <div className="serch">
           {/* <span onClick={()=>this.setShow(true)}><SearchIcon></SearchIcon> */}
           <Route render={({ history, match }) => (<SearchBox history={history} match={match}/>)}/> 
           {/* </span>  */}
          </div>
          <div>
            <span><Link to='/cart'>
                <span className="shop">
                <ShoppingBagOutlinedIcon style={{color:"white"}}></ShoppingBagOutlinedIcon>
                </span>
                </Link></span>
          </div>
          { userInfo ? (<div>
            <Link to='/profile'>
            <span style={{color:"white"}}><AccountBoxIcon></AccountBoxIcon></span>
            </Link>
          </div>):(
            <div>
            <Link to='/login'>
            <span style={{color:"white"}}><AccountBoxIcon></AccountBoxIcon></span>
            </Link>
          </div>
          )}
          </div>
              
        </nav>
      </header>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    getLoginInfoData: state.userLogin,
  };
};

export default connect(mapStateToProps)(Header);
