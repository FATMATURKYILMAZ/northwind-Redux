import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import CategoryList from '../categories/CategoryList'
import ProductsList from '../products/ProductsList'
export default class DashBoard extends Component {
    render() {
        return (
           <div>
             <Row>
                <Col xs="3">
                    <CategoryList />
                </Col>
                <Col xs="9">
                    <ProductsList />
                </Col>
            </Row>
           </div>
        )
    }
}
