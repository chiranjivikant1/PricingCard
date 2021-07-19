// Price card version 1.0.3
// Developed by- chiranjivi kant  on 17-7-2021

import "./App.css";
import PricingCard from "./PricingCard";
import { Container, Row } from "react-bootstrap";
import PricingData from "./PricingData";
function App() {
  // import data from pricingData

  return (
    <>
      <Container className="container">
        <Row className="row">
          {/* iterate through data and send as props */}
          {PricingData.map(({ title, price, pricePer, currency, features }) => {
            return (
              // each component mount call acts as column in PricingCard component
              <PricingCard
                title={title}
                price={price}
                pricePer={pricePer}
                currency={currency}
                features={features}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default App;
