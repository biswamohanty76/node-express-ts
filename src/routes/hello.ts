import * as express from "express";

import {add} from '../services/add';

export const helloRouter = express.Router();
    
helloRouter.get('/hello',(req,res)=>{
    res.send("Hello from router.." + add(10,5));
})