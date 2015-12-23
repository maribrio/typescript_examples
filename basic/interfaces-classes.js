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
/// <reference path="./checking.ts" />
//declare variables
var isdone = false; //boolean type variable with assignment
var maxageallowed = 80; //number type variable with assignment
var minageallowed = 8; // number type constant
var defaultName = 'Anonymous'; // string type constant
var title = 'type script example for basic types'; //string type
var sportnames = ['tennis', 'soccer', 'basketball']; //string array type
//enum type
var gender;
(function (gender) {
    gender[gender["male"] = 1] = "male";
    gender[gender["female"] = 2] = "female";
})(gender || (gender = {}));
; // set of numeric values with names, beginning with 1
var sportmanlevel;
(function (sportmanlevel) {
    sportmanlevel[sportmanlevel["beginner"] = 10] = "beginner";
    sportmanlevel[sportmanlevel["basic"] = 20] = "basic";
    sportmanlevel[sportmanlevel["advance"] = 30] = "advance";
})(sportmanlevel || (sportmanlevel = {}));
; // set of numeric values with names for each value, set all values
var agelevel;
(function (agelevel) {
    agelevel[agelevel["child"] = 10] = "child";
    agelevel[agelevel["adult"] = 20] = "adult";
    agelevel[agelevel["noespecified"] = 50] = "noespecified";
})(agelevel || (agelevel = {}));
;
var defaultgender = gender.male; //assign default value from gender enum
var anyvalue; //any type variable (anyvalue = '' or anyvalue = 10,etc)
function warnmsg() { alert('data not allowed'); }
; // void type for non-return functions
var sportman = (function () {
    function sportman(name, gender, age) {
        // public mandatory property 'name' define in the constructor
        // gender property with default value define in the constructor
        if (name === void 0) { name = defaultName; }
        if (gender === void 0) { gender = defaultgender; }
        this.name = name;
        if (name == "") {
            this.name = defaultName;
        }
        this.gender = gender;
        //ways to check optional parameters
        if (typeof age === 'undefined') {
            return;
        } //use typeof operator to check type, return string type
        if (!(age === undefined)) {
            this.age = age;
        }
        if (age === void 0) {
        }
    }
    Object.defineProperty(sportman.prototype, "id", {
        get: function () { return this._id; } // get property
        ,
        set: function (newid) { if (newid >= 0) {
            this._id = newid;
        } } //set property
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sportman.prototype, "age", {
        get: function () { return this._age; },
        set: function (newage) {
            if (newage === undefined) {
                return;
            }
            ;
            if (isNaN(newage)) {
                throw 'age: not numeric value';
            }
            ;
            if (newage >= sportman.minage && newage <= sportman.maxage) {
                this._age = newage;
                this.agelevel = this.assignAgelevel(this.gender, newage);
            }
            else {
                warnmsg();
            }
        },
        enumerable: true,
        configurable: true
    });
    sportman.prototype.getAgelevelname = function () {
        return agelevel[this.agelevel];
    };
    sportman.prototype.getGendername = function () {
        return gender[this.gender];
    };
    sportman.prototype.assignAgelevel = function (genderparam, ageparam) {
        var result;
        if (ageparam) {
            result = genderparam == gender.male ?
                (ageparam <= 15 ? agelevel.child : agelevel.adult)
                : (ageparam <= 18 ? agelevel.child : agelevel.adult);
        }
        else {
            result = agelevel.noespecified;
        }
        return result;
    };
    sportman.minage = minageallowed; //static property only class visible
    sportman.maxage = maxageallowed; //static property only class visible
    return sportman;
})();
;
function CreateSportman(newname, newgender, newage) {
    var sportguy = new sportman(newname, newgender, newage);
    return sportguy;
}
var obj1, obj2;
var s;
var b;
//Validation.CheckPropertObject ('age',sport-man);
obj1 = CreateSportman('ANA', gender.female, 15);
s = obj1.getAgelevelname();
s = obj1.getGendername();
b = obj1 instanceof sportman; // operator to check prototype   
b = 'age' in obj1; //operator check property in a instantiated object
obj2 = CreateSportman('JORGE', gender.male, 14);
//# sourceMappingURL=interfaces-classes.js.map