import React from 'react';
import Home from '../page/Home/Home';
import ListOffers from '../page/ListOffers/ListOffers';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopDetails from '../page/ShopDetails/ShopDetails';
import OfferDetails from '../page/OfferDetails/OfferDetails';
import Navbar from '../components/Navbar/Navbar';
import ListShops from '../page/ListShops/ListShops';
function Root() {
    return (
      <Router>
        <Navbar />
        <Switch>
            <Route  path="/offers">
                <ListOffers />
            </Route>
            <Route  path="/shops">
                <ListShops />
            </Route>

            <Route  path="/shop/:id" >
                <ShopDetails />
            </Route>

            <Route  path="/offer/:id">
                <OfferDetails />
            </Route>
            
            <Route path="/">
                <Home />
            </Route>
        </Switch>
      </Router>
    );
}
export default Root;
  