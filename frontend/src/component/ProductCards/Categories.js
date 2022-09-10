import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./ProductCard.css"

const Categories = ({products}) => {
    console.log(products)
    const [data, setData] = useState(products)
    const filterdata=(catitems)=>{
      const result=products.filter(el=>el.category===catitems)
      setData(result)
    }

  return (
    <div>
        <div style={{marginLeft:"40%",fontSize:"45px"}}>
          <Button variant="light" onClick={()=>setData(products)}><span style={{fontSize:"15px"}}>All</span></Button>
          <Button variant="light"onClick={()=>filterdata('men')}><span style={{fontSize:"15px"}}>Men</span></Button>
          <Button variant="light"onClick={()=>filterdata('women')}><span style={{fontSize:"15px"}}>Women</span></Button>
          </div>
          <div className="productmen">
              
                {!(data === undefined) && (
                  <>
                    {
                    React.Children.toArray(
                    data.map(i=> {
                      return (
                       <div >
                          {!(i.image === "/images/sample.jpeg") && (
                            <div >
                                <div className="col-md-3 ">
                                      <div className="product-grid">
                                        <div className="product-image">
                                          <Link to={`/product/${i._id}`}>
                                         
                                            <img src={i.image} width="200px" height="200px"
                                            alt="a wallpaper"/>
                                      
                                          <span className="product-discount-label">-{i.brand}%</span>
                                          <br />
                                          <div className="product-content">
                                          <h4 className="title">
                                          <span className="title">{i.name}</span>
                                          </h4>
                                          <h4 >
                                          <span>{i.price} $</span>
                                          </h4>
                                          </div>
                                          </Link>
                                          </div>
                                      </div>
                                    </div>
                                    </div>
                          )}
                       </div>
                      );
                    }))}
                  </>
                )}

              
            </div>
    </div>
  )
}

export default Categories