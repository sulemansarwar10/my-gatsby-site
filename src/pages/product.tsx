

import React from "react"
import { Router } from "@reach/router"
import Layout from "../component/layout"
import Productone from "../component/productone"
import Producttwo from "../component/producttwo"
import Main from "../component/main"


const product = () => {
    return (
        <Layout>
            <Router basepath="/product">
                <Productone path="/page1" />
                <Producttwo path="/page2" />
                <Main path="/" />
            </Router>
        </Layout>
    )
}

export default product;