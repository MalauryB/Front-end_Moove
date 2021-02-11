import React, { useState, useEffect } from 'react';
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
                        return(
                            <Link to={"/shop/" + shop.shopId}>
                                <div className="card border-secondary mb-3 listMaxWidth marginRight15">
                                    <div className="card-header">{shop.address}</div>
                                        <div className="card-body">
                                        <img src={shop.pictures[0].link} className="imgOffer"/>
                                        <h4 className="card-title">{shop.name}</h4>
                                        <p className="card-text">{shop.description.substr(0, 120)}...</p>
                                    </div>
                                </div>
                            </Link>
                        );
                })
            }  
        </div>
    )
}
export default ListProduct;