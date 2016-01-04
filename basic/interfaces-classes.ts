/*
this is typescript code as an example of different syntax to show the
use of the language.

JAVASCRIPT: there are Six data types that are primitives, they are not objects, don't have methods and they are inmutable:
Boolean
Null
Undefined
Number (64 bits)
String
Symbol (new in ECMAScript 6)

*/

// example to import internal modules (typescript code file). must compile tsc --out
///<reference path='internalmodule.ts'/> 
import test = InternalValidation.demo

 //example to import external module (typescript file).
import moduleExample = require('./externalmodule'); 
import dataValidator = moduleExample.validators; // use alias
import {validators} from './externalmodule'; // use ECMA6

//example to import ambient declare files
///<reference path="./declare.dt.ts"/>
import url = require("url");
var myUrl = url.parse("http://www.typescriptlang.org");  

//declare variables
var isdone:boolean = false; //boolean type variable with assignment
var maxageallowed:number = 80; //number type variable with assignment
const minageallowed:number = 8;// number type constant
const defaultName = 'Anonymous'; // string type constant
var title:string = 'type script example for basic types'; //string type
var sportnames:string[]= ['tennis','soccer','basketball'];//string array type

// sport interfaces & classes.
//enum type
export enum gender {male=1,female}; // set of numeric values with names, beginning with 1

export enum agelevel{child=10,adult=20,noespecified=50};

var defaultgender: gender = gender.male; //assign default value from gender enum
var anyvalue: any; //any type variable (anyvalue = '' or anyvalue = 10,etc)

function warnmsg():void {alert('data not allowed')}; // void type for non-return functions



//interfaces to define contracts (structural sub-typing)
export interface ageLevelAssignment {
	(gender: gender, age?: number): agelevel; //function type with optional age argument
}

interface Sports {
	[index: number]: string; //  array type with numeric index for sports list
	mainSport: string;
	useCalendar: boolean;
}

interface SportsIconName {
	[index: string]: string; //  array type with string index (dictionary)
	mainSport: string;
}

export interface person {
    name: string //name property
    gender: gender;// gender property
    birthdate?: Date; // optional birthdate property
	age?: number; //optional age property
}

export interface credentials {
    username:string; //username property for the system
    pwd:string; //private property (password)
    email:string; //email for the system
}

export interface sportyman extends person,credentials { //inhere
    PreferedSports:Array<Sportmanprofile>; // current preferred sports
    agelevel:agelevel; //optional age level property
	assignAgelevel: ageLevelAssignment; //method of function type contract to get agelevel
}

export interface valorization {
    reliability:valorizationvalues;
    punctuality:valorizationvalues;
}

export enum valorizationvalues {notdefined=0,low,medium,high,excellent};

export class Sportman implements sportyman {
    static minage:number=minageallowed; //static property only class visible
    static maxage:number=maxageallowed;//static property only class visible
    private _id:number; //private property (unique number id)
    pwd:string; // property (password)
    username:string; // username property
    email:string; //email property
    gender:gender; // public property (enum type)
    private _age:number; //private property
    agelevel:agelevel;
    PreferedSports:Array<Sportmanprofile>; // public property (array)
    valorization:valorization={reliability:0,punctuality:0};
    
    AddSports(Sportname: string, ...restOfName: Sports[]) {
	return Sportname + " " + restOfName.join(" ");
}
    constructor(public name: string,gender:gender=defaultgender,age?:number) { 
     // public mandatory property 'name' define in the constructor
    // gender property with default value define in the constructor
           
            if (name == "") {this.name = defaultName;}
            else {
                 if (validators['Letters only'].isAcceptable(name)) {this.name= name;}
                 else {throw 'value name not allowed'}
            }
            
            this.gender = gender;
            //ways to check optional parameters
                    if (typeof age === 'undefined') {return} //use typeof operator to check type, return string type
                    if (!(age === undefined)) {//second check way
                        this.age=age; 
                    }
                    if (age === void 0) {
                        // these statements execute third check way
                    }
    }
    
