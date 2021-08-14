import React from 'react'
import Header from '../../Layout/Header'
import Footer from '../../Layout/Footer'
import Causual from './Causual';
import { Container } from 'reactstrap';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Causual></Causual>
            <Container className="themed-container">
                <div className="row" style={{margin:"30px 0px"}}>
                    <div className="col">
                        <div className="clearfix">
                            <img className="img-home right" src="../image/Home/Mother-and-Children.jpg"/>
                            <div className="content-text">
                            Chocolate, chocolate, chocolate was invented by the Mexicans. 
                            The Mayans, Incas, and Aztecs planted cocoa trees and processed 
                            and named it chocolate. Then it was discovered by explorers around the world, bringing cocoa beans mixed with other flavors and later known to the whole world.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="clearfix">
                            <img className="img-home left" src="../image/Home/1.jpg"/>
                            <div className="content-text" id="text1">
                                Give me the chocolate and nobody gets hurt
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            
            <Footer></Footer>
        </div>
    )
}

export default Home
