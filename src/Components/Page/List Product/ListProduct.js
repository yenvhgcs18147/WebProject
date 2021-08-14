import React from 'react'
import Footer from '../../Layout/Footer'
import Header from '../../Layout/Header'
import ItemProduct from '../Product/ItemProduct'
import { Container } from 'reactstrap';
import data from './data'

const ListProduct = () => {
    return (
        <div>
            <Header/>
            <Container className="themed-container">
                {
                    data.products.map((product) => (
                        <ItemProduct key={product.id} product={product}></ItemProduct>
                    ))
                }
                
            </Container>
            <Footer/>
        </div>
    )
}

export default ListProduct
