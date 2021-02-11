import React, { useState, useEffect } from 'react';
import './ShopDetails.css';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ShopEntity from '../../entity/ShopEntity';
import { useParams } from "react-router-dom";

function ShopDetails() {

  let { id } = useParams();

  let [shop,setShop] = useState({
    shopId: 1,
    name: 'No Content',
    address: 'No Content',
    description: 'No Content',
    email: 'No Content',
    phone: 'No Content',
    localisation:{
      lat: 0,
      long: 0
    },
    videoLink: 'No Content',
    pictures: [
      {
        idPicture: 1,
        link:'nono'
      }
    ],
    openShop:[{
      dayWeek: 'Monday',
      hourStart: 'No content',
      endHour: 'No content'
    }]
  });

    useEffect( () => {
      axios.get(`http://apishop-env.eba-nx8fbca5.eu-west-1.elasticbeanstalk.com/shop/shop/${id}`)
          .then(res => setShop(res.data))
          .catch(error => console.log(error))
    }, []);

    function searchPlanningByDay(day: string){
      let plannerDisplay = ""
      shop.openShop.map(planner => {
        if(planner.dayWeek === day){
          if(plannerDisplay !== "") plannerDisplay = plannerDisplay + " | "
          plannerDisplay = plannerDisplay + planner.hourStart.substr(0,5) + " - " + planner.endHour.substr(0,5);
        }
      });
      if(plannerDisplay === "") plannerDisplay = plannerDisplay + "?";
      return plannerDisplay;
    }

    return (
      <div>
        <div className="row">
          <div className="col-5 positionAbsolute">
            <Link to="/shops"><img className="arrowReturn" src="/assets/icon/back.png" height={75} width={75}/></Link>

            <div className="row planner">
                <div id="h2inpre"></div>
                <div id="h2cont">
                  <div className="row">
                    <div className="semiLinePlanner">
                      <div className="marginTop10">Lundi</div>
                      <div className="marginTop10">Mardi</div>
                      <div className="marginTop10">Mercredi</div>
                      <div className="marginTop10">Jeudi</div>
                      <div className="marginTop10">Vendredi</div>
                      <div className="marginTop10">Samedi</div>
                      <div className="marginTop10">Dimanche</div>
                    </div> 
                    <div className="marginLeft20">
                      <div className="marginTop10">{searchPlanningByDay('Monday')}</div>
                      <div className="marginTop10">{searchPlanningByDay('Tuesday')}</div>
                      <div className="marginTop10">{searchPlanningByDay('Wednesday')}</div>
                      <div className="marginTop10">{searchPlanningByDay('Thursday')}</div>
                      <div className="marginTop10">{searchPlanningByDay('Friday')}</div>
                      <div className="marginTop10">{searchPlanningByDay('Saturday')}</div>
                      <div className="marginTop10">{searchPlanningByDay('Sunday')}</div>
                    </div>
                  </div>
                </div>
                <div id="h2inpos" className="marginLeft20Only"></div>
            </div>

          </div>
          <div className="col-7 positionAbsolute rightDetails">
            <h1 className="marginTop50">{shop.name}</h1>
            <div className="jumbotron marginTop20">
              <img src={shop.pictures[0].link} height={500} width={750}/>
            </div>
          </div>
        </div>
         <blockquote className="blockquote text-center topSlogan">
         <p className="mb-0">{shop.description}</p>
       </blockquote>
        <GoogleMap lat={shop.localisation.lat} long={shop.localisation.long}></GoogleMap>
       </div>
    );
  }
export default ShopDetails;