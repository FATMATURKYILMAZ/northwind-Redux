import React from "react"
import { Container } from "reactstrap";
import DashBoard from "./DashBoard";
import Navi from "../navi/navi";
import { Route, Routes } from "react-router-dom";
import CartDetails from "../cart/CartDetails";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
          <Route path="/" exact Component={DashBoard}></Route>
          <Route path="/product" exact Component={DashBoard}></Route>
          <Route path="/saveproduct/:productId" exact Component={AddOrUpdateProduct}></Route>
          <Route path="/saveproduct" exact Component={AddOrUpdateProduct}></Route>
          <Route path="/cart" exact Component={CartDetails}></Route>
          <Route exact Component={NotFound}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
