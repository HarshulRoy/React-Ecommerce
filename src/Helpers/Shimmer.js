import styled from "styled-components";

function ProductShimmer() {
  return (
    <WrapperProduct>
      <div className="container">
        <div className="filter"></div>
        <div className="body"></div>
      </div>
    </WrapperProduct>
  );
}
function AboutShimmer() {
  return (
    <WrapperAbout>
      <div className="container">
        <div className="para"></div>
        <div className="pic"></div>
      </div>
    </WrapperAbout>
  );
}
function SingleproductShimmer() {
  return (
    <WrapperSingleProduct>
      <div className="container">
        <div className="pic">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="detail"></div>
      </div>
    </WrapperSingleProduct>
  );
}

const WrapperProduct = styled.section`
  .container {
    margin-top: 4rem;
    display: flex;
    gap: 10rem;
    .filter {
      width: 200px;
      height: 67vh;
      background: #f0f0f0;
    }
    .body {
      width: 58vw;
      height: 67vh;
      background: #f0f0f0;
    }
  }
`;
const WrapperAbout = styled.section`
  .container {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    gap: 10rem;
    .para {
      width: 30vw;
      height: 67vh;
      background: #f0f0f0;
    }
    .pic {
      width: 30vw;
      height: 67vh;
      background: #f0f0f0;
    }
  }
`;
const WrapperSingleProduct = styled.section`
  .container {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    gap: 10rem;
    .pic {
      width: 30vw;
      height: 67vh;
      display:flex;
      gap:2rem;
      align-items:center;
      .left{
      width:30%;
      height:100%;
      background:#f0f0f0;
      }
      .right{
      width:70%;
      height:60%;
      background:#f0f0f0;
      }
    }
    .detail {
      width: 30vw;
      height: 67vh;
      background: #f0f0f0;
    }
  }
`;

export { ProductShimmer, AboutShimmer, SingleproductShimmer };
