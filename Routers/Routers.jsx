import {
    Routes,
    Route,
    BrowserRouter as Router
} from "react-router-dom";

import React from 'react'
import Product from "../src/pages/Product";
import ProductDetails from "../src/pages/Productdetails";
import Header from "../src/components/Header";

const Routers = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Product/>}/>
                    <Route path="/" element={<ProductDetails/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Routers