    //use accessor
    set id(newid:number) {if (newid >= 0) { this._id = newid}} //set property
    get id():number { return this._id} // get property
    
    set age(newage:number) {
        if (newage === undefined ) {return};
        if (isNaN(newage)) {throw 'age: not numeric value'};
        if (newage >= Sportman.minage && newage <= Sportman.maxage) {
            this._age=newage;
            this.agelevel= this.assignAgelevel(this.gender,newage);
        } else {warnmsg()}
    }
    get age():number {return this._age}
    
    getAgelevelname (){
        return agelevel[this.agelevel];
    }
    
    getGendername(){
        return    gender[this.gender]; 
    }
    
	assignAgelevel(genderparam:gender,ageparam?:number):agelevel {
		var result: agelevel;
        if (ageparam) {
		  result =  genderparam == gender.male  ? 
            (ageparam <=15 ? agelevel.child:agelevel.adult)
          : (ageparam <=18 ? agelevel.child:agelevel.adult);
        } else {result= agelevel.noespecified }
		return result;
	}
	
};

// sport interfaces & classes.
export enum sporttypes { faceoff = 1, share };
export enum sportnumbertypes { individual = 1, group };
export enum sportstatus { active = 1, inactive, blocked, future };

export interface SportConfig {
	name: string;
	iconname: string;
	status: sportstatus;
	type: sporttypes;
	numbertype: sportnumbertypes;
}

export class Sport implements SportConfig {
	name: string;
	iconname: string;
	status: sportstatus;
	type: sporttypes;
	numbertype: sportnumbertypes;

	constructor(sportname:string) {
		this.name = sportname;
/*		this.iconname = sport.iconname;
		this.status = sport.status;
		this.type = sport.type;
		this.numbertype = sport.numbertype;
        */
	}

};

// sportprofiles interfaces & classes.
export enum sportmanlevel{beginner = 10,basic=20,intermediate=30,advance=40,expert=50}; // set of numeric values with names for each value, set all values

export interface Iperformance {
	points:number;
    games:number;
    wins:number;
    lose:number;
    draw:number;
}
export interface Rankedsportyman  {
        sportman:Sportman;
        sport:Sport;
        level:sportmanlevel;
	    ranking: number;
        rankedperformance:Iperformance;
        friendlyperformance:Iperformance;
        }



export class Sportmanprofile implements Rankedsportyman {
        sportman:Sportman;
        sport:Sport;
        level:sportmanlevel=sportmanlevel.basic;
	    ranking: number=0;
        rankedperformance:Iperformance;
        friendlyperformance:Iperformance;
        
        constructor (sportman:Sportman,sport:Sport) {
                this.sportman= sportman;
                this.sport = sport;
                this.rankedperformance={ points:0, games:0, wins:0,lose:0,draw:0};
                this.friendlyperformance={ points:0, games:0, wins:0,lose:0,draw:0};
        }

        getsportmanlevelname(){
            return    sportmanlevel[this.level]; 
        }
  
 }

    class Factory {
        
      CreateSportman(sportmanName: string, newgender?:gender,newage?:number):any
        {
            var sportguy: Sportman = new  Sportman(sportmanName,newgender,newage);
            return sportguy;
        }
        
       CreateSport(sportName: string):any
        {
            var sport: Sport = new Sport(sportName);
            return sport;
        }
        
        CreateSportProfile(sportmanName: string,sportName:string):any
        {       
            var sportman:Sportman;
            var sport:Sport;
            
            sportman= new Sportman(sportmanName);
            sport = new Sport(sportName);
            
            var sportprofile: Sportmanprofile = new Sportmanprofile(sportman,sport);
            
            return sportprofile;
        }       
        
}

export var funsportyFactory:Factory=new Factory();



