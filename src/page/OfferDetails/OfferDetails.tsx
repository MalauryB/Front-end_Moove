import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import GoogleMap from '../../components/GoogleMap/GoogleMap';

function OfferDetails() {

  let { id } = useParams();
  let [offer, setOffer] = useState({
    idOffer: 0,
    name:'non content',
    picture:'no content',
    description: 'no content',
  });
  let [shop,setShop] = useState({
    name:'no content',
    localisation:{
      lat: 0,
      long: 0
    }
  });

  useEffect( () => {
    axios.get(`http://apioffer-env.eba-a92bh3tp.eu-west-1.elasticbeanstalk.com/offer/offer/${id}`)
        .then(res => setOffer(res.data))
        .catch(error => console.log(error))
  }, []);

  useEffect( () => {
    axios.get(`http://apishop-env.eba-nx8fbca5.eu-west-1.elasticbeanstalk.com/shop/shop/${id}`)
        .then(res => setShop(res.data))
        .catch(error => console.log(error))
  }, []);

  console.log(offer);
  
    return (
      <div>
      <div className="row">
        <div className="col-5 positionAbsolute">
          <Link to="/offers"><img className="arrowReturn" src="/assets/icon/back.png" height={75} width={75}/></Link>
          <button type="button" className="btn btn-success">Réservcer</button>

        </div>
        <div className="col-7 positionAbsolute rightDetails">
          <h1 className="marginTop50">{offer.name}</h1>
          <div className="jumbotron marginTop20">
            <img src={offer.picture} height={500} width={750}/>
          </div>
        </div>
      </div>
       <blockquote className="blockquote text-center topSlogan">
       <p className="mb-0">{offer.description}</p>
     </blockquote>
      <GoogleMap lat={shop.localisation.lat} long={shop.localisation.long}></GoogleMap>
     </div>
    );
  }
export default OfferDetails;  