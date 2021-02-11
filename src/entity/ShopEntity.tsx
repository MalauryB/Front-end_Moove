import React from 'react';
import OpenShopEntity from './OpenShopEntity';
import PicturesEntity from './PictureEntity';
interface ShopEnity{
    shopId : number;
    name : string;
    address : string;
    description : string;
    email : string;
    phone : string;
    localisation : {
        lat : number;
        long : number;
    }
    videoLink: string;
    pictures : PicturesEntity[];
    openShop : OpenShopEntity[];
}
export default ShopEnity;