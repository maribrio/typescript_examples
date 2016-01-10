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

export interface PersonalNames {
    firstname: string //name property
    surname:string // surname property
}
export interface person {
    names?:PersonalNames;
    gender: gender;// gender property
    birthdate?: Date; // optional birthdate property
	age?: number; //optional age property
    email?:string; //email for the system
}

export interface credentials {
    alias?:string;// alias for the app
    user_id:number;// user id for the system
    username:string; //username property for the system
}

export interface sportyman extends person,credentials { //inhere
    preferedsports:Array<string>; // current preferred sports
    getAgelevel:()=>agelevel; //optional age level property
	//assignAgelevel: ageLevelAssignment; //method of function type contract to get agelevel
}

export interface Evaluation {
    reliability:evaluationvalues;
    punctuality:evaluationvalues;
}


export enum evaluationvalues {notdefined=0,low,medium,high,excellent};

export enum calendarstatus {available,busy,engaged,notdefined};

export class daystatus {
  status:calendarstatus=calendarstatus.available;
  from:string='09:00';
  to:string='21:00';
};

export class Match extends daystatus {
    
    status=calendarstatus.engaged;
    
    constructor(public date:Date, public rival:Sportman,public sport:Sport){
        super()
    }
}


export class Zone 
{sector:string="";loc:string="";city:string;country:string
    
    constructor(city:string,country:string){
        this.city=city;
        this.country=country;
    }
    };

export class weekdayrange {
    mon:daystatus=new daystatus;
    tue:daystatus=new daystatus;
    wen:daystatus=new daystatus;
    thu:daystatus=new daystatus;
    fri:daystatus=new daystatus;
    sat:daystatus=new daystatus;
    sun:daystatus=new daystatus;
}

export class Calendar {
  since:Date=new Date();
  to:Date= new Date(2099,12,31);
  weekdays: weekdayrange=new weekdayrange;
  status:calendarstatus=calendarstatus.available;
  };

export class ZoneConfig {
    zones:Zone[]=[];
    calendar:Calendar;
    constructor(zone:Zone,calendar:Calendar){
        this.zones[0] = zone;
        this.calendar= calendar
     }
        
}

export class Sportman implements sportyman {
    static minage:number=minageallowed; //static property only class visible
    static maxage:number=maxageallowed;//static property only class visible
    private _id:number=-1; //private property (unique number id)
    user_id:number=-1; // user id property
    gender:gender; // public property (enum type)
    private _birthdate:Date;
    preferedsports:Array<string>=[]; // public property (array)
    sportprofiles:Array<Sportmanprofile>=[];
    evaluation:Evaluation={reliability:0,punctuality:0};
    status:sportstatus=sportstatus.active;
    zoneconfig: ZoneConfig;
    Matches: Array<Match>=[];
    img:string="";
    names:PersonalNames={firstname:'',surname:''};
    alias:string='';
    email:string='';
        
    AddSports(Sportname: string, ...restOfName: Sports[]) {
	return Sportname + " " + restOfName.join(" ");
}
    constructor(public username: string,gender:gender=defaultgender,birthdate?:Date) { 
     // public mandatory property 'name' define in the constructor
    // gender property with default value define in the constructor
          
            if (username == "") {this.username = defaultName;}
            else {
                 if (validators['Letters only'].isAcceptable(username)) {this.alias= username;}
                 else {throw 'value name not allowed'}
            }
            
            this.gender = gender;
            //ways to check optional parameters
                    if (typeof birthdate === 'undefined') {return} //use typeof operator to check type, return string type
                    if (!(birthdate === undefined)) {//second check way
                        this.birthdate=birthdate; 
                    }
                    if (birthdate === void 0) {
                        // these statements execute third check way
                    }
    }
    
    //use accessor
    set id(newid:number) {if (newid >= 0) { this._id = newid}} //set property
    get id():number { return this._id} // get property
    
    set birthdate(birthdate:Date) {
        if (birthdate === undefined ) {return};
     
        this._birthdate= birthdate
        let age = this.age;
        
        if (!(age >= Sportman.minage && age <= Sportman.maxage)) 
        {
            warnmsg()
        }
    }
    
    public get age():number {
        
        let today = new Date();
        let birthday = this._birthdate;
        let years = today.getFullYear() - this._birthdate.getFullYear();

        // Reset birthday to the current year.
        let y1 = birthday.getFullYear();
        let y2 = today.getFullYear();

        // If the user's birthday has not occurred yet this year, subtract 1.
        if (y2 < y1)
        {
            years--;
        }
        
        return years;
    }
    
    getAgelevelname (){
        return agelevel[this.getAgelevel()];
    }
    
    getGendername(){
        return    gender[this.gender]; 
    }
    
	getAgelevel():agelevel {
		var result: agelevel;
        let age= this.age;
        if (age) {
		  result =  this.gender == gender.male  ? 
            (age <=15 ? agelevel.child:agelevel.adult)
          : (age <=18 ? agelevel.child:agelevel.adult);
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
	iconname: string="";
	status: sportstatus=sportstatus.active;
	type: sporttypes=sporttypes.faceoff;
	numbertype: sportnumbertypes=sportnumbertypes.individual;

	constructor(name:string) {
		this.name = name;
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
    won:number;
    lost:number;
    drawn:number;
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
                this.rankedperformance={ points:0, games:0, won:0,lost:0,drawn:0};
                this.friendlyperformance={ points:0, games:0, won:0,lost:0,drawn:0};
        }

        getlevelname(){
            return    sportmanlevel[this.level]; 
        }
  
 }

    class Factory {
 
      CreateSportman(sportmanName: string, newgender?:gender,birthdate?:Date):any
        {
            var sportguy: Sportman = new  Sportman(sportmanName,newgender,birthdate);
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



