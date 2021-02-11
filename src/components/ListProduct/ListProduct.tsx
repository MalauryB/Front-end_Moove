import React, { useState, useEffect } from 'react'
import './ListProduct.css';
import { Link } from 'react-router-dom';

interface Props {
    shops: any
}
const ListProduct = ({shops} : Props) => {

    console.log(shops);
    return(
        <div className="row">
            {
                shops && shops.length && shops.map((shop :any) => {
                    return shop.offers.map((offer:any) => {
                        return(
                            <Link to={"/offer/" + offer.idOffer}>
                                <div className="card border-secondary mb-3 listMaxWidth marginRight15">
                                    <div className="card-header">{shop.name}</div>
                                        <div className="card-body">
                                        <img src={offer.picture} className="imgOffer"/>
                                        <h4 className="card-title">{offer.name}</h4>
                                        <p className="card-text">{shop.description.substr(0, 120)}...</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    });
                })
            }  
        </div>
    )
}
export default ListProduct;