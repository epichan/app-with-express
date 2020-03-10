import http from  'http';
import express from  'express';
// import routes from  './routes';
import menuData from './data/menuData';
import restaurantData from './data/restaurantData';
import restaurantsRoutes from './restaurantsRoutes';
import dishRoutes from './dishRoutes';

const APP = express();
const RESTAURANTS = express();
const DISHES = express();

APP.use('/restaurant', RESTAURANTS)
APP.use('/dish', DISHES)



let cartItem = [];
let totalBuyed = [];



const SERVER = http.createServer(APP);


// routes(APP, restaurantData, menuData, cartItem);
restaurantsRoutes(RESTAURANTS, restaurantData);
dishRoutes(DISHES, menuData, cartItem, totalBuyed);

SERVER.listen(5000);


