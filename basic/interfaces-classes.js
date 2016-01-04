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
var externalmodule_1 = require('./externalmodule'); // use ECMA6
//example to import ambient declare files
///<reference path="./declare.dt.ts"/>
var url = require("url");
var myUrl = url.parse("http://www.typescriptlang.org");
//declare variables
var isdone = false; //boolean type variable with assignment
var maxageallowed = 80; //number type variable with assignment
var minageallowed = 8; // number type constant
var defaultName = 'Anonymous'; // string type constant
var title = 'type script example for basic types'; //string type
var sportnames = ['tennis', 'soccer', 'basketball']; //string array type
// sport interfaces & classes.
//enum type
(function (gender) {
    gender[gender["male"] = 1] = "male";
    gender[gender["female"] = 2] = "female";
})(exports.gender || (exports.gender = {}));
var gender = exports.gender;
; // set of numeric values with names, beginning with 1
(function (agelevel) {
    agelevel[agelevel["child"] = 10] = "child";
    agelevel[agelevel["adult"] = 20] = "adult";
    agelevel[agelevel["noespecified"] = 50] = "noespecified";
})(exports.agelevel || (exports.agelevel = {}));
var agelevel = exports.agelevel;
;
var defaultgender = gender.male; //assign default value from gender enum
var anyvalue; //any type variable (anyvalue = '' or anyvalue = 10,etc)
function warnmsg() { alert('data not allowed'); }
; // void type for non-return functions
var Sportman = (function () {
    function Sportman(name, gender, age) {
        // public mandatory property 'name' define in the constructor
        // gender property with default value define in the constructor
        if (gender === void 0) { gender = defaultgender; }
        this.name = name;
        if (name == "") {
            this.name = defaultName;
        }
        else {
            if (externalmodule_1.validators['Letters only'].isAcceptable(name)) {
                this.name = name;
            }
            else {
                throw 'value name not allowed';
            }
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
    Sportman.prototype.AddSports = function (Sportname) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return Sportname + " " + restOfName.join(" ");
    };
    Object.defineProperty(Sportman.prototype, "id", {
        get: function () { return this._id; } // get property
        ,
        //use accessor
        set: function (newid) { if (newid >= 0) {
            this._id = newid;
        } } //set property
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sportman.prototype, "age", {
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
            if (newage >= Sportman.minage && newage <= Sportman.maxage) {
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
    Sportman.prototype.getAgelevelname = function () {
        return agelevel[this.agelevel];
    };
    Sportman.prototype.getGendername = function () {
        return gender[this.gender];
    };
    Sportman.prototype.assignAgelevel = function (genderparam, ageparam) {
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
    Sportman.minage = minageallowed; //static property only class visible
    Sportman.maxage = maxageallowed; //static property only class visible
    return Sportman;
})();
exports.Sportman = Sportman;
;
// sport interfaces & classes.
(function (sporttypes) {
    sporttypes[sporttypes["faceoff"] = 1] = "faceoff";
    sporttypes[sporttypes["share"] = 2] = "share";
})(exports.sporttypes || (exports.sporttypes = {}));
var sporttypes = exports.sporttypes;
;
(function (sportnumbertypes) {
    sportnumbertypes[sportnumbertypes["individual"] = 1] = "individual";
    sportnumbertypes[sportnumbertypes["group"] = 2] = "group";
})(exports.sportnumbertypes || (exports.sportnumbertypes = {}));
var sportnumbertypes = exports.sportnumbertypes;
;
(function (sportstatus) {
    sportstatus[sportstatus["active"] = 1] = "active";
    sportstatus[sportstatus["inactive"] = 2] = "inactive";
    sportstatus[sportstatus["blocked"] = 3] = "blocked";
    sportstatus[sportstatus["future"] = 4] = "future";
})(exports.sportstatus || (exports.sportstatus = {}));
var sportstatus = exports.sportstatus;
;
var Sport = (function () {
    function Sport(sportname) {
        this.name = sportname;
        /*		this.iconname = sport.iconname;
                this.status = sport.status;
                this.type = sport.type;
                this.numbertype = sport.numbertype;
                */
    }
    return Sport;
})();
exports.Sport = Sport;
;
// sportprofiles interfaces & classes.
(function (sportmanlevel) {
    sportmanlevel[sportmanlevel["beginner"] = 10] = "beginner";
    sportmanlevel[sportmanlevel["basic"] = 20] = "basic";
    sportmanlevel[sportmanlevel["intermediate"] = 30] = "intermediate";
    sportmanlevel[sportmanlevel["advance"] = 40] = "advance";
    sportmanlevel[sportmanlevel["expert"] = 50] = "expert";
})(exports.sportmanlevel || (exports.sportmanlevel = {}));
var sportmanlevel = exports.sportmanlevel;
; // set of numeric values with names for each value, set all values
var Sportmanprofile = (function () {
    function Sportmanprofile(sportman, sport) {
        this.level = sportmanlevel.basic;
        this.ranking = 0;
        this.sportman = sportman;
        this.sport = sport;
        this.rankedperformance = { points: 0, games: 0, wins: 0, lose: 0, draw: 0 };
        this.friendlyperformance = { points: 0, games: 0, wins: 0, lose: 0, draw: 0 };
    }
    Sportmanprofile.prototype.getsportmanlevelname = function () {
        return sportmanlevel[this.level];
    };
    return Sportmanprofile;
})();
exports.Sportmanprofile = Sportmanprofile;
var Factory = (function () {
    function Factory() {
    }
    Factory.prototype.CreateSportman = function (sportmanName, newgender, newage) {
        var sportguy = new Sportman(sportmanName, newgender, newage);
        return sportguy;
    };
    Factory.prototype.CreateSport = function (sportName) {
        var sport = new Sport(sportName);
        return sport;
    };
    Factory.prototype.CreateSportProfile = function (sportmanName, sportName) {
        var sportman;
        var sport;
        sportman = new Sportman(sportmanName);
        sport = new Sport(sportName);
        var sportprofile = new Sportmanprofile(sportman, sport);
        return sportprofile;
    };
    return Factory;
})();
exports.funsportyFactory = new Factory();
//# sourceMappingURL=interfaces-classes.js.map