import React, { useState, useEffect }  from 'react';
import ListProduct from '../../components/ListProduct/ListProduct';
import './ListOffers.css';
import axios from 'axios';

function ListOffers() {

    const [shops,setShops] = useState(null);

    useEffect( () => {
        axios.get('http://apicatalog-env.eba-jwwb5jev.eu-west-1.elasticbeanstalk.com/catalog/shops')
            .then(res => setShops(res.data.shops))
            .catch(error => console.log(error))
        }, []);

    return(
        <div className="row">
            <div className="col-4">
                <div className="jumbotron filterZone">
                    <h4>Caractéristiques</h4>
                    <div className="form-group marginTop30">
                        <label>Nom</label>
                        <input type="email" className="form-control inputCarac" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrer nom"/>
                    </div>


                    <label className="marginTop30">Particularité sportive:</label>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-check marginTop10">
                                <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" value="" />
                                    Sans équipement
                                </label>
                            </div>
                            <div className="form-check marginTop10">
                                <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" value="" />
                                    Sport ouvert au débuant
                                </label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-check marginTop10">
                            <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" value="" />
                                Sport intense
                            </label>
                        </div>
                        <div className="form-check marginTop10">
                            <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" value="" />
                                Sans sauts
                            </label>
                        </div>
                        </div>
                    </div>
                    <fieldset className="form-group marginTop30">
                        <label>Distance</label>
                        <input type="range" className="custom-range" id="customRange1"/>
                    </fieldset>
                    <div className="form-group marginTop30">
                        <label>Sport</label>
                        <select className="form-control inputCarac" id="exampleSelect1">
                            <option>Natation</option>
                            <option>Football</option>
                            <option>Escalade</option>
                            <option>Musculation</option>
                            <option>Lancé de hache</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary buttonCenter marginTop30">Rechercher</button>
                </div>
            </div>
            <div className="col-8 marginTop100 paddingLeft5">
                <ListProduct shops={shops}></ListProduct>
            </div>
        </div>
    );
}
export default ListOffers;