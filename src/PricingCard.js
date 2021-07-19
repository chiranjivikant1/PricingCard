// Price card version 1.0.3
// Developed by- chiranjivi kant  on 17-7-2021

import React from "react";
import { Col, Button } from "react-bootstrap";

// function to check and assign access level for each plan
function changeColor(bgclr) {
  let objclr = {};
  if (bgclr === "red") {
    objclr.color = "crimson";
    return objclr;
  } else {
    objclr.color = "#007bff";
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
            let newclr = changeColor(props.features[index].access);

            return (
              <>
                <li>
                  {/*  render green for access and red for no access */}
                  <span style={newclr}>{props.features[index].name}</span>
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
