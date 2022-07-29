import {Request, Response,} from "express";
import {pets} from '../models/pet';
import {createMenuObject} from '../helper/createMenuObject';

export const search = (req:Request, res:Response)=>{
    let query = req.query.q as string;
    if(!query){
        res.redirect('/')
        return;
    }

    let list = pets.getFromName(query); 
    res.render('pages/page',{
        menuativado:createMenuObject(''),
        list,
        query
    });
};