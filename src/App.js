import React from "react";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import ProductThumbnail from "./components/ProductThumbnail";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

const products = [
  {
    name: "고구마",
    price: "5000",
    imgUrl:
      "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2361853557BEA99F17",
    id: "36f35f26-ee40-4407-b6d1-63b5fb703fca",
  },
  {
    name: "곤약 떡볶이",
    price: "100000",
    imgUrl: "https://t1.daumcdn.net/cfile/tistory/999242495D351E021F",
    id: "92ba4f3f-6a1a-41f6-a024-70e244fc1e58",
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route path="/detail">
              <ProductDetail />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
