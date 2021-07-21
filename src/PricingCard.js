// Price card version 1.0.3
// Developed by- chiranjivi kant  on 17-7-2021

import React from "react";
import { Col, Button } from "react-bootstrap";

// function to check and assign access level for each plan
function changeColor(bgclr) {
  let objclr = {};
  if (bgclr === "red") {
    objclr.color = "#b92b27";
    objclr.emoji = "❌";
    objclr.letterSpacing = "3px";
    return objclr;
  } else {
    objclr.color = "#009688";
    objclr.emoji = "✔️";
    objclr.letterSpacing = "3px";

    return objclr;
  }
}
function PricingCard(props) {
  return (
    <>
      <Col lg={true} className="card">
        {/* plan Type */}
        <h3 className="card-title dull">{props.title}</h3>
        {/* plan price */}
        <h1 className="card-price">
          {`$${props.price}`}{" "}
          <span className="month">{`/${props.pricePer}`}</span>
        </h1>
        <hr className="hr" />
        {/* plan features data */}
        <ul>
          {props.features.map((data1, index) => {
            // changing colour based on access level
            let { color, emoji } = changeColor(props.features[index].access);
            console.log(color);
            return (
              <>
                <li key={index}>
                  {/*  render green for access and red for no access */}
                  <span style={{ color }}>
                    {`${emoji}           ${props.features[index].name}`}
                  </span>
                </li>
              </>
            );
          })}
        </ul>
        {/* card button */}
        <Button className="btn">Buy Now</Button>
      </Col>
    </>
  );
}

export default PricingCard;
