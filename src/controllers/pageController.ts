import { Request, Response } from "express";
import {createMenuObject} from '../helper/createMenuObject'
import {pets} from '../models/pet'

export const home = (req:Request, res:Response)=>{
    let list = pets.getAll;
    res.render('pages/page',{
        menuativado: createMenuObject('todos'),
        banner: {title: 'Todos os animais', background: 'allanimals.jpg'},
        list
    });
}

export const dogs = (req:Request, res:Response)=>{
    let list = pets.getFromType('dog');
    res.render('pages/page', {
        menuativado: createMenuObject('dog'),
        banner: {title: 'Cachorros', background: 'banner_dog.jpg'},
        list:list
    });
}
export const cats = (req:Request, res:Response)=>{
    let list = pets.getFromType("cat");
    res.render('pages/page', {
        menuativado: createMenuObject('cat'),
        banner: {title: 'Gatos', background: 'banner_cat.jpg'},
        list
    })
}
export const fishes = (req:Request, res:Response)=>{
    let list = pets.getFromType('fish');
    res.render('pages/page', {
        menuativado: createMenuObject('fish'),
        banner: {title: 'Peixes', background: 'banner_fish.jpg'},
        list
    })
} 