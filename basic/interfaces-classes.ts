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


/// <reference path="./internalmodule.ts" />    // example to import internal modules (typescript code file). must compile tsc --out


 //example to import external module (typescript file).
import moduleExample = require('./externalmodule'); 
import lettervalidator = moduleExample.LettersOnlyValidator; // use alias

// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators: { [s: string]: moduleExample.StringValidator; } = {};
validators['ZIP code'] = new moduleExample.ZipCodeValidator();
validators['Letters only'] = new lettervalidator();
// Show whether each string passed each validator
/*strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});*/

///<reference path="declare.d.ts"/>
import url = require("url");
var myUrl = url.parse("http://www.typescriptlang.org");  

//declare variables
var isdone:boolean = false; //boolean type variable with assignment
var maxageallowed:number = 80; //number type variable with assignment
const minageallowed:number = 8;// number type constant
const defaultName = 'Anonymous'; // string type constant
var title:string = 'type script example for basic types'; //string type
var sportnames:string[]= ['tennis','soccer','basketball'];//string array type
//enum type
enum gender {male=1,female}; // set of numeric values with names, beginning with 1
enum sportmanlevel{beginner = 10,basic=20,advance=30}; // set of numeric values with names for each value, set all values
enum agelevel{child=10,adult=20,noespecified=50};

var defaultgender: gender = gender.male; //assign default value from gender enum
var anyvalue: any; //any type variable (anyvalue = '' or anyvalue = 10,etc)

function warnmsg():void {alert('data not allowed')}; // void type for non-return functions

//interfaces to define contracts (structural sub-typing)
interface ageLevelAssignment {
	(gender: gender, age?: number): agelevel; //function type with optional age argument
}

interface Sports {
	[index: number]: string; //  array type with numeric index for sports list
	Name: string;
	IconName: boolean;
}

interface SportsIconName {
	[index: string]: string; //  array type with string index (dictionary)
	IconImg: string;
}

interface person {
    name: string //name property
    gender: gender;// gender property
    birthdate?: Date; // optional birthdate property
	age?: number; //optional age property
}

interface credentials {
    username:string; //username property for the system
    pwd:string; //private property (password)
    email:string; //email for the system
}

interface sportyman extends person,credentials { //inhere
    PreferedSports:Sports; // current preferred sports
    agelevel:agelevel; //optional age level property
	assignAgelevel: ageLevelAssignment; //method of function type contract to get agelevel
}

interface Rankedsportyman extends sportyman {
        sportmanlevel:sportmanlevel;
        ranking:number;
}

class sportman implements sportyman {
    static minage:number=minageallowed; //static property only class visible
    static maxage:number=maxageallowed;//static property only class visible
    private _id:number; //private property (unique number id)
    pwd:string; // property (password)
    username:string; // username property
    email:string; //email property
    gender:gender; // public property (enum type)
    private _age:number; //private property
    agelevel:agelevel;
    PreferedSports:Sports; // public property (array)
    constructor(public name: string=defaultName,gender:gender=defaultgender,age?:number) { 
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
    
    set id(newid:number) {if (newid >= 0) { this._id = newid}} //set property
    get id():number { return this._id} // get property
    
    set age(newage:number) {
        if (newage === undefined ) {return};
        if (isNaN(newage)) {throw 'age: not numeric value'};
        if (newage >= sportman.minage && newage <= sportman.maxage) {
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

function CreateSportman(newname: string, newgender:gender,newage?:number):any
{
    var sportguy: sportman = new  sportman(newname,newgender,newage);
    return sportguy;
        
}


var obj1,obj2: sportman;
var s:string;
var b:boolean;



obj1=CreateSportman (
    'ANA2',
    gender.female,15
    );
s= obj1.getAgelevelname();
s= obj1.getGendername();    

    
b= obj1 instanceof sportman // operator to check prototype   
b =  'age' in obj1; //operator check property in a instantiated object

obj2=   CreateSportman (
    'JORGE',
    gender.male,
    14
    );
    
 