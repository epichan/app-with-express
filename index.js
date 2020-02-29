import http from  'http';
import express from  'express'; 
import dotenv from 'dotenv'; //usar el .env
import bodyParse from 'body-parser';
import routes from  './routes';
import menuData from './data/menuData';
import restaurantData from './data/restaurantData';


let cartItem = [];
let APP = express();

APP.use (bodyParse.urlencoded());
APP.use(bodyParse.json());


dotenv.config();

let SERVER = http.createServer(APP);

routes(APP, restaurantData, menuData, cartItem);

SERVER.listen (process.env.PORT);


