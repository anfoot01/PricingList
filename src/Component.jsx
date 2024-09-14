import React, { useState } from "react";
import "./App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [productionYear, setProductionYear] = useState(
    new Date().getFullYear()
  );
  const [productMaker, setProductMaker] = useState("");
  const [productCost, setProductCost] = useState("");
  

  function addProduct() {
    const newProduct = {
      productionYear: productionYear,
      productMaker: productMaker,
      productCost: productCost,
    };
    setProductsList((productsList) => [...productsList, newProduct]);
    setProductMaker("");
    setProductCost("");
  }
  function changeYear(e) {
    setProductionYear(e.target.value);
  }
  function changeMaker(e) {
    setProductMaker(e.target.value);
  }
  function changeCost(e) {
    setProductCost(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className="col-4 mx-auto">
            <div className="mb-3">
              <input
                className="w-100"
                onChange={changeYear}
                value={productionYear}
                placeholder="Product cost"
                type="text"
              />
            </div>
            <div className="mb-3">
              <input
                className="w-100"
                onChange={changeMaker}
                value={productMaker}
                placeholder="Product model"
                type="text"
              />
            </div>
            <div className="mb-3">
              <input
                className="w-100"
                onChange={changeCost}
                value={productCost}
                placeholder="Product year"
                type="text"
              />
            </div>
            <div>
              <button className="btn btn-primary w-100" onClick={addProduct}>
                Add product
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-group">
        {productsList.map((item, index) => {
          return (
            <Container className="my-5" key={index}>
              <Row className="text-center">
                <Col lg={4} md={6} className="mb-4">
                  <Card className="pricing-table border-0 shadow">
                    <Card.Header className="pricing-header bg-light text-dark">
                      <h2 className="h4"></h2>
                      <p className="h1">
                      {item.productMaker}<span className="h6"></span>
                      </p>
                    </Card.Header>
                    <Card.Body className="pricing-body text-center">
                      <ul className="list-unstyled">
                        <li>{item.productionCost}$</li>
                        <li>{item.productCost}</li>
                      </ul>
                    </Card.Body>
                    <Card.Footer className="pricing-footer bg-light text-dark">
                      <small>Best quality</small>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>
          );
        })}
      </ul>
    </>
  );
}

export default App;
