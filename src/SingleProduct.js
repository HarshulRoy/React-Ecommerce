import styled from "styled-components";
import React from 'react'
import {useParams} from "react-router-dom"
import {useProductContext} from './context/productcontext'
import PageNavigation from './components/pageNavigation'
import MyImage from './components/MyImage'
import {Container} from './styles/Container'
import FormatPrice from "./Helpers/FormatPrice";
import {TbTruckDelivery} from "react-icons/tb"
import {TbReplace} from "react-icons/tb"
import {MdSecurity} from "react-icons/md"
import Star from './components/Star'
import AddToCart from "./components/AddToCart";
import {SingleproductShimmer} from "./Helpers/Shimmer"



const SingleProduct = () => {


  const {getSingleProduct,isSingleLoading,singleProduct} = useProductContext()
  const API = "https://api.pujakaitem.com/api/products"
  const {id} = useParams();

  const {
    image, name, company, price, description, stock, stars, reviews  
  } = singleProduct
  
  React.useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`)
    document.documentElement.scrollTop = 0
  },[])

  if(isSingleLoading){ 
    return(
      <SingleproductShimmer />
    )
  }
  
  return (
    <Wrapper>
      <PageNavigation title={name}/>
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product image  */}
          <div className="product_images">
          <MyImage imgs={image} />
          </div>

          {/* product data  */}
          <div className="product-data">
            <h2>{name}</h2>
            <Star reviews={reviews} stars={stars} />
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
              
            <div className="product-data-warranty"> 
            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Free Delivery</p>
            </div>

            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 Days Replacement</p>
            </div>

            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Roy Delivered</p>
            </div>

            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>Year Warranty</p>
            </div>
            </div> 

            <div className="product-data-info">
              <p>Available :
                <span>{stock>0?' In Stock':' Not Available'} </span>
              </p>
              <p>Id :&nbsp; 
                <span>{id}</span>
              </p>
              <p>Brand :&nbsp; 
                <span>{company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct}/>}
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  .container {
    padding: 4rem 0;
    max-width:96rem;

  .product_images{
    display:flex;
    align-items:center;
  }

  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.2rem;

    h2{
      font-size:3rem;
    }
    p{
      font-size:1.3rem;
      margin-bottom:0.3rem;
      line-height:1.8rem;
    }

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;
        margin-top: 1.5rem;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.2rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct